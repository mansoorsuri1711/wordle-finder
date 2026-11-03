import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Wordle Finder",
  description:
    "About Wordle Finder on wordlefinder.app: a free browser tool that filters five-letter words from green, yellow, and gray clues and ranks stronger next guesses.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us — Wordle Finder",
    description: `Independent Wordle helper toolkit at ${SITE_DOMAIN}.`,
    url: `${SITE_ORIGIN}/about-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about-us" }]} />
      <div className="container mx-auto max-w-4xl px-4 pb-10 pt-8">
        <div className="mb-10 flex flex-col items-start gap-8 md:flex-row">
          <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-ink/10 bg-brand-soft">
            <Image
              src={BRAND_LOGO}
              alt="Wordle Finder logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-ink/80">
              We build one clear thing: a free{" "}
              <strong className="text-ink">Wordle Finder</strong> that turns board colors into a
              ranked shortlist of five-letter guesses. We operate at{" "}
              <strong className="text-ink">{SITE_DOMAIN}</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>
            Wordle is more fun when the mid-game does not feel like a coin flip. Our finder
            applies the same green, yellow, and gray constraints you see on the board, then ranks
            remaining words by letter value so your next try teaches more.
          </p>
          <p>
            We are not affiliated with the New York Times or the official Wordle game. This is an
            independent helper for players who want clearer information—whether they are learning
            strategy or protecting a streak.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">What we publish</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The live{" "}
              <Link href="/" className="text-teal-deep underline">
                Wordle Finder
              </Link>{" "}
              and{" "}
              <Link href="/wordle-solver" className="text-teal-deep underline">
                Wordle Solver
              </Link>
            </li>
            <li>
              Guides on{" "}
              <Link href="/best-wordle-starting-words" className="text-teal-deep underline">
                starting words
              </Link>
              , strategy, hard mode, and color rules
            </li>
            <li>Honest FAQs about solvers, spoiler boundaries, and hard-mode play</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
          <p>
            Questions or corrections? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-deep underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use the{" "}
            <Link href="/contact-us" className="text-teal-deep underline">
              contact page
            </Link>
            .
          </p>
          <div className="pt-2">
            <CtaButton href="/#finder" size="sm">
              OPEN FINDER
            </CtaButton>
          </div>
        </div>
      </div>
    </>
  );
}
