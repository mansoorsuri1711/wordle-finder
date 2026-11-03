import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  BRAND_FEATURE_2,
  BRAND_FEATURE_3,
  BRAND_FEATURE_4,
  BRAND_HERO,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Blog — Wordle Finder Guides",
  description:
    "Wordle Finder guides people search for: strategy tips, green/yellow/gray rules, hard mode, and best second guesses. No filler posts.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Blog — Wordle Finder Guides",
    description: "Practical Wordle articles matched to live search demand.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/wordle-strategy-tips",
    title: "Wordle Strategy Tips That Actually Shorten Your Average",
    excerpt:
      "Open for information, split remaining sets, and know when to stop probing and start solving.",
    date: "November 2026",
    read: "10 min",
    image: BRAND_HERO,
    alt: "Wordle strategy tips with Wordle Finder ranked guesses",
  },
  {
    href: "/blog/how-wordle-colors-work",
    title: "How Wordle Colors Work: Green, Yellow, and Gray Rules",
    excerpt:
      "Exact tile meanings, double-letter traps, and how to enter colors correctly in Wordle Finder.",
    date: "November 2026",
    read: "8 min",
    image: BRAND_FEATURE_3,
    alt: "Wordle green yellow and gray tile meanings explained",
  },
  {
    href: "/blog/wordle-hard-mode-guide",
    title: "Wordle Hard Mode Guide: Rules, Tips, and Finder Use",
    excerpt:
      "What hard mode forces you to reuse, why streaks get harder, and how to keep suggestions legal.",
    date: "November 2026",
    read: "9 min",
    image: BRAND_FEATURE_2,
    alt: "Wordle hard mode guide with constrained guesses",
  },
  {
    href: "/blog/best-second-wordle-guesses",
    title: "Best Second Wordle Guesses After Your Opener",
    excerpt:
      "When to introduce new letters, when to chase greens, and how second guesses pair with openers.",
    date: "November 2026",
    read: "8 min",
    image: BRAND_FEATURE_4,
    alt: "Best second Wordle guesses after the starting word",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          Wordle Finder blog
        </h1>
        <p className="mb-10 text-lg text-ink/80">
          Only topics people search alongside Wordle finders and solvers: strategy, tile colors, hard
          mode, and second guesses. No filler posts.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-colors hover:border-teal/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <article>
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/45">
                    {post.date} · {post.read}
                  </p>
                  <h2 className="font-display text-xl font-bold text-ink group-hover:text-teal-deep">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
