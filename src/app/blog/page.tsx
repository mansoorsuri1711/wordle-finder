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
  title: "Blog — Salary to Hourly Guides",
  description:
    "SERP-driven guides: salary vs hourly pay, work hours in a year (2080), monthly salary to hourly, and part-time salary conversion.",
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: "Blog — Salary to Hourly Guides",
    description: "Practical pay conversion articles people actually search for.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const posts = [
  {
    href: "/blog/salary-vs-hourly-pay",
    title: "Salary vs Hourly Pay: Pros, Cons, and How to Compare",
    excerpt:
      "Side-by-side differences, overtime realities, and how to convert both into the same hourly lens.",
    date: "November 2026",
    read: "11 min",
    image: BRAND_HERO,
    alt: "Comparing salary versus hourly pay with a calculator",
  },
  {
    href: "/blog/how-many-work-hours-in-a-year",
    title: "How Many Work Hours Are in a Year? (2080 Explained)",
    excerpt:
      "Why 40×52 = 2,080, when to use 2,000 hours, and how weeks change your hourly rate.",
    date: "November 2026",
    read: "9 min",
    image: BRAND_FEATURE_3,
    alt: "Work hours in a year explained for salary conversion",
  },
  {
    href: "/blog/monthly-salary-to-hourly",
    title: "How to Convert Monthly Salary to Hourly",
    excerpt:
      "Annualize monthly pay, divide by your hours, and avoid the common 160-hour shortcut trap.",
    date: "November 2026",
    read: "8 min",
    image: BRAND_FEATURE_2,
    alt: "Monthly salary converted to hourly wage",
  },
  {
    href: "/blog/part-time-salary-to-hourly",
    title: "Part-Time Salary to Hourly: Custom Hours Guide",
    excerpt:
      "Convert part-time salaries accurately by setting real weekly hours instead of assuming full time.",
    date: "November 2026",
    read: "8 min",
    image: BRAND_FEATURE_4,
    alt: "Part-time salary to hourly conversion examples",
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="container mx-auto max-w-5xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Salary to hourly blog
        </h1>
        <p className="mb-10 text-lg text-ink/80">
          Only topics people search alongside salary-to-hourly conversion: pay structure comparisons,
          the 2080-hour year, monthly math, and part-time schedules. No filler posts.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-colors hover:border-violet/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
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
                  <p className="mb-2 text-xs text-ink/50">
                    {post.date} · {post.read}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-ink group-hover:text-violet">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
