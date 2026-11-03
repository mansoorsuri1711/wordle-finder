import { SITE_ORIGIN } from "@/lib/siteConfig";

function imageLoc(path: string): string {
  return `${SITE_ORIGIN}${path}`;
}

export type SitemapPage = {
  path: string;
  lastMod: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

const LASTMOD = "2026-11-03";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "Salary to Hourly Calculator logo",
        caption: "Brand mark for salarytohourlycalculator.io",
      },
      {
        loc: imageLoc("/salary-to-hourly-calculator.webp"),
        title: "Salary to hourly calculator",
        caption: "Convert salary to an hourly rate online",
      },
    ],
  },
  {
    path: "/features",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-online.webp"),
        title: "Salary calculator features",
        caption: "Custom hours, weeks, and pay frequencies",
      },
    ],
  },
  {
    path: "/how-to-convert-salary-to-hourly",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-tool.webp"),
        title: "How to convert salary to hourly",
        caption: "Step-by-step salary to hourly formula guide",
      },
    ],
  },
  {
    path: "/hourly-to-salary-calculator",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-online.webp"),
        title: "Hourly to salary calculator",
        caption: "Convert hourly wage to annual salary",
      },
    ],
  },
  {
    path: "/salary-conversion-chart",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-app.webp"),
        title: "Salary conversion chart",
        caption: "Popular annual salary to hourly rate table",
      },
    ],
  },
  {
    path: "/about-us",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "About Salary to Hourly Calculator",
        caption: "Logo on the About page",
      },
    ],
  },
  {
    path: "/blog",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/blog/salary-vs-hourly-pay",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator.webp"),
        title: "Salary vs hourly pay",
        caption: "Compare salaried and hourly compensation",
      },
    ],
  },
  {
    path: "/blog/how-many-work-hours-in-a-year",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-tool.webp"),
        title: "How many work hours in a year",
        caption: "2080-hour work year explained",
      },
    ],
  },
  {
    path: "/blog/monthly-salary-to-hourly",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-online.webp"),
        title: "Monthly salary to hourly",
        caption: "Convert monthly pay to an hourly rate",
      },
    ],
  },
  {
    path: "/blog/part-time-salary-to-hourly",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/salary-to-hourly-calculator-app.webp"),
        title: "Part-time salary to hourly",
        caption: "Convert part-time salaries with custom hours",
      },
    ],
  },
  {
    path: "/contact-us",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/privacy",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
  {
    path: "/disclaimer",
    lastMod: LASTMOD,
    changeFreq: "yearly",
    priority: 0.4,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path}`;
}
