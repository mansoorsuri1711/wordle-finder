import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogPostSchema from "@/components/BlogPostSchema";
import { BRAND_FEATURE_2, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

const TITLE = "How to Convert Monthly Salary to Hourly";
const DESCRIPTION =
  "Convert monthly salary to an hourly rate: multiply by 12, divide by annual hours, and avoid inaccurate 160-hour shortcuts. Includes worked examples.";
const SLUG = "monthly-salary-to-hourly";
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

export default function MonthlyToHourlyPost() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={PUBLISHED}
        image={`${SITE_ORIGIN}${BRAND_FEATURE_2}`}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Monthly salary to hourly" },
        ]}
      />
      <article className="container mx-auto max-w-3xl px-4 pb-12 pt-6">
        <p className="mb-3 text-sm text-ink/50">November 3, 2026 · 8 min read</p>
        <h1 className="mb-6 font-display text-3xl font-bold text-ink md:text-4xl">{TITLE}</h1>
        <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-ink/10">
          <Image
            src={BRAND_FEATURE_2}
            alt="Converting monthly salary to an hourly wage online"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Monthly salaries are common on international offers and some U.S. contracts. To compare
            them with hourly jobs, annualize first, then divide by the hours you work each year. Our{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              salary to hourly calculator
            </Link>{" "}
            accepts monthly pay directly so you can skip the manual multiply.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">The reliable method</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong className="text-ink">Annualize:</strong> monthly salary × 12.
            </li>
            <li>
              <strong className="text-ink">Count hours:</strong> hours/week × weeks/year.
            </li>
            <li>
              <strong className="text-ink">Divide:</strong> annual ÷ hours = hourly rate.
            </li>
          </ol>
          <p>
            Example: $5,000/month × 12 = $60,000. At 40×52 hours, $60,000 ÷ 2,080 ≈{" "}
            <strong className="text-ink">$28.85/hour</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Why “divide by 160” is shaky</h2>
          <p>
            Some people divide monthly pay by 160 (40 hours × 4 weeks). That ignores that months are
            not exactly four weeks and that a year has about 52.14 weeks—not 48. Over a full year the
            shortcut drifts. Prefer ×12 then ÷ annual hours unless your employer literally pays for
            exactly 160 hours every month.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">More examples</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>$4,000/month → $48,000/year → ≈ $23.08/hour at 40×52</li>
            <li>$6,500/month → $78,000/year → ≈ $37.50/hour at 40×52</li>
            <li>$6,500/month at 30×52 → $78,000 ÷ 1,560 ≈ $50.00/hour</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-ink">Biweekly vs monthly confusion</h2>
          <p>
            Biweekly pay (26 checks) is not the same as semi-monthly (24 checks) or calendar monthly
            (12). If your “monthly” number is actually an average of biweekly checks, confirm the
            source before converting. The calculator’s monthly output divides annual pay by 12 for a
            clean comparison.
          </p>

          <h2 className="font-display text-2xl font-semibold text-ink">Next steps</h2>
          <p>
            Enter monthly pay on the homepage tool, review the{" "}
            <Link
              href="/salary-conversion-chart"
              className="text-violet-soft underline hover:no-underline"
            >
              conversion chart
            </Link>
            , or follow the full{" "}
            <Link
              href="/how-to-convert-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              how-to guide
            </Link>
            . Part-time monthly roles belong in our{" "}
            <Link
              href="/blog/part-time-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              part-time conversion article
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
