import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import { HALL_FAQ, isNight } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Allt sem íþróttahús og knattspyrnuhús þurfa: íþróttagólf, skiptitjöld og net, búningsklefar og áhorfendapallar. Staðsteypt leiksvæði, fallvarnir og hlaupabrautir.";

export const metadata: Metadata = {
  title: "Íþróttahús, leiksvæði og fallvarnir",
  description: DESCRIPTION,
  alternates: { canonical: "/ithrottahus-og-leiksvaedi" },
  openGraph: { images: [{ url: "/img/leiksvaedi-thak.jpg", width: 2000, height: 1125 }] },
};

const HALL = [
  { t: "Íþróttagólf", d: "Flestar gerðir gólfa frá viðurkenndum framleiðendum." },
  { t: "Skiptitjöld og net", d: "Skiptitjöld til að skipta salnum og boltanet." },
  { t: "Búningsklefar", d: "Allt sem þarf í búningsklefa." },
  { t: "Áhorfendapallar", d: "Pallar af ýmsum gerðum, fyrir sal og völl." },
  { t: "Búnaður", d: "Allur helsti búnaður sem íþróttahús þarf." },
];

const PLAY = [
  { t: "Leiksvæði", d: "Staðsteyptir púðar í ýmsum litum.", img: "/img/leiksvaedi-litir.jpg", alt: "Leiksvæði með staðsteyptu yfirborði í grænum, gulum og gráum lit" },
  { t: "Fallvarnir", d: "Fallvarnir undir leiktæki, steyptar á staðnum.", img: "/img/fallvarnir.jpg", alt: "Fallvörn í dökkum lit undir leiktækjum á skólalóð" },
  { t: "Knattspyrnuhús", d: "Gervigras, vökvun og búnaður innanhúss.", img: "/img/knattspyrnuhus.jpg", alt: "Gervigrasvöllur í knattspyrnuhúsi" },
];

export default function Halls() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Íþróttahús og leiksvæði", description: DESCRIPTION, path: "/ithrottahus-og-leiksvaedi", image: "/img/leiksvaedi-thak.jpg" }),
          breadcrumbs([{ name: "Íþróttahús og leiksvæði", path: "/ithrottahus-og-leiksvaedi" }]),
        ]}
      />
      <PageHero
        crumb="Íþróttahús og leiksvæði"
        title="Íþróttahús og leiksvæði"
        lead="Íþróttagólf, skiptitjöld, búningsklefar og áhorfendapallar. Staðsteypt leiksvæði, fallvarnir og hlaupabrautir."
        img="/img/leiksvaedi-thak.jpg"
        alt="Leiksvæði í litum á þaki séð úr lofti"
        focus="50% 50%"
      />

      <section className="split" aria-labelledby="hall-h">
        <div className="split-in">
          <div className="split-pic">
            <Image src="/img/knattspyrnuhus.jpg" alt="Gervigrasvöllur í knattspyrnuhúsi" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div>
            <h2 id="hall-h" className="h2">
              Íþróttahús
            </h2>
            <ul className="points stagger">
              {HALL.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="places" aria-labelledby="play-h">
        <div className="sec-head">
          <h2 id="play-h" className="h2">
            Leiksvæði og fallvarnir
          </h2>
          <p>Staðsteypt yfirborð í litum, fallvarnir undir leiktæki og staðsteyptar hlaupabrautir.</p>
        </div>
        <ul className="place-list place-list-3 stagger">
          {PLAY.map((p) => (
            <li key={p.t}>
              <div className={isNight(p.img) ? "place-pic lit" : "place-pic"}>
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <Faq items={HALL_FAQ} title="Spurt og svarað" />
      <Ask initial="annad" title="Segðu okkur frá verkinu" />
    </>
  );
}
