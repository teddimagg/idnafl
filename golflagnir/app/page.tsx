import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Estimator from "@/components/Estimator";
import HeroPhotos from "@/components/HeroPhotos";
import UseTabs from "@/components/UseTabs";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import BeforeAfter from "@/components/BeforeAfter";
import { CLIENTS, FAQ, PICS, PROJECTS, SYSTEMS, USES } from "@/lib/content";
import { SYSTEMS as PRICES, kr } from "@/lib/pricing";
import { JsonLd, faqPage } from "@/lib/seo";
import { SITE } from "@/lib/site";

/** Lægsta viðmiðunarverð á fermetra fyrir hvert gólfkerfi sem hefur verð í reiknivélinni. */
const FROM: Record<string, string> = {
  "epoxy-golf": "maxi-700",
  polyurethan: "polyurethan",
  ucrete: "ucrete",
  "epoxy-terrazzo": "terrazzo",
  "metallic-epoxy": "metallic",
  "slipun-og-blastrac": "slipun",
};
const fromPrice = (slug: string) => {
  const id = FROM[slug];
  const s = PRICES.find((p) => p.id === id);
  return s ? `frá ${kr(s.perM2[0])}/m²` : "Verð eftir verki";
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPage(FAQ)} />

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-card">
          <h1 id="hero-h">Epoxy gólf og iðnaðargólf</h1>
          <p className="hero-lead">
            Samskeytalaus epoxy-, polyurethan- og terrazzogólf, lögð um allt land í yfir 30 ár. Veldu rými og sjáðu verðið strax.
          </p>
          <div id="verd" className="hero-calc">
            <Estimator />
          </div>
        </div>
        <div className="hero-side">
          <HeroPhotos pics={[PICS.atnorth, PICS.corridor, PICS.trucks, PICS.racks]} priority />
        </div>
      </section>

      <section className="menu" aria-labelledby="golfefni-h">
        <div className="menu-head">
          <h2 id="golfefni-h" className="h2">
            Gólfefnin
          </h2>
          <p>
            Tíu lausnir, frá þunnri epoxy kápu upp í hitaþolið Ucrete. Verð er viðmið á fermetra með vsk., efni og
            vinnu.
          </p>
        </div>
        <ul className="menu-list stagger">
          {SYSTEMS.map((s) => (
            <li key={s.slug}>
              <Link href={`/golfefni/${s.slug}`} className="menu-item">
                <span className="menu-pic">
                  <Image src={s.pic.src} alt="" width={128} height={128} sizes="72px" />
                </span>
                <span className="menu-body">
                  <span className="menu-line">
                    <span className="menu-name">{s.name}</span>
                    <span className="menu-price">{fromPrice(s.slug)}</span>
                  </span>
                  <span className="menu-text">{s.lead}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="uses" aria-labelledby="hentar-h">
        <h2 id="hentar-h" className="h2 uses-h">
          Rétt gólf fyrir rýmið
        </h2>
        <UseTabs uses={USES.filter((u) => ["matvaelaidnadur", "fiskvinnsla", "bilskurar", "verkstaedi", "lagergolf", "heimili"].includes(u.slug))} />
        <p className="uses-more">
          <Link href="/hentar-fyrir">
            Öll rými sem við leggjum í <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
      </section>

      <section className="steps" aria-labelledby="ferli-h">
        <div className="steps-head">
          <h2 id="ferli-h" className="h2">
            Svona vinnum við
          </h2>
          <p>
            Frá fyrstu mynd til fullharðnaðs gólfs. Ráðgjöf og skoðun á suðvesturhorninu kosta ekkert og tilboðið sem þú færð er
            bindandi.
          </p>
        </div>
        <Process />
      </section>

      <section className="cracked" aria-labelledby="cracked-h">
        <div className="cracked-in">
          <BeforeAfter
            before={PICS.crackedBefore.src}
            after={PICS.crackedAfter.src}
            alt={[PICS.crackedBefore.alt, PICS.crackedAfter.alt]}
          />
          <div className="cracked-text">
            <h2 id="cracked-h" className="h2">
              Sprungið gólf, nýtt gólf
            </h2>
            <p>
              Verkstæðisgólfið í Klettagörðum var mjög sprungið. Það var blastrac-blásið, grunnað með teygjanlegu epoxy og 500 gólf
              lagt yfir. Dragðu sleðann til að sjá muninn.
            </p>
            <Link href="/golfefni/flex" className="text-link">
              Svona leggjum við yfir sprungin gólf <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="proof" aria-labelledby="proof-h">
        <div className="board stagger">
          <div className="tile tile-red">
            <h2 id="proof-h">Gólf sem standast álag</h2>
            <p>Nokkur nýleg verk. Topp 4000, Maxi 700 og Maxi 5000 eru skrásett vörumerki Gólflagna.</p>
          </div>
          {PROJECTS.slice(0, 4).map((p) => (
            <Link key={p.slug} href="/verkefni" className="tile">
              <span className="tile-name">{p.name}</span>
              <span className="tile-what">{p.what}</span>
            </Link>
          ))}
          <div className="tile tile-clients">
            <h3>Meðal viðskiptavina</h3>
            <p>{CLIENTS.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-h">
        <h2 id="faq-h" className="h2 faq-h">
          Spurt og svarað
        </h2>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-h">
        <div className="contact-in">
          <div className="contact-text">
            <h2 id="contact-h" className="h2">
              Stærra verk?
            </h2>
            <p>
              Sendu okkur lýsingu, myndir eða teikningar á <a href={`mailto:${SITE.email}`}>{SITE.email}</a> eða skrifaðu
              stutta lýsingu hér. Við ráðleggjum hvaða gólfefni hentar og gerum bindandi tilboð.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
