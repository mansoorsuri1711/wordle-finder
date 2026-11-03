import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import WordleCalculator from "@/components/WordleCalculator";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_3,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Wordle Helper — Get Help Narrowing Today’s Guesses",
  description:
    "Free Wordle helper and Wordle help tool. Enter green, yellow, and gray clues to see how many five-letter words remain and which guess helps most.",
  alternates: { canonical: `${SITE_ORIGIN}/wordle-helper` },
  openGraph: {
    title: "Wordle Helper — Get Help Narrowing Today’s Guesses",
    description: "Stuck mid-puzzle? This Wordle helper turns board colors into a ranked shortlist.",
    url: `${SITE_ORIGIN}/wordle-helper`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Wordle Helper" }],
  },
};

const faqs = [
  {
    question: "What is a Wordle helper?",
    answer:
      "A Wordle helper is a mid-game aid: you enter the colors you already have, it counts remaining five-letter options, and it points to a high-value next guess. It is the same engine as our calculator and solver, framed for the moment you need help.",
  },
  {
    question: "Is Wordle help the same as a Wordle guesser?",
    answer:
      "Mostly yes. People search Wordle help, helper, and guesser for the same job—narrowing answers from green, yellow, and gray tiles without guessing blindly.",
  },
  {
    question: "When should I use a Wordle helper?",
    answer:
      "Use it after two or three guesses when the board feels crowded. Early on, pick a strong opener; late in the game, let the helper shortlist legal finishes.",
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
      name: "Wordle Helper",
      item: `${SITE_ORIGIN}/wordle-helper`,
    },
  ],
};

export default function WordleHelperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Wordle Helper", href: "/wordle-helper" },
        ]}
      />

      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">Wordle Helper</h1>
            <p className="mt-4 text-lg text-ink/75">
              Need Wordle help without spoiling the fun? This Wordle helper—and Wordle guesser—reads
              your greens, yellows, and grays, shows how many answers remain, and ranks the next guess
              that cuts the field fastest. Same engine as the{" "}
              <Link href="/" className="font-semibold text-teal-deep underline">
                Wordle Calculator
              </Link>{" "}
              and{" "}
              <Link href="/wordle-solver" className="font-semibold text-teal-deep underline">
                Wordle Solver
              </Link>
              .
            </p>
            <div className="mt-6">
              <CtaButton href="#helper" size="sm">
                OPEN HELPER
              </CtaButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_HERO}
              alt="Wordle helper showing remaining five-letter guesses from board clues"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <WordleCalculator id="helper" title="Wordle Helper" />

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              How this Wordle help tool works
            </h2>
            <p className="mt-3 text-ink/75">
              Type locked green letters into their slots, list yellow letters (ban wrong positions when
              you know them), then add gray letters that are fully out. The helper filters five-letter
              Wordle words and ranks information-rich next plays—not an alphabetical dump.
            </p>
            <p className="mt-3 text-ink/75">
              Looking for tips instead of live help? Read{" "}
              <Link href="/blog/wordle-strategy-tips" className="font-semibold text-teal-deep underline">
                Wordle tips
              </Link>{" "}
              or the{" "}
              <Link href="/blog/wordle-hard-mode-guide" className="font-semibold text-teal-deep underline">
                hard mode guide
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_FEATURE_3}
              alt="Wordle help tool ranking next guesses after yellow and gray clues"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-14">
          <FaqSection title="Wordle Helper FAQs" items={faqs} />
        </section>
      </div>
    </>
  );
}
