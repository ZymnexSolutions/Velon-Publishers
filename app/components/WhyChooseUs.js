// components/sections/CreativeWritingSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Medal, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#182A42] text-white">
      {/* right color strip */}
      <div className="absolute right-0 top-0 h-full w-2 bg-[#D8BE96]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12">
        {/* LEFT IMAGE COLLAGE */}
        <div className="relative lg:col-span-5">
          {/* dotted pattern */}
          {/* <DotsPattern className="absolute -left-4 top-4 opacity-80" /> */}

          {/* blue shape */}

          {/* top image */}
          {/* <div className="relative z-10 h-[220px] w-[260px] overflow-hidden rounded-md shadow-2xl">
            <Image
              src="/images/creative/top.jpg"
              alt="Creative writing"
              fill
              className="object-cover"
            />
          </div> */}

          {/* center image */}
          <div className=" rounded-md shadow-2xl">
            <Image
              src="/images/new-img/choose-us.webp"
              alt="Creative writing"
              fill
              className="object-cover"
            />
          </div>

          {/* bottom image */}
          {/* <div className="relative z-10 mt-6 ml-8 h-[320px] w-[320px] overflow-hidden rounded-md shadow-2xl">
            <Image
              src="/images/creative/bottom.jpg"
              alt="Creative writing"
              fill
              className="object-cover"
            />
          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-extrabold leading-tight">
            <span className="text-[#D8BE96]">Why Choose</span>{" "}
            <span className="text-white">Us?</span>
          </h2>

          <div className="mt-5 space-y-5 text-sm  text-white/85 text-base">
            <p>
              In the fast-paced world of modern publishing, authors face numerous challenges when it comes to writing and publishing their books. Whether you're an aspiring novelist, a non-fiction author, or someone with a story to tell, Velon Book Publishing is here to offer the ultimate solution for all your book writing needs.
            </p>

            <p>
              We understand that each book is unique, and that's why we offer a wide range of tailored services. Whether you need assistance with ghostwriting, editing, proofreading, cover design, or even self-publishing guidance, we've got you covered. We cater to your specific needs, ensuring that your book receives the exact support it requires.
            </p>

            <p>
              Whether you're writing fiction, non-fiction, memoirs, self-help, romance, fantasy, or any other genre, we have the expertise to assist you. Our team is well-versed in the nuances of various genres, ensuring that your book aligns perfectly with reader expectations.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-10 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
            >
              Let’s Start
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Helper Components ---------------- */

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-extrabold">{value}</div>
        <div className="text-xs text-white/70">{label}</div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-10 w-px bg-white/15 md:block" />;
}

function DotsPattern({ className }) {
  return (
    <svg
      className={className}
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 12 }).map((_, r) =>
        Array.from({ length: 12 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={8 + c * 12}
            cy={8 + r * 12}
            r="1.6"
            fill="#D8BE96"
            opacity="0.9"
          />
        ))
      )}
    </svg>
  );
}
