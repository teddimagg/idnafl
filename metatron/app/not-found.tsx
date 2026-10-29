import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="band band-tall" aria-labelledby="page-h">
      <div className="band-in">
        <h1 id="page-h">Síðan fannst ekki</h1>
        <p className="lead">Hún hefur kannski færst þegar vefurinn var endurnýjaður. Hér eru síðurnar okkar:</p>
        <ul className="nf-links">
          <li>
            <Link href="/" className="text-link">
              Forsíða <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
          {SERVICES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="text-link">
                {s.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
