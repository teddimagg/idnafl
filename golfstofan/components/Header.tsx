import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import NavLinks from "./NavLinks";
import { SITE } from "@/lib/site";

/** Valmyndin liggur gegnsæ yfir forsíðumyndinni og fær ljósan grunn og dökkt lógó þegar skrunað er. */
export default function Header() {
  return (
    <header className="nav">
      <div className="nav-in">
        <Link href="/" className="logo" aria-label="Golfstofan, forsíða">
          <Image src="/brand/golfstofan-dark.png" alt="" width={1558} height={336} priority className="logo-d" />
          <Image src="/brand/golfstofan.png" alt="" width={1558} height={336} priority className="logo-l" />
        </Link>
        <NavLinks />
        <a href={SITE.phoneHref} className="nav-phone">
          <Phone size={16} aria-hidden="true" />
          {SITE.phone}
        </a>
        <a href="#reikna" className="btn btn-lime nav-cta">
          Reikna verð
        </a>
      </div>
    </header>
  );
}
