import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import Estimator from "@/components/Estimator";
import { USES, systemBySlug, useBySlug } from "@/lib/content";
import { JsonLd, faqPage, service } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return USES.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const u = useBySlug((await params).slug);
  if (!u) return {};
  return {
    title: u.title,
    description: u.description,
    alternates: { canonical: `/hentar-fyrir/${u.slug}` },
    openGraph: { title: `${u.h1} | Gólflagnir`, description: u.description, url: `/hentar-fyrir/${u.slug}`, images: [{ url: u.pic.src, alt: u.pic.alt }] },
  };
}

export default async function UsePage({ params }: { params: Promise<{ slug: string }> }) {
  const u = useBySlug((await params).slug);
  if (!u) notFound();
  const others = USES.filter((x) => x.slug !== u.slug);

  return (
    <>
      <JsonLd data={service({ name: u.h1, description: u.description, path: `/hentar-fyrir/${u.slug}`, image: u.pic.src })} />
      {u.faq && <JsonLd data={faqPage(u.faq)} />}
      <Crumbs items={[{ name: "Hentar fyrir", path: "/hentar-fyrir" }, { name: u.name, path: `/hentar-fyrir/${u.slug}` }]} />

      <section className="page-hero" aria-labelledby="page-h">
        <div className="page-hero-text">
          <h1 id="page-h">{u.h1}</h1>
          <p className="page-lead">{u.lead}</p>
          <div className="page-actions">
            <a className="btn btn-red" href={`#verd-${u.room}`}>
              Reikna verð <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={SITE.phoneHref}>
              <Phone size={18} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={u.pic.src} alt={u.pic.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="prose-sec" aria-labelledby="krofur-h">
        <div className="prose">
          <h2 id="krofur-h" className="h2">
            Hvað gólfið þarf að þola
          </h2>
          {u.intro.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
        <ul className="needs stagger">
          {u.needs.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="picks" aria-labelledby="maelum-h">
        <h2 id="maelum-h" className="h2">
          Við mælum með
        </h2>
        <ol className="pick-list stagger">
          {u.picks.map((p) => {
            const s = systemBySlug(p.system)!;
            return (
              <li key={p.system}>
                <Link href={`/golfefni/${s.slug}`} className="pick">
                  <span className="pick-pic cut reveal">
                    <Image src={s.pic.src} alt="" fill sizes="(max-width: 900px) 40vw, 20vw" />
                  </span>
                  <span className="pick-body">
                    <span className="pick-name">{s.name}</span>
                    <span className="pick-why">{p.why}</span>
                    <span className="pick-go">
                      Nánar <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="fit" aria-labelledby="verd-h">
        <div className="fit-text">
          <h2 id="verd-h" className="h2">
            Hvað kostar gólfið?
          </h2>
          <p>
            Reiknivélin gefur viðmiðunarverð með vsk., efni og vinnu. Eftir skoðun gerum við bindandi tilboð og ráðgjöfin
            kostar ekkert.
          </p>
          {u.faq && (
            <div className="faq-list faq-inline">
              {u.faq.map((f) => (
                <details key={f.q} name="faq">
                  <summary>
                    <span>{f.q}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
        <div className="fit-calc" id="verd">
          <Estimator initialRoom={u.room} compact />
        </div>
      </section>

      <nav className="more" aria-labelledby="fleiri-h">
        <h2 id="fleiri-h" className="h2">
          Önnur rými
        </h2>
        <ul>
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/hentar-fyrir/${o.slug}`}>{o.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
