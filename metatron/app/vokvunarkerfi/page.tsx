import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import { isNight, WATER_FAQ } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Þýsk vökvunarkerfi fyrir gervigrasvelli, hybrid-velli og grasvelli, úti og í knattspyrnuhúsum. Skynjarar stýra vatnsmagninu, spara orku og lengja líftíma vallarins.";

export const metadata: Metadata = {
  title: "Vökvunarkerfi fyrir gervigras og grasvelli",
  description: DESCRIPTION,
  alternates: { canonical: "/vokvunarkerfi" },
  openGraph: { images: [{ url: "/img/vokvun-inni.jpg", width: 2000, height: 1333 }] },
};

const PLACES = [
  { t: "Útivellir", d: "Vökvun fyrir leiki og æfingar á gervigrasi.", img: "/img/fotboltavollur-nott.jpg", alt: "Gervigrasvöllur upplýstur að kvöldi" },
  { t: "Knattspyrnuhús", d: "Vökvunarkerfi sett upp innanhúss.", img: "/img/knattspyrnuhus.jpg", alt: "Gervigrasvöllur í knattspyrnuhúsi" },
  { t: "SÚN-völlurinn", d: "Nýtt vökvunarkerfi fylgdi nýju grasi og flóðlýsingu.", img: "/img/sun-vollurinn-fjordur.jpg", alt: "SÚN-völlurinn í Neskaupstað við fjörðinn" },
];

const KINDS = [
  { t: "Gervigrasvellir", d: "Vökvun fyrir leiki og æfingar, úti og inni." },
  { t: "Hybrid-vellir", d: "Gras styrkt gervitrefjum, sem þarf jafna og stýrða vökvun." },
  { t: "Grasvellir", d: "Hefðbundnir grasvellir, með vökvun sem skynjarar stýra." },
];

export default function Water() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Vökvunarkerfi", description: DESCRIPTION, path: "/vokvunarkerfi", image: "/img/vokvun-inni.jpg", type: "Vökvunarkerfi fyrir íþróttavelli" }),
          breadcrumbs([{ name: "Vökvunarkerfi", path: "/vokvunarkerfi" }]),
        ]}
      />
      <PageHero
        crumb="Vökvunarkerfi"
        title="Vökvunarkerfi fyrir velli"
        lead="Þýsk gæðakerfi fyrir gervigras, hybrid og gras. Skynjarar stýra vatnsmagninu, spara orku og lengja líftíma vallarins."
        img="/img/vokvun-inni.jpg"
        alt="Vökvunarbyssa vökvar gervigras í knattspyrnuhúsi"
        focus="40% 50%"
      />

      <section className="split" aria-labelledby="kinds-h">
        <div className="split-in">
          <div className="split-pic">
            <Image src="/img/vokvun-uti.jpg" alt="Vökvunarbyssa vökvar gervigrasvöll utandyra" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div>
            <h2 id="kinds-h" className="h2">
              Fyrir allar gerðir valla
            </h2>
            <ul className="points stagger">
              {KINDS.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <Link href="/gervigrasvellir" className="text-link">
              Gervigrasvellir frá A til Ö <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="places" aria-labelledby="where-h">
        <div className="sec-head">
          <h2 id="where-h" className="h2">
            Úti og inni
          </h2>
          <p>
            Á vellinum, í knattspyrnuhúsinu eða sem hluti af endurnýjun. <Link href="/verkefni#sun">Sjá SÚN-völlinn</Link>
          </p>
        </div>
        <ul className="place-list place-list-3 stagger">
          {PLACES.map((p) => (
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

      <Faq items={WATER_FAQ} title="Spurt um vökvun" />
      <Ask initial="vokvun" title="Tilboð í vökvun" />
    </>
  );
}
