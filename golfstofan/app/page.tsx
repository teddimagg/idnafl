import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Estimator from "@/components/Estimator";
import GrassIndex, { type Grass } from "@/components/GrassIndex";
import VideoFacade from "@/components/VideoFacade";
import BeforeAfter from "@/components/BeforeAfter";
import Motion from "@/components/Motion";
import { CONTACT } from "@/lib/lead";

const GRASSES: Grass[] = [
  {
    name: "PrecisionPutt",
    use: "Púttflatir heima og á golfvöllum",
    pile: "10 mm",
    text: "Rúllar á 10–12 STIMP, eins og keppnisflöt.",
    img: "/img/gras-precisionputt.png",
    href: "#reikna-puttflot",
  },
  {
    name: "TeeStrike+",
    use: "Teigar og æfingasvæði",
    pile: "29 mm",
    text: "Þú getur tíað í það eins og á alvöru teig.",
    img: "/img/gras-teestrike.png",
    href: "#reikna-golfvollur",
  },
  {
    name: "SYNNatural 50L",
    use: "Garðar og leiksvæði",
    pile: "50 mm",
    text: "Stráin snúa í allar áttir. Eins nálægt alvöru garðagrasi og til er.",
    img: "/img/gras-synnatural.png",
    href: "#reikna-gardur",
  },
  {
    name: "SYNAugustine 347",
    use: "Garðar, svalir og kargi",
    pile: "45 mm",
    text: "Fjölhæft gras í garðinn, á svalirnar og í karga.",
    img: "/img/gras-synaugustine.png",
    href: "#reikna-svalir",
  },
  {
    name: "SYNFringe",
    use: "Kantur í kringum flatir",
    pile: "25 mm",
    text: "Stuttklippt kargagras sem rammar flötina inn.",
    img: "/img/gras-synfringe.png",
    href: "#reikna-puttflot",
  },
];

const FAQ = [
  {
    q: "Hvað kostar gervigras á fermetra?",
    a: "Í garði frá um 15.000 kr. á m² með jarðvinnu og lögn. Á svölum minna, púttflatir meira. Reiknivélin efst gefur viðmið og við staðfestum verðið eftir skoðun.",
  },
  {
    q: "Þarf að slá eða vökva?",
    a: "Nei. Grasið helst grænt allt árið. Það þarf bara að bursta það og blása af því laufi öðru hverju.",
  },
  {
    q: "Þolir það íslenskan vetur?",
    a: "Já. Það þolir frost og snjó og vatn rennur niður í malarlagið undir, svo það myndast hvorki drulla né pollar.",
  },
  {
    q: "Leggið þið á svalir og sameignir?",
    a: "Já. Á hörðu undirlagi þarf enga jarðvinnu og verðið er lægra.",
  },
];

const STEPS = [
  { title: "Við mælum", text: "Þú sendir fermetrana, við skoðum svæðið og þú færð skriflegt tilboð." },
  { title: "Við undirbúum", text: "Gamla yfirborðið fer og malarlag er þjappað og jafnað." },
  { title: "Við leggjum grasið", text: "Lagt, saumað og fest. Enginn sláttur eftir það." },
];

export default function Home() {
  return (
    <>
      <Motion />
      <a className="skip" href="#efni">
        Fara í efni
      </a>

      <header className="nav">
        <div className="nav-in">
          <a href="#" className="wordmark" aria-label="Golfstofan, efst á síðu">
            Golfstofan
          </a>
          <a href={CONTACT.phoneHref} className="nav-phone">
            <Phone size={16} aria-hidden="true" />
            {CONTACT.phone}
          </a>
          <a href="#reikna" className="btn btn-lime nav-cta">
            Reikna verð
          </a>
        </div>
      </header>

      <main id="efni">
        <section className="hero" aria-labelledby="hero-h">
          <Image src="/img/oddur-flot.png" alt="" fill priority sizes="100vw" className="hero-bg" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-in">
            <div className="hero-copy">
              <h1 id="hero-h">
                Gervigras fyrir garðinn og golfið
              </h1>
              <p className="hero-lead">
                SYNLawn gervigras í garða, á svalir og golfvelli. Sama gras og í TGL. Sláðu inn fermetrana og sjáðu
                verðið strax.
              </p>
              <p className="hero-call">
                Eða hringdu í <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
            </div>
            <div className="hero-card" id="reikna" role="region" aria-label="Reiknivél">
              <Estimator />
            </div>
          </div>
        </section>

        <section className="process" aria-labelledby="ferlid-h">
          <div className="process-grid">
            <div>
              <BeforeAfter
                before="/img/gardabaer-fyrir.jpg"
                after="/img/gardabaer-eftir.png"
                alt={["Garðurinn áður: sina, mold og möl", "Garðurinn eftir: gervigras og púttflöt"]}
              />
            </div>
            <div>
              <h2 id="ferlid-h" className="h2">
                Sami garður, fyrir og eftir
              </h2>
              <p className="process-sub">
                Garður í Garðabæ. Dragðu sleðann.
              </p>
              <ol className="steps">
                {STEPS.map(({ title, text }) => (
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="tgl" aria-labelledby="tgl-h">
          <div className="tgl-in">
            <div className="tgl-copy">
              <h2 id="tgl-h" className="h2">
                Sama gras og í TGL
              </h2>
              <p>
                TGL, golfdeild Tiger Woods og Rory McIlroy, er spiluð á SYNLawn. Við lögðum fyrsta TGL-kerfið í
                Evrópu hjá Golfklúbbnum Oddi.
              </p>
              <div className="marks">
                <Image src="/img/logo-synlawn.png" alt="SYNLawn" width={615} height={492} />
                <Image src="/img/logo-musco.svg" alt="Musco lýsing" width={177} height={57} className="m-musco" />
                <Image src="/img/logo-metatron.png" alt="Metatron" width={512} height={512} className="m-metatron" />
              </div>
            </div>
            <div className="tgl-frame wipe">
              <Image
                src="/img/tgl-arena.jpg"
                alt="Flöt og glompur í TGL-höllinni, lagðar SYNLawn grasi"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
          </div>
        </section>

        <section className="grass" id="grasid" aria-labelledby="grasid-h">
          <GrassIndex items={GRASSES} />
        </section>

        <section className="work" aria-labelledby="verkin-h">
          <h2 id="verkin-h" className="h2 work-h">
            Sjáðu verkin
          </h2>
          <div className="videos">
            <div className="wipe">
              <VideoFacade id="UfDxVSzc3XU" title="Púttflöt og garður í Garðabæ" poster="/img/gardabaer-eftir.png" />
            </div>
            <div className="wipe">
              <VideoFacade id="gtkQF88LuVk" title="Golfklúbburinn Oddur" poster="/img/oddur-flot.png" />
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-h">
          <h2 id="faq-h" className="h2">
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
      </main>

      <footer className="foot" id="hafa-samband">
        <div className="foot-in">
          <h2 className="h2">Fáðu tilboð í þitt verk</h2>
          <div className="foot-actions">
            <a className="btn btn-lime" href="#reikna">
              Reikna verð <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-white" href={CONTACT.phoneHref}>
              <Phone size={18} aria-hidden="true" /> {CONTACT.phone}
            </a>
          </div>
        </div>
        <p className="foot-legal">
          Golfstofan, hluti af Iðnafli ehf. · {CONTACT.address} ·{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </footer>

      <a href="#reikna" className="mobile-cta btn btn-lime">
        Reikna verð <ArrowRight size={18} aria-hidden="true" />
      </a>
    </>
  );
}
