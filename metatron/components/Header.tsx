"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";

/** Valmyndin liggur gegnsæ yfir myndinni efst og verður dökk þegar skrunað er. Á síma opnast valmynd yfir allan skjáinn. */
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [cta, setCta] = useState("/hafa-samband");

  useEffect(() => {
    setOpen(false);
    setCta(document.getElementById("fyrirspurn") ? "#fyrirspurn" : "/hafa-samband");
  }, [path]);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="logo" aria-label="Metatron, forsíða">
          <Image src="/brand/metatron-dark.png" alt="" width={1682} height={232} priority />
        </Link>
        <nav className="nav-links" aria-label="Aðalvalmynd">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={SITE.phoneHref} className="nav-phone">
          <Phone size={16} aria-hidden="true" />
          <span>{SITE.phone}</span>
        </a>
        <a href={cta} className="btn btn-red nav-cta">
          Fá tilboð
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="valmynd"
          aria-label={open ? "Loka valmynd" : "Opna valmynd"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <div className="sheet" id="valmynd" hidden={!open}>
        <nav aria-label="Valmynd">
          <ul>
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/verkefni">Verkefni</Link>
            </li>
            <li>
              <Link href="/hafa-samband">Hafa samband</Link>
            </li>
          </ul>
        </nav>
        <a href={SITE.phoneHref} className="btn btn-red btn-block">
          <Phone size={18} aria-hidden="true" /> Hringja í {SITE.phone}
        </a>
      </div>
    </header>
  );
}
