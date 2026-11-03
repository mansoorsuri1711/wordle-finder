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
              className="text-sm text-teal underline hover:no-underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-ink/70 hover:text-ink hover:underline">Wordle Finder</Link></li>
              <li><Link href="/wordle-solver" className="text-ink/70 hover:text-ink hover:underline">Wordle Solver</Link></li>
              <li><Link href="/wordle-helper" className="text-ink/70 hover:text-ink hover:underline">Wordle Helper</Link></li>
              <li><Link href="/wordle-finder" className="text-ink/70 hover:text-ink hover:underline">Word finder & answers</Link></li>
              <li><Link href="/5-letter-words-for-wordle" className="text-ink/70 hover:text-ink hover:underline">5 letter words for Wordle</Link></li>
              <li><Link href="/best-wordle-starting-words" className="text-ink/70 hover:text-ink hover:underline">Best starting words</Link></li>
              <li><Link href="/how-to-use-wordle-finder" className="text-ink/70 hover:text-ink hover:underline">How to use</Link></li>
              <li><Link href="/features" className="text-ink/70 hover:text-ink hover:underline">Features</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Guides</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/wordle-strategy-tips" className="text-ink/70 hover:text-ink hover:underline">Wordle strategy tips</Link></li>
              <li><Link href="/blog/how-wordle-colors-work" className="text-ink/70 hover:text-ink hover:underline">How Wordle colors work</Link></li>
              <li><Link href="/blog/wordle-hard-mode-guide" className="text-ink/70 hover:text-ink hover:underline">Hard mode guide</Link></li>
              <li><Link href="/blog/best-second-wordle-guesses" className="text-ink/70 hover:text-ink hover:underline">Best second guesses</Link></li>
              <li><Link href="/about-us" className="text-ink/70 hover:text-ink hover:underline">About</Link></li>
              <li><Link href="/contact-us" className="text-ink/70 hover:text-ink hover:underline">Contact</Link></li>
              <li><Link href="/privacy" className="text-ink/70 hover:text-ink hover:underline">Privacy</Link></li>
              <li><Link href="/disclaimer" className="text-ink/70 hover:text-ink hover:underline">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-ink">Play smarter</h2>
            <p className="mb-4 text-sm text-ink/65">
              Filter today&apos;s clues and rank the strongest next guess—free in your browser.
            </p>
            <CtaButton
              href="/#finder"
              size="sm"
              ariaLabel="Open the free Wordle Finder"
              icon="arrow"
            >
              OPEN FINDER
            </CtaButton>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-4 pb-3 text-center text-sm text-ink/55">
          <p className="mb-0">
            © 2026 {SITE_NAME}. All rights reserved. |{' '}
            <Link href="/" className="underline hover:no-underline text-ink/80">{SITE_DOMAIN}</Link>
          </p>
          <p className="mt-2 text-xs text-ink/40">
            Unofficial helper tool. Not affiliated with the New York Times or Wordle.
          </p>
        </div>
      </div>
    </footer>
  );
}
