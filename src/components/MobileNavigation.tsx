'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { BRAND_LOGO_MARK, SITE_SHORT_NAME } from '@/lib/siteConfig';

type NavItem = {
  href: string;
  label: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: 'TOOLS',
    items: [
      { href: '/', label: 'Wordle Calculator' },
      { href: '/wordle-solver', label: 'Wordle Solver' },
      { href: '/wordle-helper', label: 'Wordle Helper' },
      { href: '/wordle-finder', label: 'Wordle Finder' },
      { href: '/5-letter-words-for-wordle', label: '5 letter words' },
      { href: '/best-wordle-starting-words', label: 'Best starting words' },
      { href: '/how-to-use-wordle-calculator', label: 'How to use' },
      { href: '/features', label: 'Features' },
    ],
  },
  {
    title: 'MORE',
    items: [
      { href: '/blog', label: 'Blog' },
      { href: '/about-us', label: 'About' },
      { href: '/contact-us', label: 'Contact' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

function MenuButton({ onClick, isOpen }: { onClick: () => void; isOpen?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-ink/5 xl:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={!!isOpen}
      aria-controls="mobile-nav-panel"
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

export default function MobileNavigation() {
  const { isOpen, setIsOpen } = useMobileMenu();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const panel = isOpen && mounted ? (
    <div
      id="mobile-nav-panel"
      className="fixed inset-0 z-50 xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close menu overlay"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <Image src={BRAND_LOGO_MARK} alt="" width={32} height={32} className="rounded-lg" />
            <span className="font-display text-sm font-bold text-ink">{SITE_SHORT_NAME}</span>
          </div>
          <MenuButton isOpen onClick={() => setIsOpen(false)} />
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {navSections.map((section) => (
            <div key={section.title} className="mb-6">
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-ink/45">{section.title}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${
                        isActive(item.href)
                          ? 'bg-teal/10 text-teal-deep'
                          : 'text-ink/75 hover:bg-ink/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="border-t border-ink/10 p-4">
          <Link
            href="/#calculator"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-teal px-4 py-3 text-sm font-semibold text-white"
          >
            Open calculator
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {mounted && panel ? createPortal(panel, document.body) : null}
    </>
  );
}
