import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import { ORGANIZATION_JSON_LD } from "@/lib/appFacts";
import {
  ASSET_VERSION,
  OG_IMAGE,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_TAGLINE,
  TWITTER_IMAGE,
} from "@/lib/siteConfig";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  adjustFontFallback: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F6F3FF",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Wordle Finder — Free Solver, Helper & Next-Guess Ranker",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  keywords: [
    "wordle finder",
    "wordle word finder",
    "wordle answer finder",
    "wordle solver",
    "wordle helper",
    "wordle help",
    "wordle guesser",
    "5 letter words for wordle",
    "5 letter wordle solver",
    "wordle tips",
    "best wordle starting words",
    "wordle hard mode",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${ASSET_VERSION}`, type: "image/x-icon", sizes: "48x48" },
      { url: `/favicon.svg?v=${ASSET_VERSION}`, type: "image/svg+xml" },
      { url: `/favicon-32x32.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "32x32" },
      { url: `/favicon-16x16.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "16x16" },
      { url: `/android-chrome-192x192.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "192x192" },
      { url: `/android-chrome-512x512.png?v=${ASSET_VERSION}`, type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: `/apple-touch-icon.png?v=${ASSET_VERSION}`, sizes: "180x180" }],
    shortcut: [{ url: `/favicon.ico?v=${ASSET_VERSION}`, type: "image/x-icon" }],
  },
  alternates: {
    canonical: SITE_ORIGIN,
    languages: { "en-US": SITE_ORIGIN, en: SITE_ORIGIN },
  },
  openGraph: {
    title: "Wordle Finder — Free Solver, Helper & Next-Guess Ranker",
    description: SITE_TAGLINE,
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wordle Finder on wordlefinder.app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wordle Finder — Free Solver, Helper & Next-Guess Ranker",
    description: SITE_TAGLINE,
    images: [
      {
        url: TWITTER_IMAGE,
        width: 1200,
        height: 600,
        alt: "Wordle Finder on wordlefinder.app",
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Games",
  classification: "Wordle Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${jakarta.variable}`}
      style={{ backgroundColor: "#F6F3FF", colorScheme: "light" }}
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#F6F3FF" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html,body{background-color:#F6F3FF!important;color-scheme:light}#__next,main{background-color:transparent}",
          }}
        />
        <link rel="icon" href={`/favicon.ico?v=${ASSET_VERSION}`} type="image/x-icon" sizes="48x48" />
        <link rel="icon" href={`/favicon.svg?v=${ASSET_VERSION}`} type="image/svg+xml" />
        <link rel="icon" href={`/favicon-32x32.png?v=${ASSET_VERSION}`} type="image/png" sizes="32x32" />
        <link rel="icon" href={`/favicon-16x16.png?v=${ASSET_VERSION}`} type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href={`/apple-touch-icon.png?v=${ASSET_VERSION}`} sizes="180x180" />
        <Script id="strip-extension-attrs" strategy="beforeInteractive">
          {`(function(){var ATTR="bis_skin_checked";function strip(n){if(!n||n.nodeType!==1)return;if(n.hasAttribute&&n.hasAttribute(ATTR))n.removeAttribute(ATTR);var list=n.querySelectorAll?n.querySelectorAll("["+ATTR+"]"):[];for(var i=0;i<list.length;i++)list[i].removeAttribute(ATTR);}strip(document.documentElement);try{new MutationObserver(function(ms){for(var i=0;i<ms.length;i++){if(ms[i].type==="attributes")strip(ms[i].target);var nodes=ms[i].addedNodes;if(nodes){for(var j=0;j<nodes.length;j++)strip(nodes[j]);}}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:[ATTR]});}catch(e){}})();`}
        </Script>
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json?v=${ASSET_VERSION}';document.head.appendChild(l);})();`}
        </Script>
      </head>
      <body
        className="font-sans antialiased text-ink min-h-screen flex flex-col bg-brand site-atmosphere"
        style={{ backgroundColor: "#F6F3FF" }}
        suppressHydrationWarning
      >
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <DeferredAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
      </body>
    </html>
  );
}
