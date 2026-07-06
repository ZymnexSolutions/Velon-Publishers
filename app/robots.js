export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://velonbookpublishing.com/sitemap.xml",
    host: "https://velonbookpublishing.com",
  };
}
