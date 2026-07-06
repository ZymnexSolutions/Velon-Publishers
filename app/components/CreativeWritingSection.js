// components/sections/CreativeWritingSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Medal, Users } from "lucide-react";

export default function CreativeWritingSection({
  title = "Creative Writing",
  suffix = "Services",
  imageSrc = "/images/creative-writing-up.webp",
  description = [
    "Velon Book Publishing houses some of the most talented individuals in the industry, bringing years of relevant experience and creative expertise.",
    "We are known for delivering professional creative writing services for over a decade, with a commitment to client satisfaction and premium-quality drafts.",
    "Crisp language, creative flow, and the right tone of voice are essential when communicating with your audience.",
  ],
  ctaText = "Let's Start",
  ctaHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-[#182A42] text-white">
      {/* right color strip */}
      <div className="absolute right-0 top-0 h-full w-2 bg-[#D8BE96]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12">
        {/* LEFT IMAGE COLLAGE */}
        <div className="relative lg:col-span-5">
          {/* blue shape */}
          {/* center image */}
          <div>
            <Image
              src={imageSrc}
              alt="Creative writing"
              fill
              className="object-cover rounded-[20px] shadow-[0_15px_35px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-extrabold leading-tight">
            <span className="text-[#D8BE96]">{title}</span>{" "}
            <span className="text-white">{suffix}</span>
          </h2>

          <div className="mt-5 space-y-5 text-sm text-white/85">
            {description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6">
            <Stat
              icon={<CalendarDays className="h-6 w-6 text-[#D8BE96]" />}
              value="8+"
              label="Years of Experience"
            />
            <Divider />
            <Stat
              icon={<Medal className="h-6 w-6 text-[#D8BE96]" />}
              value="700+"
              label="Books Written"
            />
            <Divider />
            <Stat
              icon={<Users className="h-6 w-6 text-[#D8BE96]" />}
              value="250+"
              label="American Writers"
            />
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-10 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
            >
              {ctaText}
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
