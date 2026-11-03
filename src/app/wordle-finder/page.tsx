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
  title: "Wordle Word Finder & Answer Finder for 5 Letters",
  description:
    "Free Wordle word finder and answer finder. Search five-letter words that match green, yellow, and gray clues—better than a generic unscrambler.",
  alternates: { canonical: `${SITE_ORIGIN}/wordle-finder` },
  openGraph: {
    title: "Wordle Word Finder & Answer Finder",
    description: "Position-aware Wordle word finder for green, yellow, and gray tiles.",
    url: `${SITE_ORIGIN}/wordle-finder`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Wordle word finder" }],
  },
};

const faqs = [
  {
    question: "What is a Wordle word finder?",
    answer:
      "A Wordle word finder (also searched as Wordle answer finder) returns five-letter words that match your board colors. Unlike a generic word finder, it locks green positions and bans yellow spots.",
  },
  {
    question: "How is a Wordle word finder different from unscrambling letters?",
    answer:
      "Unscramblers ignore tile colors. A Wordle finder must honor exact positions, wrong-spot letters, and eliminated letters at the same time—so the list stays short and usable.",
  },
  {
    question: "Can this find today’s Wordle answer?",
    answer:
      "It finds every answer still possible from the clues you enter. When only one word remains, that is today’s answer for your board—without auto-loading a spoiler.",
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
      name: "Word finder",
      item: `${SITE_ORIGIN}/wordle-finder`,
    },
  ],
};

export default function WordleFinderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Word finder", href: "/wordle-finder" },
        ]}
      />

      <div className="container mx-auto max-w-6xl px-4 pb-12 pt-6">
        <div className="mb-8 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
              Wordle word finder & answer finder
            </h1>
            <p className="mt-4 text-lg text-ink/75">
              Search five-letter matches from green, yellow, and gray clues—then pick a ranked next
              guess. This page focuses on word-finder and answer-finder intent; the full branded
              toolkit lives on the{" "}
              <Link href="/" className="font-semibold text-teal-deep underline">
                Wordle Finder homepage
              </Link>
              .
            </p>
            <div className="mt-6">
              <CtaButton href="#finder" size="sm">
                OPEN WORD FINDER
              </CtaButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_FEATURE_2}
              alt="Wordle word finder filtering five-letter answers by tile colors"
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <WordleCalculator id="finder" title="Wordle Word Finder" />

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Why Wordle needs a position-aware finder
            </h2>
            <p className="mt-3 text-ink/75">
              Searching “word finder Wordle” usually means you already know some colors. A green T in
              slot two is not the same as a yellow T. This finder keeps those rules strict so you are
              not wading through thousands of irrelevant five-letter spellings.
            </p>
            <p className="mt-3 text-ink/75">
              Want a browseable starter list instead? See{" "}
              <Link
                href="/5-letter-words-for-wordle"
                className="font-semibold text-teal-deep underline"
              >
                5 letter words for Wordle
              </Link>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <Image
              src={BRAND_HERO}
              alt="Wordle answer finder with ranked five-letter word matches"
              width={1600}
              height={900}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-14">
          <FaqSection title="Wordle word finder FAQs" items={faqs} />
        </section>
      </div>
    </>
  );
}
