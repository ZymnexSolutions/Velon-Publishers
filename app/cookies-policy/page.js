import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiesPolicyPage() {
  return (
    <main className="font-sans text-gray-900">
      <section className="relative w-full overflow-hidden bg-[#182A42]">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D8BE96]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Cookies Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/80 md:text-base">
            Velon Book Publishing
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EF]">
        <div className="privacy-policy mx-auto max-w-6xl px-6 py-14">
          <p>
            This Cookies Policy explains how Velon Book Publishing uses cookies
            and similar technologies to operate our website, improve user
            experience, understand site performance, and support marketing
            activity.
          </p>

          <h2>1. What Cookies Are</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the site remember preferences, measure traffic,
            and provide a smoother browsing experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <ul>
            <li>To keep the website secure and functioning correctly</li>
            <li>To understand how visitors use our pages</li>
            <li>To improve page performance and content</li>
            <li>To support advertising, analytics, and remarketing tools</li>
          </ul>

          <h2>3. Managing Cookies</h2>
          <p>
            You can control or delete cookies through your browser settings.
            Blocking some cookies may affect website functionality or the
            availability of certain features.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            For questions about this Cookies Policy, contact us at
            support@velonbookpublishing.com.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
