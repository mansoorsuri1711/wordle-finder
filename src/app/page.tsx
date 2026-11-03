import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import WordleCalculator from "@/components/WordleCalculator";
import CtaButton from "@/components/CtaButton";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { bestOpeners, LETTER_FREQUENCY_RANK } from "@/lib/wordleMath";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_DOMAIN,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Wordle Finder — Free Solver, Helper & Next-Guess Ranker",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free Wordle Finder online. Enter green, yellow, and gray clues to filter five-letter words, find possible answers, and rank the best next guess. Hard mode supported.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Wordle Finder — Free Solver, Helper & Next-Guess Ranker",
    description:
      "Turn your Wordle board into a short list of ranked answers. Green, yellow, and gray clues in—best next guess out.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wordle Finder — rank the best next five-letter guess online",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a Wordle Finder?",
    answer:
      "A Wordle Finder is a clue-aware word finder and next-guess ranker. You enter green (correct spot), yellow (wrong spot), and gray (absent) letters from your board. It narrows the five-letter word list and sorts strong candidates so you can finish in fewer tries.",
  },
  {
    question: "How do I use this Wordle Finder?",
    answer:
      "Type each green letter into its position slot, list yellow letters (add a position number to ban that slot), then add gray letters that are fully ruled out. The finder updates the remaining words and highlights the strongest next guesses. See the full walkthrough on our how-to page.",
  },
  {
    question: "What do green, yellow, and gray mean in Wordle?",
    answer:
      "Green means the letter is in the answer and in that exact spot. Yellow means the letter is in the answer but not in that spot. Gray means the letter does not appear in the answer (unless you already know it appears elsewhere from a green or yellow tile).",
  },
  {
    question: "Is using a Wordle Finder cheating?",
    answer:
      "It is a personal choice. Searches for “Wordle cheat” usually mean the same helper tools. Many players use a finder to learn letter patterns, recover a stuck board, or practice hard mode. Others prefer a fully unaided streak. Use it the way that keeps the puzzle fun for you.",
  },
  {
    question: "How many Wordle answers are there?",
    answer:
      "The common answer bank used by helpers is about 2,300 five-letter words. Valid guesses can be a much larger set. Our default mode ranks likely answers; turn on uncommon guesses when you need a broader dictionary.",
  },
  {
    question: "Does the Wordle Finder support hard mode?",
    answer:
      "Yes. Enable hard mode in the tool so suggestions must reuse every green and yellow clue you already revealed—the same constraint Wordle applies when hard mode is on.",
  },
  {
    question: "What is the best Wordle starting word?",
    answer:
      "Data-friendly openers emphasize common letters in strong positions. Words like SLATE, STARE, CRANE, and RAISE consistently cover high-frequency vowels and consonants. Compare options on our best starting words page.",
  },
  {
    question: "Can this tool find today’s Wordle answer?",
    answer:
      "It does not spoil the daily answer automatically. It calculates which words still fit the clues you enter. If you type every clue from today’s board, the remaining list becomes today’s possible answers—and often a single word.",
  },
  {
    question: "Why aren’t all five-letter words suggested?",
    answer:
      "By default we prioritize the answer-style word bank Wordle players actually encounter, not every obscure dictionary entry. Enable uncommon guesses if you want a wider list of valid spellings.",
  },
  {
    question: "Is Wordle Finder free on wordlefinder.app?",
    answer:
      "Yes. The core Wordle Finder runs free in your browser—no account, no download, and no paywall for clue filtering and ranked suggestions.",
  },
  {
    question: "Does this work with the New York Times Wordle?",
    answer:
      "Yes. Enter the green, yellow, and gray tiles from the NYT Wordle board and the finder filters five-letter candidates the same way. It is an unofficial helper—not affiliated with the New York Times.",
  },
  {
    question: "Can I use the Wordle Finder on mobile?",
    answer:
      "Yes. wordlefinder.app is a responsive web tool. Open it in your phone browser, enter clues from today’s puzzle, and read the ranked shortlist without installing an app.",
  },
  {
    question: "What is the difference between a Wordle Finder, Solver, and Helper?",
    answer:
      "They describe the same job with different search wording. A finder emphasizes matching words to your pattern, a solver emphasizes finishing the puzzle, and a helper emphasizes hints. On wordlefinder.app, one engine powers all three views with ranked next guesses.",
  },
  {
    question: "Does the finder only list answers or also hints?",
    answer:
      "It ranks remaining words and highlights strong next guesses—so you get both a shortlist and a hint about which play gathers the most information. It does not auto-publish today’s official answer.",
  },
];

const openers = bestOpeners(10);
const topLetters = LETTER_FREQUENCY_RANK.slice(0, 10);

const howToSteps = [
  {
    title: "Capture green tiles",
    body: "Put each correctly placed letter into the matching slot. Greens lock that position for every remaining candidate.",
  },
  {
    title: "Add yellow clues",
    body: "Enter letters that appear in the word but sit in the wrong spot. Add a position number (1–5) to ban that exact slot.",
  },
  {
    title: "List gray letters",
    body: "Add letters your guesses fully eliminated. The finder keeps letters that are also green or yellow elsewhere.",
  },
  {
    title: "Pick a ranked guess",
    body: "Read the shortlist. Top results balance remaining answers with strong letter coverage so your next try teaches more.",
  },
];

const featureCards = [
  {
    title: "Clue-accurate filtering",
    body: "Greens, yellows with banned positions, and grays update the remaining word set in real time—the same logic strong solvers use.",
  },
  {
    title: "Next-guess ranking",
    body: "Candidates are scored by letter frequency and position strength so the first suggestions are usually the highest-value plays.",
  },
  {
    title: "Hard mode ready",
    body: "Toggle hard mode when Wordle requires you to reuse known clues. Suggestions stay legal for that stricter rule set.",
  },
  {
    title: "Answer vs uncommon lists",
    body: "Stay on the likely-answer bank for clean finishes, or expand to uncommon guesses when you need a probe word.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  description:
    "Free Wordle Finder to filter five-letter words from green, yellow, and gray clues and rank the best next guess.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the Wordle Finder",
  description:
    "Enter Wordle tile colors to filter remaining five-letter answers and choose a strong next guess.",
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.body,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const softwareSchema = {
  "@context": "https://schema.org",
  ...WEB_APPLICATION_JSON_LD,
  description:
    "Browser-based Wordle Finder that filters five-letter words from tile clues and ranks next guesses.",
  screenshot: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}${BRAND_HERO}`,
    width: 1600,
    height: 900,
    ...imageObjectLicensing,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 md:px-8 md:pb-14 md:pt-12">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal/15 blur-3xl hero-glow" />
        <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-orange/15 blur-3xl hero-glow" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl animate-fade-up text-center">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-[4.25rem]">
              <span className="brand-gradient-text">Wordle Finder</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-ink/75 sm:text-2xl">
              Enter green, yellow, and gray clues. Get a ranked shortlist of five-letter words and a
              stronger next guess—free on {SITE_DOMAIN}.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <WordleCalculator title="Wordle Finder" id="finder" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="trust-chip" aria-label={`${SITE_RATING.ratingValue} out of 5 stars`}>
              <span className="font-semibold text-ink">{SITE_RATING.ratingValue}★</span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString()} ratings)</span>
            </span>
            <span className="trust-chip">Free · Web · Puzzle helper</span>
            <span className="trust-chip">Hard mode supported</span>
          </div>
          <div className="mx-auto mt-10 max-w-4xl animate-fade-up">
            <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_28px_70px_-40px_rgba(124,58,237,0.4)]">
              <Image
                src={BRAND_HERO}
                alt="Wordle Finder interface showing ranked five-letter word suggestions"
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
              How the Wordle Finder works
            </h2>
            <p className="mt-3 text-lg text-ink/70 sm:text-xl">
              Every tile color is a constraint. Wordle Finder applies those constraints to a
              five-letter answer bank, then ranks what is left so your next guess does more than
              hope.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {howToSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-deep">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/60">
            Prefer a longer walkthrough with examples? Read{" "}
            <Link href="/how-to-use-wordle-finder" className="font-semibold text-teal-deep underline">
              how to use the Wordle Finder
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
                What is Wordle and how do you play?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Wordle is a daily five-letter word game popularized by Josh Wardle and now published
                by The New York Times. You get six guesses. After each guess, tiles turn green
                (right letter, right spot), yellow (right letter, wrong spot), or gray (letter not
                in the word). Everyone shares the same puzzle each day, which is why score grids
                became a social habit.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Good play starts with a word rich in common letters, then reuses every green and
                yellow confirmation. When the board gets crowded, Wordle Finder does the
                bookkeeping so you can focus on the only choice that matters: the next guess.
              </p>
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
                Wordle word finder vs generic unscramblers
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                A plain word finder only cares which letters exist. A Wordle Finder / solver /
                helper respects position: greens are locked to a slot, yellows must appear somewhere
                else, and grays are excluded unless another clue proves the letter still belongs.
                That is why results stay short and relevant instead of dumping every five-letter
                dictionary entry.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Use it as a Wordle helper when you are two or three guesses in and the options feel
                endless. The fewer words left, the closer you are—and a ranked next guess tells you
                which play earns the most information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
              What makes this Wordle Finder different
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Many helpers dump an unsorted dictionary dump after you type a few letters. This
              Wordle Finder is built for the moment you are mid-puzzle: lock greens, respect
              yellow bans, drop grays, then see which answers still fit and which guess teaches the
              most.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Ranking uses letter frequency across the answer bank—not random alphabetical order—so
              openers and mid-game plays favor high-information letters in strong positions. Hard
              mode and uncommon-guess toggles keep the same engine flexible for different play
              styles.
            </p>
            <ul className="mt-6 space-y-3 text-ink/80">
              {featureCards.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal" />
                  <span>
                    <strong className="text-ink">{item.title}.</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/60">
              Explore the full feature list on the{" "}
              <Link href="/features" className="font-semibold text-teal-deep underline">
                features page
              </Link>{" "}
              or jump to the{" "}
              <Link href="/wordle-solver" className="font-semibold text-teal-deep underline">
                Wordle Solver
              </Link>{" "}
              and{" "}
              <Link href="/wordle-helper" className="font-semibold text-teal-deep underline">
                Wordle Helper
              </Link>{" "}
              views.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_FEATURE_2}
              alt="Wordle Finder online filtering green yellow and gray letter clues"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
                  Strong Wordle starting words
                </h2>
                <p className="mt-3 text-ink/70">
                  Before any clues exist, Wordle Finder ranks openers by how often their letters
                  appear in the answer bank and where those letters usually sit. These are reliable
                  first guesses—not guaranteed day-one greens.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {openers.map((item, index) => (
                    <span
                      key={item.word}
                      className={`rounded-xl border px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider ${
                        index < 3
                          ? "border-orange/30 bg-orange/10 text-orange-deep"
                          : "border-ink/10 bg-[#F3EFFC] text-ink"
                      }`}
                    >
                      {item.word}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-3 text-sm text-ink/75">
                  <p>
                    <strong className="text-ink">Vowel-heavy openers:</strong> ADIEU, AUDIO, OUIJA,
                    AUREI — fast vowel checks when you want early feedback.
                  </p>
                  <p>
                    <strong className="text-ink">Consonant coverage:</strong> CRANE, SLATE, TRACE,
                    STARE — stronger overall letter fishing for most boards.
                  </p>
                  <p>
                    <strong className="text-ink">Common follow-ups:</strong> ROUND, POINT, LIGHT,
                    MOUND — useful second-guess patterns after a sparse opener.
                  </p>
                </div>
                <p className="mt-4 text-sm text-ink/60">
                  Full opener comparisons and second-guess pairs:{" "}
                  <Link
                    href="/best-wordle-starting-words"
                    className="font-semibold text-teal-deep underline"
                  >
                    best Wordle starting words
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Most common answer letters
                </h3>
                <p className="mt-2 text-sm text-ink/65">
                  Frequency across the likely-answer list (unique letter presence). Prioritize these
                  early when you still have information to gather.
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[280px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-ink/10 text-ink/55">
                        <th className="py-2 pr-3 font-semibold">Letter</th>
                        <th className="py-2 font-semibold">Answer frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topLetters.map((row) => (
                        <tr key={row.letter} className="border-b border-ink/5">
                          <td className="py-2 pr-3 font-mono text-base font-bold uppercase text-teal-deep">
                            {row.letter}
                          </td>
                          <td className="py-2 text-ink/75">{row.count.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-sm order-2 lg:order-1">
            <Image
              src={BRAND_FEATURE_3}
              alt="Wordle Finder tool ranking remaining answers after each guess"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
              Color clues, hard mode, and honest limits
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Green locks a letter in place. Yellow says “present, but not here.” Gray removes a
              letter unless another clue proves it still belongs. Getting those three states right
              is 90% of accurate Wordle math—and exactly what this finder listens to.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Hard mode players must reuse every revealed clue. Flip the hard mode toggle so the
              shortlist only includes legal hard-mode guesses. If you want strategy beyond the tool,
              read our guides on{" "}
              <Link href="/blog/how-wordle-colors-work" className="font-semibold text-teal-deep underline">
                how Wordle colors work
              </Link>{" "}
              and{" "}
              <Link href="/blog/wordle-hard-mode-guide" className="font-semibold text-teal-deep underline">
                Wordle hard mode
              </Link>
              .
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              This site is an unofficial helper. It does not scrape or publish today’s official
              answer on load. Your clues in, remaining words out—so you stay in control of how much
              help you accept.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
            Practical Wordle strategy with a finder
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-ink/70">
            Use the tool as a coach, not only as an answer key. Strong players gather information
            early, avoid wasting guesses on near-duplicates, and save the “obvious” answer attempt
            for when the list is short.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Open for information",
                body: "First guesses should test frequent letters. Avoid repeat letters on guess one so you do not waste a slot that could learn something new.",
              },
              {
                title: "Second guess with intent",
                body: "If guess one taught little, pick a second word that introduces new high-value letters instead of rearranging the same five.",
              },
              {
                title: "Only play legal words",
                body: "Before you submit, confirm greens stay put, yellows appear somewhere, and no gray letter sneaks back in. Every guess should still be a possible winner.",
              },
              {
                title: "Use the keyboard as a checklist",
                body: "Late game, unused letters on the on-screen keyboard are your shortlist. Mix the remaining slots with those leftovers instead of inventing random words.",
              },
              {
                title: "Solve when the list is small",
                body: "Once the finder shows a handful of words, switch from probing to finishing. That is when answering beats information gathering.",
              },
              {
                title: "Draft before you lock",
                body: "Jot a candidate offline, then re-check it against greens, yellows, and grays. A ten-second review saves more streaks than a lucky smash of keys.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/blog/wordle-strategy-tips" className="font-semibold text-teal-deep underline">
              Wordle strategy tips
            </Link>
            <Link href="/blog/best-second-wordle-guesses" className="font-semibold text-teal-deep underline">
              Best second Wordle guesses
            </Link>
            <Link href="/5-letter-words-for-wordle" className="font-semibold text-teal-deep underline">
              5 letter words for Wordle
            </Link>
            <Link href="/blog" className="font-semibold text-teal-deep underline">
              All guides
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 md:px-8">
        <div className="container mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[2.75rem]">
              Built for stuck boards and clean finishes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Mid-game Wordle is where most streaks break: two greens, a yellow, and twenty words
              still possible. Paste those clues into Wordle Finder, scan the ranked list, and choose
              a guess that either ends the puzzle or splits the remaining set.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">
              Beginners get a transparent explanation of each color. Advanced players get hard mode
              filtering and uncommon probes. Everyone gets a free tool that stays on{" "}
              {SITE_DOMAIN}—no app install required.
            </p>
            <div className="mt-6">
              <CtaButton href="/#finder" size="sm" ariaLabel="Return to Wordle Finder">
                TRY IT NOW
              </CtaButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_FEATURE_4}
              alt="Wordle Finder app-style view for mobile and desktop browsers"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <FaqSection
            title="Wordle Finder FAQs"
            items={faqs}
            includeSchema={false}
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-teal/20 bg-gradient-to-br from-teal/10 via-white to-orange/10 p-8 md:p-10">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
            Ready for a sharper next guess?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink/75">
            Open the free Wordle Finder, enter today’s clues, and turn a crowded board into a
            short ranked list. Play for learning, play for the streak—either way, start with better
            information.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/#finder">OPEN FINDER</CtaButton>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-2xl border border-ink/12 bg-white px-6 py-3.5 text-base font-semibold text-ink"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
