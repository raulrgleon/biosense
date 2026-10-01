import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-28">
      <h1 className="text-4xl font-medium">404</h1>
      <p className="mt-4 text-muted">This page is not here.</p>
      <Link href="/" className="mt-8 inline-block text-accent">
        BioSense
      </Link>
    </main>
  );
}
