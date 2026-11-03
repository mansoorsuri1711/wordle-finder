import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_FEATURE_3, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "How Many Work Hours Are in a Year? (2080 Explained)";
const DESCRIPTION =
  "A full-time work year is often 2,080 hours (40×52). Learn when to use 2,000 hours, how holidays affect the math, and how hours change salary-to-hourly results.";
const SLUG = "how-many-work-hours-in-a-year";
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

export default function WorkHoursPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={PUBLISHED}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_3}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Work hours in a year" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <p className="mb-3 text-sm text-ink/50">November 3, 2026 · 9 min read</p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{TITLE}</h1>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_3}
            alt="Illustration of annual work hours used in salary to hourly conversion"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Almost every{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              salary to hourly calculator
            </Link>{" "}
            starts from the same idea: count the hours in a work year, then divide. The most common
            U.S. full-time figure is <strong className="text-ink">2,080 hours</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Why 2,080?</h2>
          <p>
            40 hours per week × 52 weeks = 2,080 hours. It assumes you are paid for every week of the
            calendar year at a full-time pace. It does not automatically subtract unpaid leave,
            unpaid holidays, or unpaid sick time—those adjustments belong in your weeks or hours
            inputs.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">When people use 2,000 hours</h2>
          <p>
            40 × 50 = 2,000. That shortcut roughly removes two unpaid weeks. Some budgeting guides
            prefer it when vacation is unpaid or when they want a slightly more conservative hourly
            rate from the same salary. Neither number is “more correct” than the other—what matters
            is documenting the assumption.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Other common year counts</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">1,950 hours:</strong> sometimes used for 37.5-hour weeks
              (37.5 × 52).
            </li>
            <li>
              <strong className="text-ink">1,820 hours:</strong> 35 × 52 for shorter standard weeks.
            </li>
            <li>
              <strong className="text-ink">Contract person-years:</strong> government and consulting
              contracts may define a person-year differently—always read the statement of work.
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink">How hours change your hourly rate</h2>
          <p>
            Hold salary fixed at $62,400:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>÷ 2,080 ≈ $30.00/hour</li>
            <li>÷ 2,000 = $31.20/hour</li>
            <li>÷ 1,040 (20×52) = $60.00/hour</li>
          </ul>
          <p>
            Same paycheck, different hour denominators, different stories. That is why our calculator
            exposes weeks and hours instead of hard-coding one constant.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Paid holidays vs unpaid time</h2>
          <p>
            If holidays are paid, keeping 52 weeks is usually fine—you are still compensated for
            those days. If time off is unpaid, reduce weeks or hours so the yearly total matches
            money you actually receive. Mixing paid and unpaid leave without adjusting the
            denominator is the most common conversion mistake.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Put it to work</h2>
          <p>
            Open the{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              calculator
            </Link>
            , set your hours and weeks, and compare results against the{" "}
            <Link
              href="/salary-conversion-chart"
              className="text-violet-soft underline hover:no-underline"
            >
              salary conversion chart
            </Link>
            . For the formula walkthrough, see{" "}
            <Link
              href="/how-to-convert-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              how to convert salary to hourly
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
