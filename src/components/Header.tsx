'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { BRAND_LOGO_MARK, SITE_NAME } from '@/lib/siteConfig';

const navLinks = [
  { href: '/', label: 'Finder' },
  { href: '/wordle-solver', label: 'Solver' },
  { href: '/wordle-helper', label: 'Helper' },
  { href: '/5-letter-words-for-wordle', label: '5-letter words' },
  { href: '/best-wordle-starting-words', label: 'Starting words' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/85 py-2.5 px-3 backdrop-blur-xl sm:py-3 sm:px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center gap-3">
        <Link href="/" className="flex items-center min-w-0 group">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 mr-2.5 flex-shrink-0 overflow-hidden rounded-xl ring-1 ring-ink/10 transition group-hover:ring-teal/40">
            <Image
              src={BRAND_LOGO_MARK}
              alt="Wordle Finder logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <span className="truncate font-display text-sm sm:text-base md:text-[1.05rem] font-bold leading-tight text-ink">
            <span className="hidden sm:inline">{SITE_NAME}</span>
            <span className="sm:hidden">Finder</span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative rounded-lg px-2.5 py-1.5 font-medium transition-colors text-sm ${
                isActive(href)
                  ? 'bg-teal/10 font-semibold text-teal-deep'
                  : 'text-ink/65 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/#finder"
            className="inline-flex items-center rounded-xl bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(124,58,237,0.7)] transition hover:bg-teal-deep"
          >
            Open finder
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
