import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import {
  BRAND_FEATURE_3,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "How Wordle Colors Work: Green, Yellow, and Gray Rules";
const description =
  "Clear explanation of Wordle green, yellow, and gray tiles—including double letters—and how to enter those clues correctly in a Wordle Calculator.";
const slug = "how-wordle-colors-work";
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

export default function HowWordleColorsWorkPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How colors work", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-4xl font-bold text-ink">{title}</h1>
        <p className="mt-3 text-sm text-ink/50">Updated November 3, 2026 · 8 min read</p>
        <p className="mt-5 text-lg text-ink/75">
          Every Wordle helper—including our{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Wordle Calculator
          </Link>
          —is only as accurate as the colors you feed it. Here is what each tile means, where players
          get confused, and how to translate the board into calculator fields.
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Diagram-style view of Wordle green yellow and gray letter clues"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-4 text-ink/80 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink">Green: right letter, right spot</h2>
          <p>
            A green tile locks that letter into that position for the answer. In the calculator,
            type the letter into the matching slot. Every remaining candidate must keep that green
            exactly where it is.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Yellow: right letter, wrong spot</h2>
          <p>
            Yellow means the letter appears in the answer somewhere else. It also means that exact
            position is wrong for that letter. In the yellow field, enter the letter and optionally
            ban the slot (for example <code>A2</code>).
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Gray: letter not present (usually)</h2>
          <p>
            Gray normally means the letter does not appear in the answer. The important exception is
            duplicate letters: if one S is green or yellow and another S is gray, the gray may mean
            “no additional S,” not “S is absent entirely.” Enter grays carefully when doubles are in
            play.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">How colors stack across guesses</h2>
          <p>
            Wordle remembers the whole board. You do not re-enter history word-by-word in the
            calculator—you enter the net facts: final greens, known yellows with bans, and letters
            fully eliminated. That is enough for an accurate shortlist.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">Putting colors into the calculator</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Greens → position slots</li>
            <li>Yellows → letter list with optional position bans</li>
            <li>Grays → absent letters</li>
            <li>Review the ranked list and adjust if a double-letter clue was misread</li>
          </ol>
          <p>
            Need the click-by-click version? See{" "}
            <Link href="/how-to-use-wordle-calculator" className="text-teal-deep underline">
              how to use the Wordle Calculator
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
