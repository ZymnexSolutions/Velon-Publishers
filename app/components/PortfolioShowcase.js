// components/sections/PortfolioShowcase.jsx
"use client";

import Image from "next/image";

export default function PortfolioShowcase() {
  const books = [
    { src: "/images/service-book3.webp", alt: "Book 1" },
    { src: "/images/service-book4.webp", alt: "Book 2" },
    { src: "/images/service-book5.webp", alt: "Book 3" },
    { src: "/images/service-book6.webp", alt: "Book 4" },
    { src: "/images/service-book3.webp", alt: "Book 4" },
    { src: "/images/service-book4.webp", alt: "Book 4" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fff] py-12">
      {/* Giant faded text in background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start">
        <h2 className="select-none text-center text-[64px] font-extrabold tracking-wide text-[#d8be9661] md:text-[120px] lg:text-[150px]">
          Velon Book
        </h2>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-12">
          {books.map((b, idx) => (
            <div
              key={idx}
              className="relative h-[240px] w-[150px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-2"
            >
              <Image
                src={b.src}
                alt={b.alt}
                fill
                className="object-contain"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
