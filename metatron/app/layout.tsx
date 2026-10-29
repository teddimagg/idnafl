import type { Metadata, Viewport } from "next";
import { Barlow, Big_Shoulders } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { JsonLd, organization } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

const text = Barlow({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Gervigrasvellir, flóðlýsing og garðagras | Metatron",
    template: "%s | Metatron",
  },
  description:
    "Metatron leggur gervigrasvelli frá A til Ö, setur upp Musco flóðlýsingu og vökvunarkerfi og heldur völlum við allt árið. Alls 57 vellir í fullri stærð. Garðagras með 15 ára ábyrgð.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: SITE.name,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Upplýstur gervigrasvöllur í Neskaupstað að kvöldi" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is" className={`${display.variable} ${text.variable}`}>
      <body>
        <JsonLd data={organization()} />
        <Motion />
        <a className="skip" href="#efni">
          Fara í efni
        </a>
        <Header />
        <main id="efni">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
