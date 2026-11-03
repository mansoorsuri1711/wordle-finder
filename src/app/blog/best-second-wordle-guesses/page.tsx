import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import {
  BRAND_FEATURE_4,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "Best Second Wordle Guesses After Your Opener";
const description =
  "How to choose the best second Wordle guess after SLATE, CRANE, STARE, and similar openers—when to add new letters and when to chase the answer.";
const slug = "best-second-wordle-guesses";
const datePublished = "2026-11-03";

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

export default function BestSecondWordleGuessesPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_4}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Best second guesses", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-4xl font-bold text-ink">{title}</h1>
        <p className="mt-3 text-sm text-ink/50">Updated November 3, 2026 · 8 min read</p>
        <p className="mt-5 text-lg text-ink/75">
          The second guess decides whether your opener’s information turns into a shortlist—or a
          stalled board. Here is how to pick it, and how the{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Wordle Calculator
          </Link>{" "}
          turns those colors into a ranked next move.
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_4}
            alt="Best second Wordle guesses after a strong opening word"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-4 text-ink/80 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink">If the opener was mostly gray</h2>
          <p>
            Treat guess two like a second opener. Prefer words that introduce unused high-frequency
            letters instead of remixing the same five. After SLATE, that often means bringing in
            letters like R, N, C, H, or U depending on what survived.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">If you banked greens or yellows</h2>
          <p>
            Decide: finish or fish? One or two strong greens can justify a solve attempt if the
            pattern is rare. A single yellow usually means keep gathering. Enter the clues into the
            calculator and compare the top-ranked options before you commit.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Pairing ideas with common openers</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>SLATE family:</strong> look for second words that test R/N/C/H while respecting
              any A/E/S/L/T feedback.
            </li>
            <li>
              <strong>CRANE family:</strong> second guesses often prioritize L/T/S/H/I coverage when
              those letters are still unknown.
            </li>
            <li>
              <strong>STARE / RAISE family:</strong> vowel-heavy starts pair well with consonant-rich
              follow-ups once A/E/I feedback is known.
            </li>
          </ul>
          <p>
            Exact pairings change every day. Use the{" "}
            <Link href="/best-wordle-starting-words" className="text-teal-deep underline">
              starting words page
            </Link>{" "}
            for openers, then let live clues drive guess two.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">A simple second-guess checklist</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Enter opener results as greens, yellows, and grays</li>
            <li>Scan how many words remain</li>
            <li>If dozens remain, prioritize new letter coverage</li>
            <li>If few remain, pick the strongest legal answer candidate</li>
          </ol>

          <p>
            For the broader playbook, continue with{" "}
            <Link href="/blog/wordle-strategy-tips" className="text-teal-deep underline">
              Wordle strategy tips
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
