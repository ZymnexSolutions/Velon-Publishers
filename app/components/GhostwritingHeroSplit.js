// components/sections/GhostwritingHeroFullBg.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function GhostwritingHeroFullBg() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/servicesbanner.webp"
          alt="Ghostwriting Services"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#182A42]/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Spacer left (keeps text on right like screenshot) */}
          <div className="hidden md:col-span-5 md:block" />

          {/* Right Content */}
          <div className="md:col-span-7 text-white">
            <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-wide md:text-4xl">
             Turn Your Manuscript Into a Published Success
            </h2>

            <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight text-[#D8BE96] md:text-4xl">
             Expert Publishing Solutions Designed for Serious Authors.

            </h3>

            {/* Accent Line */}
            <div className="mt-6 h-1 w-14 bg-[#D8BE96]" />

            <p className="mt-8 max-w-xl text-base font-medium text-white/90 md:text-lg">
             Everything you need to publish, promote, and prosper.

            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-8 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
              >
                Let&apos;s Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
