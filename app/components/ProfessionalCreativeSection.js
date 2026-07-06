"use client";

import { useState } from "react";
import { Search, BadgeCheck, PenTool } from "lucide-react";
import SmsConsentCheckbox from "./SmsConsentCheckbox";
import { submitLead } from "../lib/submitLead";


export default function ProfessionalCreativeSection({
  highlight = "Creative Writing",
  location = "Chicago",
  showProfessional = true, 
  paragraphs = [
    "Our team of qualified writers believes in respecting the privacy of our clients. Every piece of information you share remains safe and secure with us. We transfer all rights of the project over to you after delivery.",
    "If you're looking for affordable services without putting a dent in your wallet, then look no further. We are here to fulfill every requirement you may have when it comes to writing support.",
    "Our success is built on happy clients. We take a client-centric approach, valuing your feedback and input throughout the process. Your vision is our priority.",
  ],
  features = [
    {
      icon: <Search className="h-7 w-7 text-[#D8BE96]" />,
      title: "Completion of Process",
      desc: "Once you're on board, we'll take your project and ensure its completion to your satisfaction.",
    },
    {
      icon: <BadgeCheck className="h-7 w-7 text-[#D8BE96]" />,
      title: "Bestselling Quality Work",
      desc: "No matter your work type, you are guaranteed the same quality as a bestselling piece.",
    },
    {
      icon: <PenTool className="h-7 w-7 text-[#D8BE96]" />,
      title: "Unlimited Support & Revisions",
      desc: "We believe in serving to the fullest and are confident in our work, thus the unlimited revisions.",
    },
  ],

  
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    smsConsent: false,
  });

  const [submitState, setSubmitState] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ loading: true, success: "", error: "" });

    try {
      await submitLead({
        ...formData,
        source: "Professional Creative Section Form",
        currentPage:
          typeof window !== "undefined" ? window.location.href : "",
        referringPage:
          typeof document !== "undefined" ? document.referrer : "",
      });

      setSubmitState({
        loading: false,
        success: "Thanks! We will contact you shortly.",
        error: "",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        smsConsent: false,
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error: error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
           <h2 className="text-4xl font-extrabold leading-tight text-[#0B0F16]">
  {showProfessional && "Professional "}
  <span className="text-[#D8BE96]">{highlight}</span>
  {showProfessional && (
    <>
      <br />
      Services in {location}
    </>
  )}
</h2>

            <div className="mt-5 space-y-5 text-sm text-gray-700">
              {paragraphs.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <FeatureRow key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#0E3A63]/30 bg-[#0E3A63] shadow-2xl">

              <div className="bg-[#0E3A63] px-6 py-6">
                <form className="space-y-4" onSubmit={handleSubmit}>

                  <Input
                    name="fullName"
                    placeholder="Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />

                  <SmsConsentCheckbox
                    id="professional-creative-sms-consent"
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="pt-1"
                    textClassName="text-[11px] text-white/90"
                  />

                  <button
                    type="submit"
                    disabled={submitState.loading}
                    className="w-full rounded-md bg-[#2D9CDB] py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
                  >
                    Submit request
                  </button>

                  {submitState.error && (
                    <p className="text-xs text-red-300">{submitState.error}</p>
                  )}

                  {submitState.success && (
                    <p className="text-xs text-emerald-200">
                      {submitState.success}
                    </p>
                  )}
                </form>
              </div>

              <div className="bg-[#0E3A63] pb-6" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* SMALL COMPONENTS */

function FeatureRow({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-[#D8BE96]/10">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-extrabold text-[#0B0F16]">{title}</h4>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function Input({ name, placeholder, type = "text", value, onChange, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-md border border-white/20 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-white/40"
    />
  );
}
