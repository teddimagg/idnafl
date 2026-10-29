import Link from "next/link";

/** Haus undirsíðna: brauðmolar og fyrirsögn vinstra megin, inngangur og aukaefni hægra megin. */
export default function PageHead({ crumb, title, lead, children }: { crumb: string; title: string; lead: string; children?: React.ReactNode }) {
  return (
    <section className="phead" aria-labelledby="page-h">
      <div className="phead-in">
        <div>
          <nav className="crumbs" aria-label="Brauðmolar">
            <Link href="/">Iðnafl</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          <h1 id="page-h">{title}</h1>
        </div>
        <div className="phead-side">
          <p className="lead">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
