// components/sections/ReachOutCTA.jsx
"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full bg-[#182A42] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              What’s On Your Mind? Reach Out Let Our Team <br className="hidden md:block" />
              Write a Book for You.
            </h2>

            <p className="mt-4 max-w-2xl text-sm text-white/85 md:text-base">
              We know it looks scary, but you know what’s not so scary? Talking to a real person!
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  // Zopim / livechat hook (optional)
                  if (typeof window !== "undefined") {
                    window?.$zopim?.livechat?.window?.show?.();
                  }
                }}
                className="rounded-md bg-[#D8BE96] px-10 py-3 text-sm font-semibold shadow-md transition hover:opacity-95 text-black"
              >
                Live Chat
              </button>
            </div>
          </div>

          {/* RIGHT BOOKS */}
          <div className="relative lg:col-span-4">
            <div className="relative mx-auto w-full max-w-[320px]">
              {/* Book 1 */}
              <div className="drop-shadow-2xl">
                <Image
                  src="/images/cta-book-1.webp"
                  alt="Book cover"
                  width={400}
                  height={400}
                  className="h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
