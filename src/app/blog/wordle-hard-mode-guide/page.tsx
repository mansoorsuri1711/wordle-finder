import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import {
  BRAND_FEATURE_2,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "Wordle Hard Mode Guide: Rules, Tips, and Finder Use";
const description =
  "What Wordle hard mode requires, why it changes strategy, and how to keep Wordle Finder suggestions legal under hard-mode rules.";
const slug = "wordle-hard-mode-guide";
const datePublished = "2026-11-04";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
  openGraph: {
    title,
    description,
    url: `${SITE_ORIGIN}/blog/${slug}`,
    siteName: SITE_NAME,
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

export default function WordleHardModeGuidePage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Hard mode guide", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-3 text-sm text-ink/50">Updated November 4, 2026 · 9 min read</p>
        <p className="mt-5 text-lg text-ink/75">
          Hard mode is Wordle with stricter honesty: every new guess must reuse confirmed clues.
          That single rule removes many classic “probe” words and makes{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Wordle Finder
          </Link>{" "}
          especially useful for checking legality.
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Wordle hard mode constrained guesses with Wordle Finder hard-mode filter enabled"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-4 text-ink/80 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink">What hard mode requires</h2>
          <p>
            Any green letter must stay in that position on later guesses. Any yellow letter must
            appear somewhere in later guesses. You cannot ignore known information to test unrelated
            letters the way normal mode allows.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Why averages get harder</h2>
          <p>
            In normal mode you might burn a guess on a word that shares no letters with your clues
            just to learn new information. Hard mode bans that move once greens and yellows exist.
            You are forced into the shrinking answer cluster earlier—which is also where traps like
            _ATCH families live.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Hard-mode strategy tips</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Keep openers information-rich; you get fewer free probes later.</li>
            <li>
              When multiple answers share a pattern, prioritize the guess that distinguishes them
              while still obeying clues.
            </li>
            <li>Do not lock soft commitments early—bad yellow interpretations cascade.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-ink">Using Wordle Finder in hard mode</h2>
          <p>
            Enter your greens, yellows, and grays, then enable the hard mode toggle. Suggestions
            stay inside words that already satisfy every revealed clue—the same constraint Wordle
            enforces. Pair this with the{" "}
            <Link href="/wordle-solver" className="text-teal-deep underline">
              Wordle Solver
            </Link>{" "}
            view when you are finishing a tough board.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Should you always play hard mode?</h2>
          <p>
            Not necessarily. Hard mode is excellent training and a fair personal challenge. Normal
            mode remains better for experimental letter fishing. Many players switch based on mood—
            just match the Wordle Finder toggle to the mode you are actually playing.
          </p>
        </section>
      </article>
    </>
  );
}
