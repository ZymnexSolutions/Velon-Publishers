// components/CreativeBanner.jsx
"use client";

import { useState } from "react";
import SmsConsentCheckbox from "./SmsConsentCheckbox";
import { submitLead } from "../lib/submitLead";

export default function ServiceBanner({
  title = "Creative Writing Services in USA",
  description =
    "Velon Book Publishing offers the best creative writing services in reasonable packages. We're here to provide you with all of the top creative writing services in USA under one roof.",
  backgroundImage = "/images/book-writing-bann.webp",
  ctaText = "Let's Start",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
        source: "Service Banner Form",
        currentPage:
          typeof window !== "undefined" ? window.location.href : "",
        referringPage:
          typeof document !== "undefined" ? document.referrer : "",
      });

      setStatus({
        loading: false,
        success: "Thanks! Your request has been submitted.",
        error: "",
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
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
    <section
      id="main-banner"
      className="relative overflow-hidden bg-[#182A42] text-white"
    >
      {/* Background image (optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16 mt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-xl text-sm text-white/75 md:text-base">
              {description}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  // Zopim livechat (same intent as your HTML)
                  if (typeof window !== "undefined") {
                    window?.$zopim?.livechat?.window?.show?.();
                  }
                }}
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#D8BE96", color: "#111827" }}
              >
                {ctaText}
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <div
              className="w-full rounded-md bg-white text-gray-900 shadow-xl"
              data-form-type="signup_form"
            >
              <div className="p-5">
                <form
                  method="POST"
                  id="contactform"
                  className="space-y-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    value="Excel Book Writing Contact Form Lead"
                    name="form-name"
                  />

                  <input
                    type="text"
                    placeholder="Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    inputMode="text"
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-gray-400"
                    required
                  />

                  <SmsConsentCheckbox
                    id="service-banner-sms-consent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="pt-1"
                    textClassName="text-[11px] text-gray-600"
                  />

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full rounded-md py-2.5 text-sm font-semibold transition hover:opacity-95"
                    style={{ backgroundColor: "#D8BE96", color: "#111827" }}
                  >
                    Submit request
                  </button>

                  {/* Error / Success placeholders */}
                  {status.error ? (
                    <p className="text-xs text-red-600">{status.error}</p>
                  ) : null}
                  {status.success ? (
                    <p className="text-xs text-green-600">{status.success}</p>
                  ) : null}

                  {/* Hidden location fields (same as original) */}
                  <div className="hidden">
                    <input type="hidden" name="u_ip" value="103.104.195.157" />
                    <input type="hidden" name="u_city" value="Karachi" />
                    <input type="hidden" name="u_region" value="Sindh" />
                    <input type="hidden" name="u_country" value="PK" />
                    <input
                      type="hidden"
                      name="from-website"
                      value="https://excelbookwriting.com"
                    />
                    <input
                      type="hidden"
                      name="from-page"
                      value="https://excelbookwriting.com/creative-writing/"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
