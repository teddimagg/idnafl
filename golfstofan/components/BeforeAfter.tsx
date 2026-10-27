"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

const ease = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Fyrir og eftir: dragðu sleðann til að bera saman sama garðinn.
 * Þegar myndin kemur fyrst í mynd rúllast nýja grasið inn yfir gamla garðinn
 * og stoppar á miðjunni, svo gesturinn sjái að hægt er að draga.
 */
export default function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: [string, string] }) {
  const [pos, setPos] = useState(50);
  const [rolling, setRolling] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const touched = useRef(false);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Byrjar á gamla garðinum; nýja grasið bíður hægra megin.
    setPos(100);
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setRolling(true);
        const t0 = performance.now();
        const step = (now: number) => {
          if (touched.current) return;
          const p = Math.min(1, Math.max(0, (now - t0) / 1600));
          setPos(100 - 50 * ease(p));
          if (p < 1) raf.current = requestAnimationFrame(step);
          else setRolling(false);
        };
        raf.current = requestAnimationFrame(step);
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={box} className={rolling ? "ba is-rolling" : "ba"} style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <Image src={after} alt={alt[1]} fill sizes="(max-width: 900px) 100vw, 55vw" className="ba-img" />
      <div className="ba-before">
        <Image src={before} alt={alt[0]} fill sizes="(max-width: 900px) 100vw, 55vw" className="ba-img" />
      </div>
      <span className="ba-tag ba-tag-l" aria-hidden="true">Fyrir</span>
      <span className="ba-tag ba-tag-r" aria-hidden="true">Eftir</span>
      <div className="ba-handle" aria-hidden="true">
        <span>
          <MoveHorizontal size={20} strokeWidth={2} />
        </span>
      </div>
      <input
        className="ba-range"
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onPointerDown={() => {
          touched.current = true;
          cancelAnimationFrame(raf.current);
          setRolling(false);
        }}
        onChange={(e) => {
          touched.current = true;
          cancelAnimationFrame(raf.current);
          setRolling(false);
          setPos(+e.target.value);
        }}
        aria-label="Berðu saman garðinn fyrir og eftir"
        aria-valuetext={`${Math.round(pos)}% fyrir`}
      />
    </div>
  );
}
