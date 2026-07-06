"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import BannerLogo from "../components/BannerLogo";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import SmsConsentCheckbox from "../components/SmsConsentCheckbox";

const FIRST_ROW_PACKAGES = [
  {
    name: "Basic Package",
    price: "$700 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Basic Formatting",
          "2 Revisions Per Draft",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Kindle",
          "eBook Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    name: "Start Up Package",
    price: "$2,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "3 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "eBook Format",
          "Paperback Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    name: "Standard Package",
    price: "$3,000 USD",
    featured: true,
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
];

const SECOND_ROW_PACKAGES = [
  {
    name: "Expert Package",
    price: "$7,000 USD",
    paymentPlan: true,
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Online Presence",
        items: [
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    name: "Premium Package",
    price: "$15,000 USD",
    featured: true,
    paymentPlan: true,
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "12 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
          "Organic Google Marketing",
          "Social Media Marketing (Facebook, Instagram & Twitter)",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
  {
    name: "Enterprise Package",
    price: "$25,000 USD",
    paymentPlan: true,
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "Available on Draft2Digital",
          "Available on ACX",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
          "Audiobook Format",
        ],
      },
      {
        title: "24 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "2 - Year Domain & Hosting",
          "60 - 90 Seconds Video Trailer",
          "Organic Google Marketing",
          "Blogs & Article Postings",
          "Press Releases (150+ Platforms)",
          "Social Media Marketing (Facebook, Instagram, Twitter, YouTube, TikTok)",
        ],
      },
      {
        title: "Guarantees",
        items: [
          "No Royalties Share",
          "100% Ownership Rights",
          "100% Satisfaction",
        ],
      },
    ],
  },
];

const COMPARISON_ROWS_1 = [
  { heading: "Preparing Your Manuscript" },
  { feature: "Editorial Support" },
  { feature: "Proofreading" },
  { feature: "Typesetting" },
  { feature: "Layout Adjustment" },
  { feature: "Basic Formatting" },
  { feature: "Publishing Standard Formatting" },
  { feature: "2 Revisions Per Draft" },
  { feature: "3 Revisions Per Draft" },
  { feature: "5 Revisions Per Draft" },
  { heading: "Designing your Cover" },
  { feature: "Graphic OR Illustrated Design" },
  { feature: "Cover Layout" },
  { feature: "Cover Formatting" },
  { feature: "Front, Back & Spine" },
  { feature: "ISBN + Barcode (2X)" },
  { heading: "Book Publishing" },
  { feature: "Account Creation" },
  { feature: "Account Verification" },
  { feature: "Account Optimization" },
  { feature: "Available on Kindle" },
  { feature: "Available on Amazon & Kindle" },
  { feature: "Available on Barnes & Noble" },
  { feature: "eBook Format" },
  { feature: "Paperback Format" },
  { feature: "Hardcover Format" },
  { heading: "Guarantees" },
  { feature: "No Royalties Share" },
  { feature: "100% Ownership Rights" },
  { feature: "100% Satisfaction" },
];

const COMPARISON_ROWS_2 = [
  { heading: "Preparing Your Manuscript" },
  { feature: "Editorial Support" },
  { feature: "Proofreading" },
  { feature: "Typesetting" },
  { feature: "Layout Adjustment" },
  { feature: "Publishing Standard Formatting" },
  { feature: "5 Revisions Per Draft" },
  { heading: "Designing your Cover" },
  { feature: "Graphic OR Illustrated Design" },
  { feature: "Cover Layout" },
  { feature: "Cover Formatting" },
  { feature: "Front, Back & Spine" },
  { feature: "ISBN + Barcode (2X)" },
  { heading: "Book Publishing" },
  { feature: "Account Creation" },
  { feature: "Account Verification" },
  { feature: "Account Optimization" },
  { feature: "Available on Amazon & Kindle" },
  { feature: "Available on Barnes & Noble" },
  { feature: "Available on Google Books" },
  { feature: "Available on Smashwords" },
  { feature: "Available on Draft2Digital" },
  { feature: "Available on ACX" },
  { feature: "eBook Format" },
  { feature: "Paperback Format" },
  { feature: "Hardcover Format" },
  { feature: "Audiobook Format" },
  { heading: "Brand Marketing" },
  { feature: "Logo Design (Complimentary)" },
  { feature: "3 - 5 Page Authors Website" },
  { feature: "1 - Year Domain & Hosting" },
  { feature: "2 - Year Domain & Hosting" },
  { feature: "30 - 60 Seconds Book Trailer" },
  { feature: "60 - 90 Seconds Video Trailer" },
  { feature: "Organic Google Marketing" },
  { feature: "Blogs & Article Postings" },
  { feature: "Press Releases (150+ Platforms)" },
  { feature: "Social Media Marketing (Facebook, Instagram & Twitter)" },
  {
    feature:
      "Social Media Marketing (Facebook, Instagram, Twitter, YouTube, TikTok)",
  },
  { heading: "Guarantees" },
  { feature: "No Royalties Share" },
  { feature: "100% Ownership Rights" },
  { feature: "100% Satisfaction" },
];

const ADDONS = [
  {
    title: "Book Marketing Sprint",
    desc: "Ad creative, launch sequence, and promo calendar.",
  },
  {
    title: "Audiobook Script Prep",
    desc: "Narration-ready edits and production notes.",
  },
  {
    title: "Author Branding Kit",
    desc: "Bio, press kit, and media outreach templates.",
  },
  {
    title: "Series Development",
    desc: "Multi-book outline and continuity planning.",
  },
];

const ALL_PACKAGES = [...FIRST_ROW_PACKAGES, ...SECOND_ROW_PACKAGES];

const hasFeature = (pkg, feature) =>
  pkg.sections.some((section) => section.items.includes(feature));

function PackageCard({ pkg }) {
  return (
    <div className="single-packages relative">
      {pkg.featured && (
        <Image
          src="/images/badge.webp"
          alt="Popular Package"
          className="package-badge"
          width={80}
          height={80}
        />
      )}
      <h4 className="text-2xl font-poppins mb-6 text-center pt-4 pb-4 hover-top-vector relative">
        {pkg.name}
        <br />
        <span>{pkg.price}</span>
      </h4>

      <div className="single-packages-content mb-5 px-10">
        {pkg.sections.map((section) => (
          <div key={section.title}>
            <div className="flex gap-2 mb-5 items-center text-xl">
              {section.title}
            </div>
            {section.items.map((item) => (
              <div key={item} className="flex gap-2 mb-5 items-center">
                <Image
                  src="/images/check-mark.webp"
                  alt=""
                  aria-hidden="true"
                  width={13}
                  height={13}
                  className="icon"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {pkg.paymentPlan && (
        <div className="text-center mb-4">
          <h5 className="font-poppins text-xl flex justify-center items-center gap-2">
            EASY PAYMENT PLAN
            <span className="tooltip">
              <Image
                src="/images/question-icon.webp"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
                className="icon"
              />
              <span className="tooltip-content">
                <ul>
                  <li>50% PAYMENT UPFRONT.</li>
                  <li>REMAINING 50% CAN BE PAID IN 2-3 MONTHS INSTALLMENTS.</li>
                  <li>OR AFTER THE DELIVERY OF 3 CHAPTERS.</li>
                </ul>
              </span>
            </span>
          </h5>
        </div>
      )}

      <div className="single-packages-footer flex w-100 justify-center">
        <div>
          <h5 className="text-xl">Share your idea!</h5>
          <Link href="/contact" className="text-md text-black blink_me">
            Contact Us
          </Link>
        </div>
        <span className="border-line mx-8" />
        <div>
          <h5 className="text-xl">Want to discuss?</h5>
          <Link href="/contact" className="text-md text-black blink_me pl-2">
            Live Chat Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function ComparisonTable({ title, rows, packages, isOpen, onToggle }) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6bd98]">
            Package Comparison
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">{title}</h2>
          <div className="mt-8">
            <button
              type="button"
              onClick={onToggle}
              className="rounded-full border border-[#d6bd98] px-6 py-3 text-sm font-semibold text-[#d6bd98]"
            >
              {isOpen ? "Hide Comparison" : "Compare Packages"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-slate-700">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className="px-6 py-4 text-slate-700">
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  if (row.heading) {
                    return (
                      <tr key={row.heading} className="border-t border-slate-200 bg-slate-50">
                        <th
                          colSpan={packages.length + 1}
                          className="px-6 py-3 text-base font-semibold text-slate-900"
                        >
                          {row.heading}
                        </th>
                      </tr>
                    );
                  }

                  return (
                    <tr key={row.feature} className="border-t border-slate-200">
                      <td className="px-6 py-4 text-slate-700">{row.feature}</td>
                      {packages.map((pkg) => {
                        const included = hasFeature(pkg, row.feature);
                        return (
                          <td key={`${pkg.name}-${row.feature}`} className="px-6 py-4">
                            <span
                              className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                                included
                                  ? "bg-[#d6bd98]/20 text-[#d6bd98]"
                                  : "bg-slate-100 text-slate-400"
                              }`}
                            >
                              {included ? "\u2713" : "\u2014"}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default function PricingPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [comparisonOpen1, setComparisonOpen1] = useState(false);
  const [comparisonOpen2, setComparisonOpen2] = useState(false);
  const [quoteConsent, setQuoteConsent] = useState(false);

  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 text-white">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
                Pricing
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Professional Packages Built Around Your Story
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                Choose the package that fits your goals, then customize with add-ons
                for marketing, publishing, and distribution. Transparent pricing,
                premium quality, and a dedicated team in every tier.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                >
                  Get a Custom Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8BE96] text-black">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">What You Always Get</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>Dedicated account manager</li>
                    <li>Confidentiality and full rights transfer</li>
                    <li>Milestone-based delivery</li>
                    <li>Publishing and distribution guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerLogo />

      <section className="package pb-5 pt-12">
        <div className="container mx-auto max-w-screen-xl">
          <div className="grid items-center grid-cols-1 text-center m1-h">
            <h3 className="text-3xl font-poppins md:text-4xl font-bold">Packages</h3>
          </div>
        </div>
      </section>

      <section className="bg-white pt-5 pb-5">
        <div className="width-container">
          <div className="container mx-auto">
            <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12">
              {FIRST_ROW_PACKAGES.map((pkg) => (
                <PackageCard
                  key={pkg.name}
                  pkg={pkg}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable
        title="Comparison"
        rows={COMPARISON_ROWS_1}
        packages={FIRST_ROW_PACKAGES}
        isOpen={comparisonOpen1}
        onToggle={() => setComparisonOpen1((prev) => !prev)}
      />

      <section className="bg-white pt-5 pb-5">
        <div className="width-container">
          <div className="container mx-auto">
            <div className="packages-wrapper flex flex-col md:flex-row justify-center gap-12 mt-0">
              {SECOND_ROW_PACKAGES.map((pkg) => (
                <PackageCard
                  key={pkg.name}
                  pkg={pkg}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable
        title="Comparison"
        rows={COMPARISON_ROWS_2}
        packages={SECOND_ROW_PACKAGES}
        isOpen={comparisonOpen2}
        onToggle={() => setComparisonOpen2((prev) => !prev)}
      />

      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#182A42]">
                Add-Ons
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0B0F16] md:text-4xl">
                Customize Your Publishing Journey
              </h2>
              <p className="mt-4 text-sm text-gray-700 md:text-base">
                Enhance any package with targeted services designed to expand your
                reach, polish your manuscript, and accelerate your launch.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-[#182A42] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Build a Custom Package
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {ADDONS.map((addon) => (
                <div
                  key={addon.title}
                  className="rounded-2xl border border-[#182A42]/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D8BE96] text-black">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-extrabold text-[#0B0F16]">
                      {addon.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      {quoteOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setQuoteOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
                  Get a Quote
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-[#0B0F16]">
                  Tell Us About Your Project
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setQuoteOpen(false)}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-600"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
              <select
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Package
                </option>
                {ALL_PACKAGES.map((pkg) => (
                  <option key={pkg.name}>{pkg.name}</option>
                ))}
              </select>
              <textarea
                rows={4}
                placeholder="Project Details"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
              />
              <SmsConsentCheckbox
                id="pricing-quote-sms-consent"
                checked={quoteConsent}
                onChange={(event) => setQuoteConsent(event.target.checked)}
                className="pt-1"
                textClassName="text-[11px] text-gray-600"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#182A42] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Submit request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

