import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import MobileCta from "@/components/MobileCta";
import { JsonLd, organization } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Epoxy gólf og iðnaðargólf | Gólflagnir",
    template: "%s | Gólflagnir",
  },
  description:
    "Gólflagnir leggja epoxy gólf, polyurethan, Ucrete og epoxy terrazzo um allt land. Yfir 30 ára reynsla, frí ráðgjöf og 3 ára ábyrgð. Reiknaðu verðið á netinu.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "is_IS",
    siteName: SITE.name,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Gljáandi epoxy iðnaðargólf lagt af Gólflögnum" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1012",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is" className={archivo.variable}>
      <body>
        <JsonLd data={organization()} />
        <Motion />
        <a className="skip" href="#efni">
          Fara í efni
        </a>
        <Header />
        <main id="efni">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
