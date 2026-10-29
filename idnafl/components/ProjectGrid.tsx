"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { COMPANIES, COMPANY_ORDER, type CompanyId } from "@/lib/site";

/** Verkefni allra fyrirtækjanna, síanleg eftir fyrirtæki. Hvert verk vísar á síðu fyrirtækisins. */
export default function ProjectGrid({ items, filter = true, limit }: { items: Project[]; filter?: boolean; limit?: number }) {
  const [only, setOnly] = useState<CompanyId | "all">("all");
  const list = (only === "all" ? items : items.filter((p) => p.company === only)).slice(0, limit);
  return (
    <>
      {filter && (
        <div className="chips" role="group" aria-label="Sía eftir fyrirtæki">
          {(["all", ...COMPANY_ORDER] as const).map((id) => (
            <button key={id} type="button" className="chip" aria-pressed={only === id} onClick={() => setOnly(id)}>
              {id === "all" ? "Öll verkefni" : COMPANIES[id].name}
            </button>
          ))}
        </div>
      )}
      <ul className="projects" key={only}>
        {list.map((p) => (
          <li key={p.name} className="project">
            <a href={p.href}>
              <div className="project-pic">
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </div>
              <p className="project-co">{COMPANIES[p.company].name}</p>
              <h3>
                {p.name} <ArrowUpRight size={18} aria-hidden="true" />
              </h3>
              <p className="project-meta">
                {p.place}. {p.kind}.
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
