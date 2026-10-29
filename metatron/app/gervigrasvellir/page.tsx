import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import VideoFacade from "@/components/VideoFacade";
import { isNight, PITCH_FAQ, PROJECTS } from "@/lib/content";
import { JsonLd, breadcrumbs, service } from "@/lib/seo";

const DESCRIPTION =
  "Metatron leggur gervigrasvelli frá A til Ö: staðsteyptan púða, gervigras, vökvunarkerfi og flóðlýsingu. Vellir sem uppfylla staðla FIFA, alls 57 í fullri stærð.";

export const metadata: Metadata = {
  title: "Gervigrasvellir og fótboltavellir frá A til Ö",
  description: DESCRIPTION,
  alternates: { canonical: "/gervigrasvellir" },
  openGraph: { images: [{ url: "/img/kerecis-vollurinn-isafjordur.jpg", width: 2000, height: 1125 }] },
};

const STEPS = [
  {
    t: "Undirlag og púði",
    d: "Við eigum tækjabúnað til að staðsteypa fjaðurlag undir grasið og áratuga reynsla er komin á þá aðferð hér á landi.",
  },
  {
    t: "Gervigras",
    d: "Margar gerðir af grasi frá bestu framleiðendum heims. Grasvellir frá okkur uppfylla staðla og próf FIFA.",
  },
  { t: "Vökvunarkerfi", d: "Vandað vökvunarkerfi frá Þýskalandi sem stenst ströngustu kröfur.", href: "/vokvunarkerfi" },
  { t: "Flóðlýsing", d: "Musco ljósakerfi sem er stýrt með snjallsíma, með allt að 10 ára ábyrgð.", href: "/flodlysing" },
  {
    t: "FIFA-úttekt",
    d: "Við vinnum með alþjóðlegum vottunaraðilum sem taka út velli hér á landi, bæði FIFA Quality og FIFA Quality PRO.",
  },
  { t: "Viðhald allt árið", d: "Þjónustuleiðir í áskrift, viðgerðir, snjómokstur og burstun.", href: "/vidhald" },
];

export default function Pitches() {
  const pitches = PROJECTS.filter((p) => ["ka", "sun", "kerecis"].includes(p.id));
  return (
    <>
      <JsonLd
        data={[
          service({ name: "Gervigrasvellir", description: DESCRIPTION, path: "/gervigrasvellir", image: "/img/kerecis-vollurinn-isafjordur.jpg", type: "Lagning gervigrasvalla" }),
          breadcrumbs([{ name: "Gervigrasvellir", path: "/gervigrasvellir" }]),
        ]}
      />
      <PageHero
        crumb="Gervigrasvellir"
        title="Gervigrasvellir"
        lead="Fótboltavellir frá A til Ö: undirlag, gras, vökvun, lýsing og viðhald. Metatron hefur lagt 57 gervigrasvelli í fullri stærð."
        img="/img/kerecis-vollurinn-poster.jpg"
        video="/video/kerecis-vollurinn.mp4"
        alt="Línur málaðar á Kerecis-völlinn á Ísafirði, fjörðurinn og fjöllin í baksýn"
        focus="50% 60%"
      />

      <section className="atoz" aria-labelledby="atoz-h">
        <div className="atoz-in">
          <div className="atoz-pic">
            <Image src="/img/ka-vollurinn-lagning.jpg" alt="Gervigras lagt á KA-völlinn á Akureyri" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div>
            <h2 id="atoz-h" className="h2">
              Frá A til Ö
            </h2>
            <ol className="steps stagger">
              {STEPS.map((s) => (
                <li key={s.t}>
                  <div>
                    <h3>{s.href ? <Link href={s.href}>{s.t}</Link> : s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="fixtures" aria-labelledby="fixtures-h">
        <div className="sec-head">
          <h2 id="fixtures-h" className="h2">
            Nýlegir vellir
          </h2>
          <Link href="/verkefni" className="text-link">
            Öll verkefni <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ol className="fixture-list stagger">
          {pitches.map((p) => (
            <li key={p.id} className="fixture">
              <div className={isNight(p.img) ? "fixture-media lit" : "fixture-media"}>
                <VideoFacade id={p.yt!} title={p.place === "Um allt land" ? p.name : `${p.name}, ${p.place}`} poster={p.img} />
              </div>
              <h3>{p.name}</h3>
              <p className="fixture-meta">
                {p.place}, {p.year}
              </p>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <Faq items={PITCH_FAQ} title="Spurt um gervigrasvelli" />
      <Ask initial="vollur" title="Fáðu tilboð í völlinn" />
    </>
  );
}
