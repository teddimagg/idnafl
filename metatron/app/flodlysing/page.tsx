import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import { isNight, LIGHT_FAQ } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Musco flóðlýsing fyrir íþróttavelli, golfvelli, hafnir og iðnað. Yfir 30 stór kerfi sett upp á Íslandi, stýrt með snjallsíma og allt að 10 ára ábyrgð.";

export const metadata: Metadata = {
  title: "Flóðlýsing fyrir íþróttavelli frá Musco",
  description: DESCRIPTION,
  alternates: { canonical: "/flodlysing" },
  openGraph: { images: [{ url: "/img/sun-vollurinn-nott.jpg", width: 2000, height: 1334 }] },
};

const PLACES = [
  { t: "Íþróttavellir", d: "Æfinga- og keppnisvellir, inni og úti.", img: "/img/fylkir-flodlysing.jpg", alt: "Knattspyrnuleikvangur upplýstur að kvöldi" },
  { t: "Golfvellir", d: "Flatir og æfingasvæði sem nýtast eftir að dimmir.", img: "/img/musco-golfvollur.jpg", alt: "Golfvöllur upplýstur með flóðljósum að kvöldi" },
  { t: "Hafnir og iðnaður", d: "Gámasvæði, verksmiðjur og vinnusvæði.", img: "/img/musco-hofn.jpg", alt: "Gámahöfn upplýst að nóttu" },
  { t: "Flugvellir", d: "Flughlöð og stærri innviðir.", img: "/img/musco-flugvollur.jpg", alt: "Flughlað upplýst að nóttu" },
];

const POINTS = [
  { t: "Stýrt með snjallsíma", d: "Kerfið er tengt stjórnstöð og vöktun, svo það er auðvelt að kveikja, slökkva og stilla." },
  { t: "Allt að 10 ára ábyrgð", d: "Hátækniflóðlýsing í hæsta gæðaflokki, með ábyrgð sem endist." },
  { t: "Musco frá 1976", d: "Bandarískt fyrirtæki sem hannar ljósakerfi fyrir íþróttaleikvanga um allan heim." },
  { t: "Yfir 30 stór kerfi", d: "Stór lýsingarkerfi sett upp hérlendis undanfarin misseri." },
];

export default function Lighting() {
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Flóðlýsing", description: DESCRIPTION, path: "/flodlysing", image: "/img/sun-vollurinn-nott.jpg", type: "Flóðlýsing íþróttavalla" }),
          breadcrumbs([{ name: "Flóðlýsing", path: "/flodlysing" }]),
        ]}
      />
      <PageHero
        crumb="Flóðlýsing"
        title="Flóðlýsing fyrir íþróttavelli"
        lead="Musco ljósakerfi fyrir velli, golfvelli og iðnað. Stýrt með snjallsíma og með allt að 10 ára ábyrgð."
        img="/img/flodlysing-neskaupstadur-poster.jpg"
        video="/video/flodlysing-neskaupstadur.mp4"
        alt="SÚN-völlurinn í Neskaupstað upplýstur með Musco flóðlýsingu"
        focus="50% 55%"
      />

      <section className="places" aria-labelledby="places-h">
        <div className="sec-head">
          <h2 id="places-h" className="h2">
            Hvar lýsum við?
          </h2>
          <p>Musco lýsir 18 af 20 völlum ensku úrvalsdeildarinnar. Sama tækni nýtist á æfingavelli, golfvelli og gámahöfn.</p>
        </div>
        <ul className="place-list stagger">
          {PLACES.map((p) => (
            <li key={p.t}>
              <div className={isNight(p.img) ? "place-pic lit" : "place-pic"}>
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="split" aria-labelledby="system-h">
        <div className="split-in">
          <div className="split-pic">
            <Image src="/img/musco-ljosamastur.jpg" alt="Musco ljósamastur við gervigrasvöll í Neskaupstað" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div>
            <h2 id="system-h" className="h2">
              Kerfið
            </h2>
            <ul className="points stagger">
              {POINTS.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <a className="text-link" href="https://www.golfstofan.is/golfklubbar">
              Lýsing og flatir fyrir golfklúbba hjá Golfstofunni <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Faq items={LIGHT_FAQ} title="Spurt um flóðlýsingu" />
      <Ask initial="lysing" title="Fáðu tilboð í lýsingu" />
    </>
  );
}
