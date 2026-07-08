"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BrandPrimaryHeader from "../components/BrandPrimaryHeader";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import LaunchGrowSection from "../components/LaunchGrowSection";
import { ArrowDown, ArrowUp } from "lucide-react";
import GlobalAudienceSection from "../components/GlobalAudienceSection";
import Faq from "../components/Faq";
import GhostwritingHeroSplit from "../components/GhostwritingHeroSplit";
import ServicesGridCards from "../components/ServicesGridCards";
import FadeIn from "../components/FadeIn";

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleOpenChat = () => {
    window.zE && window.zE('webWidget', 'open');
  };

  const faqData = [
    { question: "How is self-publishing different from traditional publishing?", answer: "Yes, self-publishing your book means you own all the rights to it. Self-publishing is not like traditional publishing, where the authors relinquish their rights to their books." },
    { question: "Is self-publishing suitable for all genres?", answer: "Self-publishing can be effective in various genres. It is flexible whether you are writing fiction, nonfiction, poetry, or any other genre." },
    { question: "What is an ISBN, and do I need one?", answer: "An ISBN (International Standard Book Number) is a unique identifier for your book that retailers, libraries, and distributors use. If you intend to publish your book with any retailer like Amazon, Barnes & Noble, and others, you must have an ISBN.	" },
    { question: "Will I need to have the copyright of my published book?", answer: "You do not have to register your copyright rights for your book. You own the copyright the moment you put the words on paper. However, registering your copyright has several legal advantages. If you want to register the copyrights of your book, you have to consult with your attorney." },
    { question: "How long does it take to get a book published?", answer: "Whether you choose Amazon Kindle publishing or want to get your book on any other online retailer, the publishing process may take a few weeks to months. It depends on factors like manuscript complexity and the service package chosen." },
    { question: "Do I relinquish my rights if I publish my book with The Velon Book Publishing?", answer: "No. The terms and conditions that we will provide you in the contract for the publication of your book will state the process and procedures that will be followed, but the rights belong to you fully. Our publishing contract allows us to convert your intellectual property into a printed book or ebook ready for the public domain, but we do not get extra rights on it." },
    { question: "Can I make changes to my book after it gets published?", answer: "Yes. However, you must pay an additional fee to update the database and publish the revised version of your book. This fee also includes assigning the new ISBN." },
    { question: "What if there are certain things that I did not like about the publishing process?", answer: "We understand that there are certain things that individuals will not like about the self-publishing process, and here comes Velon Book Publishing. We are here to make your publishing journey easy. Our representative will work with you to assist you in the best possible way." }
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <GhostwritingHeroSplit />
      </section>

      <FadeIn><ServicesGridCards /></FadeIn>
      <FadeIn delay={0.08}><GlobalAudienceSection /></FadeIn>

      <FadeIn delay={0.12}><Faq /></FadeIn>
      <Footer />
    </>
  );
}
