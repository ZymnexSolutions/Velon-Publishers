"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TESTIMONIAL_VIDEOS = [
  // "/images/video-testi.mp4",
  "/images/vid-2.mp4",
  "/images/vid-3.mp4",
];

export default function TestimonialPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
            Testimonials
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
            Real feedback from our clients. Watch the testimonial video below
            to hear their experience with Velon Book Publishing.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIAL_VIDEOS.map((videoSrc) => (
              <div
                key={videoSrc}
                className="overflow-hidden rounded-3xl border border-[#182A42]/10 bg-white p-4 shadow-lg md:p-6"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
