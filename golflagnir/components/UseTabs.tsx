"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { UseCase } from "@/lib/content";

/** Rýmin sem flipar: veldu rými og sjáðu hvaða gólf hentar því. */
export default function UseTabs({ uses }: { uses: UseCase[] }) {
  const [i, setI] = useState(0);
  const uid = useId();
  const u = uses[i];

  function onKey(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (i + (e.key === "ArrowRight" ? 1 : uses.length - 1)) % uses.length;
    setI(n);
    document.getElementById(`${uid}-tab-${n}`)?.focus();
  }

  return (
    <div className="plate">
      <div className="plate-pic cut reveal">
        {uses.map((x, n) => (
          <Image
            key={x.slug}
            src={x.pic.src}
            alt={n === i ? x.pic.alt : ""}
            aria-hidden={n === i ? undefined : true}
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className={n === i ? "on" : ""}
          />
        ))}
      </div>
      <div className="plate-text">
        <div role="tablist" aria-label="Rými" className="plate-tabs" onKeyDown={onKey}>
          {uses.map((x, n) => (
            <button
              key={x.slug}
              id={`${uid}-tab-${n}`}
              role="tab"
              type="button"
              aria-selected={n === i}
              aria-controls={`${uid}-panel`}
              tabIndex={n === i ? 0 : -1}
              onClick={() => setI(n)}
            >
              {x.name}
            </button>
          ))}
        </div>
        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${i}`} className="plate-panel" key={u.slug}>
          <h3>{u.h1}</h3>
          <p>{u.lead}</p>
          <ul className="bullets">
            {u.needs.slice(0, 3).map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <div className="plate-actions">
          <Link className="cell cell-red" href={`/hentar-fyrir/${u.slug}`}>
            {u.h1} <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="cell" href={`#verd-${u.room}`}>
            Reikna verð
          </a>
        </div>
      </div>
    </div>
  );
}
