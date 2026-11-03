import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_TAGLINE } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-ink/10 bg-white pt-8 pb-2 px-4 text-ink md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-ink">{SITE_NAME}</h2>
            <p className="mb-4 text-sm text-ink/65">{SITE_TAGLINE}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-violet-soft underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-ink/70 hover:text-ink hover:underline">Salary to hourly calculator</Link></li>
              <li><Link href="/hourly-to-salary-calculator" className="text-ink/70 hover:text-ink hover:underline">Hourly to salary calculator</Link></li>
              <li><Link href="/salary-conversion-chart" className="text-ink/70 hover:text-ink hover:underline">Salary conversion chart</Link></li>
              <li><Link href="/how-to-convert-salary-to-hourly" className="text-ink/70 hover:text-ink hover:underline">How to convert</Link></li>
              <li><Link href="/features" className="text-ink/70 hover:text-ink hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/salary-vs-hourly-pay" className="text-ink/70 hover:text-ink hover:underline">Salary vs hourly pay</Link></li>
              <li><Link href="/blog/how-many-work-hours-in-a-year" className="text-ink/70 hover:text-ink hover:underline">Work hours in a year</Link></li>
              <li><Link href="/blog/monthly-salary-to-hourly" className="text-ink/70 hover:text-ink hover:underline">Monthly to hourly</Link></li>
              <li><Link href="/blog/part-time-salary-to-hourly" className="text-ink/70 hover:text-ink hover:underline">Part-time conversion</Link></li>
              <li><Link href="/about-us" className="text-ink/70 hover:text-ink hover:underline">About</Link></li>
              <li><Link href="/contact-us" className="text-ink/70 hover:text-ink hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-ink/70 hover:text-ink hover:underline">Privacy</Link></li>
              <li><Link href="/disclaimer" className="text-ink/70 hover:text-ink hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Start free</h2>
            <p className="mb-4 text-sm text-ink/65">
              Convert any salary into an hourly rate with custom hours—right in your browser.
            </p>
            <CtaButton
              href="/#calculator"
              size="sm"
              ariaLabel="Open the free salary to hourly calculator"
              icon="arrow"
            >
              OPEN CALCULATOR
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-4 pb-3 text-center text-sm text-ink/55">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-ink/80">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-ink/40">
            Gross pay estimates only. Not tax, legal, or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
