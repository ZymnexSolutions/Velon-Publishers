
"use client";

import Link from "next/link";
import {
  Check,
  PenLine,
  Sparkles,
  FileEdit,
  BookOpenCheck,
  BadgeCheck,
  Palette,
  ShieldCheck,
  LayoutGrid,
  BookText,
  Headphones,
} from "lucide-react";

const services = [
  {
    title: "Effortless Self-Publishing",
    desc: "Full creative control. Pro results. Everything you need to publish, promote, and sell — without the stress!",
    icon: Sparkles,
    bullets: [
      "All-in-One Publishing Platform",
      "Full Rights Ownership",
      "Fast Turnaround with Professional Quality",
    ],
    href: "/book-publishing",
  },
  {
    title: "Writing Coach",
    desc: "From blank page to breakthrough — personalized coaching to help you plan, write, and finish your book.",
    icon: PenLine,
    bullets: ["1:1 Creative Coaching", "Clarify Your Book Idea", "Plot With Confidence & Flow"],
    href: "/ghost-writing",
  },
  {
    title: "Expert Ghostwriting",
    desc: "Your voice, your story — professionally written and built to publish with confidence and credibility.",
    icon: BadgeCheck,
    bullets: ["Top-Tier Professional Writers", "Transparent, Collaborative Process", "100% Ownership & Authentic Voice"],
    href: "/ghost-writing",
  },
  {
    title: "Book Editing",
    desc: "Stronger sentences, sharper storytelling — expert editing to refine voice, flow, and narrative clarity.",
    icon: FileEdit,
    bullets: ["Expert Editing That Elevates", "Personalized Revision Support", "Developmental & Line Editing"],
    href: "/book-editing",
  },
  {
    title: "Book Cover Design",
    desc: "Turn your story into a scroll-stopping visual that hooks readers before they read a single word.",
    icon: Palette,
    bullets: ["Studio-Quality Custom Covers", "Optimized for All Formats", "Built to Captivate, Designed to Sell"],
    href: "/book-publishing",
  },
  {
    title: "Proofreading & Grammar",
    desc: "Final polish, flawless grammar for clean, error-free, publishing-ready manuscripts.",
    icon: ShieldCheck,
    bullets: ["Hybrid AI + Human Review", "Preserve Your Voice & Style", "Fast, Clear & Stress-Free Edits"],
    href: "/book-proofreading",
  },
  {
    title: "Flawless Book Formatting",
    desc: "Pro-level design. Zero guesswork. Instantly ready for print and eBook platforms.",
    icon: LayoutGrid,
    bullets: ["Print + eBook Ready Layout", "Clean Chapter Styling", "Platform-Compliant Exports"],
    href: "/book-publishing",
  },
  {
    title: "eBook Creation",
    desc: "Flawless formatting, stunning design — your eBook made to look great everywhere.",
    icon: BookText,
    bullets: ["Kindle + EPUB Formats", "Clickable TOC & Links", "Device-Friendly Typography"],
    href: "/book-publishing",
  },
  {
    title: "Audiobook Creation",
    desc: "Bring your story to life with immersive audio production and distribution-ready files.",
    icon: Headphones,
    bullets: ["Professional Narration Options", "Clean Editing + Mastering", "ACX-Ready Delivery"],
    href: "/book-publishing",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-white" />
      <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] leading-tight font-semibold text-slate-900">
          Bring Your Book to Life
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        rounded-2xl border border-slate-200 bg-white
        px-7 py-7
        shadow-[0_1px_0_rgba(15,23,42,0.02)]
        transition
        hover:shadow-[0_18px_40px_rgba(2,6,23,0.08)]
        hover:-translate-y-[2px]
      "
    >
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center ring-1 ring-emerald-100">
          <Icon className="h-5 w-5 text-emerald-600" />
        </div>
      </div>

      <h3 className="mt-4 text-[18px] font-semibold text-slate-900">{service.title}</h3>

      <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{service.desc}</p>

      <ul className="mt-5 space-y-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[13px] text-slate-600 leading-snug">
            <Check className="mt-[2px] h-4 w-4 text-[#144d52] flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={service.href}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-700 hover:text-[#144d52] transition"
        >
          Learn more <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
