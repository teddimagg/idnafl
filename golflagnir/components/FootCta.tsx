"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/** Lokahvatning fótarins. Forsíðan endar þegar á fyrirspurnarformi, svo þar er hún sleppt. */
export default function FootCta() {
  if (usePathname() === "/") return null;
  return (
    <div className="foot-cta">
      <div className="foot-cta-in">
        <h2 className="h2">Fáðu tilboð í gólfið</h2>
        <div className="foot-actions">
          <Link className="btn btn-red" href="/#verd">
            Reikna verð <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="btn btn-ghost" href={SITE.phoneHref}>
            <Phone size={18} aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
