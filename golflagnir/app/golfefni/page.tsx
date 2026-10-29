import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/Crumbs";
import { PICS, SYSTEMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gólfefni: epoxy, polyurethan, Ucrete og terrazzo",
  description:
    "Öll gólfefni Gólflagna: epoxy í fimm styrkleikaflokkum, polyurethan, Ucrete, epoxy terrazzo, metallic, flotun, slípun og blastrac, málning og utandyra efni.",
  alternates: { canonical: "/golfefni" },
};

export default function SystemsIndex() {
  return (
    <>
      <Crumbs items={[{ name: "Gólfefni", path: "/golfefni" }]} />
      <section className="page-hero index-hero">
        <div className="page-hero-text">
        <h1>Gólfefni</h1>
        <p className="page-lead">
          Tíu lausnir, frá þunnri epoxy kápu á bílskúrsgólf upp í hitaþolið Ucrete fyrir iðnaðareldhús. Veldu gólfefni til að sjá
          eiginleika, hörðnunartíma og hvar það hentar.
        </p>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={PICS.hangar.src} alt={PICS.hangar.alt} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>
      <ul className="index-grid stagger">
        {SYSTEMS.map((s) => (
          <li key={s.slug}>
            <Link href={`/golfefni/${s.slug}`} className="index-item">
              <span className="index-pic cut reveal">
                <Image src={s.pic.src} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </span>
              <span className="index-name">{s.name}</span>
              <span className="index-text">{s.lead}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
