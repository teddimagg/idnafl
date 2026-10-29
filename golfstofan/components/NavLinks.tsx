"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/site";

export default function NavLinks() {
  const path = usePathname();
  return (
    <nav className="nav-links" aria-label="Aðalvalmynd">
      {NAV.map((n) => (
        <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}>
          {n.label}
        </Link>
      ))}
    </nav>
  );
}
