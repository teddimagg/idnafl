import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import Scoreboard from "@/components/Scoreboard";
import Ask from "@/components/Ask";
import Faq from "@/components/Faq";
import VideoFacade from "@/components/VideoFacade";
import { CLUBS, HOME_FAQ, isNight, PRODUCTS, PROJECTS, STATS } from "@/lib/content";
import { kr } from "@/lib/lead";
import { SERVICES } from "@/lib/site";

export default function Home() {
  const featured = PROJECTS.filter((p) => p.id !== "vatnsnes");
  return (
    <>
      <section className="hero" aria-labelledby="hero-h">
        <HeroVideo
          src="/video/flodlysing-neskaupstadur.mp4"
          poster="/img/flodlysing-neskaupstadur-poster.jpg"
          alt="Upplýstur gervigrasvöllur í Neskaupstað að kvöldi, fjörðurinn í baksýn"
        />
        <div className="hero-in">
          <h1 id="hero-h">Gervigrasvellir og flóðlýsing</h1>
          <p className="lead">
            Við leggjum velli frá A til Ö, lýsum þá upp með Musco og höldum þeim við allt árið. Líka gervigras í garðinn heima.
          </p>
          <div className="actions">
            <a className="btn btn-red" href="#fyrirspurn">
              Fá tilboð <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link className="btn btn-ghost" href="/verkefni">
              Sjá verkin
            </Link>
          </div>
        </div>
        <div className="hero-score">
          <Scoreboard stats={STATS} label="Metatron í tölum" />
        </div>
      </section>

      <Ask />

      <section className="services" aria-labelledby="services-h">
        <div className="sec-head">
          <h2 id="services-h" className="h2">
            Allt sem völlurinn þarf
          </h2>
          <p>Frá undirlagi og grasi að ljósum, vökvun og vetrarþjónustu. Eitt fyrirtæki, frá fyrstu skóflustungu að fyrsta leik.</p>
        </div>
        <ul className="tiles stagger">
          {SERVICES.map((s, i) => (
            <li key={s.href} className={i < 2 ? "tile tile-big" : "tile"}>
              <Link href={s.href}>
                <Image src={s.img} alt={s.alt} fill sizes={i < 2 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 25vw"} />
                <span className="tile-text">
                  <strong>{s.label}</strong>
                  <span>{s.line}</span>
                </span>
                <ArrowUpRight className="tile-arrow" size={22} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="fixtures" aria-labelledby="fixtures-h">
        <div className="sec-head">
          <h2 id="fixtures-h" className="h2">
            Nýlegir vellir
          </h2>
          <Link href="/verkefni" className="text-link">
            Öll verkefni <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ol className="fixture-list stagger">
          {featured.map((p) => (
            <li key={p.id} className="fixture">
              <div className={isNight(p.img) ? "fixture-media lit" : "fixture-media"}>
                {p.yt ? (
                  <VideoFacade id={p.yt} title={p.place === "Um allt land" ? p.name : `${p.name}, ${p.place}`} poster={p.img} />
                ) : (
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                )}
              </div>
              <h3>{p.name}</h3>
              <p className="fixture-meta">
                {p.place}, {p.year}
              </p>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="fifa" aria-labelledby="fifa-h">
        <Image src="/img/sun-vollurinn-fjordur.jpg" alt="" fill sizes="100vw" className="fifa-bg" />
        <div className="fifa-in">
          <h2 id="fifa-h" className="h2">
            FIFA-vottaðir vellir
          </h2>
          <p>
            Vellirnir okkar uppfylla staðla og próf FIFA. Við vinnum með alþjóðlegum vottunaraðilum sem koma reglulega til landsins og
            taka út velli, bæði FIFA Quality og FIFA Quality PRO. Er komið að endurnýjun úttektar?
          </p>
          <Link href="/gervigrasvellir" className="text-link">
            Gervigrasvellir frá A til Ö <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <div className="clubs">
            <p>Meðal félaga sem við höfum unnið með</p>
            <ul>
              {CLUBS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="garden" aria-labelledby="garden-h">
        <div className="garden-in">
          <div className="garden-pic">
            <Image src="/img/gardagras-vatnsnes-2.jpg" alt="Garðagras við Vatnsnes í Keflavík séð úr lofti" fill sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="garden-text">
            <h2 id="garden-h" className="h2">
              Sömu gæði í garðinn heima
            </h2>
            <p>SYNLawn garðagras sem þarf hvorki slátt né vökvun, með 15 ára ábyrgð. Reiknaðu grasið á netinu og veldu hvort við leggjum það.</p>
            <ul className="price-list">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <span>{p.name}</span>
                  <strong>{kr(p.price)}/m²</strong>
                </li>
              ))}
            </ul>
            <Link href="/gervigras-i-gardinn" className="btn btn-red">
              Reikna grasið <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <p className="garden-golf">
              Púttflöt í garðinn? Systurfélagið <a href="https://www.golfstofan.is/puttflot">Golfstofan</a> sér um golfið.
            </p>
          </div>
        </div>
      </section>

      <Faq items={HOME_FAQ} />
    </>
  );
}
