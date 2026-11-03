import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaButton from "@/components/CtaButton";
import { BRAND_LOGO, CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us — Salary to Hourly Calculator",
  description:
    "Learn about Salary to Hourly Calculator on salarytohourlycalculator.io: a free, focused tool for converting salary and hourly pay with honest gross-pay estimates.",
  alternates: { canonical: `${SITE_ORIGIN}/about-us` },
  openGraph: {
    title: "About Us — Salary to Hourly Calculator",
    description: `Independent pay conversion toolkit at ${SITE_DOMAIN}.`,
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
              alt="Salary to Hourly Calculator logo"
              fill
              sizes="160px"
              className="object-contain p-3"
              priority
            />
          </div>
          <div>
            <h1 className="mb-4 font-display text-3xl font-bold text-ink md:text-4xl">
              About {SITE_NAME}
            </h1>
            <p className="text-lg leading-relaxed text-ink/80">
              We build one clear thing: a free{" "}
              <strong className="text-ink">salary to hourly calculator</strong> with the schedule
              controls people actually need. We operate at{" "}
              <strong className="text-ink">{SITE_DOMAIN}</strong>.
            </p>
          </div>
        </div>

        <section className="mb-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Our mission</h2>
          <p>
            Search results for pay conversion are crowded with thin widgets and bank product pages.
            We combine an accurate converter with guides that answer real questions: the 2,080-hour
            year, monthly-to-hourly math, part-time schedules, and salary versus hourly trade-offs.
          </p>
          <p>
            Calculations run in your browser. We do not sell payroll software, promise take-home
            figures, or bury the tool behind a signup wall.
          </p>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">What we publish</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <Link href="/" className="text-violet-soft underline hover:no-underline">
                Salary to hourly calculator
              </Link>{" "}
              with bidirectional modes
            </li>
            <li>
              <Link
                href="/how-to-convert-salary-to-hourly"
                className="text-violet-soft underline hover:no-underline"
              >
                How-to conversion guide
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-violet-soft underline hover:no-underline">
                Educational blog posts
              </Link>{" "}
              tied to live search demand
            </li>
          </ul>
        </section>

        <section className="mb-10 space-y-4 leading-relaxed text-ink/80">
          <h2 className="font-display text-2xl font-semibold text-ink">Contact</h2>
          <p>
            Questions or corrections? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline hover:no-underline">
              {CONTACT_EMAIL}
            </a>{" "}
            or use our{" "}
            <Link href="/contact-us" className="text-violet-soft underline hover:no-underline">
              contact form
            </Link>
            .
          </p>
          <CtaButton href="/#calculator" ariaLabel="Open the salary to hourly calculator">
            Open calculator
          </CtaButton>
        </section>
      </div>
    </>
  );
}
