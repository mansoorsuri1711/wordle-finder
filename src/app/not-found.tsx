import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist. Return to Wordle Finder.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-ink">404</h1>
      <p className="mb-8 text-lg text-ink/75">
        That page no longer exists or never did. Head back to the Wordle Finder to keep ranking
        your next guess.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-teal px-5 py-3 text-sm font-bold text-white hover:brightness-110"
      >
        Back to finder
      </Link>
    </div>
  );
}
