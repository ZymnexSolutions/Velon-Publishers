// components/WhySpinesSection.jsx
"use client";

import Image from "next/image";
import {
  Layers,
  Sparkles,
  HandCoins,
  Rocket,
  BadgeCheck,
  Megaphone,
} from "lucide-react";

export default function WhySpinesSection({
  badgeTextTop = "LOVED BY",
  badgeTextBottom = "2,800+ AUTHORS",
  title = "Why Self-Publish with\nSpines? A Faster, Easier,\nand More Profitable\nExperience",
  items = defaultItems,
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Soft background like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_25%_40%,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Top badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
            <div className="text-center leading-tight">
              <div className="text-[10px] tracking-[0.18em] font-semibold text-slate-500">
                {badgeTextTop}
              </div>
              <div className="text-[13px] font-semibold text-slate-700">
                {badgeTextBottom}
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            {/* Rating logos (replace paths with your own) */}
            <div className="flex items-center gap-5">
              <RatingLogo
                src="/images/ratings/trustpilot.png"
                alt="Trustpilot"
                label="Excellent"
              />
              <RatingLogo
                src="/images/ratings/google.png"
                alt="Google Reviews"
                label="Excellent"
              />
            </div>
          </div>
        </div>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left big heading */}
          <div className="lg:col-span-4">
            <h2 className="whitespace-pre-line font-sans text-[28px] sm:text-[32px] md:text-[36px] leading-tight font-semibold text-slate-900">
              {title}
            </h2>
          </div>

          {/* Right feature grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {items.map((it) => (
                <Feature key={it.title} item={it} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ item }) {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="text-[14px] font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-2 text-[12.5px] leading-relaxed text-slate-500 whitespace-pre-line">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function RatingLogo({ src, alt, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-5 w-20 sm:w-24">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <div className="text-[11px] font-semibold text-emerald-600">{label}</div>
    </div>
  );
}

const defaultItems = [
  {
    icon: Layers,
    title: "All-in-One Platform for Seamless Self-Publishing",
    desc:
      "Our comprehensive platform covers every stage of publishing – editing,\nformatting, cover design, printing, distribution, and marketing – eliminating\nthe need for costly third-party tools or complex workflows.\n\nManage your entire book project efficiently from one place designed\nspecifically for authors.",
  },
  {
    icon: Sparkles,
    title: "Full Creative & Financial Control",
    desc:
      "You set your book’s content, cover, pricing, and distribution options, fitting\nyour publishing goals into your schedule without pressure or deadlines.\n\nMaintain 100% ownership of your work and royalties, and decide exactly how,\nwhen, and where your book is sold.",
  },
  {
    icon: HandCoins,
    title: "Keep 70% of Your Royalties & Track Sales in Real Time",
    desc:
      "Get your book into the hands of readers worldwide through distribution to\nAmazon, Barnes & Noble, IngramSpark, Apple Books, and over 100 other major\nplatforms.\n\nLeverage our AI-powered marketing tools to amplify your book’s reach and\ngrow your audience with targeted social media, email, and advertising campaigns.",
  },
  {
    icon: Rocket,
    title: "Publish Faster with Our Streamlined Process",
    desc:
      "Bring your book to market within only a month – significantly faster than the\nindustry average.\n\nWhether you opt for a fully DIY route or use our expert editing, design, and\nmarketing services, we work quickly without sacrificing quality, so you start\nbuilding your readership sooner.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Quality, Backed by AI & Human Expertise",
    desc:
      "Every book is enhanced by AI-driven tools for formatting, proofreading, and\nmetadata optimization, combined with hands-on editorial and design support\nfrom industry professionals.\n\nThis hybrid approach ensures your manuscript is not only error-free but\nstylistically polished and market-ready.",
  },
  {
    icon: Megaphone,
    title: "Marketing and Distribution",
    desc:
      "From launch to bestseller, our tools drive your book’s success – promote your\nbook with built-in marketing tools and strategies.",
  },
];
