// components/sections/OrderCTASection.jsx
"use client";

import Link from "next/link";

export default function OrderCTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#182A42]">
      {/* faint background image / faces (optional) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "url('/images/cta/cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        {/* Left text */}
        <h2 className="max-w-4xl text-2xl font-extrabold uppercase leading-tight tracking-wide text-[#fff] md:text-3xl">
          TAKE A LEAP OF SUCCESS BY PLACING YOUR WRITING <br className="hidden md:block" />
          ORDER WITH VELON BOOK PUBLISHING
        </h2>

        {/* Right button */}
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-md bg-[#D8BE96] px-10 py-3 text-black text-sm font-semibold shadow-md transition hover:opacity-95 md:w-auto"
        >
          Start Your Project Right Now
        </Link>
      </div>
    </section>
  );
}
