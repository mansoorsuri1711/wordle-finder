import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { annualToHourly, formatMoney } from "@/lib/salaryMath";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Salary Conversion Chart — Annual to Hourly Rates",
  description:
    "Salary conversion chart with annual salaries converted to hourly rates at 40 and 35 hours per week. Quick reference for offers and budgeting.",
  alternates: { canonical: `${SITE_ORIGIN}/salary-conversion-chart` },
  openGraph: {
    title: "Salary Conversion Chart — Annual to Hourly Rates",
    description: "Popular annual-to-hourly conversions at a glance.",
    url: `${SITE_ORIGIN}/salary-conversion-chart`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const salaries = [
  30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 90000, 100000,
  110000, 120000, 150000,
];

export default function ConversionChartPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Salary conversion chart", href: "/salary-conversion-chart" },
        ]}
      />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
          Salary Conversion Chart
        </h1>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-ink/80">
          Quick annual-to-hourly reference using 52 paid weeks. The 40-hour column matches a standard
          full-time year (2,080 hours). The 35-hour column shows how a shorter week raises the
          equivalent rate. For custom schedules, use the{" "}
          <Link href="/" className="text-violet-soft underline hover:no-underline">
            salary to hourly calculator
          </Link>
          .
        </p>

        <div className="overflow-x-auto rounded-2xl border border-ink/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-deep text-ink/70">
              <tr>
                <th className="px-4 py-3 font-semibold">Annual salary</th>
                <th className="px-4 py-3 font-semibold">Hourly @ 40 hrs/wk</th>
                <th className="px-4 py-3 font-semibold">Hourly @ 35 hrs/wk</th>
                <th className="px-4 py-3 font-semibold">Monthly (÷12)</th>
              </tr>
            </thead>
            <tbody>
              {salaries.map((annual) => (
                <tr key={annual} className="border-t border-ink/10 text-ink/85">
                  <td className="px-4 py-3 font-medium text-ink">
                    {formatMoney(annual, "USD", 0)}
                  </td>
                  <td className="px-4 py-3">{formatMoney(annualToHourly(annual, 40, 52))}</td>
                  <td className="px-4 py-3">{formatMoney(annualToHourly(annual, 35, 52))}</td>
                  <td className="px-4 py-3">{formatMoney(annual / 12)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">How to read this chart</h2>
          <p>
            Every hourly figure assumes gross pay and 52 weeks. If you take unpaid time off, divide
            by fewer weeks—or open the calculator and set weeks per year directly. Monthly figures
            simply divide annual salary by 12; they are not adjusted for biweekly payroll calendars.
          </p>
          <p>
            Related reading:{" "}
            <Link
              href="/blog/how-many-work-hours-in-a-year"
              className="text-violet-soft underline hover:no-underline"
            >
              how many work hours are in a year
            </Link>
            ,{" "}
            <Link
              href="/blog/monthly-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              monthly salary to hourly
            </Link>
            , and{" "}
            <Link
              href="/how-to-convert-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              the full conversion guide
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
