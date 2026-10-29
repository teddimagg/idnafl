import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import HeroVideo from "./HeroVideo";
import { SITE } from "@/lib/site";

type Props = {
  crumb: string;
  title: string;
  lead: string;
  img: string;
  alt: string;
  focus?: string;
  video?: string;
};

/** Haus undirsíðna: mynd eða myndband yfir allan skjáinn með fyrirsögn neðst. */
export default function PageHero({ crumb, title, lead, img, alt, focus = "50% 50%", video }: Props) {
  return (
    <section className="phero" aria-labelledby="page-h">
      {video ? (
        <HeroVideo src={video} poster={img} alt={alt} />
      ) : (
        <Image src={img} alt={alt} fill priority sizes="100vw" className="phero-bg" style={{ objectPosition: focus }} />
      )}
      <div className="phero-in">
        <nav className="crumbs" aria-label="Brauðmolar">
          <Link href="/">Metatron</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 id="page-h">{title}</h1>
        <p className="lead">{lead}</p>
        <div className="actions">
          <a className="btn btn-red" href="#fyrirspurn">
            Fá tilboð <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="btn btn-ghost" href={SITE.phoneHref}>
            <Phone size={18} aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
