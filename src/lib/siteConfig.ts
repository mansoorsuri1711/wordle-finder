export const SITE_NAME = "Wordle Finder";
export const SITE_SHORT_NAME = "Wordle Finder";
export const SITE_ORIGIN = "https://wordlefinder.app";
export const SITE_DOMAIN = "wordlefinder.app";
export const SITE_TAGLINE =
  "Free Wordle Finder — enter green, yellow, and gray clues to filter five-letter words and rank the best next guess instantly.";

export const CONTACT_EMAIL = "support@wordlefinder.app";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261104-wf1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/wordle-finder.webp";
export const BRAND_FEATURE_2 = "/wordle-finder-online.webp";
export const BRAND_FEATURE_3 = "/wordle-finder-tool.webp";
export const BRAND_FEATURE_4 = "/wordle-finder-app.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.8",
  ratingCount: "18420",
  bestRating: "5",
  worstRating: "1",
} as const;
