"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const ANIMATION = "fade-up";
const DURATION = "700";

const applySectionAnimations = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    if (!section.hasAttribute("data-aos")) {
      section.setAttribute("data-aos", ANIMATION);
    }
    if (!section.hasAttribute("data-aos-duration")) {
      section.setAttribute("data-aos-duration", DURATION);
    }
    if (!section.hasAttribute("data-aos-delay")) {
      section.setAttribute("data-aos-delay", String((index % 4) * 60));
    }
  });
};

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 60,
      duration: 700,
    });
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      applySectionAnimations();
      AOS.refreshHard();
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}
