import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Professional Electrical & Computer Services`,
    template: `%s | ${site.name}`,
  },
  description:
    "Reliable, affordable and professional electrical installations, computer repairs, software support and maintenance services for homes and businesses.",
  keywords: [
    "electrical services",
    "computer repair",
    "wiring installation",
    "laptop repair",
    "virus removal",
    "software installation",
    "electrical contractor",
    "computer technician",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: site.name,
    title: `${site.name} | Professional Electrical & Computer Services`,
    description:
      "Reliable, affordable and professional electrical and computer services for homes and businesses.",
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: `${site.name} | Professional Electrical & Computer Services`,
    description:
      "Reliable, affordable and professional electrical and computer services for homes and businesses.",
  },
};

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0C1A11",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        {/* Without JavaScript the scroll reveals never fire, so show content. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-sm focus:bg-secondary focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <SmoothScroll />
      </body>
    </html>
  );
}
