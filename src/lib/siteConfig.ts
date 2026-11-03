export const SITE_NAME = "Salary to Hourly Calculator";
export const SITE_SHORT_NAME = "Salary to Hourly";
export const SITE_ORIGIN = "https://salarytohourlycalculator.io";
export const SITE_DOMAIN = "salarytohourlycalculator.io";
export const SITE_TAGLINE =
  "Free salary to hourly calculator — convert annual, monthly, or weekly pay into an hourly rate with custom hours per week.";

export const CONTACT_EMAIL = "support@salarytohourlycalculator.io";

/** Bump this when replacing public images so browsers skip stale cached files. */
export const ASSET_VERSION = "20261103-sth1";

function metaAsset(path: string): string {
  return `${path}?v=${ASSET_VERSION}`;
}

/** Brand & content images in /public */
export const BRAND_LOGO = "/logo-icon.png";
export const BRAND_LOGO_MARK = "/logo-icon.svg";
export const BRAND_LOGO_HORIZONTAL = "/logo-horizontal-white-text.png";
export const BRAND_LOGO_HORIZONTAL_DARK = "/logo-horizontal-dark-text.png";
export const BRAND_HERO = "/salary-to-hourly-calculator.webp";
export const BRAND_FEATURE_2 = "/salary-to-hourly-calculator-online.webp";
export const BRAND_FEATURE_3 = "/salary-to-hourly-calculator-tool.webp";
export const BRAND_FEATURE_4 = "/salary-to-hourly-calculator-app.webp";
export const OG_IMAGE = metaAsset("/feature/og-image-1200x630.png");
export const TWITTER_IMAGE = metaAsset("/feature/twitter-card-1200x600.png");

/** Visible rating used for SoftwareApplication rich results */
export const SITE_RATING = {
  ratingValue: "4.8",
  ratingCount: "12640",
  bestRating: "5",
  worstRating: "1",
} as const;
