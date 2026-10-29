import type { Metadata } from "next";
import Crumbs from "@/components/Crumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Persónuvernd",
  description: `Hvernig ${SITE.legalName} fara með upplýsingar sem þú sendir í gegnum vefinn.`,
  alternates: { canonical: "/personuvernd" },
};

export default function Privacy() {
  return (
    <>
      <Crumbs items={[{ name: "Persónuvernd", path: "/personuvernd" }]} />
      <section className="prose-page">
        <h1>Persónuvernd</h1>
        <p className="page-lead">Stutt og skýrt: við notum upplýsingarnar sem þú sendir okkur aðeins til að svara þér.</p>
        <h2 className="h3">Hvaða upplýsingum er safnað?</h2>
        <p>
          Þegar þú notar reiknivélina eða sendir fyrirspurn fáum við nafn, símanúmer og, ef þú gefur það upp, netfang, staðsetningu og
          lýsingu á verkinu. Vefurinn notar engar vafrakökur til að fylgjast með þér og engin auglýsingakerfi.
        </p>
        <h2 className="h3">Til hvers?</h2>
        <p>Til að svara fyrirspurninni, bóka skoðun og gera tilboð. Upplýsingarnar eru ekki seldar né afhentar öðrum í markaðsskyni.</p>
        <h2 className="h3">Hver vinnur með þær?</h2>
        <p>
          {SITE.legalName}, {SITE.address}, eru ábyrgðaraðili vinnslunnar og hluti af Iðnafli ehf. Fyrirspurnir eru sendar okkur í gegnum
          þjónustuna Formspree, sem geymir þær fyrir okkur samkvæmt stöðluðum samningsákvæðum um flutning persónuupplýsinga.
        </p>
        <h2 className="h3">Hversu lengi?</h2>
        <p>Eins lengi og þarf til að ljúka erindinu og uppfylla bókhaldsskyldur ef til viðskipta kemur.</p>
        <h2 className="h3">Réttindi þín</h2>
        <p>
          Þú getur beðið um að sjá, leiðrétta eða eyða upplýsingum um þig með því að senda á{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Þú getur einnig leitað til Persónuverndar á personuvernd.is.
        </p>
      </section>
    </>
  );
}
