import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Estimator from "@/components/Estimator";
import GrassIndex from "@/components/GrassIndex";
import VideoFacade from "@/components/VideoFacade";
import BeforeAfter from "@/components/BeforeAfter";
import Faq from "@/components/Faq";
import { GRASSES, HOME_FAQ, STEPS } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-h">
        <Image src="/img/oddur-flot.png" alt="" fill priority sizes="100vw" className="hero-bg" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-in">
          <div className="hero-copy">
            <h1 id="hero-h">Gervigras fyrir garðinn og golfið</h1>
            <p className="hero-lead">
              SYNLawn gervigras í garða, á svalir og golfvelli. Sama gras og í TGL. Sláðu inn fermetrana og sjáðu
              verðið strax.
            </p>
            <p className="hero-call">
              Eða hringdu í <a href={SITE.phoneHref}>{SITE.phone}</a>
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
            <p className="process-sub">Garður í Garðabæ. Dragðu sleðann.</p>
            <ol className="steps">
              {STEPS.map(({ title, text }) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <Link href="/puttflot" className="text-link">
              Púttflöt í garðinn <ArrowRight size={16} aria-hidden="true" />
            </Link>
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
              TGL, golfdeildin sem Tiger Woods og Rory McIlroy stofnuðu, er spiluð á grasi frá SYNLawn. Við lögðum fyrsta TGL-kerfið í Evrópu hjá
              Golfklúbbnum Oddi.
            </p>
            <Link href="/golfklubbar" className="text-link text-link-dark">
              Flatir og æfingasvæði fyrir golfklúbba <ArrowRight size={16} aria-hidden="true" />
            </Link>
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

      <Faq items={HOME_FAQ} />
    </>
  );
}
