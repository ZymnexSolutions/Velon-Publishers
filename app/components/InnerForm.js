'use client'

import React, { useState } from "react"
import { User, Mail, Phone, ArrowRight } from "lucide-react"
import SmsConsentCheckbox from "./SmsConsentCheckbox"
import { submitLead } from "../lib/submitLead"

export default function HelpHeroWithForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        consent: false,
    })
    const [submitState, setSubmitState] = useState({
        loading: false,
        success: "",
        error: "",
    })

    const leftX = 0
    const rightX = 0
    const mockupOpacity = 1

    const handleFieldChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubmitState({ loading: true, success: "", error: "" })

        try {
            const fullName = `${formData.firstName} ${formData.lastName}`.trim()
            await submitLead({
                fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                message: formData.consent
                    ? "User accepted text messages agreement."
                    : "User did not accept text messages agreement.",
                source: "Inner Form",
                currentPage:
                    typeof window !== "undefined" ? window.location.href : "",
                referringPage:
                    typeof document !== "undefined" ? document.referrer : "",
            })

            setSubmitState({
                loading: false,
                success: "Thanks! Your request has been submitted.",
                error: "",
            })
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                consent: false,
            })
        } catch (error) {
            setSubmitState({
                loading: false,
                success: "",
                error: error.message || "Something went wrong. Please try again.",
            })
        }
    }

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Soft background blobs */}
            <div className="absolute inset-0">
                <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-yellow-50 blur-3xl" />
                <div className="absolute right-[-220px] top-[-140px] h-[640px] w-[640px] rounded-full bg-violet-50 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-50 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    {/* LEFT COPY */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-800">
                            Take the First Step. Publish Your Story.

                        </h2>
                        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-500 lg:mx-0">
                            Start your publishing journey with Velon Book Publishing.
                            Our experts provide professional editing, custom cover design, formatting, and global distribution to help turn your manuscript into a published book.

                        </p>

                        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-500 lg:mx-0">
                            Get expert guidance and personalized recommendations for your book — no obligation required.


                        </p>

                        {/* Badges Section */}
                        {(() => {
                            const badges = [
                                { title: "Top eBook Content Writing", logo: "https://pinebookpublishing.com/_next/image?url=%2Fimages%2Fbage2.png&w=256&q=75" },
                                { title: "Literary Excellence in Children Book", logo: "https://pinebookpublishing.com/_next/image?url=%2Fimages%2Fbage13.png&w=256&q=75" },
                                { title: "2023 Book Award Winner: Non-Fiction Book", logo: "https://pinebookpublishing.com/_next/image?url=%2Fimages%2Fbage14.png&w=256&q=75" },
                                { title: "Book Award Gold Winner: Fiction", logo: "https://pinebookpublishing.com/_next/image?url=%2Fimages%2Fbage12.png&w=256&q=75" },
                            ];

                            return (
                                <div className="mt-7 grid w-full max-w-[372px] grid-cols-2 gap-5">
                                    {badges.map((badge) => (
                                        <div
                                            key={badge.title}
                                            className="flex w-full min-h-[110px] flex-col items-center justify-start rounded-xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm"
                                        >
                                            <img
                                                src={badge.logo}
                                                alt={badge.title}
                                                className="h-10 w-10 object-contain"
                                                draggable={false}
                                            />
                                            <p className="mt-2 text-[11px] font-medium leading-snug text-slate-700 sm:text-xs">
                                                {badge.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
                    </div>


                    {/* RIGHT: FORM + 2 MOCKUPS AROUND IT */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* LEFT MOCKUP (behind form) */}
                        <div
                            className="pointer-events-none absolute left-[-50px] top-2/3 hidden -translate-y-1/2 lg:block"
                            style={{
                                transform: `translate(${leftX}px, -50%)`,
                                opacity: mockupOpacity,
                            }}
                        >
                            <img
                                src="/images/only-books-left.webp"
                                alt="Book mockup left"
                                loading="lazy"
                                decoding="async"
                                className="h-[280px] w-auto select-none drop-shadow-xl"
                                draggable={false}
                            />
                        </div>

                        {/* RIGHT MOCKUP (behind form) */}
                        <div
                            className="pointer-events-none absolute right-[-170px] top-2/3 hidden -translate-y-1/2 lg:block"
                            style={{
                                transform: `translate(${rightX}px, -50%)`,
                                opacity: mockupOpacity,
                            }}
                        >
                            <img
                                src="/images/only-books-right.webp"
                                alt="Book mockup right"
                                loading="lazy"
                                decoding="async"
                                className="h-[280px] w-auto select-none drop-shadow-xl"
                                draggable={false}
                            />
                        </div>

                        {/* FORM CARD (front) */}
                        <div className="relative z-10 w-full max-w-[420px] rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                            <div className="p-5 sm:p-6">
                                <h3 className="text-center text-lg sm:text-xl font-semibold text-slate-800">
                                    Join Thousands of Writers Who <br />
                                    Became Published Authors
                                </h3>

                                {/* Testimonial strip */}
                                <div className="mt-4 flex gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-200">
                                        <img
                                            src="/images/erica-marom.webp"
                                            alt="Book mockup right"
                                            loading="lazy"
                                            decoding="async"
                                            className="w-auto select-none drop-shadow-xl"
                                            draggable={false}
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs italic leading-snug text-slate-600">
                                            I’ve wanted to write a book since I was a little girl… and this dream just came true for me
                                        </p>
                                        <p className="mt-1 text-[11px] text-slate-500">
                                            Erica Marom • Author of “Growing Pains”
                                        </p>
                                    </div>
                                </div>

                                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                                    <Field
                                        icon={<User className="h-4 w-4 text-[#D8BE96]" />}
                                        placeholder="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleFieldChange}
                                        required
                                    />
                                    <Field
                                        icon={<User className="h-4 w-4 text-[#D8BE96]" />}
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleFieldChange}
                                        required
                                    />
                                    <Field
                                        icon={<Mail className="h-4 w-4 text-[#D8BE96]" />}
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFieldChange}
                                        required
                                    />

                                    {/* Phone */}
                                    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-300">
                                        <Phone className="h-4 w-4 text-[#D8BE96]" />
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <span>Phone</span>
                                        </div>
                                        <input
                                            name="phoneNumber"
                                            type="tel"
                                            className="ml-auto w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                                            placeholder=""
                                            value={formData.phoneNumber}
                                            onChange={handleFieldChange}
                                            required
                                        />
                                    </div>

                                    <SmsConsentCheckbox
                                        id="inner-form-sms-consent"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleFieldChange}
                                        className="pt-1"
                                        textClassName="text-[11px] text-slate-500"
                                    />

                                    <button
                                        type="submit"
                                        disabled={submitState.loading}
                                        className="group mt-1 w-full rounded-xl bg-[#D8BE96] px-4 py-3 text-left text-sm font-semibold shadow-sm transition text-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="text-left">
                                                <span className="block text-left">Submit request</span>
                                            </div>
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/50 transition group-hover:bg-white/70">
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </button>
                                    {submitState.error ? (
                                        <p className="text-xs text-red-600">{submitState.error}</p>
                                    ) : null}
                                    {submitState.success ? (
                                        <p className="text-xs text-emerald-700">{submitState.success}</p>
                                    ) : null}

                                </form>
                            </div>
                        </div>
                    </div>
                    {/* end right */}
                </div>
            </div>
        </section>
    )
}

function Field({ icon, placeholder, type = "text", name, value, onChange, required }) {
    return (
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-emerald-300">
            <span className="text-emerald-500">{icon}</span>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
        </div>
    )
}
