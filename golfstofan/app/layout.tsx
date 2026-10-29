import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { JsonLd, organization } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const text = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Gervigras og púttflatir fyrir garðinn og golfið | Golfstofan",
    template: "%s | Golfstofan",
  },
  description:
    "Golfstofan leggur SYNLawn gervigras í garða, á svalir og golfvelli. Sama gras og í TGL. Sláðu inn fermetrana og sjáðu verðið strax.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: SITE.name,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Púttflöt Golfklúbbsins Odds, lögð SYNLawn grasi" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0f2a1f",
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
