import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import GroupBar from "./GroupBar";
import FootCta from "./FootCta";
import { SYSTEMS, USES } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="foot" id="hafa-samband">
      <FootCta />

      <div className="foot-mark">
        <Image src="/brand/golflagnir-dark.png" alt="Gólflagnir iðnaðargólf" width={1421} height={299} />
      </div>

      <div className="foot-cols">
        <nav aria-label="Gólfefni">
          <h2 className="foot-h">Gólfefni</h2>
          <ul>
            {SYSTEMS.map((s) => (
              <li key={s.slug}>
                <Link href={`/golfefni/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Hentar fyrir">
          <h2 className="foot-h">Hentar fyrir</h2>
          <ul>
            {USES.map((u) => (
              <li key={u.slug}>
                <Link href={`/hentar-fyrir/${u.slug}`}>{u.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Fyrirtækið">
          <h2 className="foot-h">Fyrirtækið</h2>
          <ul>
            <li><Link href="/um-okkur">Um okkur</Link></li>
            <li><Link href="/verkefni">Verkefni</Link></li>
            <li><Link href="/taekniblod">Tækniblöð</Link></li>
            <li><Link href="/hafa-samband">Hafa samband</Link></li>
            <li><Link href="/personuvernd">Persónuvernd</Link></li>
          </ul>
        </nav>
        <address className="foot-contact">
          <h2 className="foot-h">Hafa samband</h2>
          <a href={SITE.phoneHref}><Phone size={16} aria-hidden="true" /> {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}><Mail size={16} aria-hidden="true" /> {SITE.email}</a>
          <span><MapPin size={16} aria-hidden="true" /> {SITE.address}</span>
          <span className="foot-hours">{SITE.hours}</span>
        </address>
      </div>

      <GroupBar />

      <p className="foot-legal">© {new Date().getFullYear()} {SITE.legalName}, hluti af Iðnafli ehf.</p>
    </footer>
  );
}
