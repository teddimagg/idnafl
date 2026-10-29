import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Inquiry from "@/components/Inquiry";
import { isNight, PROJECTS } from "@/lib/content";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hafa samband og fá tilboð",
  description:
    "Hringdu í 565 3600, sendu á info@metatron.is eða veldu verkið og sendu fyrirspurn á netinu. Metatron, Tónahvarf 5, 203 Kópavogur.",
  alternates: { canonical: "/hafa-samband" },
};

export default function Contact() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Hafa samband", path: "/hafa-samband" }])} />
      <section className="contact" id="fyrirspurn" aria-labelledby="page-h">
        <div className="contact-in">
          <div className="contact-text">
            <nav className="crumbs" aria-label="Brauðmolar">
              <Link href="/">Metatron</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Hafa samband</span>
            </nav>
            <h1 id="page-h">Hafa samband</h1>
            <p className="lead">Veldu verkið og sendu fyrirspurn, eða hringdu beint. Við svörum öllum fyrirspurnum.</p>
            <ul className="contact-lines">
              <li>
                <Phone size={20} aria-hidden="true" />
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <a href={map}>{SITE.address}</a>
              </li>
            </ul>
          </div>
          <Inquiry initial="annad" />
          <figure className="contact-pic lit">
            <Image src="/img/sun-vollurinn-fjordur.jpg" alt="SÚN-völlurinn í Neskaupstað upplýstur við fjörðinn" fill sizes="(max-width: 960px) 100vw, 40vw" />
          </figure>
        </div>
      </section>
      <section className="places places-light" aria-labelledby="recent-h">
        <div className="sec-head">
          <h2 id="recent-h" className="h2">
            Nýleg verk
          </h2>
          <Link href="/verkefni" className="text-link">
            Öll verkefni
          </Link>
        </div>
        <ul className="place-list place-list-3 stagger">
          {PROJECTS.filter((p) => ["ka", "kerecis", "vatnsnes"].includes(p.id)).map((p) => (
            <li key={p.id}>
              <Link href={`/verkefni#${p.id}`} className="place-link">
                <div className={isNight(p.img) ? "place-pic lit" : "place-pic"}>
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <h3>{p.name}</h3>
                <p>
                  {p.place}, {p.year}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
