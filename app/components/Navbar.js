"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  Menu,
  X,
  PenLine,
  Film,
  FileText,
  Megaphone,
  BadgeCheck,
  BookOpen,
  User,
  ScrollText,
  Sparkles,
  Library,
  BookMarked,
  CheckCircle2,
  Truck,
  Globe2,
} from "lucide-react";

const SERVICES = [
  { title: "Ghost Writing", href: "/ghost-writing", icon: PenLine, desc: "End-to-end writing, tone matching, and structure." },
  { title: "Script Writing", href: "/script-writing", icon: Film, desc: "Screenplays, YouTube scripts, and story beats." },
  { title: "Book Editing", href: "/book-editing", icon: FileText, desc: "Developmental + copyedit for clarity and flow." },
  { title: "Book Marketing", href: "/book-marketing", icon: Megaphone, desc: "Launch plan, promos, ads, and visibility." },
  { title: "Book Publishing", href: "/book-publishing", icon: BadgeCheck, desc: "KDP setup, metadata, upload, compliance." },
  { title: "Memoir Writing", href: "/memoir-writing", icon: User, desc: "Your story shaped into a strong narrative." },
  { title: "Biography Writing", href: "/biography-writing", icon: ScrollText, desc: "Professional biography with research & tone." },
  { title: "Fiction Writing", href: "/fiction-writing", icon: Sparkles, desc: "Plot, characters, pacing, and storytelling." },
  { title: "Non Fiction Writing", href: "/non-fiction-writing", icon: Library, desc: "Authority, structure, and reader clarity." },
  { title: "Comic Book Writing", href: "/comic-book-writing", icon: BookMarked, desc: "Panels, dialogue, pacing, and scripts." },
  { title: "Novel Writing", href: "/novel-writing", icon: BookOpen, desc: "Full-length novel writing and polishing." },
  { title: "Book Proofreading", href: "/book-proofreading", icon: CheckCircle2, desc: "Final pass for grammar, typos, consistency." },
  { title: "Book Distribution", href: "/book-distribution", icon: Truck, desc: "Retail-ready listing and distribution setup." },
  { title: "Global Distribution", href: "/global-distribution", icon: Globe2, desc: "Wider reach across regions & marketplaces." },
];

const EXPERT_TEAM = [
  { first: "ANDREW J.", last: "KELLER" },
  { first: "LAUREN S.", last: "CHANDLER" },
  { first: "WILLIAM R.", last: "HARTMAN" },
  { first: "RYAN M.", last: "CALDWELL" },
  { first: "VICTORIA A.", last: "LANGLEY" },
  { first: "JONATHAN T.", last: "REED" },
];

const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Testimonials", href: "/testimonial" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const servicesWrapRef = useRef(null);
  const servicesMegaRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openNow = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenServices(true);
  };

  const closeLater = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenServices(false), 160);
  };

  useEffect(() => {
    const onDown = (e) => {
      const clickedTrigger = servicesWrapRef.current?.contains(e.target);
      const clickedMega = servicesMegaRef.current?.contains(e.target);
      if (!clickedTrigger && !clickedMega) setOpenServices(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenServices(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    // Ensure overlays never persist across route/back-forward navigation.
    setMobileOpen(false);
    setOpenServices(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    const resetUiState = () => {
      setMobileOpen(false);
      setOpenServices(false);
      document.body.style.overflow = "";
    };
    window.addEventListener("pageshow", resetUiState);
    window.addEventListener("popstate", resetUiState);
    return () => {
      window.removeEventListener("pageshow", resetUiState);
      window.removeEventListener("popstate", resetUiState);
    };
  }, []);

  useEffect(() => {
    const routesToPrefetch = ["/", "/services", "/about", "/testimonial", "/pricing", "/contact", ...SERVICES.map((service) => service.href)];
    const uniqueRoutes = [...new Set(routesToPrefetch)];
    const prefetch = () => uniqueRoutes.forEach((route) => router.prefetch(route));

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(prefetch, 500);
    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <div
      className={`fixed top-0 z-[9999] w-full transition-colors duration-300`}
    >
      <div className="relative mx-auto max-w-7xl px-4 pt-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 shadow-sm transition-colors duration-300 ${scrolled ? "bg-[#d6bd98]" : "bg-white"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo.webp"
              alt="Logo"
              width={130}
              height={38}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link
              href="/"
              className={`rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                }`}
            >
              Home
            </Link>

            <div
              ref={servicesWrapRef}
              className={`relative ${openServices ? "z-[80]" : ""}`}
              onMouseEnter={openNow}
              onMouseLeave={closeLater}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                  }`}
                aria-haspopup="true"
                aria-expanded={openServices}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openServices ? "rotate-180" : ""}`}
                />
              </button>
              <div className="absolute left-0 top-full h-8 w-full" />
            </div>

            <Link
              href="/about"
              className={`rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                }`}
            >
              About us
            </Link>
            <Link
              href="/testimonial"
              className={`rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                }`}
            >
              Testimonials
            </Link>
            <Link
              href="/pricing"
              className={`rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`rounded-lg p-1.5 transition-colors duration-300 ${scrolled ? "text-white hover:text-[#D8BE96] hover:bg-[#182A42]" : "text-slate-700 hover:text-[#D8BE96] hover:bg-[#182A42]"
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              aria-label="Get Started"
              className="nav-hover-btn hidden md:inline-block"
            >
              Get Started
            </Link>

            <button
              type="button"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 md:hidden ${scrolled ? "text-white" : "text-slate-800"
                }`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {openServices && (
          <ServicesMega
            panelRef={servicesMegaRef}
            onClose={() => setOpenServices(false)}
            onMouseEnter={openNow}
            onMouseLeave={closeLater}
          />
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-0 z-50 h-full w-[92%] max-w-[380px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <Image src="/images/Logo.webp" alt="Logo" width={120} height={34} className="h-9 w-auto" />
              <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-slate-100">
                <X className="h-5 w-5 text-slate-800" />
              </button>
            </div>

            <div className="h-[calc(100%-72px)] overflow-y-auto px-4 py-5">
              <MobileServicesAccordion closeDrawer={() => setMobileOpen(false)} />
              {MOBILE_LINKS.map((link) => (
                <MobileNavLink key={link.label} href={link.href} onClick={() => setMobileOpen(false)} scrolled={scrolled}>
                  {link.label}
                </MobileNavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- Desktop Mega ---------------- */

function ServicesMega({ panelRef, onClose, onMouseEnter, onMouseLeave }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed left-1/2 top-[88px] z-[2147483647] w-[1120px] max-w-[95vw] -translate-x-1/2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-h-[calc(100vh-108px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-4 bg-slate-50 px-6 py-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <div className="mt-0.5 text-xs text-slate-600">Writing, editing, publishing</div>
          </div>

          <Link
            href="/services"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl bg-[#182A42] px-4 py-2 text-xs font-semibold text-white hover:opacity-95"
          >
            View All Services
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
              <ArrowSvg />
            </span>
          </Link>
        </div>

        <div className="grid max-h-[calc(100vh-188px)] gap-6 overflow-y-auto p-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="pr-1">
            <div className="grid grid-cols-2 gap-3 auto-rows-fr">
              {SERVICES.map((s) => (
                <MegaItem
                  key={s.title}
                  href={s.href}
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900">OUR EXPERTS</h3>

            <div className="mt-4 grid grid-cols-3 gap-y-4">
              {EXPERT_TEAM.map((expert) => (
                <div key={`${expert.first}-${expert.last}`} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#182A42] text-[#D8BE96]">
                    <User className="h-6 w-6" />
                  </div>
                  <p className="mt-2 text-[10px] font-extrabold leading-3 text-slate-800">
                    {expert.first}
                    <br />
                    {expert.last}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h4 className="text-sm font-extrabold text-slate-900">TALK TO AN EXPERT NOW!</h4>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Ready to bring your book to life? Schedule a call with one of our experts now.
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#182A42] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
function MegaItem({ href, icon: Icon, title, desc, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#D8BE96] hover:bg-slate-50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#182A42] text-[#D8BE96]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="mt-0.5 text-xs text-slate-600 line-clamp-2">{desc}</div>
      </div>
    </Link>
  );
}

/* ---------------- Mobile ---------------- */

function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
    >
      {children}
      <ArrowSvg className="text-slate-400" />
    </Link>
  );
}

function MobileServicesAccordion({ closeDrawer }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-slate-200">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="p-2">
          <div className="grid grid-cols-1 gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                onClick={closeDrawer}
                className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-slate-50"
              >
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#182A42] text-[#D8BE96]">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                  <div className="mt-0.5 text-xs text-slate-600">{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/services"
            onClick={closeDrawer}
            className="mt-2 flex items-center justify-center rounded-xl bg-[#182A42] px-4 py-3 text-sm font-semibold text-white"
          >
            View All Services
          </Link>
        </div>
      )}
    </div>
  );
}

/* ---------------- Icons ---------------- */

function ArrowSvg({ className = "" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
