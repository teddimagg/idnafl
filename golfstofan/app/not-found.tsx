import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page-band page-band-tall" aria-labelledby="page-h">
      <div className="page-band-in">
        <h1 id="page-h">Síðan fannst ekki</h1>
        <p className="hero-lead">Hún hefur kannski færst þegar vefurinn var endurnýjaður.</p>
        <ul className="nf-links">
          <li>
            <Link href="/" className="text-link text-link-dark">
              Forsíða og reiknivél <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="/puttflot" className="text-link text-link-dark">
              Púttflöt í garðinn <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link href="/golfklubbar" className="text-link text-link-dark">
              Flatir fyrir golfklúbba <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
