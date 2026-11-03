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

const LASTMOD = "2026-11-04";

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    lastMod: LASTMOD,
    changeFreq: "daily",
    priority: 1,
    images: [
      {
        loc: imageLoc("/logo-icon.png"),
        title: "Wordle Finder logo",
        caption: "Brand mark for wordlefinder.app",
      },
      {
        loc: imageLoc("/wordle-finder.webp"),
        title: "Wordle Finder",
        caption: "Rank the best next five-letter guess online",
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
        loc: imageLoc("/wordle-finder-online.webp"),
        title: "Wordle Finder features",
        caption: "Clue filtering, ranking, and hard mode",
      },
    ],
  },
  {
    path: "/how-to-use-wordle-finder",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder-tool.webp"),
        title: "How to use Wordle Finder",
        caption: "Step-by-step green yellow gray clue guide",
      },
    ],
  },
  {
    path: "/wordle-solver",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder.webp"),
        title: "Wordle Solver",
        caption: "Filter Wordle answers from your board",
      },
    ],
  },
  {
    path: "/wordle-helper",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder-tool.webp"),
        title: "Wordle Helper",
        caption: "Get Wordle help narrowing remaining guesses",
      },
    ],
  },
  {
    path: "/wordle-finder",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder-online.webp"),
        title: "Wordle Finder",
        caption: "Wordle word finder and answer finder",
      },
    ],
  },
  {
    path: "/5-letter-words-for-wordle",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder-app.webp"),
        title: "5 letter words for Wordle",
        caption: "Five-letter Wordle word lists and solver",
      },
    ],
  },
  {
    path: "/best-wordle-starting-words",
    lastMod: LASTMOD,
    changeFreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: imageLoc("/wordle-finder-app.webp"),
        title: "Best Wordle starting words",
        caption: "Data-backed openers for five-letter Wordle",
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
        title: "About Wordle Finder",
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
    path: "/blog/wordle-strategy-tips",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/wordle-finder.webp"),
        title: "Wordle strategy tips",
        caption: "Practical tips to lower your Wordle average",
      },
    ],
  },
  {
    path: "/blog/how-wordle-colors-work",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/wordle-finder-tool.webp"),
        title: "How Wordle colors work",
        caption: "Green yellow and gray tile rules explained",
      },
    ],
  },
  {
    path: "/blog/wordle-hard-mode-guide",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/wordle-finder-online.webp"),
        title: "Wordle hard mode guide",
        caption: "Hard mode rules and Wordle Finder tips",
      },
    ],
  },
  {
    path: "/blog/best-second-wordle-guesses",
    lastMod: LASTMOD,
    changeFreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: imageLoc("/wordle-finder-app.webp"),
        title: "Best second Wordle guesses",
        caption: "Choose a stronger second guess after your opener",
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
