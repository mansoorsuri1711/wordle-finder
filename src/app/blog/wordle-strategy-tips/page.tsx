import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import {
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

const title = "Wordle Strategy Tips That Actually Shorten Your Average";
const description =
  "Practical Wordle strategy: information-first openers, set-splitting guesses, when to solve, and how a Wordle Calculator supports better decisions.";
const slug = "wordle-strategy-tips";
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

export default function WordleStrategyTipsPage() {
  return (
    <>
      <BlogPostSchema
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Strategy tips", href: `/blog/${slug}` },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-16 pt-6">
        <h1 className="font-display text-4xl font-bold text-ink">{title}</h1>
        <p className="mt-3 text-sm text-ink/50">Updated November 3, 2026 · 10 min read</p>
        <p className="mt-5 text-lg text-ink/75">
          Strong Wordle play is less about lucky vocabulary and more about information timing. These
          strategy tips mirror what top guides and player communities emphasize—and show where a{" "}
          <Link href="/" className="font-semibold text-teal-deep underline">
            Wordle Calculator
          </Link>{" "}
          helps without playing the game for you.
        </p>

        <div className="my-8 overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_HERO}
            alt="Wordle strategy tips illustrated with ranked calculator suggestions"
            width={1600}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="space-y-4 text-ink/80 leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-ink">1. Open for information, not heroics</h2>
          <p>
            Your first guess should test frequent letters in useful positions. Words in the{" "}
            <Link href="/best-wordle-starting-words" className="text-teal-deep underline">
              best starting words
            </Link>{" "}
            set—SLATE, STARE, CRANE, RAISE—do that consistently. A clever rare-letter opener can feel
            clever and still leave you blind on A, E, R, and T.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">2. Make the second guess earn its spot</h2>
          <p>
            If guess one returned mostly gray, do not rearrange the same letters. Introduce new
            high-value consonants and vowels. If you already banked greens, decide whether you need
            more information or can start solving. Our{" "}
            <Link href="/blog/best-second-wordle-guesses" className="text-teal-deep underline">
              second-guess guide
            </Link>{" "}
            covers both paths.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">3. Split the remaining set</h2>
          <p>
            When five to twenty answers remain, the best play often eliminates half the list even if
            it is not the eventual answer. Mentally (or with the calculator) ask: “Which guess
            creates the most distinct outcomes?” That mindset beats alphabetical guessing.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">4. Respect double-letter traps</h2>
          <p>
            Boards with one yellow S still allow words with one or two S letters depending on later
            clues. Enter colors carefully—especially when a letter is both present and position-banned.
            Misreading doubles is a top reason solvers and humans disagree.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">5. Know when to stop probing</h2>
          <p>
            Once two or three words remain and they share structure, switch to solving. Extra probe
            guesses feel smart until you hit guess six with the answer still untested. Use the
            calculator’s shortlist count as a simple trigger: tiny list → finish.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">6. Practice hard mode on purpose</h2>
          <p>
            Hard mode forces clue reuse and punishes lazy probes. Playing it occasionally improves
            discipline even if you usually stay on normal mode. Read the{" "}
            <Link href="/blog/wordle-hard-mode-guide" className="text-teal-deep underline">
              hard mode guide
            </Link>{" "}
            before flipping the toggle in the tool.
          </p>

          <h2 className="font-display text-2xl font-bold text-ink">7. Use helpers as coaches</h2>
          <p>
            A Wordle Calculator is most valuable when you compare its shortlist to your instinct.
            Ask why a ranked word sits on top. That feedback loop improves unaided play over time
            more than copying answers ever will.
          </p>
        </section>

        <p className="mt-10 text-ink/75">
          Next: put today’s clues into the{" "}
          <Link href="/#calculator" className="font-semibold text-teal-deep underline">
            live calculator
          </Link>{" "}
          or browse more guides on the{" "}
          <Link href="/blog" className="font-semibold text-teal-deep underline">
            blog
          </Link>
          .
        </p>
      </article>
    </>
  );
}
