import type { Metadata, Viewport } from "next";
import { Fira_Sans, Saira } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { JsonLd, organization } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Saira({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const text = Fira_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Iðnafl, leiðandi í lausnum | Gólflagnir, Metatron og Golfstofan",
    template: "%s | Iðnafl",
  },
  description:
    "Iðnafl á og rekur Gólflagnir, Metatron og Golfstofuna: iðnaðargólf og epoxy, gervigrasvelli, flóðlýsingu og golfflatir. 15 manna teymi á Tónahvarfi 5 í Kópavogi.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: SITE.name,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Iðnafl, leiðandi í lausnum" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f2",
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
