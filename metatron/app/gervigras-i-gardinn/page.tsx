import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import VideoFacade from "@/components/VideoFacade";
import { GARDEN_FAQ, PRODUCTS } from "@/lib/content";
import { kr } from "@/lib/lead";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";
import { SITE } from "@/lib/site";

const DESCRIPTION =
  "Gervigras í garðinn frá SYNLawn: enginn sláttur, engin vökvun og 15 ára ábyrgð. Garðagras frá 5.190 kr. á fermetra. Reiknaðu verðið á netinu og fáðu tilboð í lögn.";

export const metadata: Metadata = {
  title: "Gervigras í garðinn, verð frá 5.190 kr./m²",
  description: DESCRIPTION,
  alternates: { canonical: "/gervigras-i-gardinn" },
  openGraph: { images: [{ url: "/img/gardagras-gardur.jpg", width: 2000, height: 1333 }] },
};

const WHY = [
  { t: "Enginn sláttur", d: "Grasið helst jafnt og grænt allt árið án sláttar, vökvunar eða áburðar." },
  { t: "Fyrir börn og dýr", d: "Laust við þungmálma og eiturefni, slitsterkt og án hóla og bletta." },
  { t: "15 ára ábyrgð", d: "Á öllu garðagrasi sem við seljum. Allt grasið er frá SYNLawn." },
  { t: "Lagt eða bara grasið", d: "Keyptu grasið eitt og sér, minnst 10 m², eða fáðu tilboð í lögn." },
];

export default function Garden() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Gervigras í garðinn", description: DESCRIPTION, path: "/gervigras-i-gardinn", image: "/img/gardagras-gardur.jpg", type: "Lagning gervigrass í garða" }),
          breadcrumbs([{ name: "Gervigras í garðinn", path: "/gervigras-i-gardinn" }]),
          ...PRODUCTS.map((p) => ({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            image: `${SITE.url}${p.img}`,
            brand: { "@type": "Brand", name: "SYNLawn" },
            description: `${p.name} frá SYNLawn, ${p.pile}. ${p.note}. Með 15 ára ábyrgð.`,
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "ISK",
              unitCode: "MTK",
              availability: "https://schema.org/InStock",
              seller: { "@type": "Organization", name: SITE.name },
            },
          })),
        ]}
      />
      <PageHero
        crumb="Gervigras í garðinn"
        title="Gervigras í garðinn"
        lead="SYNLawn garðagras sem helst grænt allt árið, án sláttar og vökvunar. Reiknaðu grasið og fáðu tilboð í lögnina."
        img="/img/vatnsnes-poster.jpg"
        video="/video/vatnsnes-gardagras.mp4"
        alt="Garðagras í kringum Vatnsnes í Keflavík, séð úr lofti"
        focus="50% 70%"
      />

      <Ask
        initial="gardur"
        title="Reiknaðu grasið"
        text="Veldu gras og fermetra og sjáðu verðið strax. Viltu að við leggjum það? Merktu við og við gerum tilboð í lögnina."
      />

      <section className="grasses" aria-labelledby="grasses-h">
        <div className="sec-head">
          <h2 id="grasses-h" className="h2">
            Fjórar gerðir af garðagrasi
          </h2>
          <p>Allt frá SYNLawn, laust við þungmálma og eiturefni, með 15 ára ábyrgð.</p>
        </div>
        <ul className="grass-list stagger">
          {PRODUCTS.map((p) => (
            <li key={p.id}>
              <div className="grass-pic">
                <Image src={p.img} alt={`${p.name} í nærmynd`} fill sizes="(max-width: 900px) 50vw, 25vw" />
              </div>
              <h3>{p.name}</h3>
              <p className="grass-price">{kr(p.price)} á m²</p>
              <p className="grass-note">
                {p.pile}. {p.note}.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="split" aria-labelledby="why-h">
        <div className="split-in">
          <div className="split-pic">
            <VideoFacade id="efdGggbCicU" title="Vatnsnes í Keflavík" poster="/img/gardagras-vatnsnes.jpg" />
          </div>
          <div>
            <h2 id="why-h" className="h2">
              Minna viðhald, meiri garður
            </h2>
            <ul className="points stagger">
              {WHY.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <a className="text-link" href="https://www.golfstofan.is/puttflot">
              Púttflöt í garðinn hjá Golfstofunni <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Faq items={GARDEN_FAQ} title="Spurt um garðagras" />
    </>
  );
}
