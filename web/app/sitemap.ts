import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy", "/terms"];
  const locales = ["en", "es"] as const;

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `https://biosense.dev/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
