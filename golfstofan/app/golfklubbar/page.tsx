import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SubHero from "@/components/SubHero";
import VideoFacade from "@/components/VideoFacade";
import Faq from "@/components/Faq";
import { CLUB_FAQ } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Gervigrasflatir, teigar og æfingasvæði fyrir golfklúbba. Sama SYNLawn kerfi og í TGL. Golfstofan lagði fyrsta TGL-kerfið í Evrópu hjá Golfklúbbnum Oddi.";

export const metadata: Metadata = {
  title: "Golfflatir og æfingasvæði fyrir golfklúbba",
  description: DESCRIPTION,
  alternates: { canonical: "/golfklubbar" },
  openGraph: { images: [{ url: "/img/oddur-flot-sumar.jpg", width: 2000, height: 1500 }] },
};

const BUILD = [
  { img: "/img/oddur-1-maeling.jpg", title: "Útsetning", alt: "Útlínur flatarinnar merktar á undirlagið hjá Oddi" },
  { img: "/img/oddur-2-undirlag.jpg", title: "Undirlag jafnað", alt: "Starfsmenn jafna undirlag flatarinnar með réttskeið" },
  { img: "/img/oddur-3-saumar.jpg", title: "Saumar límdir", alt: "Saumar í gervigrasinu límdir saman" },
  { img: "/img/oddur-4-ifylling.jpg", title: "Fyllt í grasið", alt: "Ífyllingu dreift yfir flötina fyrir framan golfskálann" },
  { img: "/img/oddur-5-burstun.jpg", title: "Burstað og klárt", alt: "Flötin burstuð að lokinni lögn" },
];

const SYSTEM = [
  { name: "PrecisionPutt", role: "Flatir", text: "Stutt gras, 10 mm, sem rúllar á 10–12 STIMP.", img: "/img/gras-precisionputt.png" },
  { name: "TeeStrike+", role: "Teigar", text: "Teigagras, 29 mm, sem tekur við tíi eins og alvöru teigur.", img: "/img/gras-teestrike.png" },
  { name: "SYNFringe og SYNAugustine", role: "Kantur og kargi", text: "Stutt kantgras og þéttur kargi sem ramma flötina inn.", img: "/img/gras-synaugustine.png" },
];

export default function Golfklubbar() {
  return (
    <>
      <JsonLd
        data={[
          service({
            name: "Golfflatir og æfingasvæði fyrir golfklúbba",
            description: DESCRIPTION,
            path: "/golfklubbar",
            image: "/img/oddur-flot-sumar.jpg",
          }),
          breadcrumbs([{ name: "Golfklúbbar", path: "/golfklubbar" }]),
        ]}
      />
      <SubHero
        crumb="Golfklúbbar"
        title="Gervigras fyrir golfklúbba"
        lead="Sama SYNLawn kerfi og í TGL. Flatir, teigar og kargi sem standa allt árið, án sláttar og vökvunar."
        img="/img/oddur-flot-sumar.jpg"
        alt="Púttflöt Golfklúbbsins Odds lögð SYNLawn grasi, golfvöllurinn í baksýn"
        initial="golfvollur"
        focus="50% 70%"
      />

      <section className="story" aria-labelledby="story-h">
        <div className="story-in">
          <div className="story-text">
            <h2 id="story-h" className="h2">
              Fyrsta TGL-kerfið í Evrópu
            </h2>
            <p>
              Golfklúbburinn Oddur fékk árið 2025 fyrstu TGL-flötina í Evrópu. Flötin er PrecisionPutt, umkringd 50 cm breiðum
              karga úr SYNAugustine og ramma úr lengra grasi.
            </p>
          </div>
          <figure className="story-pic story-wide wipe">
            <Image
              src="/img/oddur-kylfingar.jpg"
              alt="Kylfingar pútta á nýrri TGL-flöt hjá Golfklúbbnum Oddi"
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </figure>
          <div className="story-vid wipe">
            <VideoFacade id="gtkQF88LuVk" title="Oddur á myndbandi" poster="/img/oddur-kvold.jpg" />
          </div>
        </div>
      </section>

      <section className="build" aria-labelledby="build-h">
        <div className="build-head">
          <h2 id="build-h" className="h2">
            Svona var flötin lögð
          </h2>
          <p>Frá merktu undirlagi að burstaðri flöt, í fimm skrefum.</p>
        </div>
        <ol className="build-list stagger">
          {BUILD.map((b, i) => (
            <li key={b.img}>
              <div className="build-pic">
                <Image src={b.img} alt={b.alt} fill sizes="(max-width: 900px) 70vw, 20vw" />
              </div>
              <p>
                <span>{i + 1}</span> {b.title}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="layers" aria-labelledby="layers-h">
        <div className="layers-in">
          <div>
            <h2 id="layers-h" className="h2">
              Kerfið
            </h2>
            <p className="layers-sub">
              Undir flötinni er True Stop höggdeyfilag frá SYNLawn, svo hún tekur við vippum og innáhöggum, ekki bara púttum.
            </p>
          </div>
          <ol className="layer-list">
            {SYSTEM.map((l) => (
              <li key={l.name}>
                <div className="layer-pic">
                  <Image src={l.img} alt={`${l.name} gervigras í nærmynd`} fill sizes="(max-width: 900px) 30vw, 160px" />
                </div>
                <div>
                  <p className="layer-role">{l.role}</p>
                  <h3>{l.name}</h3>
                  <p>{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="light" aria-labelledby="light-h">
        <Image
          src="/img/musco-golfvollur-lysing.jpg"
          alt="Golfvöllur upplýstur að kvöldi með Musco flóðljósum"
          fill
          sizes="100vw"
          className="light-bg"
        />
        <div className="light-in">
          <h2 id="light-h" className="h2">
            Lýsing fyrir golfvelli
          </h2>
          <p>
            Tugir Musco lýsingarkerfa eru á knattspyrnuvöllum á Íslandi. Musco sérhæfir sig líka í lýsingu golfvalla og með
            Metatron bjóðum við tilbúnar lausnir fyrir flatir og æfingasvæði.
          </p>
          <a className="text-link text-link-dark" href="https://metatron.is/flodlysing">
            Lýsingarkerfi hjá Metatron <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <Faq items={CLUB_FAQ} title="Spurt um golfvelli" />
    </>
  );
}
