// components/Footer.js
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  { label: "Ghost Writing", href: "/ghost-writing" },
  { label: "Script Writing", href: "/script-writing" },
  { label: "Book Editing", href: "/book-editing" },
  { label: "Book Marketing", href: "/book-marketing" },
  { label: "Book Publishing", href: "/book-publishing" },
  { label: "Global Distribution", href: "/global-distribution" },
];

const QUICK_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonial" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Text Message Consent Agreement", href: "/text-message-consent-agreement" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-[#f3f9fb]">
      {/* Top main footer */}
      <div className="mx-auto max-w-7xl py-12 pl-4 md:pl-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Logo */}
          <div className="space-y-6 md:col-span-1">
            <Link href="/">
              <Image
                src="/images/Logo.webp"
                alt="Velon Book Publishing Logo"
                width={200}
                height={60}
              />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Services
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
              Get in Touch
            </h3>
            <div className="space-y-1.5 text-sm text-slate-600">
              <p>support@velonbookpublishing.com</p>
              <p>info@velonbookpublishing.com</p>
              {/* <p>USA: 619-866-3707</p> */}
              <p>437-889-5252</p>
              <p className="pt-2">
                5 Brockley Dr Scarborough, ON M1P 3J2, Canada
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl space-y-4 px-6 py-6 md:flex md:items-center md:justify-between md:space-y-0 lg:px-8">
          {/* Guarantee + SSL */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500 text-[10px] font-semibold">
                OK
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  100% hassle-free
                </p>
                <p className="text-xs text-slate-500">
                  7-day money-back guarantee
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-sky-500 text-[10px] font-semibold">
                SSL
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  SSL Secure payment
                </p>
                <p className="text-xs text-slate-500">
                  Your information is protected by 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>

          {/* Payments + Sitemap */}
          <div className="space-y-2 text-right">
            <div className="flex flex-wrap justify-end gap-2 text-[11px] font-medium text-slate-600">
              <span className="rounded border border-slate-200 px-2 py-1">Apple Pay</span>
              <span className="rounded border border-slate-200 px-2 py-1">Discover</span>
              <span className="rounded border border-slate-200 px-2 py-1">Google Pay</span>
              <span className="rounded border border-slate-200 px-2 py-1">MasterCard</span>
              <span className="rounded border border-slate-200 px-2 py-1">AmEx</span>
              <span className="rounded border border-slate-200 px-2 py-1">PayPal</span>
              <span className="rounded border border-slate-200 px-2 py-1">Visa</span>
            </div>

          </div>
        </div>
        <div className="border-t border-slate-200 px-6 py-3 text-center text-xs text-slate-500">
          Copyright © 2026 <a href="https://velontechnologies.com/" className="underline text-blue-400">Velon Technologies Inc</a>. All Rights Reserved.
        </div>
        <div className="border-t border-slate-200 bg-white px-6 py-5 text-center text-xs leading-5 text-slate-600">
          <h4 className="blink_me mb-2 text-sm font-bold uppercase tracking-wide text-slate-900">
            Disclaimer
          </h4>
          <p className="font-semibold">
            Velon Book Publishing provides professional ghostwriting, editing, and publishing services for original book projects and creative content only.
          </p>
          <p className="mt-2">
            We do not offer academic writing, essay completion, or any services that promote academic dishonesty or misrepresentation. All services are intended for lawful and ethical use only.
          </p>
        </div>
      </div>
    </footer>
  );
}

