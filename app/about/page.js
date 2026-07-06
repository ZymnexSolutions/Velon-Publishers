"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Users,
  BadgeCheck,
  PenLine,
  Globe2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import BannerLogo from "../components/BannerLogo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const STATS = [
  { label: "Books Written", value: "700+" },
  { label: "Expert Writers", value: "250+" },
  { label: "Client Satisfaction", value: "4.9/5" },
  { label: "Years of Experience", value: "10+" },
];

const VALUES = [
  {
    title: "Craft First",
    desc: "We obsess over clarity, pacing, and voice to make every project read like the real you.",
    icon: PenLine,
  },
  {
    title: "Confidential & Secure",
    desc: "Your ideas, drafts, and data remain protected from first call to final delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Collaborative Process",
    desc: "We keep you involved at every milestone with clear feedback loops and revisions.",
    icon: Users,
  },
  {
    title: "Publishing-Ready",
    desc: "From formatting to platform setup, we prepare every book for real-world release.",
    icon: BadgeCheck,
  },
  {
    title: "Global Reach",
    desc: "We help you distribute and market your work across regions and platforms.",
    icon: Globe2,
  },
  {
    title: "Premium Experience",
    desc: "Dedicated project managers, streamlined timelines, and a white-glove feel.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 text-white">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
                About Velon Book Publishing
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Your Story, Crafted with Precision and Purpose
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                We are a full-service publishing partner dedicated to helping
                authors, founders, and creators shape unforgettable books. From
                strategy to storytelling, we build manuscripts that resonate and
                publishing plans that perform.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/new-img/Your-Story-Crafted.webp"
                  alt="Publishing team collaborating"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerLogo />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#5f6673] md:text-4xl">
              Built to Elevate Authors and Ideas
            </h2>
            <p className="mt-4 text-sm text-gray-700 md:text-base">
              Velon Book Publishing was founded on a clear and powerful belief: exceptional stories deserve exceptional execution. What begins as an idea deserves more than just publication, it deserves strategy, craftsmanship, and positioning that commands attention.

            </p>
            <p className="mt-4 text-sm text-gray-700 md:text-base">
              Today, our team of experienced strategists, professional writers, meticulous editors, and publishing specialists works together to transform concepts into refined, market-ready books designed to make a lasting impact. We don’t just help you write a book, we help you build an asset that strengthens your authority, expands your reach, and connects with readers in meaningful ways.

            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#182A42] p-8 text-white">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <h3 className="text-2xl font-extrabold">
              What Makes Us Different
            </h3>
            <ul className="mt-6 space-y-6 text-sm text-white/85">
              <li className="flex items-start gap-4">
                {/* Bullet Point */}
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D8BE96]" />

                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white tracking-wide">
                    Dedicated Project Leadership
                  </span>
                  <p className="leading-relaxed text-white/70">
                    Every project is supported by a committed project manager who ensures
                    clarity, momentum, and seamless communication from start to finish.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D8BE96]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white tracking-wide">
                    Premium, Market-Ready Craftsmanship
                  </span>
                  <p className="leading-relaxed text-white/70">
                    Our writing and editing meet professional industry standards, delivering
                    polished manuscripts built to compete and stand out.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D8BE96]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white tracking-wide">
                    Transparent Timelines & Collaboration
                  </span>
                  <p className="leading-relaxed text-white/70">
                    We maintain clear schedules, defined milestones, and collaborative
                    checkpoints so you’re always informed and involved.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#D8BE96]" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white tracking-wide">
                    Multi-Channel Publishing & Distribution
                  </span>
                  <p className="leading-relaxed text-white/70">
                    From production to placement, we support broad publishing and
                    distribution strategies that position your book across multiple
                    channels and markets.
                  </p>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#182A42]">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0B0F16] md:text-4xl">
              The Principles Behind Every Page
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[#182A42]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#182A42] text-[#D8BE96]">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-[#0B0F16]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
