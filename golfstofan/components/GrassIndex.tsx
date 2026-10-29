"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Grass = {
  name: string;
  use: string;
  pile: string;
  text: string;
  img: string;
  href: string;
  /** Texti á hnappnum; sjálfgefið er að reikna verð með grasinu. */
  cta?: string;
};

export default function GrassIndex({ items }: { items: Grass[] }) {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  // Á breiðum skjá verður sú lína virk sem er næst miðjum skjá þegar skrunað er.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 900px)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  const g = items[active];

  return (
    <div className="gi">
      <div className="gi-photo">
        {items.map((it, i) => (
          <Image
            key={it.name}
            src={it.img}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className={i === active ? "on" : ""}
            aria-hidden="true"
          />
        ))}
        <div className="gi-label" aria-hidden="true">
          <span>{g.name}</span>
          <span className="gi-chip">{g.pile}</span>
        </div>
      </div>
      <div className="gi-list">
        <h2 className="h2" id="grasid-h">
          Fimm gerðir af grasi
        </h2>
        <ul>
          {items.map((it, i) => (
            <li
              key={it.name}
              ref={(el) => {
                rows.current[i] = el;
              }}
              data-i={i}
              className={i === active ? "on" : ""}
              onMouseEnter={() => setActive(i)}
            >
              <button
                type="button"
                className="gi-row"
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={i === active}
              >
                <span className="gi-name">{it.name}</span>
                <span className="gi-use-short">{it.use}</span>
                <span className="gi-chip">{it.pile}</span>
              </button>
              <div className="gi-more">
                <div>
                  <p>{it.text}</p>
                  <Link className="gi-cta" href={it.href}>
                    {it.cta ?? `Reikna verð með ${it.name}`}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
