import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CONTACT_EMAIL, SITE_DOMAIN, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME} at ${SITE_DOMAIN}.`,
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-6 font-display text-3xl font-bold text-ink">Privacy policy</h1>
        <div className="space-y-5 text-ink/80 leading-relaxed">
          <p>Last updated: November 3, 2026</p>
          <p>
            {SITE_NAME} (“we”) operates {SITE_DOMAIN}. This policy explains what information we
            handle when you use the salary to hourly calculator and the rest of the site.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Information we collect</h2>
          <p>
            Pay amounts you enter into the calculator are processed in your browser to show results;
            we do not create user accounts for those inputs. If you contact us, we receive the email
            address and message you send. Server logs or analytics may include IP address, browser
            type, and pages visited.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">How we use information</h2>
          <p>
            Contact messages are used to reply to support and feedback. Aggregated analytics help us
            improve performance and content. We do not sell personal data.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Cookies and analytics</h2>
          <p>
            We may use first-party cookies or privacy-respecting measurement tools. You can control
            cookies in your browser settings.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Third parties</h2>
          <p>
            Hosting and infrastructure providers may process technical data needed to deliver the
            site. We do not use your calculator inputs to build marketing profiles.
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Your choices</h2>
          <p>
            You can browse without contacting us. To request deletion of a message you sent, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-soft underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
