import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import PageHead from "@/components/PageHead";
import { POLICIES, SDGS, STANDARDS, VALUES } from "@/lib/content";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gæðakerfi, sjálfbærni og umhverfisstefna",
  description:
    "Gæðakerfi Iðnafls: innra eftirlit byggt á COSO, sjálfbærnistefna, samfélagsleg ábyrgð og umhverfisstefna. Við fylgjum ISO 9001, ISO 45001 og ISO 26000.",
  alternates: { canonical: "/gaedakerfi" },
};

export default function Quality() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbs([{ name: "Gæðakerfi", path: "/gaedakerfi" }]),
          ...POLICIES.map((p) => ({
            "@context": "https://schema.org",
            "@type": "DigitalDocument",
            name: `${p.title} Iðnafls`,
            url: `${SITE.url}${p.file}`,
            encodingFormat: "application/pdf",
            inLanguage: "is",
            publisher: { "@type": "Organization", name: SITE.legalName },
          })),
        ]}
      />
      <PageHead
        crumb="Gæðakerfi"
        title="Gæðakerfi"
        lead="Gæðastýring sem tryggir fagleg vinnubrögð og stöðuga þróun í öllum verkferlum Iðnafls, Gólflagna, Metatron og Golfstofunnar."
      />

      <section className="docs" aria-labelledby="docs-h">
        <h2 id="docs-h" className="sr">
          Stefnur og skjöl
        </h2>
        <ul className="doc-list stagger">
          {POLICIES.map((p) => (
            <li key={p.file}>
              <a href={p.file} download>
                <div className="doc-cover frame">
                  <Image src={p.cover} alt="" fill sizes="(max-width: 700px) 50vw, 22vw" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="doc-meta">
                  <Download size={16} aria-hidden="true" /> PDF, {p.size}. Uppfært í {p.updated}.
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="quality" aria-labelledby="values-h">
        <div className="quality-in">
          <div>
            <h2 id="values-h" className="h2">
              Gildin
            </h2>
            <p>Sex gildi sem stefnur Iðnafls byggja á og við mælum verkin okkar við.</p>
          </div>
          <ul className="values stagger">
            {VALUES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="refs" aria-labelledby="refs-h">
        <div className="refs-in">
          <div>
            <h2 id="refs-h" className="h2">
              Heimsmarkmið og staðlar
            </h2>
            <p>Sjálfbærnistefnan tengir starfið við fjögur heimsmarkmið Sameinuðu þjóðanna. Í gæða-, öryggis- og samfélagsmálum fylgjum við þremur ISO-stöðlum.</p>
          </div>
          <div className="refs-cols">
            <ul className="ref-list">
              {SDGS.map((g) => (
                <li key={g.n}>
                  <strong>Heimsmarkmið {g.n}</strong>
                  <span>{g.t}</span>
                </li>
              ))}
            </ul>
            <ul className="ref-list">
              {STANDARDS.map((s) => (
                <li key={s.n}>
                  <strong>{s.n}</strong>
                  <span>{s.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
