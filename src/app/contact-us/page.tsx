import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, SITE_NAME, SITE_ORIGIN } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us — Wordle Calculator",
  description:
    "Contact the Wordle Calculator team for questions, feedback, or corrections about our free Wordle helper tools.",
  alternates: { canonical: `${SITE_ORIGIN}/contact-us` },
  openGraph: {
    title: "Contact Us — Wordle Calculator",
    description: `Reach the ${SITE_NAME} team.`,
    url: `${SITE_ORIGIN}/contact-us`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact-us" }]} />
      <div className="container mx-auto max-w-3xl px-4 pb-10 pt-8">
        <h1 className="mb-3 font-display text-3xl font-bold text-ink md:text-4xl">Contact us</h1>
        <p className="mb-8 text-lg text-ink/80">
          Feature ideas, word-list questions, or guide corrections? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or use the form below.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
