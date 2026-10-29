import type { Metadata } from "next";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import VideoFacade from "@/components/VideoFacade";
import Faq from "@/components/Faq";
import { PUTT_FAQ } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Púttflöt í garðinn úr PrecisionPutt gervigrasi frá SYNLawn. Rúllar á 10–12 STIMP eins og keppnisflöt, þarf hvorki slátt né vökvun. Reiknaðu verðið á netinu.";

export const metadata: Metadata = {
  title: "Púttflöt í garðinn",
  description: DESCRIPTION,
  alternates: { canonical: "/puttflot" },
  openGraph: { images: [{ url: "/img/puttflot-gardabaer-kylfingur.jpg", width: 2000, height: 1334 }] },
};

const LAYERS = [
  { name: "PrecisionPutt", role: "Flötin", pile: "10 mm", text: "Rúllar á 10–12 STIMP, eins og keppnisflöt.", img: "/img/gras-precisionputt.png" },
  { name: "SYNFringe", role: "Kanturinn", pile: "25 mm", text: "Stuttklippt kargagras sem rammar flötina inn.", img: "/img/gras-synfringe.png" },
  { name: "SYNAugustine 347", role: "Garðurinn í kring", pile: "45 mm", text: "Fjölhæft garðagras sem tengir flötina við garðinn.", img: "/img/gras-synaugustine.png" },
];

const STEPS = [
  { title: "Við hönnum flötina", text: "Við skoðum garðinn með þér, merkjum útlínur flatarinnar og ákveðum halla og brot." },
  { title: "Við mótum undirlagið", text: "Mold og gras fara, malarlag er þjappað og flötin mótuð áður en grasið kemur." },
  { title: "Við leggjum grasið", text: "Flötin, kanturinn og garðagrasið eru lögð, saumuð og fest. Svo er púttað." },
];

export default function Puttflot() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Púttflöt í garðinn", description: DESCRIPTION, path: "/puttflot", image: "/img/puttflot-gardabaer-kylfingur.jpg" }),
          breadcrumbs([{ name: "Púttflatir", path: "/puttflot" }]),
        ]}
      />
      <SubHero
        crumb="Púttflatir"
        title="Púttflöt í garðinn"
        lead="PrecisionPutt frá SYNLawn rúllar eins og keppnisflöt, allt árið og án sláttar. Sláðu inn stærðina og sjáðu verðið."
        img="/img/puttflot-gardabaer-kylfingur.jpg"
        alt="Kylfingur púttar á gervigrasflöt í garði í Garðabæ"
        initial="puttflot"
        focus="55% 55%"
      />

      <section className="story" aria-labelledby="story-h">
        <div className="story-in">
          <div className="story-text">
            <h2 id="story-h" className="h2">
              Garður í Garðabæ
            </h2>
            <p>
              Garðurinn var sina, mold og möl. Nú er þar púttflöt úr PrecisionPutt með kanti allt í kring og garðagras þar fyrir utan.
              Trjánum var leyft að standa og trampólínið var grafið niður svo það er í sömu hæð og grasið.
            </p>
          </div>
          <figure className="story-pic story-wide wipe">
            <Image
              src="/img/puttflot-gardabaer-loftmynd.jpg"
              alt="Púttflöt og gervigras í garði í Garðabæ, séð úr lofti"
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </figure>
          <figure className="story-pic story-square wipe">
            <Image
              src="/img/puttflot-gardabaer-ofan.jpg"
              alt="Garðurinn í Garðabæ séður beint ofan frá, með niðurgröfnu trampólíni"
              fill
              sizes="(max-width: 900px) 100vw, 35vw"
            />
          </figure>
        </div>
      </section>

      <section className="layers" aria-labelledby="layers-h">
        <div className="layers-in">
          <h2 id="layers-h" className="h2">
            Þrjár gerðir af grasi
          </h2>
          <ol className="layer-list">
            {LAYERS.map((l) => (
              <li key={l.name}>
                <div className="layer-pic">
                  <Image src={l.img} alt={`${l.name} gervigras í nærmynd`} fill sizes="(max-width: 900px) 30vw, 160px" />
                </div>
                <div>
                  <p className="layer-role">
                    {l.role} · {l.pile}
                  </p>
                  <h3>{l.name}</h3>
                  <p>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="process" aria-labelledby="ferlid-h">
        <div className="process-grid">
          <div className="wipe">
            <VideoFacade id="UfDxVSzc3XU" title="Púttflöt og garður í Garðabæ" poster="/img/puttflot-gardabaer-loftmynd.jpg" />
          </div>
          <div>
            <h2 id="ferlid-h" className="h2">
              Svona verður flötin til
            </h2>
            <ol className="steps">
              {STEPS.map(({ title, text }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Faq items={PUTT_FAQ} title="Spurt um púttflatir" />
    </>
  );
}
