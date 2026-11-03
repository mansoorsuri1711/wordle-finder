import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_FEATURE_4, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "Part-Time Salary to Hourly: Custom Hours Guide";
const DESCRIPTION =
  "Convert a part-time salary to an hourly rate using your real weekly hours. See why full-time 2080 assumptions distort part-time pay comparisons.";
const SLUG = "part-time-salary-to-hourly";
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

export default function PartTimePost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={PUBLISHED}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_4}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Part-time salary to hourly" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <p className="mb-3 text-sm text-ink/50">November 3, 2026 · 8 min read</p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{TITLE}</h1>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_4}
            alt="Part-time salary converted to hourly rate with custom weekly hours"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Part-time salaries look small next to full-time packages until you convert them with the
            right hours. Using a 40-hour denominator on a 20-hour role understates the hourly rate
            and makes good part-time offers look worse than they are.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">The part-time formula</h2>
          <p>
            <strong className="text-ink">
              Hourly = Annual part-time salary ÷ (Your hours/week × Weeks/year)
            </strong>
          </p>
          <p>
            Example: $28,000/year at 20 hours × 52 weeks = 1,040 hours. $28,000 ÷ 1,040 ≈{" "}
            <strong className="text-ink">$26.92/hour</strong>. If you wrongly used 2,080 hours, you
            would report $13.46/hour—half the truth.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">
            Use the calculator’s hours field
          </h2>
          <p>
            On{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              salarytohourlycalculator.io
            </Link>
            , enter the salary, set hours per week to your average, and keep weeks at 52 unless
            unpaid leave applies. The highlighted hourly rate and the full frequency table will
            follow your schedule automatically.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Comparing part time to full time</h2>
          <p>
            Convert both roles to hourly with their own hours. A $55,000 full-time job at 40 hours is
            about $26.44/hour. A $30,000 part-time job at 22 hours is about $26.22/hour—nearly the
            same rate despite very different annual totals. Benefits eligibility and schedule
            stability still matter, but the rate comparison is now honest.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Variable part-time weeks</h2>
          <p>
            If hours swing between 15 and 25, use a realistic average for planning, then stress-test
            best and worst weeks separately. For unpaid breaks between seasons, lower weeks per year
            instead of inventing a fake hourly rate.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Related tools</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link
                href="/hourly-to-salary-calculator"
                className="text-violet-soft underline hover:no-underline"
              >
                Hourly to salary calculator
              </Link>{" "}
              for the reverse direction
            </li>
            <li>
              <Link
                href="/blog/how-many-work-hours-in-a-year"
                className="text-violet-soft underline hover:no-underline"
              >
                Work hours in a year
              </Link>{" "}
              for denominator choices
            </li>
            <li>
              <Link
                href="/blog/salary-vs-hourly-pay"
                className="text-violet-soft underline hover:no-underline"
              >
                Salary vs hourly pay
              </Link>{" "}
              for structure trade-offs
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
