import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import ContactForm from "@/components/ContactForm";
import Estimator from "@/components/Estimator";
import Image from "next/image";
import { PICS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hafa samband og fá tilboð í gólf",
  description: "Hringdu í 565 3600, sendu á golf@golflagnir.is eða reiknaðu verðið á netinu. Gólflagnir, Tónahvarf 5, 203 Kópavogur.",
  alternates: { canonical: "/hafa-samband" },
};

export default function Contact() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  return (
    <>
      <Crumbs items={[{ name: "Hafa samband", path: "/hafa-samband" }]} />
      <section className="contact-page" aria-labelledby="page-h">
        <div className="contact-page-text">
          <h1 id="page-h">Hafa samband</h1>
          <p className="page-lead">Sendu okkur myndir, teikningar eða lýsingu og við ráðleggjum hvaða gólfefni hentar. Við svörum öllum fyrirspurnum að bragði.</p>
          <ul className="contact-lines stagger">
            <li>
              <Phone size={18} aria-hidden="true" /> <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" /> <a href={map}>{SITE.address}</a>
            </li>
            <li>
              <Clock size={18} aria-hidden="true" /> {SITE.hours}
            </li>
          </ul>
          <h2 className="h3">Skrifaðu okkur</h2>
          <ContactForm />
        </div>
        <div className="fit-calc" id="verd">
          <Estimator compact />
        </div>
      </section>
      <section className="gallery stagger" aria-label="Nýleg gólf">
        {[PICS.grinders, PICS.hangar, PICS.topp4000, PICS.terrazzoDark].map((g) => (
          <figure key={g.src} className="gallery-item cut reveal">
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
          </figure>
        ))}
      </section>
    </>
  );
}
