import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Persónuvernd",
  description: `Hvernig ${SITE.legalName} fer með upplýsingar sem þú sendir í gegnum vefinn.`,
  alternates: { canonical: "/personuvernd" },
};

export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Persónuvernd", path: "/personuvernd" }])} />
      <PageHead crumb="Persónuvernd" title="Persónuvernd" lead="Stutt og skýrt: við notum upplýsingarnar sem þú sendir okkur aðeins til að svara þér." />
      <section className="prose">
        <h2>Hvaða upplýsingum er safnað?</h2>
        <p>
          Þegar þú sendir fyrirspurn fáum við nafn, símanúmer og lýsingu á verkinu ef þú gefur hana upp. Vefurinn notar engar vafrakökur til
          að fylgjast með þér og engin auglýsingakerfi.
        </p>
        <h2>Til hvers?</h2>
        <p>
          Til að svara fyrirspurninni og koma henni til þess fyrirtækis Iðnafls sem sér um verkið: Gólflagna, Metatron eða Golfstofunnar.
          Upplýsingarnar eru ekki seldar né afhentar öðrum í markaðsskyni.
        </p>
        <h2>Hver vinnur með þær?</h2>
        <p>
          Ábyrgðaraðili er {SITE.legalName}, {SITE.address}. Fyrirspurnir eru sendar okkur í gegnum þjónustuna Formspree, sem geymir þær fyrir
          okkur samkvæmt stöðluðum samningsákvæðum um flutning persónuupplýsinga.
        </p>
        <h2>Hversu lengi?</h2>
        <p>Eins lengi og þarf til að ljúka erindinu og uppfylla bókhaldsskyldur ef til viðskipta kemur.</p>
        <h2>Réttindi þín</h2>
        <p>
          Þú getur beðið um að sjá, leiðrétta eða eyða upplýsingum um þig með því að senda á <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          Þú getur einnig leitað til Persónuverndar á personuvernd.is.
        </p>
      </section>
    </>
  );
}
