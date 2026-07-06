"use client"
import Image from "next/image";
import Link from "next/link";
import HeaderHero from "./components/HeaderHero";
import BannerLogo from "./components/BannerLogo";
import About from "./components/About";
import PublishStepsTabs from "./components/PublishStepsTabs";
import Services from "./components/Services";
import ChooseUs from "./components/ChooseUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import HelpHeroWithForm from "./components/InnerForm";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";

export default function Home() {


  return (
    <main className="font-sans text-gray-800">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <HeaderHero />
      </section>
      <FadeIn><BannerLogo /></FadeIn>
      <FadeIn delay={0.05}><About /></FadeIn>
      <FadeIn delay={0.08}><PublishStepsTabs /></FadeIn>
      <FadeIn delay={0.1}><Services /></FadeIn>
      <FadeIn delay={0.12}><ChooseUs /></FadeIn>
      <FadeIn delay={0.14}><Faq /></FadeIn>
      <FadeIn delay={0.16}><HelpHeroWithForm /></FadeIn>
      <Footer />
    </main>
  );
}
