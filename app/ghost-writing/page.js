// app/book-publishing/page.jsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
    Phone,
    Mail,
    ShieldCheck,
    Star,
    CheckCircle2,
    MessageCircle,
    ArrowRight,
    ChevronDown,
    Download,
} from "lucide-react";
import ServicesSection from "../components/ServicesSection";
import ServiceBanner from "../components/ServiceBanner";
import Navbar from "../components/Navbar";
import BannerLogo from "../components/BannerLogo";
import CreativeWritingSection from "../components/CreativeWritingSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import HelpHeroWithForm from "../components/InnerForm";
import Faq from "../components/Faq";
import ProfessionalCreativeSection from "../components/ProfessionalCreativeSection";
import PortfolioShowcase from "../components/PortfolioShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import OrderCTASection from "../components/OrderCTASection";



export default function GhostWriting() {


    return (
        <>
            <section className="relative w-full overflow-hidden bg-[#182A42]">
                <Navbar />
                <ServiceBanner />
            </section>
            <BannerLogo />
            <CreativeWritingSection imageSrc="/images/services/Creative-Writing-Services.webp" />
            <ProfessionalCreativeSection />
            <CTA />
            <PortfolioShowcase />
            <WhyChooseUs />
            <Faq />
            <OrderCTASection />
            <HelpHeroWithForm />
            <Footer />

        </>
    );
}


