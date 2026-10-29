import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANIES, COMPANY_ORDER, NAV, SITE } from "@/lib/site";

export default function Footer() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  return (
    <footer className="foot">
      <div className="foot-in">
        <div className="foot-brand">
          <Image src="/brand/idnafl-horizontal-dark.png" alt="Iðnafl, leiðandi í lausnum" width={1220} height={300} />
          <p>Iðnaðargólf, gervigrasvellir, flóðlýsing og golfflatir. Þrjú fyrirtæki, eitt teymi.</p>
        </div>
        <nav aria-label="Iðnafl">
          <h2>Iðnafl</h2>
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/personuvernd">Persónuvernd</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Fyrirtækin</h2>
          <ul className="foot-cos">
            {COMPANY_ORDER.map((id) => (
              <li key={id}>
                <a href={COMPANIES[id].url}>
                  <Image src={COMPANIES[id].logoDark} alt="" width={COMPANIES[id].w} height={COMPANIES[id].h} />
                  <span>
                    {COMPANIES[id].name}, {COMPANIES[id].what.toLowerCase()}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Hafðu samband</h2>
          <ul className="foot-contact">
            <li>
              <Phone size={16} aria-hidden="true" /> <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" /> <a href={map}>{SITE.address}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="foot-legal">© {new Date().getFullYear()} Iðnafl ehf. Allur réttur áskilinn.</p>
    </footer>
  );
}
