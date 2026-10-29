import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHead from "@/components/PageHead";
import { NAV } from "@/lib/site";

export default function NotFound() {
  return (
    <PageHead crumb="Síða fannst ekki" title="Síðan fannst ekki" lead="Hún hefur kannski færst þegar vefurinn var endurnýjaður. Hér eru síðurnar okkar:">
      <ul className="nf-links">
        <li>
          <Link href="/" className="text-link">
            Forsíða <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </li>
        {NAV.map((n) => (
          <li key={n.href}>
            <Link href={n.href} className="text-link">
              {n.label} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </PageHead>
  );
}
