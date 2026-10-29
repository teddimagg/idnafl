import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/Crumbs";
import Datasheet from "@/components/Datasheet";
import { DATASHEET_LIST } from "@/lib/datasheets";
import { PICS, systemBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tækniblöð fyrir gólfefni",
  description: "Tækniblöð fyrir gólfefni Gólflagna: Maxi 700, Maxi 1500, Topp 4000, Maxi 500, Maxi 5000, Maxi Flex 5000, Maxi Crete, terrazzo og fleira.",
  alternates: { canonical: "/taekniblod" },
};

export default function Sheets() {
  return (
    <>
      <Crumbs items={[{ name: "Tækniblöð", path: "/taekniblod" }]} />
      <section className="page-hero index-hero">
        <div className="page-hero-text">
          <h1>Tækniblöð</h1>
          <p className="page-lead">
            Við erum að uppfæra tækniblöðin fyrir öll gólfefnin. Þau sem eru tilbúin má sækja hér; hin sendum við þér um hæl.
          </p>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={PICS.trowel.src} alt={PICS.trowel.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>
      <div className="sheet-wrap">
      <table className="sheet-table">
        <thead>
          <tr>
            <th scope="col">Gólfefni</th>
            <th scope="col">Flokkur</th>
            <th scope="col">Tækniblað</th>
          </tr>
        </thead>
        <tbody className="stagger">
          {DATASHEET_LIST.map((d) => {
            const s = systemBySlug(d.system)!;
            return (
              <tr key={d.id}>
                <th scope="row">{d.name}</th>
                <td>
                  <Link href={`/golfefni/${s.slug}`}>{s.name}</Link>
                </td>
                <td>
                  <Datasheet id={d.id} name={d.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}
