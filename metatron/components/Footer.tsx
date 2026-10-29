import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import GroupBar from "./GroupBar";
import { SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  return (
    <footer className="foot" id="hafa-samband">
      <div className="foot-in">
        <div className="foot-brand">
          <Image src="/brand/metatron-dark.png" alt="Metatron" width={1682} height={232} />
          <p>Gervigrasvellir, flóðlýsing og viðhald um allt land. Gervigras fyrir öll tilefni.</p>
          <ul className="foot-social">
            <li>
              <a href={SITE.social.facebook}>Facebook</a>
            </li>
            <li>
              <a href={SITE.social.instagram}>Instagram</a>
            </li>
            <li>
              <a href={SITE.social.youtube}>YouTube</a>
            </li>
          </ul>
        </div>
        <nav aria-label="Þjónusta">
          <h2>Þjónusta</h2>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Metatron">
          <h2>Metatron</h2>
          <ul>
            <li>
              <Link href="/verkefni">Verkefni</Link>
            </li>
            <li>
              <Link href="/hafa-samband">Hafa samband</Link>
            </li>
            <li>
              <Link href="/personuvernd">Persónuvernd</Link>
            </li>
          </ul>
        </nav>
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
      <GroupBar />
      <p className="foot-legal">© {new Date().getFullYear()} Metatron ehf., Iðnafl ehf. Allur réttur áskilinn.</p>
    </footer>
  );
}
