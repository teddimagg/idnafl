import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import { PEOPLE, type Person } from "@/lib/content";
import { JsonLd, breadcrumbs, orgId } from "@/lib/seo";
import { COMPANIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mannauður",
  description:
    "Fólkið hjá Iðnafli, Gólflögnum og Metatron. Ármann Andri Einarsson framkvæmdastjóri, Guðmundur Breiðfjörð rekstrarstjóri og 15 manna teymi.",
  alternates: { canonical: "/mannaudur" },
};

const GROUPS: { title: string; match: (p: Person) => boolean }[] = [
  { title: "Stjórnendur og skrifstofa", match: (p) => !!p.role },
  { title: "Gólflagnir", match: (p) => !p.role && p.company === "golflagnir" },
  { title: "Metatron", match: (p) => !p.role && p.company === "metatron" },
];

export default function People() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbs([{ name: "Mannauður", path: "/mannaudur" }]),
          ...PEOPLE.filter((p) => p.role).map((p) => ({
            "@context": "https://schema.org",
            "@type": "Person",
            name: p.name,
            jobTitle: p.role,
            email: p.email,
            worksFor: { "@id": orgId },
          })),
        ]}
      />
      <PageHead
        crumb="Mannauður"
        title="Mannauður"
        lead="Iðnafl býr yfir öflugum mannauði, með áherslu á traust, þekkingu og jákvæð samskipti í starfi."
      />
      {GROUPS.map((g) => {
        const list = PEOPLE.filter(g.match);
        return (
          <section key={g.title} className="team" aria-label={g.title}>
            <h2 className="h3">{g.title}</h2>
            <ul className="people-list stagger">
              {list.map((p) => (
                <li key={p.name}>
                  <div className="person-pic">
                    {p.img ? (
                      <Image src={p.img} alt={p.name} fill sizes="(max-width: 700px) 50vw, 20vw" />
                    ) : (
                      <Image src="/brand/idnafl-mark-wordmark.png" alt="" width={1251} height={1000} className="person-mark" />
                    )}
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.role ?? (p.company === "idnafl" ? "Iðnafl" : COMPANIES[p.company].name)}</p>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
