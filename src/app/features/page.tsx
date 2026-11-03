import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BRAND_FEATURE_2, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Features — Salary to Hourly Calculator Tools",
  description:
    "Explore Salary to Hourly Calculator features: bidirectional conversion, custom hours and weeks, pay-frequency breakdowns, charts, and free educational guides.",
  alternates: { canonical: `${SITE_ORIGIN}/features` },
  openGraph: {
    title: "Features — Salary to Hourly Calculator Tools",
    description: "Everything included in our free pay conversion toolkit.",
    url: `${SITE_ORIGIN}/features`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const features = [
  {
    title: "Salary → hourly and hourly → salary",
    text: "Switch directions in one interface so offer letters and job-board rates share the same math.",
  },
  {
    title: "Custom hours, weeks, and days",
    text: "Model part-time weeks, unpaid leave, and different daily lengths instead of locking to 40×52.",
  },
  {
    title: "Full pay-frequency breakdown",
    text: "See hourly, daily, weekly, biweekly, semi-monthly, monthly, and annual totals together.",
  },
  {
    title: "Conversion chart",
    text: "Scan popular annual salaries and their hourly equivalents without retyping every number.",
  },
  {
    title: "Educational guides",
    text: "Formula walkthroughs, 2080-hour explainers, and salary vs hourly comparisons that rank with real search intent.",
  },
  {
    title: "Private browser math",
    text: "Calculations run on your device. No account wall for the core converter.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-12 pt-6">
        <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
          Salary to Hourly Calculator Features
        </h1>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-ink/80">
          {SITE_NAME} is a focused toolkit for pay conversion—not a generic finance portal. Every
          feature below supports clearer job comparisons and schedule-aware rate math.
        </p>

        <div className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_2}
              alt="Salary to hourly calculator online features with schedule scenarios"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4 leading-relaxed text-ink/80">
            <p>
              Start on the{" "}
              <Link href="/" className="text-violet-soft underline hover:no-underline">
                homepage calculator
              </Link>
              , flip to the{" "}
              <Link
                href="/hourly-to-salary-calculator"
                className="text-violet-soft underline hover:no-underline"
              >
                hourly to salary tool
              </Link>
              , or open the{" "}
              <Link
                href="/salary-conversion-chart"
                className="text-violet-soft underline hover:no-underline"
              >
                conversion chart
              </Link>{" "}
              when you need a printable reference.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-ink/10 bg-white p-5">
              <h2 className="font-display text-xl font-semibold text-ink">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
