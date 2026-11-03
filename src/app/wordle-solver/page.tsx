import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import WordleCalculator from "@/components/WordleCalculator";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_2,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Wordle Solver — Free 5 Letter Wordle Solver",
  description:
    "Free Wordle solver and 5 letter Wordle solver. Enter green, yellow, and gray tiles to narrow answers and rank the best next guess.",
  alternates: { canonical: `${SITE_ORIGIN}/wordle-solver` },
  openGraph: {
    title: "Wordle Solver — Free 5 Letter Wordle Solver",
    description: "Turn tile colors into a short ranked list of five-letter Wordle answers.",
    url: `${SITE_ORIGIN}/wordle-solver`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Wordle Solver" }],
  },
};

const faqs = [
  {
    question: "Is a Wordle Solver the same as a Wordle Calculator?",
    answer:
      "They solve the same job with different names. A solver emphasizes finding matching answers; a calculator emphasizes ranking the next guess. Our tool does both on the same engine.",
  },
  {
    question: "Will the Wordle Solver spoil today’s answer?",
    answer:
      "Only if you enter enough clues that a single word remains. It does not auto-load the official daily solution.",
  },
  {
    question: "Can I use the solver in hard mode?",
    answer:
      "Yes. Enable hard mode so every suggestion reuses the greens and yellows you already revealed.",
  },
  {
    question: "Is this a 5 letter Wordle solver?",
    answer:
      "Yes. It filters five-letter Wordle candidates by default—the same length as the daily NYT Wordle puzzle.",
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
      name: "Wordle Solver",
      item: `${SITE_ORIGIN}/wordle-solver`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function WordleSolverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Wordle Solver", href: "/wordle-solver" },
        ]}
      />

      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Wordle Solver
            </h1>
            <p className="mt-4 text-lg text-ink/75">
              Stuck after two or three guesses? This Wordle Solver turns the colors on your board
              into a filtered answer list ranked for the next play. Same engine as the{" "}
              <Link href="/" className="font-semibold text-teal-deep underline">
                Wordle Calculator
              </Link>
              —framed for the moment you need help finishing.
            </p>
            <div className="mt-6">
              <CtaButton href="#solver" size="sm">
                OPEN SOLVER
              </CtaButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_HERO}
              alt="Wordle Solver showing remaining five-letter word matches"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <WordleCalculator id="solver" title="Wordle Solver" />

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">How this Wordle Solver helps</h2>
            <p className="mt-3 text-ink/75">
              Enter greens in order, yellows with optional banned positions, and grays that are
              fully out. The solver removes impossible spellings and sorts what remains by letter
              value so you are not scrolling an alphabetical dump.
            </p>
            <p className="mt-3 text-ink/75">
              New to the color rules? Read{" "}
              <Link href="/blog/how-wordle-colors-work" className="font-semibold text-teal-deep underline">
                how Wordle colors work
              </Link>
              . Prefer openers first? Visit{" "}
              <Link href="/best-wordle-starting-words" className="font-semibold text-teal-deep underline">
                best Wordle starting words
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_FEATURE_2}
              alt="Online Wordle Solver filtering board clues into ranked guesses"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-14">
          <FaqSection title="Wordle Solver FAQs" items={faqs} includeSchema={false} />
        </section>
      </div>
    </>
  );
}
