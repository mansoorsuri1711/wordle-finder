import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BRAND_FEATURE_2, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Features — Wordle Calculator Tools",
  description:
    "Wordle Calculator features: green/yellow/gray filtering, next-guess ranking, hard mode, uncommon guesses, starting-word insights, and free strategy guides.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Features — Wordle Calculator Tools",
    description: "Everything included in the free Wordle Calculator toolkit.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const features = [
  {
    title: "Green, yellow, and gray clue inputs",
    text: "Model your exact board: locked greens, yellows with banned positions, and eliminated grays.",
  },
  {
    title: "Ranked next-guess suggestions",
    text: "Remaining words are scored by letter frequency and position strength—not dumped alphabetically.",
  },
  {
    title: "Hard mode toggle",
    text: "Keep suggestions legal when Wordle requires you to reuse every revealed clue.",
  },
  {
    title: "Answer bank + uncommon guesses",
    text: "Stay on likely answers for clean finishes, or expand the dictionary for information probes.",
  },
  {
    title: "Starting-word insights",
    text: "See data-friendly openers and letter-frequency tables before your first guess.",
  },
  {
    title: "Solver + calculator routes",
    text: "Use the homepage calculator or the dedicated Wordle Solver page—same engine, clear intents.",
  },
  {
    title: "SERP-driven strategy guides",
    text: "Color rules, hard mode, second guesses, and strategy tips that match what players search.",
  },
  {
    title: "Free in the browser",
    text: "No account, no install, no paywall for the core Wordle Calculator on wordlecalculator.net.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
        ]}
      />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-8">
        <h1 className="font-display text-4xl font-bold text-ink">Wordle Calculator features</h1>
        <p className="mt-3 max-w-3xl text-lg text-ink/75">
          Built for mid-puzzle decisions: filter the board accurately, rank high-value guesses, and
          learn the strategy behind stronger openers.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Wordle Calculator features including clue filters and ranked guesses"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
            >
              <h2 className="font-display text-xl font-bold text-ink">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{feature.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-ink/70">
          Ready to try it? Open the{" "}
          <Link href="/#calculator" className="font-semibold text-teal-deep underline">
            Wordle Calculator
          </Link>{" "}
          or follow{" "}
          <Link href="/how-to-use-wordle-calculator" className="font-semibold text-teal-deep underline">
            how to use it
          </Link>
          .
        </p>
      </div>
    </>
  );
}
