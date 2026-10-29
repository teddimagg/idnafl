import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/Crumbs";
import { PICS, PROJECTS, systemBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Verkefni: gólf fyrir Toyota, atNorth, Eimskip og fleiri",
  description:
    "Nýleg verk Gólflagna: bifreiðaverkstæði Toyota, gagnaver atNorth, Sundakælir Eimskips og sprungið gólf í Klettagörðum.",
  alternates: { canonical: "/verkefni" },
};

export default function Projects() {
  return (
    <>
      <Crumbs items={[{ name: "Verkefni", path: "/verkefni" }]} />
      <section className="page-hero index-hero">
        <div className="page-hero-text">
        <h1>Verkefni</h1>
        <p className="page-lead">
          Nokkur nýleg verk. Við leggjum gólf fyrir stór fyrirtæki og einstaklinga um allt land og tökum einnig að okkur verkefni
          erlendis.
        </p>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={PICS.blastrac.src} alt={PICS.blastrac.alt} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>
      <ol className="project-list stagger">
        {PROJECTS.map((p) => (
          <li key={p.slug} className="project">
            {p.date && <p className="project-date">{p.date}</p>}
            <h2>{p.name}</h2>
            <p>{p.what}</p>
            <p className="project-sys">
              {p.systems.map((s) => {
                const sys = systemBySlug(s)!;
                return (
                  <Link key={s} href={`/golfefni/${s}`}>
                    {sys.name}
                  </Link>
                );
              })}
            </p>
          </li>
        ))}
      </ol>
      <section className="gallery gallery-wide stagger" aria-label="Myndir úr verkum">
        {[PICS.atnorth, PICS.arion, PICS.crackedAfter, PICS.alvotechAfter, PICS.byko, PICS.eskja, PICS.wallLandspitali, PICS.racks].map((g) => (
          <figure key={g.src} className="gallery-item cut reveal">
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
          </figure>
        ))}
      </section>
    </>
  );
}
