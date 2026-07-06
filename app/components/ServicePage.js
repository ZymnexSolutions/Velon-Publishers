// components/ServicePage.jsx
"use client";

import ServiceBanner from "./ServiceBanner";
import Navbar from "./Navbar";
import BannerLogo from "./BannerLogo";
import CreativeWritingSection from "./CreativeWritingSection";
import CTA from "./CTA";
import Footer from "./Footer";
import HelpHeroWithForm from "./InnerForm";
import Faq from "./Faq";
import ProfessionalCreativeSection from "./ProfessionalCreativeSection";
import PortfolioShowcase from "./PortfolioShowcase";
import WhyChooseUs from "./WhyChooseUs";
import OrderCTASection from "./OrderCTASection";
import FadeIn from "./FadeIn";

export default function ServicePage({ content }) {
  const { banner, creative, professional } = content;

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <ServiceBanner {...banner} />
      </section>
      <FadeIn><BannerLogo /></FadeIn>
      <FadeIn delay={0.05}><CreativeWritingSection {...creative} /></FadeIn>
      <FadeIn delay={0.08}><ProfessionalCreativeSection {...professional} /></FadeIn>
      <FadeIn delay={0.1}><CTA /></FadeIn>
      <FadeIn delay={0.12}><PortfolioShowcase /></FadeIn>
      <FadeIn delay={0.14}><WhyChooseUs /></FadeIn>
      <FadeIn delay={0.16}><Faq /></FadeIn>
      <FadeIn delay={0.18}><OrderCTASection /></FadeIn>
      <FadeIn delay={0.2}><HelpHeroWithForm /></FadeIn>
      <Footer />
    </>
  );
}
