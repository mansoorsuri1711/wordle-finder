import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import { bestOpeners, LETTER_FREQUENCY_RANK } from "@/lib/wordleMath";
import { OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Best Wordle Starting Words (Data-Backed Openers)",
  description:
    "Best Wordle starting words ranked by letter frequency and position strength—SLATE, STARE, CRANE, RAISE, and more—plus how to pick a second guess.",
  alternates: { canonical: `${SITE_ORIGIN}/best-wordle-starting-words` },
  openGraph: {
    title: "Best Wordle Starting Words",
    description: "Data-friendly openers that cover common vowels and consonants.",
    url: `${SITE_ORIGIN}/best-wordle-starting-words`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

const openers = bestOpeners(20);
const letters = LETTER_FREQUENCY_RANK.slice(0, 15);

const faqs = [
  {
    question: "What is the single best Wordle starting word?",
    answer:
      "There is no universal winner every day, but openers like SLATE, STARE, CRANE, and RAISE consistently test high-frequency letters in strong positions. Pick one you remember and pair it with a strong second guess.",
  },
  {
    question: "Should my starter include two vowels?",
    answer:
      "Usually yes. Vowels appear often in answers, so testing A/E/I/O early shrinks the board faster than consonant-heavy novelty words.",
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
      name: "Best starting words",
      item: `${SITE_ORIGIN}/best-wordle-starting-words`,
    },
  ],
};

export default function BestStartingWordsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Best starting words", href: "/best-wordle-starting-words" },
        ]}
      />

      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
          Best Wordle starting words
        </h1>
        <p className="mt-4 text-lg text-ink/75">
          These openers are ranked by the same letter-frequency engine inside the{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Wordle Finder
          </Link>
          . They maximize common letters before any green, yellow, or gray clues exist.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-ink">Top ranked openers</h2>
          <ol className="mt-4 space-y-2">
            {openers.map((item, index) => (
              <li
                key={item.word}
                className="flex items-center justify-between rounded-xl border border-ink/10 bg-white px-4 py-3"
              >
                <span className="font-mono text-lg font-bold uppercase tracking-wider text-ink">
                  <span className="mr-3 text-sm font-semibold text-ink/40">{index + 1}.</span>
                  {item.word}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-teal-deep">
                  {item.uniqueLetters} unique letters
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-ink">Why these words work</h2>
          <p className="mt-3 text-ink/75">
            Wordle answers lean on a familiar set of letters. Openers that mix frequent vowels (E, A,
            O, I) with common consonants (R, T, L, S, N) create more useful green and yellow tiles on
            average than rare-letter novelty starts.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-ink/55">
                  <th className="px-4 py-3 font-semibold">Letter</th>
                  <th className="px-4 py-3 font-semibold">Answer-bank frequency</th>
                </tr>
              </thead>
              <tbody>
                {letters.map((row) => (
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

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-ink">After the opener</h2>
          <p className="mt-3 text-ink/75">
            A great start still leaves many answers. Use the finder with your new clues, or read{" "}
            <Link href="/blog/best-second-wordle-guesses" className="font-semibold text-teal-deep underline">
              best second Wordle guesses
            </Link>{" "}
            and{" "}
            <Link href="/blog/wordle-strategy-tips" className="font-semibold text-teal-deep underline">
              Wordle strategy tips
            </Link>{" "}
            for mid-game decisions.
          </p>
          <div className="mt-5">
            <CtaButton href="/#finder" size="sm">
              OPEN WORDLE CALCULATOR
            </CtaButton>
          </div>
        </section>

        <section className="mt-12">
          <FaqSection title="FAQs" items={faqs} />
        </section>
      </article>
    </>
  );
}
