import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
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
  metadataBase: new URL("https://www.golfstofan.is"),
  title: "Golfstofan – Gervigras fyrir garðinn og golfið",
  description:
    "Golfstofan leggur SYNLawn gervigras í garða, á svalir og á golfvelli. Sama gras og í TGL. Sláðu inn fermetrana og sjáðu verðið strax.",
  openGraph: {
    title: "Gervigras fyrir garðinn og golfið",
    description: "Sláðu inn fermetrana og sjáðu áætlað verð strax. SYNLawn gervigras, lagt af Golfstofunni.",
    images: ["/img/oddur-flot.png"],
    locale: "is_IS",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2a1f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="is" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
