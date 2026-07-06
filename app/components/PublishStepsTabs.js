"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const ACCENT = "#D8BE96";

const stepsData = [
    {
        id: 1,
        tabTitle: "Manuscript Submission",
        heading:
            "Start by submitting your completed manuscript to our platform. Our team reviews the content to ensure it meets basic quality and formatting standards.",
        bullets: ["eBooks & Paperbacks", "Full author ownership"],
        image: "/images/0111.jpg",
        imageAlt: "Upload your manuscript mockup",
        qoute: "A smooth submission process helps us prepare your book the right way from day one.",
    },
    {
        id: 2,
        tabTitle: "Editing & Proofreading",
        heading: "Professional editing is essential for a polished book. We offer:",
        bullets: [
            "Grammar and language correction",
            "Structural editing (if needed)",
            "Proofreading for final quality",
        ],
        qoute: "This step ensures your book looks professional and reader-ready.",
        image: "/images/022.jpg",
        imageAlt: "Edit your book mockup",
    },
    {
        id: 3,
        tabTitle: "Book Formatting & Layout",
        heading: "We format your book for:",
        bullets: [
            "Amazon Kindle (eBook)",
            "Paperback & Hardcover",
            "Print-on-Demand platforms",
        ],
        qoute: "Clean layouts improve readability and enhance the reader’s experience.",
        image: "/images/SVG/Formatting.jpg",
        imageAlt: "Cover and layout mockup",
    },
    {
        id: 4,
        tabTitle: "Cover Design",
        heading:
            "Your book cover is the first impression. Our designers create eye-catching covers based on:",
        bullets: ["Your genre", "Market trends", "Your vision as an author"],
        qoute: "A strong cover increases visibility and sales.",
        image: "/images/SVG/Book Cover.jpg",
        imageAlt: "Book cover design mockup",
    },
    {
        id: 5,
        tabTitle: "ISBN & Copyright Assistance",
        heading: "We help authors with:",
        bullets: ["ISBN registration", "Copyright guidance", "Author ownership protection"],
        qoute: "Your book always remains 100% yours.",
        image: "/images/SVG/Isbn and copyright.jpg",
        imageAlt: "ISBN and copyright mockup",
    },
    {
        id: 6,
        tabTitle: "Publishing & Distribution",
        heading:
            "Once everything is finalized, your book is published on major platforms including:",
        bullets: ["Amazon", "Apple Books", "Google Play Books", "Global Print Distribution"],
        qoute: "Your book becomes available worldwide.",
        image: "/images/SVG/Publishing.jpg",
        imageAlt: "Publish and distribute mockup",
    },
];

function IconCheck() {
    return (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D8BE96]/30 bg-[#D8BE96]/10">
            <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke={ACCENT}
                strokeWidth="2"
            >
                <path
                    d="M20 6 9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

export default function PublishStepsTabs() {
    const [active, setActive] = useState(1);

    const activeStep = useMemo(
        () => stepsData.find((s) => s.id === active) ?? stepsData[0],
        [active]
    );

    return (
        <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-[#D8BE96]/40 blur-3xl" />
                <div className="absolute -bottom-24 left-1/3 h-72 w-[900px] -translate-x-1/2 rounded-full bg-[#D8BE96]/20 blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Publish with Velon
                        <br />
                        <span className="font-medium text-slate-800">
                            in Just Six Simple Steps
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                        Velon Proofreads, Designs Covers, Formats, Publishes, and starts
                        distributing your book in just a couple of weeks.
                    </p>
                </div>

                <div className="mt-10 rounded-[28px] border border-white/50 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                    <div className="px-4 pt-6 sm:px-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                            {stepsData.map((s) => {
                                const isActive = s.id === active;

                                return (
                                    <button
                                        key={s.id}
                                        onClick={() => setActive(s.id)}
                                        className={`= relative overflow-hidden rounded-2xl border p-4 text-left outline-none  duration-300 ${isActive
                                            ? "scale-[1.03] border-[#D8BE96]/40 bg-[#182A42] text-white shadow-[0_18px_40px_rgba(24,42,66,0.22)]"
                                            : "border-slate-200 bg-white/70 text-slate-500 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg"
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute left-0 top-0 h-[3px] w-full bg-[#D8BE96]" />
                                        )}

                                        <div
                                            className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-[#D8BE96]" : "text-slate-400"
                                                }`}
                                        >
                                            Step {s.id}
                                        </div>

                                        <div
                                            className={`mt-2 min-h-[44px] text-sm font-semibold leading-5 transition-colors duration-300 ${isActive
                                                ? "text-white"
                                                : "text-slate-700 group-hover:text-slate-900"
                                                }`}
                                        >
                                            {s.tabTitle}
                                        </div>

                                        <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-slate-200/80">
                                            <div
                                                className={`h-full rounded-full  duration-500 ${isActive ? "w-full opacity-100" : "w-0 opacity-0"
                                                    }`}
                                                style={{ backgroundColor: ACCENT }}
                                            />
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid gap-10 px-4 pb-10 pt-8 sm:px-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-[#D8BE96]/30 bg-[#D8BE96]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8C6B3D]">
                                Step {activeStep.id}
                            </div>

                            <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                                {activeStep.tabTitle}
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                                {activeStep.heading}
                            </p>

                            <div className="mt-8 space-y-5">
                                {activeStep.bullets.map((text, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <IconCheck />
                                        <p className="pt-2 text-sm leading-6 text-slate-700 sm:text-base">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {activeStep.qoute && (
                                <div className="mt-8 rounded-2xl border border-[#D8BE96]/25 bg-[#FFF9F1] px-5 py-4">
                                    <p className="text-sm italic leading-6 text-slate-700 sm:text-base">
                                        {activeStep.qoute}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                                <div className="relative aspect-[16/10] w-full">
                                    <Image
                                        src={activeStep.image}
                                        alt={activeStep.imageAlt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}