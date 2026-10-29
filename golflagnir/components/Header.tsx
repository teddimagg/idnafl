"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/golfefni", label: "Gólfefni" },
  { href: "/hentar-fyrir", label: "Hentar fyrir" },
  { href: "/verkefni", label: "Verkefni" },
  { href: "/um-okkur", label: "Um okkur" },
  { href: "/hafa-samband", label: "Hafa samband" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav-in">
        <Link href="/" className="nav-logo" aria-label="Gólflagnir, forsíða">
          <Image src="/brand/golflagnir-dark.png" alt="Gólflagnir iðnaðargólf" width={1421} height={299} priority />
        </Link>
        <nav aria-label="Aðalvalmynd" id="valmynd">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path?.startsWith(n.href) ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={SITE.phoneHref} className="nav-phone">
          <Phone size={16} aria-hidden="true" />
          <span>{SITE.phone}</span>
        </a>
        <Link href="/#verd" className="btn btn-red nav-cta">
          Reikna verð
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="valmynd"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr">{open ? "Loka valmynd" : "Opna valmynd"}</span>
        </button>
      </div>
    </header>
  );
}
