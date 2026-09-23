import type { MetadataRoute } from "next";

const SITE_URL = "https://www.theprosperityproject.info";

// Every public page, in the order the nav presents them.
const ROUTES = [
  "",
  "/curriculum",
  "/workshops",
  "/programmes",
  "/resources",
  "/stories",
  "/gallery",
  "/reporting",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
