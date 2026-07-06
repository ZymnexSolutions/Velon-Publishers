// components/home/HeroBanner.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#182A42]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#182A42]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center text-white">
        <div className="mx-auto w-full max-w-6xl">
          <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            Premium Publishing Platform
          </span>

          {/* Laptop image */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-[1400px]">
              <Image
                src="/images/Main-Section.webp"
                alt="Dashboard Preview"
                width={1200}
                height={820}
                className="h-auto w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="mt-4 mt-12 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-[#D8BE96] px-8 py-3 font-semibold text-[#182A42] transition-transform hover:scale-105"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white backdrop-blur transition-transform hover:scale-105 hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
