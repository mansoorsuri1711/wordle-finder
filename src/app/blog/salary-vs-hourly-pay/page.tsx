import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_HERO, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "Salary vs Hourly Pay: Pros, Cons, and How to Compare";
const DESCRIPTION =
  "Compare salary vs hourly pay for overtime, predictability, and effective rates. Learn how to convert both into the same hourly number before you negotiate.";
const SLUG = "salary-vs-hourly-pay";
const PUBLISHED = "2026-11-03";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_ORIGIN}/blog/${SLUG}`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function SalaryVsHourlyPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={PUBLISHED}
        image={`${SITE_ORIGIN}${BRAND_HERO}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Salary vs hourly pay" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <p className="mb-3 text-sm text-ink/50">November 3, 2026 · 11 min read</p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{TITLE}</h1>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_HERO}
            alt="Salary versus hourly pay comparison using a salary to hourly calculator"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Choosing between salaried and hourly work is easier when both options speak the same
            language. A{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              salary to hourly calculator
            </Link>{" "}
            turns annual packages into rates you can place next to posted wages—and the reverse path
            annualizes hourly offers for budgeting.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">What “salary” usually means</h2>
          <p>
            Salaried employees typically receive a fixed annual amount paid on a regular schedule.
            Many salaried roles in the United States are classified as overtime-exempt, which can
            mean longer weeks do not automatically raise the paycheck. The annual figure feels
            stable, but your effective hourly rate falls whenever unpaid overtime rises.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">What “hourly” usually means</h2>
          <p>
            Hourly workers earn a set rate for each hour worked. Schedules can flex, and overtime
            rules may apply depending on classification and local law. Income moves when hours move,
            which is powerful during busy seasons and stressful when shifts disappear.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Pros and cons at a glance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/10 bg-white p-4">
              <h3 className="font-display text-lg font-semibold text-ink">Salary advantages</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Predictable annual pay for planning</li>
                <li>Benefits packages are often stronger</li>
                <li>Easier to quote on applications and loans</li>
              </ul>
            </div>
            <div className="rounded-xl border border-ink/10 bg-white p-4">
              <h3 className="font-display text-lg font-semibold text-ink">Hourly advantages</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Transparent rate math</li>
                <li>Overtime potential when eligible</li>
                <li>Clearer pay for extra shifts</li>
              </ul>
            </div>
          </div>
          <p>
            The trade-offs flip for each structure: salaried roles can hide unpaid hours; hourly
            roles can hide income volatility. Convert both to hourly using the same hours assumption
            before you decide which “looks higher.”
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">How to compare offers fairly</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Pick a shared schedule (for example 40×52 or your real average).</li>
            <li>
              Convert the salaried offer with our{" "}
              <Link
                href="/how-to-convert-salary-to-hourly"
                className="text-violet-soft underline hover:no-underline"
              >
                conversion guide
              </Link>
              .
            </li>
            <li>
              Annualize the hourly offer with the{" "}
              <Link
                href="/hourly-to-salary-calculator"
                className="text-violet-soft underline hover:no-underline"
              >
                hourly to salary calculator
              </Link>
              .
            </li>
            <li>Layer benefits, commute, and expected overtime outside the gross math.</li>
          </ol>

          <h2 className="font-display text-2xl font-semibold text-ink">Effective hourly rate matters</h2>
          <p>
            A $80,000 salary sounds strong until a 50-hour week becomes the norm. $80,000 ÷ (50 × 52)
            ≈ $30.77/hour—noticeably lower than the 40-hour figure of about $38.46. Asking about
            typical hours is part of reading any salaried offer honestly.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Bottom line</h2>
          <p>
            Neither structure wins in every situation. Salary favors predictability; hourly favors
            explicit time tracking. Use schedule-aware conversion so you negotiate numbers, not
            vibes—and keep taxes out of the first pass so gross comparisons stay clean.
          </p>
          <p>
            Next:{" "}
            <Link
              href="/blog/how-many-work-hours-in-a-year"
              className="text-violet-soft underline hover:no-underline"
            >
              how many work hours are in a year
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
