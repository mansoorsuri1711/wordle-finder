import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import SalaryToHourlyCalculator from "@/components/SalaryToHourlyCalculator";
import { WEB_APPLICATION_JSON_LD } from "@/lib/appFacts";
import { imageObjectLicensing } from "@/lib/schemaImageLicensing";
import { annualToHourly, formatMoney } from "@/lib/salaryMath";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_RATING,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    default: "Salary to Hourly Calculator — Free Pay Rate Converter",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free salary to hourly calculator. Convert annual, monthly, or weekly pay into an hourly wage with custom hours per week. Instant results, no signup.",
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Salary to Hourly Calculator — Free Pay Rate Converter",
    description:
      "Turn any salary into an hourly rate and see daily, weekly, biweekly, and monthly pay in seconds.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Salary to Hourly Calculator — convert salary to hourly rate online",
      },
    ],
  },
};

const faqs = [
  {
    question: "How do I calculate my hourly pay from my salary?",
    answer:
      "Divide your annual salary by the number of hours you work in a year. A common full-time assumption is 40 hours per week × 52 weeks = 2,080 hours. Example: $60,000 ÷ 2,080 = $28.85 per hour. Use our salary to hourly calculator above to adjust hours and weeks for your real schedule.",
  },
  {
    question: "What is my hourly pay if my monthly salary is $6,500?",
    answer:
      "First annualize the monthly salary ($6,500 × 12 = $78,000), then divide by annual hours. At 40 hours × 52 weeks: $78,000 ÷ 2,080 ≈ $37.50 per hour. Change hours per week in the calculator if you work part time.",
  },
  {
    question: "Can I calculate my salary from my hourly pay?",
    answer:
      "Yes. Switch to Hourly → Salary mode or open our hourly to salary calculator. Multiply hourly wage × hours per week × weeks per year. Example: $25 × 40 × 52 = $52,000 per year before taxes.",
  },
  {
    question: "Why do calculators use 2,080 hours?",
    answer:
      "2,080 is the standard U.S. full-time work year: 40 hours × 52 weeks. It does not subtract unpaid leave, holidays, or overtime. If you take two unpaid weeks, use 50 weeks instead (2,000 hours).",
  },
  {
    question: "Does this salary to hourly calculator include taxes?",
    answer:
      "No. Results are gross pay estimates before income tax, FICA, benefits, or other deductions. Use them to compare offers and understand rate math—not as a paycheck preview.",
  },
  {
    question: "How do I convert a part-time salary to an hourly rate?",
    answer:
      "Enter your salary and set hours per week to your actual average (for example 20 or 25). The calculator divides by your real annual hours so the hourly rate reflects part-time schedules accurately.",
  },
  {
    question: "What is the difference between biweekly and semi-monthly pay?",
    answer:
      "Biweekly means every two weeks (26 pay periods per year). Semi-monthly means twice a month (24 pay periods). Our results show both so you can match your employer’s schedule.",
  },
  {
    question: "Is this salary to hourly calculator free?",
    answer:
      "Yes. salarytohourlycalculator.io is free to use in your browser—no account, no download, and no paywall for the core converter.",
  },
  {
    question: "How do I convert a weekly paycheck to an hourly rate?",
    answer:
      "Divide weekly pay by hours worked that week. Example: $1,500 ÷ 40 hours = $37.50 per hour. Enter weekly pay in the calculator and keep your real hours per week set correctly.",
  },
  {
    question: "How do I convert a daily wage to hourly?",
    answer:
      "Divide the day rate by hours in the workday. Example: $120 ÷ 8 hours = $15 per hour. Use the hours-per-day field so daily and hourly figures stay consistent.",
  },
];

const exampleRows = [40000, 50000, 60000, 75000, 80000, 100000].map((annual) => ({
  annual,
  hourly40: annualToHourly(annual, 40, 52),
  hourly35: annualToHourly(annual, 35, 52),
}));

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        description:
          "Free salary to hourly calculator with custom hours per week and full pay-frequency breakdown.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Salary to Hourly Calculator — Free Pay Rate Converter",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${BRAND_HERO}`,
          width: 1600,
          height: 900,
          ...imageObjectLicensing,
        },
      },
      {
        ...WEB_APPLICATION_JSON_LD,
        "@id": `${SITE_ORIGIN}/#software`,
        description:
          "Web salary to hourly calculator that converts annual, monthly, weekly, or hourly pay across custom work schedules.",
      },
      {
        "@type": "HowTo",
        name: "How to convert salary to hourly with this calculator",
        description: "Turn an annual or monthly salary into an hourly wage in four steps.",
        inLanguage: "en-US",
        step: [
          {
            "@type": "HowToStep",
            name: "Enter your pay amount",
            text: "Type your salary or wage and choose the matching pay period (annual, monthly, biweekly, weekly, or daily).",
          },
          {
            "@type": "HowToStep",
            name: "Set your work schedule",
            text: "Adjust hours per week, weeks per year, and hours per day so the math matches your real job—not only a 40×52 default.",
          },
          {
            "@type": "HowToStep",
            name: "Read your hourly rate",
            text: "See the equivalent hourly wage highlighted instantly, with daily through annual totals below it.",
          },
          {
            "@type": "HowToStep",
            name: "Compare the other direction",
            text: "Switch to Hourly → Salary mode when you want to annualize an hourly offer for budgeting or negotiation.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section id="calculator" className="relative overflow-hidden scroll-mt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-glow absolute -left-20 top-0 h-56 w-56 rounded-full bg-violet/25 blur-3xl" />
          <div
            className="hero-glow absolute -right-10 top-16 h-64 w-64 rounded-full bg-emerald/15 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="trust-chip">Free · no signup</span>
              <span className="trust-chip">Before taxes</span>
              <span className="trust-chip">Works both ways</span>
            </div>
            <h1 className="mb-3 font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
              <span className="brand-gradient-text">
                Convert your salary into an hourly rate
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg lg:mx-0">
              Instant pay breakdowns with custom hours and weeks—built for comparing job offers.
            </p>
          </div>

          <SalaryToHourlyCalculator />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span
              className="trust-chip"
              aria-label={`Rating ${SITE_RATING.ratingValue} out of 5`}
            >
              <span className="font-semibold text-gold">{SITE_RATING.ratingValue}</span>
              <span className="tracking-tight text-gold" aria-hidden="true">
                ★★★★★
              </span>
              <span>({Number(SITE_RATING.ratingCount).toLocaleString("en-US")})</span>
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              What a salary to hourly calculator actually answers
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-ink/80">
              A <strong className="text-ink">salary to hourly calculator</strong> turns a fixed
              paycheck into a rate you can compare against hourly jobs, freelance quotes, and
              overtime math. When someone offers $72,000 a year, the useful question is often: what
              is that per hour of real work?
            </p>
            <p className="mb-4 leading-relaxed text-ink/75">
              Most people reach for the classic 2,080-hour year. That works as a baseline, but your
              week might be 37.5 hours, your unpaid leave might cut two weeks, or you might be
              evaluating a 20-hour part-time role. This tool lets you change those inputs so the
              hourly number reflects your schedule—not a generic spreadsheet default.
            </p>
            <p className="leading-relaxed text-ink/75">
              Use it before accepting an offer, when switching from hourly to salaried work, or when
              you want a quick sense of what your time is worth across daily, weekly, and monthly
              views.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_HERO}
              alt="Salary to hourly calculator showing annual salary converted to hourly rate with pay breakdown"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            How the salary to hourly formula works
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            The core formula is simple: <strong className="text-ink">hourly rate = annual
            salary ÷ (hours per week × weeks per year)</strong>. Convert other pay periods to annual
            first, then divide by your yearly hours—or enter them directly in the calculator above.
          </p>

          <div className="mb-6 rounded-xl border border-violet/20 bg-violet/5 p-5 sm:p-6">
            <h3 className="mb-2 font-display text-lg font-semibold text-ink">
              Calculator defaults (you can change them)
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-ink/75">
              <li>
                <strong className="text-ink">40 hours per week</strong> as a standard full-time week
              </li>
              <li>
                <strong className="text-ink">52 weeks per year</strong> for paid calendar weeks
              </li>
              <li>
                <strong className="text-ink">A month = 1/12 of a year</strong> for monthly equivalents
              </li>
              <li>
                Results are <strong className="text-ink">gross and tax-agnostic</strong>—time math,
                not take-home pay
              </li>
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Annual → hourly",
                text: "$50,000 ÷ (40 × 52) = $50,000 ÷ 2,080 ≈ $24.04 per hour.",
              },
              {
                title: "Monthly → hourly",
                text: "($5,000 × 12) ÷ 2,080 = $60,000 ÷ 2,080 ≈ $28.85 per hour.",
              },
              {
                title: "Weekly → hourly",
                text: "$1,500 per week ÷ 40 hours = $37.50 per hour.",
              },
              {
                title: "Daily → hourly",
                text: "$120 per day ÷ 8 hours = $15.00 per hour.",
              },
            ].map((ex) => (
              <div key={ex.title} className="rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="font-display text-lg font-semibold text-ink">{ex.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{ex.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-ink/70">
            Prefer a longer walkthrough? Read the{" "}
            <Link
              href="/how-to-convert-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              how to convert salary to hourly guide
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/salary-conversion-chart"
              className="text-violet-soft underline hover:no-underline"
            >
              salary conversion chart
            </Link>
            .
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            How to use this calculator step by step
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            You do not need a spreadsheet. Enter your numbers above, tune the schedule, and read the
            highlighted hourly result plus the full frequency table.
          </p>
          <ol className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Enter pay amount",
                d: "Use annual, monthly, biweekly, weekly, or daily—whichever matches your offer letter or paycheck.",
              },
              {
                n: "02",
                t: "Set hours and weeks",
                d: "Default is 40 × 52. Drop to 20 hours for part time or 50 weeks if you take unpaid leave.",
              },
              {
                n: "03",
                t: "Check hourly + breakdown",
                d: "Your hourly rate appears first, with daily through annual totals underneath for planning.",
              },
              {
                n: "04",
                t: "Flip the direction",
                d: "Switch to Hourly → Salary when you need an annual figure from an hourly posting.",
              },
            ].map((step) => (
              <li key={step.n} className="border-t border-violet/40 pt-4">
                <span className="font-display text-sm font-bold text-emerald-soft">{step.n}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative order-2 aspect-video overflow-hidden rounded-2xl border border-ink/10 md:order-1">
            <Image
              src={BRAND_FEATURE_2}
              alt="Hourly wage converted to annual salary with full-time and part-time scenarios"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Adjust hours per week and weeks per year
            </h2>
            <p className="mb-4 leading-relaxed text-ink/80">
              A $50,000 salary at 40 hours is about $24.04/hour. The same salary at 30 hours is about
              $32.05/hour because fewer hours spread across the same annual pay. That difference
              matters for part-time roles, compressed schedules, and contractors estimating billable
              time.
            </p>
            <p className="mb-4 leading-relaxed text-ink/75">
              Weeks per year are just as important. Using 50 weeks instead of 52 models two unpaid
              weeks. Using 48 weeks can approximate longer leave. The calculator multiplies your
              chosen hours and weeks so annual hours stay honest.
            </p>
            <p className="leading-relaxed text-ink/75">
              For schedule-focused examples, see{" "}
              <Link
                href="/blog/part-time-salary-to-hourly"
                className="text-violet-soft underline hover:no-underline"
              >
                part-time salary to hourly
              </Link>{" "}
              and{" "}
              <Link
                href="/blog/how-many-work-hours-in-a-year"
                className="text-violet-soft underline hover:no-underline"
              >
                how many work hours are in a year
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Full pay-frequency results explained
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            Once you have an hourly rate, the other frequencies fall out of multiplication. Daily
            uses your hours-per-day setting. Weekly multiplies by hours per week. Biweekly doubles
            the weekly figure. Semi-monthly divides annual pay by 24. Monthly divides by 12.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Daily & weekly",
                text: "Helpful for short contract quotes and comparing shifts when hours vary day to day.",
              },
              {
                title: "Biweekly & semi-monthly",
                text: "Match U.S. payroll calendars so paycheck-sized numbers look familiar before taxes.",
              },
              {
                title: "Monthly & annual",
                text: "Use for budgeting, rent ratios, and side-by-side offer letters written in different formats.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/10 bg-white p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Reverse it: hourly wage to salary
            </h2>
            <p className="mb-4 leading-relaxed text-ink/80">
              Job boards often list hourly rates while your budget lives in annual terms. Multiply
              hourly × hours/week × weeks/year to annualize—or flip the calculator mode and let it
              fill every frequency for you.
            </p>
            <p className="mb-4 leading-relaxed text-ink/75">
              Example: $25/hour × 40 × 52 = $52,000/year. Cut to 20 hours and the same rate becomes
              $26,000/year. That reverse view is why we built a dedicated{" "}
              <Link
                href="/hourly-to-salary-calculator"
                className="text-violet-soft underline hover:no-underline"
              >
                hourly to salary calculator
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10">
            <Image
              src={BRAND_FEATURE_3}
              alt="Salary to hourly calculator tool interface for converting pay both ways"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Salary vs hourly pay at a glance
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            Salaried roles usually trade overtime eligibility for predictable annual pay. Hourly
            roles often track every hour and may include overtime premiums. Converting both to the
            same hourly lens makes the trade-offs clearer before you negotiate.
          </p>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-ink">Salaried</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Steady annual figure, easier long-term budgeting, and benefits packages that are
                often richer—though long weeks can quietly lower your effective hourly rate. Many
                U.S. salaried roles are overtime-exempt under federal rules, so extra hours may not
                raise the paycheck unless the company offers another form of compensation.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-ink">Hourly</h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                Transparent rate math and overtime potential (often time-and-a-half after 40 hours
                when non-exempt)—balanced by income that moves when schedules shrink. Dig deeper in
                our{" "}
                <Link
                  href="/blog/salary-vs-hourly-pay"
                  className="text-violet-soft underline hover:no-underline"
                >
                  salary vs hourly pay
                </Link>{" "}
                guide.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5 sm:p-6">
            <h3 className="mb-2 font-display text-lg font-semibold text-ink">
              Exempt vs non-exempt (quick note)
            </h3>
            <p className="leading-relaxed text-ink/75">
              Classification affects overtime—not the basic salary-to-hourly formula. This calculator
              estimates gross equivalents only. Confirm exempt status, overtime premiums, and local
              labor rules with your employer or a qualified advisor before making decisions.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            What a salary range means when you convert offers
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            Job posts often show a <strong className="text-ink">salary range</strong>—a low, midpoint,
            and maximum the employer can pay for a role. Convert each end of the band to hourly with
            the same hours assumption so you can compare it to hourly postings and contractor rates.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Low end",
                text: "Entry or minimum budgeted pay. Useful as a floor when you model worst-case hourly equivalents.",
              },
              {
                title: "Midpoint",
                text: "Typical target for the role. Convert this figure first when you need a “fair” comparison rate.",
              },
              {
                title: "Maximum",
                text: "Top of the band for experience or scarce skills. Still convert it—headline dollars can hide long weeks.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-ink/70">
            Example: a $70,000–$90,000 range at 40×52 is about $33.65–$43.27 per hour. Plug both ends
            into the calculator above before you negotiate.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Who should use this salary to hourly calculator
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Job seekers",
                text: "Compare a salaried offer against an hourly posting without guessing what “competitive” means.",
                img: BRAND_FEATURE_4,
                alt: "Mobile-friendly salary to hourly calculator for comparing job offers",
              },
              {
                title: "Career switchers",
                text: "Translate contractor day rates, part-time salaries, and full-time packages into one hourly view.",
                img: BRAND_FEATURE_2,
                alt: "Online salary conversion for career planning",
              },
              {
                title: "Managers & HR",
                text: "Explain pay bands quickly when candidates ask what a salary equals per hour.",
                img: BRAND_FEATURE_3,
                alt: "Pay rate conversion tool for managers and HR",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={65}
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Example salary to hourly conversions (40-hour week)
          </h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-ink/80">
            Quick reference using 52 paid weeks. The 35-hour column shows how a shorter week raises
            the equivalent hourly rate for the same annual salary.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-ink/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-deep text-ink/70">
                <tr>
                  <th className="px-4 py-3 font-semibold">Annual salary</th>
                  <th className="px-4 py-3 font-semibold">Hourly @ 40 hrs</th>
                  <th className="px-4 py-3 font-semibold">Hourly @ 35 hrs</th>
                </tr>
              </thead>
              <tbody>
                {exampleRows.map((row) => (
                  <tr key={row.annual} className="border-t border-ink/10 text-ink/85">
                    <td className="px-4 py-3 font-medium text-ink">
                      {formatMoney(row.annual, "USD", 0)}
                    </td>
                    <td className="px-4 py-3">{formatMoney(row.hourly40)}</td>
                    <td className="px-4 py-3">{formatMoney(row.hourly35)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            Need monthly-specific math? See{" "}
            <Link
              href="/blog/monthly-salary-to-hourly"
              className="text-violet-soft underline hover:no-underline"
            >
              monthly salary to hourly
            </Link>
            .
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Tips for job offers and negotiations
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Convert every offer to hourly using the same hours assumption before you compare titles.",
              "Ask whether the salary expects overtime-exempt work that regularly exceeds 40 hours.",
              "Model unpaid leave with fewer weeks so the rate reflects time you will not be paid.",
              "Annualize hourly roles the same way so benefits and schedule differences stay visible.",
              "Remember bonuses and equity are outside this gross converter—treat them separately.",
              "Use the conversion chart when you need a printable reference for common pay bands.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink/80"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Limitations and honest expectations
          </h2>
          <p className="mb-4 max-w-3xl leading-relaxed text-ink/80">
            This salary to hourly calculator estimates <strong className="text-ink">gross</strong>{" "}
            pay. It does not withhold federal or state income tax, Social Security, Medicare,
            retirement contributions, or health premiums. Local labor rules, exempt vs non-exempt
            status, and overtime premiums can change what you actually earn.
          </p>
          <p className="max-w-3xl leading-relaxed text-ink/75">
            Treat results as a planning aid. For payroll-accurate figures, confirm with your
            employer or a qualified tax professional. Read our{" "}
            <Link href="/disclaimer" className="text-violet-soft underline hover:no-underline">
              disclaimer
            </Link>{" "}
            for the full scope statement.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 font-display text-2xl font-bold text-ink md:text-3xl">
            Related guides on salarytohourlycalculator.io
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/how-to-convert-salary-to-hourly",
                title: "How to convert salary to hourly",
                text: "Step-by-step formula with schedule adjustments.",
              },
              {
                href: "/hourly-to-salary-calculator",
                title: "Hourly to salary calculator",
                text: "Annualize any hourly wage for budgeting.",
              },
              {
                href: "/features",
                title: "Calculator features",
                text: "See what this free web tool includes.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-violet/30"
              >
                <h3 className="font-display text-xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-violet/30 bg-gradient-to-br from-violet/20 to-emerald/10 p-6 sm:p-8">
          <h2 className="mb-3 font-display text-2xl font-bold text-ink md:text-3xl">
            Convert your pay on salarytohourlycalculator.io
          </h2>
          <p className="mb-5 max-w-2xl leading-relaxed text-ink/80">
            Enter your salary, set your real hours, and get a clear hourly rate with every common
            pay frequency. Free, private in your browser, and ready whenever an offer lands.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#calculator"
              className="inline-flex rounded-xl bg-violet px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(99,102,241,0.9)] hover:brightness-110"
            >
              Open the calculator
            </Link>
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-ink/20 px-5 py-3 text-sm font-semibold text-ink hover:bg-white"
            >
              Read pay guides
            </Link>
          </div>
        </section>

        <FaqSection
          items={faqs}
          title="Frequently asked questions about salary to hourly conversion"
          includeSchema={false}
        />
      </div>
    </>
  );
}
