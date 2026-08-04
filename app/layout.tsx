import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0B7A19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-svh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
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
