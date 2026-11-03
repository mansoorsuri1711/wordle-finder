import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import SalaryToHourlyCalculator from "@/components/SalaryToHourlyCalculator";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Hourly to Salary Calculator — Annualize Your Wage",
  description:
    "Free hourly to salary calculator. Convert any hourly wage into annual, monthly, biweekly, and weekly pay using your real hours per week.",
  alternates: { canonical: `${SITE_ORIGIN}/hourly-to-salary-calculator` },
  openGraph: {
    title: "Hourly to Salary Calculator — Annualize Your Wage",
    description: "Turn hourly pay into yearly salary with custom schedules.",
    url: `${SITE_ORIGIN}/hourly-to-salary-calculator`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I convert hourly to salary?",
    answer:
      "Multiply hourly wage × hours per week × weeks per year. Example: $25 × 40 × 52 = $52,000 per year before taxes.",
  },
  {
    question: "Does overtime count in hourly to salary math?",
    answer:
      "This calculator uses base hours only. Overtime premiums should be estimated separately because rates and caps vary by role and jurisdiction.",
  },
  {
    question: "What if I work part time?",
    answer:
      "Lower the hours per week field. $25 × 20 × 52 = $26,000 annually—half the full-time total at the same rate.",
  },
];

export default function HourlyToSalaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hourly to salary calculator", href: "/hourly-to-salary-calculator" },
        ]}
      />
      <div className="container mx-auto max-w-4xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
          Hourly to Salary Calculator
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-ink/80">
          Annualize an hourly wage for budgeting, offer comparisons, and rent planning. Set your
          hours and weeks so the yearly figure matches how you actually work—not a generic
          full-time assumption.
        </p>

        <SalaryToHourlyCalculator defaultMode="hourly-to-salary" defaultAmount={25} />

        <section className="mt-12 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why convert hourly pay to salary?
          </h2>
          <p>
            Job posts, gig apps, and retail roles often quote hourly rates while leases, loans, and
            benefits conversations use annual numbers. Multiplying through a consistent schedule
            turns “$28 an hour” into a yearly figure you can place next to a salaried offer.
          </p>
          <p>
            The reverse path—salary to hourly—lives on our{" "}
            <Link href="/" className="text-violet-soft underline hover:no-underline">
              homepage calculator
            </Link>{" "}
            and in the{" "}
            <Link
              href="/how-to-convert-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              conversion guide
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Formula</h2>
          <p>
            <strong className="text-ink">
              Annual salary = Hourly wage × Hours per week × Weeks per year
            </strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>$20 × 40 × 52 = $41,600</li>
            <li>$30 × 40 × 52 = $62,400</li>
            <li>$30 × 20 × 52 = $31,200 (part time)</li>
          </ul>
        </section>

        <section className="mt-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Full time, part time, and unpaid leave
          </h2>
          <p>
            Keep the hourly rate fixed and change only the schedule inputs. That isolates how hours—
            not the posted rate—drive total earnings. For unpaid leave, reduce weeks per year. For
            compressed weeks, raise hours per day while keeping weekly totals accurate.
          </p>
          <p>
            Browse more schedule scenarios in{" "}
            <Link
              href="/blog/part-time-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              part-time salary to hourly
            </Link>{" "}
            and the{" "}
            <Link
              href="/salary-conversion-chart"
              className="text-violet-soft underline hover:no-underline"
            >
              salary conversion chart
            </Link>
            .
          </p>
        </section>

        <FaqSection items={faqs} title="Hourly to salary FAQs" />
      </div>
    </>
  );
}
