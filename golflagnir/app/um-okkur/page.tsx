import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Crumbs from "@/components/Crumbs";
import { PICS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Um Gólflagnir: sérfræðingar í iðnaðargólfum í yfir 30 ár",
  description:
    "Gólflagnir hafa lagt epoxy og polyurethan gólf á Íslandi í yfir 30 ár. SS Gólf hefur sameinast Gólflögnum og fyrirtækið er hluti af Iðnafli.",
  alternates: { canonical: "/um-okkur" },
};

export default function About() {
  return (
    <>
      <Crumbs items={[{ name: "Um okkur", path: "/um-okkur" }]} />
      <section className="page-hero" aria-labelledby="page-h">
        <div className="page-hero-text">
          <h1 id="page-h">Sérfræðingar í iðnaðargólfum</h1>
          <p className="page-lead">
            Gólflagnir hafa lagt gólf á Íslandi í yfir 30 ár og eru í dag hluti af Iðnafli, sem er leiðandi í lausnum á sviði
            iðnaðargólfa, gervigrasvalla og lýsingar.
          </p>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={PICS.grinders.src} alt={PICS.grinders.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="prose-sec" aria-labelledby="saga-h">
        <div className="prose">
          <h2 id="saga-h" className="h2">
            Gólflagnir og SS Gólf
          </h2>
          <p>
            Gólflagnir hafa frá upphafi verið leiðandi á Íslandi í iðnaðargólfefnum og þjónustað stór og smá fyrirtæki. Topp 4000,
            Maxi 700 og Maxi 5000 eru skrásett vörumerki Gólflagna.
          </p>
          <p>
            SS Gólf, sem hefur sérhæft sig í lagningu epoxy gólfa fyrir fyrirtæki og einstaklinga, hefur sameinast Gólflögnum.
            Starfsmenn beggja búa yfir áratuga reynslu og hafa áunnið sér traust viðskiptavina sem leita í gæði og vönduð
            vinnubrögð.
          </p>
          <p>
            Hjá okkur starfa sérhæfðir iðnmeistarar og iðnaðarmenn og við eigum öflugasta safn stórra slípivéla landsins.
          </p>
        </div>
        <ul className="needs stagger">
          <li>Vönduð vinnubrögð</li>
          <li>Frí ráðgjöf og mat</li>
          <li>3 ára ábyrgð á efni og vinnu</li>
          <li>Hvert á land sem er</li>
        </ul>
      </section>

      <section className="prose-sec" aria-labelledby="abyrgd-h">
        <div className="prose">
          <h2 id="abyrgd-h" className="h2">
            Ábyrgð og þjónusta
          </h2>
          <p>
            Gólflagnir bera ábyrgð á efni og vinnu í þrjú ár. Ábyrgðin nær ekki til bilunar í undirlagi og þess vegna leggjum við
            áherslu á góðan undirbúning, slípun og viðgerðir áður en gólfið er lagt.
          </p>
          <p>
            Við komum og skoðum verkið að kostnaðarlausu á suðvesturhorninu. Aðra staði heimsækjum við gegn ferðakostnaði en
            launalaust. Við leggjum áherslu á að standa við tímasetningar og vinnum í samráði við aðra verktaka á staðnum.
          </p>
          <p>
            <Link href="/hafa-samband">Hafðu samband</Link> og við ráðleggjum hvaða gólfefni hentar.
          </p>
        </div>
      </section>
      <section className="gallery stagger" aria-label="Gólflagnir að störfum">
        {[PICS.blastrac, PICS.trowel, PICS.grindDrive, PICS.levelRoom].map((g) => (
          <figure key={g.src} className="gallery-item cut reveal">
            <Image src={g.src} alt={g.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
          </figure>
        ))}
      </section>
    </>
  );
}
