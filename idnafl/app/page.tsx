import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Router from "@/components/Router";
import ProjectGrid from "@/components/ProjectGrid";
import Faq from "@/components/Faq";
import { HOME_FAQ, PEOPLE, PROJECTS, VALUES } from "@/lib/content";
import { COMPANIES, COMPANY_ORDER, SITE } from "@/lib/site";

export default function Home() {
  const leaders = PEOPLE.filter((p) => p.role).slice(0, 4);
  return (
    <>
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-in">
          <div className="hero-copy">
            <h1 id="hero-h">
              <span className="sr">Iðnafl. </span>Leiðandi í lausnum
            </h1>
            <p className="lead">
              Þrjú sérhæfð fyrirtæki og eitt 15 manna teymi. Iðnaðargólf, gervigrasvellir, flóðlýsing og golfflatir um allt land.
            </p>
            <div className="actions">
              <a className="btn btn-red" href="#samband">
                Fáðu tilboð <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="btn btn-line" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </div>
          </div>
          <ul className="trio" aria-label="Fyrirtæki Iðnafls">
            {COMPANY_ORDER.map((id, i) => {
              const c = COMPANIES[id];
              return (
                <li key={id} className="trio-item">
                  <a href={c.url}>
                    <Image src={c.img} alt={c.alt} fill priority={i === 0} sizes="(max-width: 900px) 100vw, 1140px" />
                    <span className="trio-text">
                      <Image src={c.logoDark} alt={c.name} width={c.w} height={c.h} className="trio-logo" />
                      <span>{c.what}</span>
                    </span>
                    <ArrowUpRight className="trio-arrow" size={22} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="cos" id="fyrirtaekin" aria-labelledby="cos-h">
        <div className="sec-head">
          <h2 id="cos-h" className="h2">
            Fyrirtækin
          </h2>
          <p>Hvert fyrirtæki sérhæfir sig á sínu sviði. Saman deila þau húsnæði, gæðakerfi og fólki.</p>
        </div>
        <ol className="co-list">
          {COMPANY_ORDER.map((id) => {
            const c = COMPANIES[id];
            return (
              <li key={id} className="co">
                <div className="co-pic frame">
                  <Image src={c.photo} alt={c.photoAlt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="co-text">
                  <Image src={c.logo} alt={c.name} width={c.w} height={c.h} className="co-logo" />
                  <p>{c.text}</p>
                  <ul className="co-services">
                    {c.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a className="text-link" href={c.url}>
                    {c.host} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="ask" id="samband" aria-labelledby="ask-h">
        <div className="ask-in">
          <div className="ask-text">
            <h2 id="ask-h" className="h2">
              Hvernig getum við aðstoðað?
            </h2>
          </div>
          <Router />
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="sec-head">
          <h2 id="work-h" className="h2">
            Nýleg verk
          </h2>
          <Link href="/verkefni" className="text-link">
            Öll verkefni <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="work-in">
          <ProjectGrid items={PROJECTS} filter={false} limit={6} />
        </div>
      </section>

      <section className="quality" aria-labelledby="quality-h">
        <div className="quality-in">
          <div>
            <h2 id="quality-h" className="h2">
              Gæðakerfi
            </h2>
            <p>
              Gæðakerfið tryggir stöðuga endurskoðun, skilvirkni og áreiðanleika í öllum verkum. Við fylgjum ISO 9001, 45001 og 26000 og
              innra eftirliti byggðu á COSO. Stefnurnar byggja á sex gildum.
            </p>
            <Link href="/gaedakerfi" className="text-link">
              Stefnur og skjöl <Download size={16} aria-hidden="true" />
            </Link>
          </div>
          <ul className="values stagger" aria-label="Gildin okkar">
            {VALUES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="people" aria-labelledby="people-h">
        <div className="sec-head">
          <h2 id="people-h" className="h2">
            Fólkið
          </h2>
          <Link href="/mannaudur" className="text-link">
            Allur mannauðurinn <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="people-list stagger">
          {leaders.map((p) => (
            <li key={p.name}>
              <div className="person-pic">
                <Image src={p.img!} alt={p.name} fill sizes="(max-width: 700px) 50vw, 25vw" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.role}</p>
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </li>
          ))}
        </ul>
      </section>

      <Faq items={HOME_FAQ} />
    </>
  );
}
