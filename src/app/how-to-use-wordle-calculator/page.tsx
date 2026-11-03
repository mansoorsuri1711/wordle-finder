import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import CtaButton from "@/components/CtaButton";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How to Use the Wordle Calculator (Step-by-Step)",
  description:
    "Step-by-step guide to using the Wordle Calculator: enter green, yellow, and gray clues, enable hard mode, and pick a ranked next guess.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-use-wordle-calculator` },
  openGraph: {
    title: "How to Use the Wordle Calculator",
    description: "Green, yellow, gray—then a ranked shortlist. Full walkthrough with examples.",
    url: `${SITE_ORIGIN}/how-to-use-wordle-calculator`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Open the calculator",
    body: "Go to the homepage Wordle Calculator (or the Wordle Solver page). You do not need an account. Keep your Wordle board visible so you can copy tile colors accurately.",
  },
  {
    title: "Fill green letter slots",
    body: "For every green tile, type that letter into the matching position box (1–5). Leave unknown positions blank. Greens never move—every remaining word must keep them.",
  },
  {
    title: "Enter yellow letters",
    body: "Type each yellow letter. If you know a banned position, add the slot number (for example A2 means A is present but not in position 2). Yellows must appear somewhere else in the word.",
  },
  {
    title: "Add gray letters",
    body: "List letters that Wordle marked gray and that you are sure are absent. If a letter is also green or yellow elsewhere, the calculator will not treat it as fully eliminated.",
  },
  {
    title: "Choose toggles carefully",
    body: "Hard mode keeps suggestions legal for Wordle’s hard-mode rule. Include uncommon guesses only when you want probe words outside the usual answer bank.",
  },
  {
    title: "Play a ranked suggestion",
    body: "Read the shortlist. Early in the puzzle, prefer high-coverage words. Late in the puzzle, pick the answer that fits when only a few candidates remain.",
  },
];

const faqs = [
  {
    question: "What if the calculator shows zero words?",
    answer:
      "A clue was probably mistyped—often a yellow position ban or a gray letter that should still be allowed. Reset and re-enter greens first, then yellows, then grays.",
  },
  {
    question: "Do I need to enter every past guess?",
    answer:
      "No. Enter the net information: final greens, known yellows with bans, and letters fully ruled out. Duplicate history is unnecessary if the board state is correct.",
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
      name: "How to use",
      item: `${SITE_ORIGIN}/how-to-use-wordle-calculator`,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to use the Wordle Calculator",
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.body,
  })),
};

export default function HowToUsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How to use", href: "/how-to-use-wordle-calculator" },
        ]}
      />

      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
          How to use the Wordle Calculator
        </h1>
        <p className="mt-4 text-lg text-ink/75">
          This walkthrough shows exactly how to turn a messy mid-game board into a ranked list of
          five-letter candidates on{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            wordlecalculator.net
          </Link>
          .
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Step-by-step Wordle Calculator tool with clue inputs"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <section key={step.title}>
              <h2 className="font-display text-2xl font-bold text-ink">
                {index + 1}. {step.title}
              </h2>
              <p className="mt-2 leading-relaxed text-ink/75">{step.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-teal/20 bg-teal/5 p-6">
          <h2 className="font-display text-2xl font-bold text-ink">Quick example</h2>
          <p className="mt-2 text-ink/75">
            Suppose position 1 is green <strong>S</strong>, you have yellow <strong>A</strong> not
            in slot 2, and gray letters <strong>R L N</strong>. Enter <code>S</code> in slot 1,
            yellow field <code>A2</code>, gray field <code>R L N</code>. The calculator keeps words
            that start with S, include A somewhere other than spot 2, and avoid R, L, and N.
          </p>
          <div className="mt-4">
            <CtaButton href="/#calculator" size="sm">
              TRY THIS ON THE CALCULATOR
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
