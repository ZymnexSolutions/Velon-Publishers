// components/DidYouKnowSection.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "You can always edit a bad page. You can’t edit a blank page.",
    author: "Jodi Picoult",
    role: "Novelist",
  },
  {
    quote: "The first draft is just you telling yourself the story.",
    author: "Terry Pratchett",
    role: "Author",
  },
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison",
    role: "Writer",
  },
];

const avatarImages = [
  "/images/author-1.jpg",
  "/images/author-2.jpg",
  "/images/author-3.jpg",
  "/images/author-4.jpg",
  "/images/author-1.jpg",
  "/images/author-2.jpg",
  "/images/author-3.jpg",
  "/images/author-4.jpg",
];

const clamp01 = (n) => Math.max(0, Math.min(1, n));
const lerp = (a, b, t) => a + (b - a) * t;

export default function DidYouKnowSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 0 = far, 1 = close
  const [progress, setProgress] = useState(0);

  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const inViewRef = useRef(false);

  const current = testimonials[activeIndex];

  const goNext = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const compute = () => {
      if (!inViewRef.current) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // Map progress based on how close the section center is to viewport center
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      const dist = Math.abs(sectionCenter - viewportCenter);
      const maxDist = vh; // tweak: bigger = slower change

      const p = 1 - clamp01(dist / maxDist);
      setProgress(p);

      rafRef.current = requestAnimationFrame(compute);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        inViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(compute);
        } else {
          cancelAnimationFrame(rafRef.current);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "200px 0px 200px 0px", // start a bit before it enters
      }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full max-w-5xl mx-auto my-10">
      <FloatingAvatars progress={progress} />

      <div className="relative mx-auto max-w-3xl rounded-[32px] bg-white shadow-xl shadow-slate-200 px-8 sm:px-12 py-10 sm:py-12 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 text-[#144d52]">
          Did you know
        </p>

        <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold text-slate-900 leading-snug mb-4">
          9 Out of 10 Fully Written Books
          <br className="hidden sm:block" /> Never Get Published
        </h2>

        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-6">
          This is because the publishing process is full of barriers: overcomplicated,
          time-consuming, and out of reach for most writers. Frustrated and stuck, many
          give up before they even get the chance.
        </p>

        <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mb-10">
          Founded by authors and writers themselves,{" "}
          <span className="font-semibold text-slate-900">Spines</span> understands the
          many challenges authors face, and aims to{" "}
          <span className="font-semibold text-slate-900">democratize publishing</span>{" "}
          for writers everywhere.
        </p>

        <div className="mt-2 flex items-center justify-between gap-4">
          <button
            onClick={goPrev}
            aria-label="Previous quote"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 transition"
          >
            <span className="-translate-x-px text-sm">‹</span>
          </button>

          <div className="flex-1 text-center px-2">
            <p className="text-[15px] sm:text-base italic text-sky-900 leading-relaxed mb-4">
              “{current.quote}”
            </p>

            <div className="flex flex-col items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                <Image src="/images/author-1.jpg" alt={current.author} fill className="object-cover" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-slate-900">{current.author}</p>
                {current.role && <p className="text-slate-500">{current.role}</p>}
              </div>
            </div>
          </div>

          <button
            onClick={goNext}
            aria-label="Next quote"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-100 transition"
          >
            <span className="translate-x-px text-sm">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function FloatingAvatars({ progress }) {
  // IMPORTANT:
  // pointer-events-none so these absolute elements don't block scrolling/hover
  // z-0 so card stays on top (card is relative, so it will naturally overlay)
  const wrapper = "pointer-events-none absolute inset-0 hidden lg:block z-0";
  const base =
    "absolute h-16 w-16 rounded-2xl overflow-hidden bg-slate-200 shadow-md will-change-transform transition-transform duration-75";

  // Progress: 0 (far) -> 1 (close)
  const pull = (fromX, fromY, scaleFrom = 1) => {
    const x = lerp(fromX, 0, progress);
    const y = lerp(fromY, 0, progress);
    const s = lerp(scaleFrom, 1, progress);
    return { transform: `translate(${x}px, ${y}px) scale(${s})` };
  };

  // These are the "starting offsets" that will collapse to 0 as you scroll near center
  const left = {
    a: { className: "-left-20 top-0", style: pull(-30, -10, 0.95) },
    b: { className: "-left-10 top-[9.5rem]", style: pull(-20, 0, 0.95) },
    c: { className: "-left-10 top-[15rem]", style: pull(-15, 10, 0.95) },
    d: { className: "-left-14 bottom-10", style: pull(-10, 15, 0.95) },
  };

  const right = {
    a: { className: "-right-20 top-2", style: pull(30, -10, 0.95) },
    b: { className: "-right-10 top-[9.5rem]", style: pull(20, 0, 0.95) },
    c: { className: "-right-10 top-[15rem]", style: pull(15, 10, 0.95) },
    d: { className: "-right-14 bottom-12", style: pull(10, 15, 0.95) },
  };

  return (
    <div className={wrapper}>
      {/* Left */}
      <div className={`${base} ${left.a.className}`} style={left.a.style}>
        <Image src={avatarImages[0]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${left.b.className}`} style={left.b.style}>
        <Image src={avatarImages[1]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${left.c.className}`} style={left.c.style}>
        <Image src={avatarImages[2]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${left.d.className}`} style={left.d.style}>
        <Image src={avatarImages[3]} alt="" fill className="object-cover" />
      </div>

      {/* Right */}
      <div className={`${base} ${right.a.className}`} style={right.a.style}>
        <Image src={avatarImages[4]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${right.b.className}`} style={right.b.style}>
        <Image src={avatarImages[5]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${right.c.className}`} style={right.c.style}>
        <Image src={avatarImages[6]} alt="" fill className="object-cover" />
      </div>
      <div className={`${base} ${right.d.className}`} style={right.d.style}>
        <Image src={avatarImages[7]} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}
