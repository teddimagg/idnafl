import Link from "next/link";
import { JsonLd, breadcrumbs } from "@/lib/seo";

/** Brauðmolar fyrir lesandann og BreadcrumbList fyrir leitarvélar. */
export default function Crumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Forsíða", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbs(all)} />
      <nav aria-label="Brauðmolar" className="crumbs">
        <ol>
          {all.map((c, i) => (
            <li key={c.path}>
              {i < all.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
