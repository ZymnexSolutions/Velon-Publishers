// components/sections/ServicesGridCards.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  { title: "Ghost Writing", desc: "Fulfilling all your writing needs", href: "/ghost-writing", img: "/images/services/Creative-Writing-Services.webp" },
  { title: "Script Writing", desc: "Scripts that keep audiences hooked", href: "/script-writing", img: "/images/services/Script-Writing-Services.webp" },
  { title: "Book Editing", desc: "Clarity, flow and professional polish", href: "/book-editing", img: "/images/services/Book-Editing-Services.webp" },
  { title: "Book Marketing", desc: "Launch strategy that drives visibility", href: "/book-marketing", img: "/images/services/Book-Marketing-Services.webp" },
  { title: "Book Publishing", desc: "Publish-ready setup and distribution", href: "/book-publishing", img: "/images/services/Book-Publishing-Services.webp" },
  { title: "Memoir Writing", desc: "Turn your life story into a powerful book", href: "/memoir-writing", img: "/images/services/Memoir-Writing-Services.webp" },
  { title: "Biography Writing", desc: "Professional biography with strong narrative", href: "/biography-writing", img: "/images/services/Biography-Writing-Services.webp" },
  { title: "Fiction Writing", desc: "Plot, characters and page-turning pacing", href: "/fiction-writing", img: "/images/services/Fiction-Writing-Services.webp" },
  { title: "Non Fiction Writing", desc: "Authority-driven content that teaches and sells", href: "/non-fiction-writing", img: "/images/services/Non-Fiction-Writing-Services.webp" },
  { title: "Comic Book Writing", desc: "Panel-ready scripts and sharp dialogue", href: "/comic-book-writing", img: "/images/services/Comic-Book%20Writing-Services.webp" },
  { title: "Novel Writing", desc: "Full-length novel writing done right", href: "/novel-writing", img: "/images/services/Novel-Writing-Services.webp" },
  { title: "Book Proofreading", desc: "Final pass for errors and consistency", href: "/book-proofreading", img: "/images/services/Book-Proofreading-Services.webp" },
  { title: "Book Distribution", desc: "Get listed and distributed professionally", href: "/book-distribution", img: "/images/services/Book-Distribution-Services.webp" },
  { title: "Global Distribution", desc: "Expand reach across regions and marketplaces", href: "/global-distribution", img: "/images/services/Global-Distribution-Services.webp" },
];

export default function ServicesGridCards() {
  return (
    <section className="w-full bg-[#182A42] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-wide text-white md:text-5xl">
            Bespoke Publishing Services
          </h2>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8BE96]">
            By Velon Book Publishing
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, href, img }) {
  return (
    <div className="group overflow-hidden bg-white shadow-[0_18px_35px_rgba(0,0,0,0.45)] transition hover:-translate-y-1">
      {/* image */}
      <div className="relative h-[190px] w-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="p-6">
        <h3 className="text-lg font-extrabold uppercase text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{desc}</p>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#182A42] hover:opacity-90"
        >
          View Details
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#182A42]">
            <ArrowRight className="h-4 w-4 text-[#182A42]" />
          </span>
        </Link>
      </div>
    </div>
  );
}
