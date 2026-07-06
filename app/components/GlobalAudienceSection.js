"use client";

import Image from "next/image";

export default function GlobalAudienceSection({
  books = [
    "/images/book-mockup.webp",
  ],
  titleTop = "Your Story Deserves",
  titleBottom = "a Global Audience",
  desc = ` With Velon, your book reaches far beyond borders. Gain access to a worldwide network of 100+ publishing and retail platforms across all major markets and formats. More than distribution, it’s strategic exposure that places your book in front of readers everywhere.
`,
  logos = [
    { src: "/images/amazon1-1.webp", alt: "Amazon" },
    { src: "/images/Barnesandnoble1-1.webp", alt: "Barnes & Noble" },
    { src: "/images/image-281-1.webp", alt: "Ingram Content Group" },
    { src: "/images/BakerTaylor1-1.webp", alt: "Baker & Taylor" },
    { src: "/images/image-291-1.webp", alt: "BAM!" },
    // { src: "/images/Adlibris1-2-1.webp", alt: "Adlibris" },
    { src: "/images/logo-apple-books.svg", alt: "Apple Books" },
    { src: "/images/logo-google-books.svg", alt: "Google" },
  ],
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Background (soft mint + lilac like screenshot) */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_30%,rgba(167,139,250,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_40%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Books collage */}
        <div className="flex justify-center">
          <Image src={"/images/book-mockup.webp"} alt="mockup" height={"300"} width={"300"} />
        </div>

        {/* Text */}
        <div className="mt-10 text-center">
          <h2 className=" text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] font-semibold text-slate-900">
            {titleTop}
            <br />
            <span className="font-medium">{titleBottom}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[13px] sm:text-sm leading-relaxed text-slate-500 whitespace-pre-line">
            {desc}
          </p>
        </div>

        {/* Logos */}
        <div className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-85">
            {logos.map((l) => (
              <div key={l.alt} className="relative h-6 w-[110px] sm:h-7 sm:w-[120px]">
                <Image
                  src={l.src}
                  alt={l.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 110px, 120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BooksCollage({ books }) {
  // expects 5-ish images (like screenshot)
  const imgs = books.slice(0, 5);

  return (
    <div className="relative h-[120px] w-full max-w-[520px] sm:h-[140px]">
      {/* center big book */}
      <Book
        src={imgs[2] || imgs[0]}
        className="left-1/2 top-1/2 z-30 h-[120px] w-[88px] -translate-x-1/2 -translate-y-1/2 rotate-[2deg] shadow-[0_24px_50px_rgba(2,6,23,0.20)]"
      />
      {/* left stack */}
      <Book
        src={imgs[1] || imgs[0]}
        className="left-[44%] top-[56%] z-20 h-[100px] w-[74px] -translate-x-1/2 -translate-y-1/2 -rotate-[7deg] opacity-95 shadow-[0_18px_40px_rgba(2,6,23,0.16)]"
      />
      <Book
        src={imgs[0]}
        className="left-[34%] top-[58%] z-10 h-[92px] w-[68px] -translate-x-1/2 -translate-y-1/2 -rotate-[12deg] opacity-90 shadow-[0_16px_36px_rgba(2,6,23,0.14)]"
      />
      {/* right stack */}
      <Book
        src={imgs[3] || imgs[0]}
        className="left-[56%] top-[56%] z-20 h-[98px] w-[72px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] opacity-95 shadow-[0_18px_40px_rgba(2,6,23,0.16)]"
      />
      <Book
        src={imgs[4] || imgs[0]}
        className="left-[68%] top-[58%] z-10 h-[90px] w-[66px] -translate-x-1/2 -translate-y-1/2 rotate-[13deg] opacity-90 shadow-[0_16px_36px_rgba(2,6,23,0.14)]"
      />

      {/* soft glow behind books */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_70%)] blur-xl" />
    </div>
  );
}

function Book({ src, className }) {
  return (
    <div className={`absolute overflow-hidden rounded-[6px] bg-white ${className}`}>
      <Image src={src} alt="" fill className="object-cover" sizes="120px" priority />
    </div>
  );
}
