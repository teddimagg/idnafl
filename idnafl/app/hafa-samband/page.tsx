import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import PageHead from "@/components/PageHead";
import Router from "@/components/Router";
import { PEOPLE } from "@/lib/content";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { COMPANIES, COMPANY_ORDER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hafa samband",
  description: "Hringdu í 565 3600 eða sendu á info@idnafl.is. Iðnafl, Tónahvarf 5, 203 Kópavogur. Iðnaðargólf, gervigrasvellir, flóðlýsing og golfflatir.",
  alternates: { canonical: "/hafa-samband" },
};

export default function Contact() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  const leads = PEOPLE.filter((p) => p.role === "Framkvæmdastjóri" || p.role === "Rekstrarstjóri");
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Hafa samband", path: "/hafa-samband" }])} />
      <PageHead crumb="Hafa samband" title="Hafa samband" lead="Hafðu samband og við finnum bestu lausnina fyrir verkefnið þitt.">
        <ul className="contact-lines stagger">
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
      </PageHead>
      <section className="ask ask-page" id="samband" aria-labelledby="ask-h">
        <div className="ask-in">
          <div className="ask-text">
            <h2 id="ask-h" className="h2">
              Hvernig getum við aðstoðað?
            </h2>
            <ul className="direct stagger">
              {leads.map((p) => (
                <li key={p.email}>
                  <Image src={p.img!} alt={p.name} width={240} height={300} className="direct-pic" />
                  <span className="direct-text">
                    <strong>{p.name}</strong>
                    <span>{p.role}</span>
                    <a href={`mailto:${p.email}`}>{p.email}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Router />
        </div>
      </section>
      <section className="cos-strip" aria-labelledby="strip-h">
        <div className="sec-head">
          <h2 id="strip-h" className="h2">
            Beint á vef fyrirtækisins
          </h2>
        </div>
        <ul className="trio trio-strip">
          {COMPANY_ORDER.map((id) => {
            const c = COMPANIES[id];
            return (
              <li key={id} className="trio-item">
                <a href={c.url}>
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 900px) 100vw, 660px" />
                  <span className="trio-text">
                    <Image src={c.logoDark} alt={c.name} width={c.w} height={c.h} className="trio-logo" />
                    <span>{c.what}</span>
                    <span className="trio-host">{c.host}</span>
                  </span>
                  <ArrowUpRight className="trio-arrow" size={22} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
