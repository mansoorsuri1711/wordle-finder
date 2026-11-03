"use client";

import { useMemo, useState } from "react";
import {
  bestOpeners,
  filterWordleCandidates,
  parseGrayLetters,
  parseYellowEntries,
  sanitizeGreens,
} from "@/lib/wordleMath";

const fieldClass =
  "calc-input w-full rounded-2xl border border-ink/12 bg-[#F3EFFC] px-4 py-3.5 text-base font-semibold text-ink outline-none transition placeholder:text-ink/30 hover:border-ink/20 focus:border-teal/60 focus:bg-white focus:ring-4 focus:ring-teal/15";

const tileInputClass =
  "h-12 w-12 rounded-xl border-2 text-center text-xl font-bold uppercase tracking-wide outline-none transition sm:h-14 sm:w-14 sm:text-2xl";

export default function WordleCalculator({
  id = "finder",
  title = "Wordle Finder",
}: {
  id?: string;
  title?: string;
}) {
  const [greens, setGreens] = useState(["", "", "", "", ""]);
  const [yellowRaw, setYellowRaw] = useState("");
  const [grayRaw, setGrayRaw] = useState("");
  const [hardMode, setHardMode] = useState(false);
  const [includeUncommon, setIncludeUncommon] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const openers = useMemo(() => bestOpeners(8), []);

  const results = useMemo(() => {
    const yellows = parseYellowEntries(yellowRaw);
    const grays = parseGrayLetters(grayRaw);
    return filterWordleCandidates({
      greens: sanitizeGreens(greens),
      yellows,
      grays,
      hardMode,
      includeUncommon,
    });
  }, [greens, yellowRaw, grayRaw, hardMode, includeUncommon]);

  const visible = showAll ? results.slice(0, 200) : results.slice(0, 36);
  const hasClues =
    greens.some(Boolean) || yellowRaw.trim().length > 0 || grayRaw.trim().length > 0;

  const setGreenAt = (index: number, value: string) => {
    const letter = value.replace(/[^a-zA-Z]/g, "").slice(-1).toUpperCase();
    setGreens((prev) => {
      const next = [...prev];
      next[index] = letter;
      return next;
    });
  };

  const reset = () => {
    setGreens(["", "", "", "", ""]);
    setYellowRaw("");
    setGrayRaw("");
    setHardMode(false);
    setIncludeUncommon(false);
    setShowAll(false);
  };

  return (
    <div
      id={id}
      className="calc-shell relative scroll-mt-20 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white p-1 shadow-[0_28px_70px_-40px_rgba(124,58,237,0.35)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-sky/15 blur-3xl" />

      <div className="relative rounded-[1.4rem] bg-white p-4 sm:p-6 md:p-7">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
              Live word filter
            </p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink sm:text-[2rem]">
              {title}
            </h2>
            <p className="mt-1.5 max-w-xl text-base text-ink/65">
              Enter green, yellow, and gray clues from your board. Wordle Finder ranks remaining
              five-letter answers so your next guess cuts the list faster.
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-ink/10 bg-[#F3EFFC] px-3.5 py-2 text-sm font-semibold text-ink/70 transition hover:border-ink/20 hover:text-ink"
          >
            Reset clues
          </button>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-ink">
            Green letters <span className="font-normal text-ink/50">(correct spot)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {greens.map((letter, i) => (
              <input
                key={i}
                aria-label={`Green letter position ${i + 1}`}
                value={letter}
                maxLength={1}
                onChange={(e) => setGreenAt(i, e.target.value)}
                className={`${tileInputClass} border-[#6AAA64]/70 bg-[#6AAA64]/15 text-[#1F4D2A] focus:border-[#6AAA64] focus:ring-4 focus:ring-[#6AAA64]/25`}
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
              />
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="yellow-letters" className="mb-2 block text-sm font-semibold text-ink">
              Yellow letters <span className="font-normal text-ink/50">(wrong spot)</span>
            </label>
            <input
              id="yellow-letters"
              value={yellowRaw}
              onChange={(e) => setYellowRaw(e.target.value.toUpperCase())}
              placeholder="e.g. A2 R T:1,4"
              className={fieldClass}
              autoComplete="off"
              spellCheck={false}
            />
            <p className="mt-1.5 text-xs text-ink/50">
              Add a position number to ban that slot (1–5). Example: <code>A2</code> means A is in
              the word, but not in position 2.
            </p>
          </div>
          <div>
            <label htmlFor="gray-letters" className="mb-2 block text-sm font-semibold text-ink">
              Gray letters <span className="font-normal text-ink/50">(not in the word)</span>
            </label>
            <input
              id="gray-letters"
              value={grayRaw}
              onChange={(e) => setGrayRaw(e.target.value.toUpperCase())}
              placeholder="e.g. S L N"
              className={fieldClass}
              autoComplete="off"
              spellCheck={false}
            />
            <p className="mt-1.5 text-xs text-ink/50">
              Letters ruled out completely. Letters also marked green or yellow stay allowed.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-ink/10 bg-[#F3EFFC] px-3.5 py-2.5 text-sm font-semibold text-ink">
            <input
              type="checkbox"
              checked={hardMode}
              onChange={(e) => setHardMode(e.target.checked)}
              className="h-4 w-4 accent-teal"
            />
            Hard mode filter
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-ink/10 bg-[#F3EFFC] px-3.5 py-2.5 text-sm font-semibold text-ink">
            <input
              type="checkbox"
              checked={includeUncommon}
              onChange={(e) => setIncludeUncommon(e.target.checked)}
              className="h-4 w-4 accent-teal"
            />
            Include uncommon guesses
          </label>
        </div>

        <div className="rounded-2xl border border-ink/8 bg-gradient-to-br from-[#F3EFFC] to-white p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                Ranked results
              </p>
              <p className="mt-1 font-display text-xl font-bold text-ink">
                {results.length.toLocaleString()} word{results.length === 1 ? "" : "s"} left
              </p>
            </div>
            {!hasClues && (
              <p className="text-sm text-ink/55">No clues yet — showing strongest openers.</p>
            )}
          </div>

          {!hasClues ? (
            <div className="flex flex-wrap gap-2">
              {openers.map((item) => (
                <span
                  key={item.word}
                  className="rounded-xl border border-teal/20 bg-teal/10 px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider text-teal-deep"
                >
                  {item.word}
                </span>
              ))}
            </div>
          ) : results.length === 0 ? (
            <p className="text-sm text-ink/70">
              No matches for these clues. Double-check yellow positions, gray letters, and whether a
              double letter is required.
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                {visible.map((item, index) => (
                  <span
                    key={item.word}
                    className={`rounded-xl border px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider ${
                      index < 3
                        ? "border-orange/30 bg-orange/10 text-orange-deep"
                        : "border-ink/10 bg-white text-ink"
                    }`}
                    title={`Score ${Math.round(item.score)} · ${item.uniqueLetters} unique letters`}
                  >
                    {item.word}
                  </span>
                ))}
              </div>
              {results.length > visible.length && (
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="mt-4 text-sm font-semibold text-teal-deep underline hover:no-underline"
                >
                  {showAll ? "Show fewer words" : `Show more (${Math.min(results.length, 200)} max)`}
                </button>
              )}
            </>
          )}
        </div>

        {hardMode && (
          <p className="mt-4 text-xs text-ink/50">
            Hard mode keeps only words that reuse every green and yellow clue you already revealed —
            the same rule Wordle applies when hard mode is on.
          </p>
        )}
      </div>
    </div>
  );
}
