"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SITE_URL = "https://velonbookpublishing.com";

export default function SeoCanonical() {
  const pathname = usePathname();

  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
    const canonicalHref = `${SITE_URL}${normalizedPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalHref);
  }, [pathname]);

  return null;
}
