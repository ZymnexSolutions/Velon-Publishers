import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import AOSProvider from "./components/AOSProvider";
import SeoCanonical from "./components/SeoCanonical";
import SocialLinksBar from "./components/SocialLinksBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://velonbookpublishing.com"),
  title: {
    default: "Velon Book Publishing | Book Writing, Editing and Publishing",
    template: "%s | Velon Book Publishing",
  },
  description:
    "Velon Book Publishing helps authors write, edit, publish, market, and distribute professional books across global platforms.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velonbookpublishing.com/",
    siteName: "Velon Book Publishing",
    title: "Velon Book Publishing | Book Writing, Editing and Publishing",
    description:
      "Professional book writing, editing, publishing, marketing, and distribution services for authors.",
  },
  icons: {
    icon: "/images/fav.svg",
    shortcut: "/images/fav.svg",
    apple: "/images/fav.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2353740318431699');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/699e04c991913e1c371275e4/1ji8k5d2p';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2353740318431699&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <SeoCanonical />
        <SocialLinksBar />
        {children}
      </body>
    </html>
  );
}
