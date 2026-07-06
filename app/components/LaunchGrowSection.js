// components/LaunchGrowSection.jsx
"use client";

import Link from "next/link";
import { Check, Megaphone, Printer, Globe, Languages, BadgeDollarSign, Users } from "lucide-react";

const cards = [
  {
    title: "Targeted Book Marketing",
    desc:
      "Smart, stress-free promotion that helps you reach more readers and sell more books — automatically.",
    icon: Megaphone,
    bullets: ["AI-Powered Ad Campaigns", "Works on Amazon, Meta & More", "Real-Time Budget Optimization"],
    href: "/services/book-marketing",
  },
  {
    title: "Premium Book Printing",
    desc:
      "From single copy to bulk runs — premium print, fast turnaround, and formats for every kind of author.",
    icon: Printer,
    bullets: ["Hardcover & Paperback Options", "Print-on-Demand or Bulk", "Nationwide Printing & Distribution"],
    href: "/services/book-printing",
  },
  {
    title: "Global Book Distribution",
    desc:
      "Global reach made simple. Professional, multi-format distribution backed by full expert support.",
    icon: Globe,
    bullets: ["100+ Retailer & Library Channels", "eBook, Print & Audio Formats", "Free Professional ISBN"],
    href: "/services/global-distribution",
  },
  {
    title: "Book Translation",
    desc:
      "Break language barriers with expert translations that preserve your voice and captivate global readers.",
    icon: Languages,
    bullets: ["English, Spanish, French & More", "Literary Experts + Smart AI", "Genre-Savvy Literary Translators"],
    href: "/services/book-translation",
  },
  {
    title: "Royalties Management",
    desc:
      "Track every sale with full transparency and earn 100% of your royalties in your first year.",
    icon: BadgeDollarSign,
    bullets: ["Real-Time Earnings Dashboard", "No Hidden Fees or Deductions", "Get Paid Your Way, Fast"],
    href: "/services/royalties-management",
  },
  {
    title: "Literary Agents",
    desc:
      "Get expert representation to unlock new opportunities — book deals, rights sales, and publishing power moves.",
    icon: Users,
    bullets: ["Match With The Right Agent", "Navigate Deals & Contracts", "Maximize Post-Publishing Reach"],
    href: "/services/literary-agents",
  },
];

export default function LaunchGrowSection() {
  return (
    <section className="relative overflow-hidden">
      {/* same soft minty background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 via-white to-white" />
      <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] leading-tight font-semibold text-slate-900">
          Launch and Grow Your Book
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {cards.map((c) => (
            <Card key={c.title} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        rounded-2xl border border-emerald-200/60 bg-white
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

      <h3 className="mt-4 text-[18px] font-semibold text-slate-900">{item.title}</h3>

      <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{item.desc}</p>

      <ul className="mt-5 space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[13px] text-slate-600 leading-snug">
            <Check className="mt-[2px] h-4 w-4 text-[#144d52] flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-700 hover:text-[#144d52] transition"
        >
          Learn more <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
