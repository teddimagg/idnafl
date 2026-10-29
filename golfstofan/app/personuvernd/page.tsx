import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Persónuvernd",
  description: `Hvernig Golfstofan og ${SITE.legalName} fara með upplýsingar sem þú sendir í gegnum vefinn.`,
  alternates: { canonical: "/personuvernd" },
};

export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Persónuvernd", path: "/personuvernd" }])} />
      <section className="page-band" aria-labelledby="page-h">
        <div className="page-band-in">
          <nav className="crumbs" aria-label="Brauðmolar">
            <Link href="/">Golfstofan</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Persónuvernd</span>
          </nav>
          <h1 id="page-h">Persónuvernd</h1>
          <p className="hero-lead">Stutt og skýrt: við notum upplýsingarnar sem þú sendir okkur aðeins til að svara þér.</p>
        </div>
      </section>
      <section className="prose">
        <h2>Hvaða upplýsingum er safnað?</h2>
        <p>
          Þegar þú notar reiknivélina fáum við nafn, símanúmer og, ef þú gefur það upp, netfang, ásamt stærð og gerð verksins. Vefurinn
          notar engar vafrakökur til að fylgjast með þér og engin auglýsingakerfi. Myndbönd frá YouTube hlaðast aðeins ef þú smellir á
          þau.
        </p>
        <h2>Til hvers?</h2>
        <p>Til að svara fyrirspurninni, bóka skoðun og gera tilboð. Upplýsingarnar eru ekki seldar né afhentar öðrum í markaðsskyni.</p>
        <h2>Hver vinnur með þær?</h2>
        <p>
          Ábyrgðaraðili er {SITE.legalName}, {SITE.address}, sem rekur Golfstofuna. Fyrirspurnir eru sendar okkur í gegnum þjónustuna
          Formspree, sem geymir þær fyrir okkur samkvæmt stöðluðum samningsákvæðum um flutning persónuupplýsinga.
        </p>
        <h2>Hversu lengi?</h2>
        <p>Eins lengi og þarf til að ljúka erindinu og uppfylla bókhaldsskyldur ef til viðskipta kemur.</p>
        <h2>Réttindi þín</h2>
        <p>
          Þú getur beðið um að sjá, leiðrétta eða eyða upplýsingum um þig með því að senda á{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Þú getur einnig leitað til Persónuverndar á personuvernd.is.
        </p>
      </section>
    </>
  );
}
