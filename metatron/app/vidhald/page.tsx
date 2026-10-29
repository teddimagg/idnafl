import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import { CARE_FAQ, isNight } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Viðhald gervigrasvalla: þjónustuleiðir í áskrift með djúphreinsun, mýkingu og innfyllingamælingu, viðgerðir og vetrarþjónusta með snjómokstri og burstun.";

export const metadata: Metadata = {
  title: "Viðhald gervigrasvalla og þjónustuleiðir",
  description: DESCRIPTION,
  alternates: { canonical: "/vidhald" },
  openGraph: { images: [{ url: "/img/heilsarsthjonusta.jpg", width: 2000, height: 1500 }] },
};

/** Þjónustur sem þjónustuleiðirnar byggja á, orðrétt eftir metatron.is. */
const PLAN = [
  { t: "Djúphreinsun", d: "Tekur óhreinindi úr vellinum og hreinsar hann vel. Nauðsynlegt að gera reglulega." },
  { t: "Mýking", d: "Innfyllingin þjappast með tímanum. Við mýkingu er henni lyft upp og völlurinn mýkist í notkun." },
  { t: "Létt ástandsskoðun", d: "Farið yfir völlinn og kannað hvort þörf sé á viðhaldi eða viðgerðum." },
  { t: "Innfyllingamæling", d: "Rétt magn innfyllingar tryggir eiginleika vallarins. Hún er mæld og brugðist við." },
  { t: "Vorhreinsun", d: "Malbikið í kringum völlinn er hreinsað, allt að tveimur metrum frá vellinum." },
  { t: "Sótthreinsun", d: "Völlurinn sótthreinsaður í heild sinni með viðurkenndum efnum." },
  { t: "Þjónustubók", d: "Staðfesting á öllu sem hefur verið gert, sem auðveldar vallarstjóra utanumhald." },
];

const YEAR = [
  { t: "Vetrarþjónusta", d: "Snjómokstur og burstun svo völlurinn nýtist allan veturinn.", img: "/img/vollur-ofan.jpg", alt: "Gervigrasvöllur séður beint ofan frá" },
  { t: "Viðgerðir", d: "Við gerum við slitna velli og gefum þeim nýtt líf.", img: "/img/vidgerd.jpg", alt: "Viðgerð á gervigrasvelli, nýr bútur lagður í völlinn" },
  { t: "FIFA-úttekt", d: "Er komið að endurnýjun? Við vinnum með alþjóðlegum vottunaraðilum.", img: "/img/kerecis-vollurinn-isafjordur.jpg", alt: "Kerecis-völlurinn á Ísafirði" },
];

export default function Care() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Viðhald gervigrasvalla", description: DESCRIPTION, path: "/vidhald", image: "/img/heilsarsthjonusta.jpg" }),
          breadcrumbs([{ name: "Viðhald", path: "/vidhald" }]),
        ]}
      />
      <PageHero
        crumb="Viðhald"
        title="Viðhald gervigrasvalla"
        lead="Reglulegt viðhald lengir líftíma vallarins, fyrirbyggir tjón og bætir upplifun þeirra sem spila á honum."
        img="/img/heilsarsthjonusta.jpg"
        alt="Gervigrasvöllur í notkun séður úr lofti"
        focus="50% 50%"
      />

      <section className="split" aria-labelledby="plan-h">
        <div className="split-in">
          <div className="split-pic">
            <Image src="/img/thjonusta-sportchamp.jpg" alt="Viðhaldsvél fyrir gervigras á velli" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div>
            <h2 id="plan-h" className="h2">
              Þjónustuleiðir
            </h2>
            <p className="split-lead">
              Þrjár leiðir í áskrift. Við setjum upp áætlun fyrir árið, höfum samband fyrir hverja heimsókn og höldum þjónustubók fyrir völlinn.
            </p>
            <ul className="plan stagger">
              {PLAN.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="places" aria-labelledby="year-h">
        <div className="sec-head">
          <h2 id="year-h" className="h2">
            Allt árið
          </h2>
          <p>Sumarþjónusta og vetrarþjónusta fyrir íþróttamannvirki, allan ársins hring.</p>
        </div>
        <ul className="place-list place-list-3 stagger">
          {YEAR.map((p) => (
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

      <Faq items={CARE_FAQ} title="Spurt um viðhald" />
      <Ask initial="vidhald" title="Fáðu verðskrá eða tilboð" />
    </>
  );
}
