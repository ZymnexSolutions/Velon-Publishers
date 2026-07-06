const SITE_URL = "https://velonbookpublishing.com";
const LAST_MODIFIED = new Date("2026-06-23");

export const dynamic = "force-static";

const routes = [
  "",
  "about",
  "services",
  "ghost-writing",
  "script-writing",
  "book-editing",
  "book-marketing",
  "book-publishing",
  "memoir-writing",
  "biography-writing",
  "fiction-writing",
  "non-fiction-writing",
  "comic-book-writing",
  "novel-writing",
  "book-proofreading",
  "book-distribution",
  "global-distribution",
  "pricing",
  "testimonial",
  "contact",
  "privacy-policy",
  "terms-and-conditions",
  "cancellation-policy",
  "cookies-policy",
  "text-message-consent-agreement",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: route ? `${SITE_URL}/${route}/` : `${SITE_URL}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.7 : 1,
  }));
}
