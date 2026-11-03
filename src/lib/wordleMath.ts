import { WORDLE_ANSWERS, WORDLE_GUESSES } from "@/lib/wordleWords";

export type LetterState = "empty" | "green" | "yellow" | "gray";

export type WordleConstraints = {
  /** Exact letters by position (green). Use "" for unknown. */
  greens: string[];
  /** Yellow letters with forbidden positions. */
  yellows: Array<{ letter: string; notAt: number[] }>;
  /** Letters confirmed absent (gray), unless also green/yellow elsewhere. */
  grays: string[];
  /** When true, only suggest words that obey every known clue (hard mode). */
  hardMode: boolean;
  /** Use full guess dictionary instead of answer list. */
  includeUncommon: boolean;
};

export type RankedWord = {
  word: string;
  score: number;
  uniqueLetters: number;
};

const ANSWER_SET = new Set<string>(WORDLE_ANSWERS as unknown as string[]);
const GUESS_SET = new Set<string>(WORDLE_GUESSES as unknown as string[]);

/** Position-aware letter frequency from the official-style answer list. */
const POSITION_FREQ: number[][] = Array.from({ length: 5 }, () =>
  Array.from({ length: 26 }, () => 0),
);
const GLOBAL_FREQ: number[] = Array.from({ length: 26 }, () => 0);

for (const word of WORDLE_ANSWERS) {
  const seen = new Set<number>();
  for (let i = 0; i < 5; i++) {
    const idx = word.charCodeAt(i) - 97;
    if (idx < 0 || idx > 25) continue;
    POSITION_FREQ[i][idx] += 1;
    if (!seen.has(idx)) {
      GLOBAL_FREQ[idx] += 1;
      seen.add(idx);
    }
  }
}

function normalizeLetter(raw: string): string {
  const c = raw.trim().toLowerCase().slice(0, 1);
  return c >= "a" && c <= "z" ? c : "";
}

export function sanitizeGreens(input: string[]): string[] {
  const out = ["", "", "", "", ""];
  for (let i = 0; i < 5; i++) out[i] = normalizeLetter(input[i] ?? "");
  return out;
}

export function parseGrayLetters(raw: string): string[] {
  const letters = new Set<string>();
  for (const ch of raw.toLowerCase()) {
    if (ch >= "a" && ch <= "z") letters.add(ch);
  }
  return [...letters].sort();
}

export function parseYellowEntries(
  raw: string,
): Array<{ letter: string; notAt: number[] }> {
  // Accept "A", "A2", "A:2,4", "A 2 4" style tokens
  const map = new Map<string, Set<number>>();
  const tokens = raw
    .toUpperCase()
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter(Boolean);

  for (const token of tokens) {
    const letterMatch = token.match(/^([A-Z])/);
    if (!letterMatch) continue;
    const letter = letterMatch[1].toLowerCase();
    const nums = [...token.slice(1).matchAll(/[1-5]/g)].map((m) => Number(m[0]) - 1);
    if (!map.has(letter)) map.set(letter, new Set());
    const set = map.get(letter)!;
    for (const n of nums) {
      if (n >= 0 && n < 5) set.add(n);
    }
  }

  return [...map.entries()].map(([letter, notAt]) => ({
    letter,
    notAt: [...notAt].sort(),
  }));
}

function wordMatches(word: string, c: WordleConstraints): boolean {
  const greens = sanitizeGreens(c.greens);

  for (let i = 0; i < 5; i++) {
    if (greens[i] && word[i] !== greens[i]) return false;
  }

  const requiredCounts = new Map<string, number>();
  for (const g of greens) {
    if (!g) continue;
    requiredCounts.set(g, (requiredCounts.get(g) ?? 0) + 1);
  }

  for (const y of c.yellows) {
    const letter = normalizeLetter(y.letter);
    if (!letter) continue;
    if (!word.includes(letter)) return false;
    for (const pos of y.notAt) {
      if (pos >= 0 && pos < 5 && word[pos] === letter) return false;
    }
    requiredCounts.set(letter, Math.max(requiredCounts.get(letter) ?? 0, 1));
  }

  const graySet = new Set(
    c.grays.map(normalizeLetter).filter(Boolean).filter((g) => {
      // A letter that is also green/yellow is not fully absent
      if (greens.includes(g)) return false;
      if (c.yellows.some((y) => normalizeLetter(y.letter) === g)) return false;
      return true;
    }),
  );

  for (let i = 0; i < 5; i++) {
    if (graySet.has(word[i]) && word[i] !== greens[i]) return false;
  }

  // Enforce minimum counts for known present letters (handles doubles)
  for (const [letter, minCount] of requiredCounts) {
    let count = 0;
    for (const ch of word) if (ch === letter) count += 1;
    if (count < minCount) return false;
  }

  return true;
}

function scoreWord(word: string): RankedWord {
  let score = 0;
  const seen = new Set<number>();
  for (let i = 0; i < 5; i++) {
    const idx = word.charCodeAt(i) - 97;
    score += POSITION_FREQ[i][idx] * 1.35;
    if (!seen.has(idx)) {
      score += GLOBAL_FREQ[idx];
      seen.add(idx);
    }
  }
  // Prefer answers over obscure guesses when both appear
  if (ANSWER_SET.has(word)) score += 80;
  return { word, score, uniqueLetters: seen.size };
}

export function filterWordleCandidates(constraints: WordleConstraints): RankedWord[] {
  // Hard mode keeps suggestions inside clue-legal words (always). Prefer the
  // answer bank unless the player explicitly asks for uncommon probes.
  const useUncommon = constraints.includeUncommon && !constraints.hardMode;
  const pool = useUncommon
    ? (WORDLE_GUESSES as unknown as string[])
    : (WORDLE_ANSWERS as unknown as string[]);

  const matched: RankedWord[] = [];
  for (const word of pool) {
    if (wordMatches(word, constraints)) matched.push(scoreWord(word));
  }

  matched.sort((a, b) => b.score - a.score || a.word.localeCompare(b.word));
  return matched;
}

export function isValidGuess(word: string): boolean {
  const w = word.trim().toLowerCase();
  return w.length === 5 && GUESS_SET.has(w);
}

export function isLikelyAnswer(word: string): boolean {
  return ANSWER_SET.has(word.trim().toLowerCase());
}

/** Top opener suggestions ranked by letter coverage (no clues yet). */
export function bestOpeners(limit = 12): RankedWord[] {
  return filterWordleCandidates({
    greens: ["", "", "", "", ""],
    yellows: [],
    grays: [],
    hardMode: false,
    includeUncommon: false,
  }).slice(0, limit);
}

export const LETTER_FREQUENCY_RANK = [...GLOBAL_FREQ.entries()]
  .map(([idx, count]) => ({ letter: String.fromCharCode(97 + idx), count }))
  .sort((a, b) => b.count - a.count);
