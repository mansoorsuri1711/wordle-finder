import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE_NAME}: gross pay estimates only — not tax, legal, or financial advice.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer", href: "/disclaimer" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>Last updated: November 3, 2026</p>
          <p>
            {SITE_NAME} at {SITE_DOMAIN} provides a free salary to hourly calculator and educational
            articles. We are not a payroll provider, tax advisor, law firm, or employer of record.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Gross estimates only</h2>
          <p>
            Results are pre-tax illustrations based on the hours and weeks you enter. They do not
            include income tax, FICA, state withholdings, benefits deductions, overtime premiums, or
            bonuses unless you model those yourself outside the tool.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">No professional advice</h2>
          <p>
            Content is for general information and planning. It is not tax, legal, accounting, or
            career advice. Confirm offers, classifications (exempt vs non-exempt), and withholdings
            with your employer or a qualified professional.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Accuracy</h2>
          <p>
            We work to keep formulas and guides clear, but content may contain errors or become
            outdated. Use of the site is at your own risk. Questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
