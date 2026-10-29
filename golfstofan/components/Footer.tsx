import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import GroupBar from "./GroupBar";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  const map = `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`;
  return (
    <footer className="foot" id="hafa-samband">
      <div className="foot-in">
        <h2 className="h2">Fáðu tilboð í verkið</h2>
        <div className="foot-actions">
          <a className="btn btn-lime" href="#reikna">
            Reikna verð <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="btn btn-white" href={SITE.phoneHref}>
            <Phone size={18} aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="foot-cols">
        <div className="foot-brand">
          <Image src="/brand/golfstofan-dark.png" alt="Golfstofan" width={1558} height={336} />
          <p>Umboðsaðili SYNLawn á Íslandi. Púttflatir, golfflatir og gervigras í garða.</p>
        </div>
        <nav aria-label="Síður">
          <h3>Golfstofan</h3>
          <ul>
            <li>
              <Link href="/">Forsíða</Link>
            </li>
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
          <h3>Hafðu samband</h3>
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
      <p className="foot-legal">© {new Date().getFullYear()} Golfstofan, Iðnafl ehf. Allur réttur áskilinn.</p>
    </footer>
  );
}
