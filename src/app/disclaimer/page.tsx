import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${SITE_NAME} at ${SITE_DOMAIN}.`,
  alternates: { canonical: `${SITE_ORIGIN}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer", href: "/disclaimer" },
        ]}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Disclaimer</h1>
        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>Last updated: November 3, 2026</p>
          <p>
            {SITE_NAME} on {SITE_DOMAIN} is an unofficial Wordle helper. It is not affiliated with,
            endorsed by, or sponsored by the New York Times or the official Wordle game.
          </p>
          <p>
            Suggestions depend on the clues you enter and on word lists that may differ slightly
            from any single official dictionary. Always verify a guess against Wordle’s own
            acceptance rules before submitting.
          </p>
          <p>
            Content is provided for entertainment and educational purposes. We do not guarantee
            streaks, scores, or that a ranked word is the unique daily answer.
          </p>
          <p>
            Questions? Contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
