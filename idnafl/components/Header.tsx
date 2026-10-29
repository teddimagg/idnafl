"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);
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
        <Link href="/" className="logo" aria-label="Iðnafl, forsíða">
          <Logo />
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
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={SITE.phoneHref} className="btn btn-red btn-block">
          <Phone size={18} aria-hidden="true" /> Hringja í {SITE.phone}
        </a>
      </div>
    </header>
  );
}
