import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SalaryToHourlyCalculator from "@/components/SalaryToHourlyCalculator";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "How to Convert Salary to Hourly (Formula + Examples)",
  description:
    "Learn how to convert salary to hourly step by step. Use the annual ÷ (hours × weeks) formula with worked examples for full-time and part-time schedules.",
  alternates: { canonical: `${SITE_ORIGIN}/how-to-convert-salary-to-hourly` },
  openGraph: {
    title: "How to Convert Salary to Hourly (Formula + Examples)",
    description: "Clear formula, worked examples, and a free calculator.",
    url: `${SITE_ORIGIN}/how-to-convert-salary-to-hourly`,
    siteName: SITE_NAME,
    type: "article",
  },
};

const faqs = [
  {
    question: "What is the salary to hourly formula?",
    answer:
      "Hourly rate = annual salary ÷ (hours per week × weeks per year). For a standard U.S. full-time year use 40 × 52 = 2,080 hours.",
  },
  {
    question: "How do I convert monthly salary to hourly?",
    answer:
      "Multiply monthly pay by 12 to get annual salary, then divide by annual hours. Example: $5,000 × 12 = $60,000 ÷ 2,080 ≈ $28.85/hour.",
  },
  {
    question: "Should I use 2,080 or 2,000 hours?",
    answer:
      "2,080 assumes 52 paid weeks. Use 2,000 (40 × 50) if you want to exclude about two unpaid weeks. Match the hours to your real schedule.",
  },
];

export default function HowToConvertPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to convert salary to an hourly rate",
    description: "Convert annual or monthly salary into an hourly wage using hours per week and weeks per year.",
    step: [
      {
        "@type": "HowToStep",
        name: "Start with annual pay",
        text: "If you are paid monthly, multiply by 12. If weekly, multiply by the weeks you are paid each year.",
      },
      {
        "@type": "HowToStep",
        name: "Count annual hours",
        text: "Multiply hours per week by weeks per year. Full time is often 40 × 52 = 2,080.",
      },
      {
        "@type": "HowToStep",
        name: "Divide salary by hours",
        text: "Annual salary ÷ annual hours equals your equivalent hourly rate before taxes.",
      },
      {
        "@type": "HowToStep",
        name: "Verify with the calculator",
        text: "Enter the same inputs in the salary to hourly calculator to confirm daily through annual totals.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "How to convert salary to hourly", href: "/how-to-convert-salary-to-hourly" },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
          How to Convert Salary to an Hourly Rate
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-ink/80">
          Converting salary to hourly is division with intentional schedule inputs. This guide shows
          the formula employers and candidates use most often, then lets you check the math with our
          free{" "}
          <Link href="/" className="text-violet-soft underline hover:no-underline">
            salary to hourly calculator
          </Link>
          .
        </p>

        <SalaryToHourlyCalculator defaultAmount={72000} />

        <section className="mt-12 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">The core formula</h2>
          <p>
            <strong className="text-ink">Hourly rate = Annual salary ÷ (Hours per week × Weeks per year)</strong>
          </p>
          <p>
            The denominator is your annual hours. Change either factor when your job is not a clean
            40×52 schedule—part-time weeks, unpaid leave, or academic calendars all move the hourly
            result.
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Step-by-step conversion</h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong className="text-ink">Annualize the pay.</strong> Monthly × 12, biweekly × 26,
              or weekly × weeks paid.
            </li>
            <li>
              <strong className="text-ink">Estimate annual hours.</strong> Hours/week × weeks/year.
              Document the assumption so comparisons stay fair.
            </li>
            <li>
              <strong className="text-ink">Divide.</strong> Annual pay ÷ annual hours = hourly rate
              (gross).
            </li>
            <li>
              <strong className="text-ink">Cross-check frequencies.</strong> Multiply the hourly rate
              back by hours/day or hours/week to see daily and weekly equivalents.
            </li>
          </ol>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Worked examples</h2>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Annual: $72,000</h3>
            <p className="mt-2">
              40 × 52 = 2,080 hours. $72,000 ÷ 2,080 = <strong className="text-ink">$34.62/hour</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Monthly: $5,000</h3>
            <p className="mt-2">
              ($5,000 × 12) ÷ 2,080 = $60,000 ÷ 2,080 ≈ <strong className="text-ink">$28.85/hour</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Weekly: $1,500</h3>
            <p className="mt-2">
              $1,500 ÷ 40 hours = <strong className="text-ink">$37.50/hour</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Daily: $120</h3>
            <p className="mt-2">
              $120 ÷ 8 hours = <strong className="text-ink">$15.00/hour</strong>.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Part time: $36,000 at 20 hours</h3>
            <p className="mt-2">
              20 × 52 = 1,040 hours. $36,000 ÷ 1,040 = <strong className="text-ink">$34.62/hour</strong>{" "}
              — same rate as a $72,000 full-time role, half the annual hours.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-display text-lg font-semibold text-ink">Unpaid leave: $60,000 with 50 weeks</h3>
            <p className="mt-2">
              40 × 50 = 2,000 hours. $60,000 ÷ 2,000 = <strong className="text-ink">$30.00/hour</strong>,
              slightly higher than the 52-week figure of $28.85.
            </p>
          </div>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Common mistakes</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Dividing monthly pay by 160 without confirming you work 40 hours every week.</li>
            <li>Comparing a 45-hour salaried week to a 40-hour hourly posting without adjusting.</li>
            <li>Treating gross hourly math as take-home pay after taxes.</li>
          </ul>
          <p>
            Need tables for many salaries at once? Open the{" "}
            <Link href="/salary-conversion-chart" className="text-violet-soft underline hover:no-underline">
              salary conversion chart
            </Link>
            . Going the other direction? Use the{" "}
            <Link href="/hourly-to-salary-calculator" className="text-violet-soft underline hover:no-underline">
              hourly to salary calculator
            </Link>
            .
          </p>
        </section>

        <FaqSection items={faqs} title="Conversion FAQs" />
      </div>
    </>
  );
}
