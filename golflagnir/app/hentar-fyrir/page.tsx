import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/Crumbs";
import { PICS, USES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gólf eftir rýmum: matvælaiðnaður, bílskúrar, verkstæði og fleira",
  description:
    "Hvaða gólf hentar rýminu þínu? Gólf fyrir matvælaiðnað, fiskvinnslu, iðnaðareldhús, gagnaver, verkstæði, bílastæðahús, lager, skóla, verslanir, heimili og bílskúra.",
  alternates: { canonical: "/hentar-fyrir" },
};

export default function UsesIndex() {
  return (
    <>
      <Crumbs items={[{ name: "Hentar fyrir", path: "/hentar-fyrir" }]} />
      <section className="page-hero index-hero">
        <div className="page-hero-text">
        <h1>Hvaða gólf hentar rýminu?</h1>
        <p className="page-lead">
          Fiskvinnsla þarf annað gólf en bílskúr. Veldu rýmið og sjáðu hvað gólfið þarf að þola og hvaða lausn við mælum með.
        </p>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={PICS.food.src} alt={PICS.food.alt} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>
      <ul className="index-grid stagger">
        {USES.map((u) => (
          <li key={u.slug}>
            <Link href={`/hentar-fyrir/${u.slug}`} className="index-item">
              <span className="index-pic cut reveal">
                <Image src={u.pic.src} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </span>
              <span className="index-name">{u.name}</span>
              <span className="index-text">{u.lead}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
