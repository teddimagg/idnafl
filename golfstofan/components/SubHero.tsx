import Image from "next/image";
import Link from "next/link";
import Estimator from "./Estimator";
import { SITE } from "@/lib/site";
import type { ProjectType } from "@/lib/pricing";

type Props = {
  crumb: string;
  title: string;
  lead: string;
  img: string;
  alt: string;
  initial: ProjectType;
  focus?: string;
};

/** Haus undirsíðna: mynd, fyrirsögn og reiknivélin, stillt á þá gerð verks sem síðan fjallar um. */
export default function SubHero({ crumb, title, lead, img, alt, initial, focus = "50% 60%" }: Props) {
  return (
    <section className="hero hero-sub" aria-labelledby="hero-h">
      <Image src={img} alt={alt} fill priority sizes="100vw" className="hero-bg" style={{ objectPosition: focus }} />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-in">
        <div className="hero-copy">
          <nav className="crumbs" aria-label="Brauðmolar">
            <Link href="/">Golfstofan</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1 id="hero-h">{title}</h1>
          <p className="hero-lead">{lead}</p>
          <p className="hero-call">
            Eða hringdu í <a href={SITE.phoneHref}>{SITE.phone}</a>
          </p>
        </div>
        <div className="hero-card" id="reikna" role="region" aria-label="Reiknivél">
          <Estimator initial={initial} />
        </div>
      </div>
    </section>
  );
}
