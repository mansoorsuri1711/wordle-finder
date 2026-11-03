import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import WordleCalculator from "@/components/WordleCalculator";
import { bestOpeners, LETTER_FREQUENCY_RANK } from "@/lib/wordleMath";
import { WORDLE_ANSWERS } from "@/lib/wordleWords";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "5 Letter Words for Wordle — Lists, Openers & Solver",
  description:
    "Browse 5 letter words for Wordle, see strong openers, and use the 5 letter Wordle solver to filter matches from green, yellow, and gray clues.",
  alternates: { canonical: `${SITE_ORIGIN}/5-letter-words-for-wordle` },
  openGraph: {
    title: "5 Letter Words for Wordle",
    description: "Five-letter Wordle word lists plus a live solver for your board clues.",
    url: `${SITE_ORIGIN}/5-letter-words-for-wordle`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

const openers = bestOpeners(12);
const topLetters = LETTER_FREQUENCY_RANK.slice(0, 12);

const sampleByLetter = (() => {
  const map: Record<string, string[]> = {};
  for (const word of WORDLE_ANSWERS) {
    const key = word[0];
    if (!map[key]) map[key] = [];
    if (map[key].length < 10) map[key].push(word);
  }
  return Object.keys(map)
    .sort()
    .map((letter) => ({ letter, words: map[letter] }));
})();

const faqs = [
  {
    question: "How many 5 letter words does Wordle use?",
    answer:
      "Players typically face a few thousand possible answers. This page samples from an answer-style bank of about 2,300 five-letter words, and the finder can expand to a wider guess list when needed.",
  },
  {
    question: "What are the best 5 letter words for Wordle openers?",
    answer:
      "High-coverage openers such as SLATE, STARE, CRANE, and RAISE test common letters early. Browse the ranked list above or the full starting-words guide.",
  },
  {
    question: "Can I generate 5 letter Wordle words from clues?",
    answer:
      "Yes. Enter greens, yellows, and grays in the tool on this page—it acts as a 5 letter Wordle solver / word generator for matches that still fit your board.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
    {
      "@type": "ListItem",
      position: 2,
      name: "5 letter words for Wordle",
      item: `${SITE_ORIGIN}/5-letter-words-for-wordle`,
    },
  ],
};

export default function FiveLetterWordsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "5 letter words", href: "/5-letter-words-for-wordle" },
        ]}
      />

      <article className="container mx-auto max-w-6xl px-4 pb-16 pt-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
            5 letter words for Wordle
          </h1>
          <p className="mt-4 text-lg text-ink/75">
            Every Wordle answer is five letters. Use this page for strong 5 letter Wordle words,
            opener ideas, and a live 5 letter Wordle solver that filters the list from your green,
            yellow, and gray clues.
          </p>
        </div>

        <div className="mt-10">
          <WordleCalculator id="five-letter-solver" title="5 Letter Wordle Solver" />
        </div>

        <section className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink">
            Best 5 letter Wordle openers
          </h2>
          <p className="mt-3 text-ink/75">
            Ranked by letter frequency in the answer bank—useful first guesses before any colors
            appear. More detail on the{" "}
            <Link href="/best-wordle-starting-words" className="font-semibold text-teal-deep underline">
              starting words
            </Link>{" "}
            page.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {openers.map((item, index) => (
              <span
                key={item.word}
                className={`rounded-xl border px-3 py-2 font-mono text-sm font-bold uppercase tracking-wider ${
                  index < 3
                    ? "border-orange/30 bg-orange/10 text-orange-deep"
                    : "border-ink/10 bg-white text-ink"
                }`}
              >
                {item.word}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink">
            Common letters in 5 letter Wordle words
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-ink/55">
                  <th className="px-4 py-3 font-semibold">Letter</th>
                  <th className="px-4 py-3 font-semibold">Frequency in answer bank</th>
                </tr>
              </thead>
              <tbody>
                {topLetters.map((row) => (
                  <tr key={row.letter} className="border-b border-ink/5">
                    <td className="px-4 py-2.5 font-mono text-base font-bold uppercase text-teal-deep">
                      {row.letter}
                    </td>
                    <td className="px-4 py-2.5 text-ink/75">{row.count.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl font-bold text-ink">
            Sample 5 letter words by starting letter
          </h2>
          <p className="mt-3 max-w-3xl text-ink/75">
            A compact sampler from the Wordle-style answer bank ({WORDLE_ANSWERS.length.toLocaleString()}{" "}
            words). For clue-based filtering, use the solver above instead of scrolling alphabetically.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sampleByLetter.map((group) => (
              <div
                key={group.letter}
                className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold uppercase text-teal-deep">
                  {group.letter}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-wide text-ink/80">
                  {group.words.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-teal/20 bg-teal/5 p-6">
          <h2 className="font-display text-2xl font-bold text-ink">
            Need a Wordle word generator from clues?
          </h2>
          <p className="mt-2 text-ink/75">
            Enter what you know and generate matching five-letter candidates instantly—or open the{" "}
            <Link href="/wordle-finder" className="font-semibold text-teal-deep underline">
              Wordle finder
            </Link>{" "}
            /{" "}
            <Link href="/wordle-solver" className="font-semibold text-teal-deep underline">
              5 letter Wordle solver
            </Link>{" "}
            views.
          </p>
          <div className="mt-4">
            <CtaButton href="#five-letter-solver" size="sm">
              FILTER 5 LETTER WORDS
            </CtaButton>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl">
          <FaqSection title="5 letter Wordle FAQs" items={faqs} />
        </section>
      </article>
    </>
  );
}
