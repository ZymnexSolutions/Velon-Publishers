"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import FadeIn from "../components/FadeIn";
import SmsConsentCheckbox from "../components/SmsConsentCheckbox";
import { submitLead } from "../lib/submitLead";

const CONTACT_CARDS = [
  {
    title: "Call Us",
    value: "437-889-5252",
    desc: "Speak with our publishing team.",
    icon: Phone,
  },
  {
    title: "Email",
    value: "support@velonbookpublishing.com",
    desc: "info@velonbookpublishing.com",
    icon: Mail,
  },
  {
    title: "Location",
    value: "Chicago, IL",
    desc: "Remote team with nationwide reach.",
    icon: MapPin,
  },
  {
    title: "Project Window",
    value: "2–6 Weeks",
    desc: "Flexible timelines based on scope.",
    icon: Clock,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
    smsConsent: false,
  });
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      await submitLead({
        ...formData,
        source: "Contact Page Form",
        currentPage:
          typeof window !== "undefined" ? window.location.href : "",
        referringPage:
          typeof document !== "undefined" ? document.referrer : "",
      });

      setStatus({
        loading: false,
        success: "Thank you! We have received your message.",
        error: "",
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
        smsConsent: false,
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 text-white">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Let&rsquo;s Build Your Book Together
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">
                Tell us about your idea, and we&rsquo;ll match you with the right
                writing, editing, or publishing expert. We&rsquo;ll guide you
                through every step, from outline to launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#D8BE96] px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-95"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/new-img/Let-build.webp"
                  alt="Contact Velon Book Publishing"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#182A42]/10 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#182A42] text-[#D8BE96]">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-[#0B0F16]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#182A42]">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <section className="bg-[#F7F4EF]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#182A42]">
                  Send a Message
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#0B0F16] md:text-4xl">
                  Tell Us About Your Project
                </h2>
                <p className="mt-4 text-sm text-gray-700 md:text-base">
                  Share your goals, timeline, and genre. We&rsquo;ll connect you
                  with a specialist and outline the best path forward.
                </p>

                <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                      required
                    />
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                      required
                    />
                    <select
                      name="service"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none focus:border-gray-400"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option>Ghost Writing</option>
                      <option>Script Writing</option>
                      <option>Book Editing</option>
                      <option>Book Marketing</option>
                      <option>Book Publishing</option>
                      <option>Memoir Writing</option>
                      <option>Biography Writing</option>
                      <option>Fiction Writing</option>
                      <option>Non Fiction Writing</option>
                      <option>Comic Book Writing</option>
                      <option>Novel Writing</option>
                      <option>Book Proofreading</option>
                      <option>Book Distribution</option>
                      <option>Global Distribution</option>
                    </select>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Project Details"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                    />
                    <SmsConsentCheckbox
                      id="contact-sms-consent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="pt-1"
                      textClassName="text-[11px] text-gray-600"
                    />
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="w-full rounded-xl bg-[#182A42] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      Submit request
                    </button>
                    {status.error ? (
                      <p className="text-sm text-red-600">{status.error}</p>
                    ) : null}
                    {status.success ? (
                      <p className="text-sm text-emerald-700">{status.success}</p>
                    ) : null}
                  </form>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-[#182A42]/10 bg-white shadow-sm">
                  <div className="bg-[#182A42] px-6 py-5 text-white">
                    <h3 className="text-lg font-extrabold">
                      Quick Response Promise
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      We typically reply within 24 hours and can schedule a call
                      the same week.
                    </p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D8BE96]" />
                        Dedicated account manager for your project.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D8BE96]" />
                        Clear milestones, deliverables, and revision cycles.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D8BE96]" />
                        Publishing guidance and marketing support available.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D8BE96]" />
                        NDA-friendly process for sensitive stories.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-[#182A42] p-6 text-white">
                  <h4 className="text-lg font-extrabold">Prefer to Talk?</h4>
                  <p className="mt-2 text-sm text-white/80">
                    Call or email and we will set up a quick discovery call.
                  </p>
                  <div className="mt-4 space-y-2 text-sm font-semibold">
                    <div>USA: 619-866-3707</div>
                    <div>Email: support@velonbookpublishing.com</div>
                    <div>Email: info@velonbookpublishing.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.12}><CTA /></FadeIn>
      <Footer />
    </main>
  );
}
