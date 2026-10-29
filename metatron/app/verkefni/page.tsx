import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Ask from "@/components/Ask";
import VideoFacade from "@/components/VideoFacade";
import { GOLF_PROJECTS, isNight, PROJECTS } from "@/lib/content";
import { JsonLd, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Verkefni: gervigrasvellir og garðar",
  description:
    "Nýleg verk Metatron: KA-völlurinn á Akureyri, SÚN-völlurinn í Neskaupstað, Kerecis-völlurinn á Ísafirði, fimm vellir á fimm mánuðum 2025 og garðagras á Vatnsnesi.",
  alternates: { canonical: "/verkefni" },
  openGraph: { images: [{ url: "/img/vollur-ofan.jpg", width: 2000, height: 1333 }] },
};

export default function Projects() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Verkefni", path: "/verkefni" }])} />
      <PageHero
        crumb="Verkefni"
        title="Verkefni"
        lead="Vellir í fullri stærð, endurnýjanir og garðar um allt land. Ýttu á myndirnar til að sjá verkin á myndbandi."
        img="/img/vollur-ofan.jpg"
        alt="Gervigrasvöllur séður beint ofan frá"
        focus="50% 50%"
      />

      <section className="cases" aria-label="Verkefnalisti">
        <ol className="case-list">
          {PROJECTS.map((p) => (
            <li key={p.id} id={p.id} className="case">
              <div className={isNight(p.img) ? "case-media lit" : "case-media"}>
                <VideoFacade id={p.yt!} title={p.place === "Um allt land" ? p.name : `${p.name}, ${p.place}`} poster={p.img} />
              </div>
              <div className="case-text">
                <h2 className="h3">{p.name}</h2>
                <p className="fixture-meta">
                  {p.place}, {p.year}. {p.kind}.
                </p>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="golf-links">
          <div>
            <h2 className="h3">Golfverkin eru hjá Golfstofunni</h2>
            <p>Systurfélagið Golfstofan leggur púttflatir og golfflatir með grasi frá SYNLawn.</p>
          </div>
          <ul>
            {GOLF_PROJECTS.map((g) => (
              <li key={g.name}>
                <a href={g.href}>
                  <strong>{g.name}</strong> <span>{g.text}</span> <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Ask title="Næsti völlur?" />
    </>
  );
}
