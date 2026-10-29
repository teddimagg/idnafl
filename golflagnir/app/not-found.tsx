import Link from "next/link";
import { SYSTEMS } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="prose-page">
      <h1>Síðan fannst ekki</h1>
      <p className="page-lead">Hún hefur kannski færst þegar vefurinn var endurnýjaður. Hér eru vinsælustu síðurnar:</p>
      <ul className="fit-list stagger">
        <li>
          <Link href="/">Forsíða og reiknivél</Link>
        </li>
        {SYSTEMS.slice(0, 4).map((s) => (
          <li key={s.slug}>
            <Link href={`/golfefni/${s.slug}`}>{s.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/hafa-samband">Hafa samband</Link>
        </li>
      </ul>
    </section>
  );
}
