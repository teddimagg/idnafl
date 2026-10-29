import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import Crumbs from "@/components/Crumbs";
import Datasheet from "@/components/Datasheet";
import Estimator from "@/components/Estimator";
import { SYSTEMS, USES, systemBySlug } from "@/lib/content";
import { DATASHEET_LIST } from "@/lib/datasheets";
import { JsonLd, faqPage, service } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = systemBySlug((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/golfefni/${s.slug}` },
    openGraph: { title: `${s.h1} | Gólflagnir`, description: s.description, url: `/golfefni/${s.slug}`, images: [{ url: s.pic.src, alt: s.pic.alt }] },
  };
}

/** Heiti gólfefnis í þolfalli á eftir „Um“. */
const ABOUT: Record<string, string> = {
  "epoxy-golf": "epoxy gólf",
  polyurethan: "polyurethan gólf",
  ucrete: "Ucrete og PU-steypu",
  "epoxy-terrazzo": "epoxy terrazzo",
  "metallic-epoxy": "metallic epoxy",
  flex: "Flex-undirlag",
  flotun: "flotun og lakkað flot",
  "slipun-og-blastrac": "slípun og blastrac",
  malning: "gólfmálningu",
  utandyra: "yfirborðsefni utandyra",
};

export default async function SystemPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = systemBySlug((await params).slug);
  if (!s) notFound();
  const sheets = DATASHEET_LIST.filter((d) => d.system === s.slug);
  const uses = s.uses.map((u) => USES.find((x) => x.slug === u)).filter(Boolean) as typeof USES;
  const others = SYSTEMS.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={service({ name: s.h1, description: s.description, path: `/golfefni/${s.slug}`, image: s.pic.src })} />
      {s.faq && <JsonLd data={faqPage(s.faq)} />}
      <Crumbs items={[{ name: "Gólfefni", path: "/golfefni" }, { name: s.name, path: `/golfefni/${s.slug}` }]} />

      <section className="page-hero" aria-labelledby="page-h">
        <div className="page-hero-text">
          <h1 id="page-h">{s.h1}</h1>
          <p className="page-lead">{s.lead}</p>
          <ul className="bullets stagger">
            {s.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="page-actions">
            <a className="btn btn-red" href={`#verd-${s.room}`}>
              Reikna verð <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={SITE.phoneHref}>
              <Phone size={18} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
        <div className="page-hero-pic cut reveal">
          <Image src={s.pic.src} alt={s.pic.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section className="prose-sec" aria-labelledby="um-h">
        <div className="prose">
          <h2 id="um-h" className="h2">
            Um {ABOUT[s.slug] ?? s.name.toLowerCase()}
          </h2>
          {s.intro.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>
        {(s.specs || s.cure) && (
          <div className="spec-box">
            <table className="spec">
              <caption>{s.cure ? "Hörðnunartími" : "Eiginleikar"}</caption>
              <tbody>
                {(s.specs ?? s.cure)!.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {s.specs && s.cure && (
              <table className="spec">
                <caption>Hörðnunartími</caption>
                <tbody>
                  {s.cure.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row">{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </section>

      {s.products && (
        <section className="products" aria-labelledby="vorur-h">
          <h2 id="vorur-h" className="h2">
            {s.slug === "epoxy-golf" ? "Fimm styrkleikaflokkar" : "Kerfin"}
          </h2>
          <ul className="product-list stagger">
            {s.products.map((p) => (
              <li key={p.id} id={p.id} className={p.pic ? "product" : "product product-solo"}>
                {p.pic && (
                  <div className="product-pic cut reveal">
                    <Image src={p.pic.src} alt={p.pic.alt} fill sizes="(max-width: 900px) 100vw, 30vw" />
                  </div>
                )}
                <div className="product-body">
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <dl className="product-specs">
                    {p.specs.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  {sheets.some((d) => d.id === p.id) && <Datasheet id={p.id} name={p.name} />}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {s.gallery && (
        <section className="gallery stagger" aria-label={`Myndir, ${s.name}`}>
          {s.gallery.map((g) => (
            <figure key={g.src} className="gallery-item cut reveal">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 900px) 50vw, 25vw" />
            </figure>
          ))}
        </section>
      )}

      <section className="fit" aria-labelledby="hentar-h">
        <div className="fit-text">
          <h2 id="hentar-h" className="h2">
            Hentar fyrir
          </h2>
          <ul className="fit-list stagger">
            {uses.map((u) => (
              <li key={u.slug}>
                <Link href={`/hentar-fyrir/${u.slug}`}>
                  {u.name} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          {sheets.filter((d) => !s.products?.some((p) => p.id === d.id)).length > 0 && (
            <div className="sheets">
              <h3>Tækniblöð</h3>
              {sheets
                .filter((d) => !s.products?.some((p) => p.id === d.id))
                .map((d) => (
                  <Datasheet key={d.id} id={d.id} name={d.name} />
                ))}
            </div>
          )}
        </div>
        <div className="fit-calc" id="verd">
          <Estimator initialRoom={s.room} compact />
        </div>
      </section>

      {s.faq && (
        <section className="faq" aria-labelledby="faq-h">
          <h2 id="faq-h" className="h2 faq-h">
            Spurt og svarað
          </h2>
          <div className="faq-list">
            {s.faq.map((f, i) => (
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
      )}

      <nav className="more" aria-labelledby="fleiri-h">
        <h2 id="fleiri-h" className="h2">
          Önnur gólfefni
        </h2>
        <ul>
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/golfefni/${o.slug}`}>{o.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
