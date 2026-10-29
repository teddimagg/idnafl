"use client";

import { useEffect, useRef, useState } from "react";
import { useTween } from "./useTween";

type Stat = { n: string; label: string };

/** Tölurnar telja upp eins og á vallarskilti þegar taflan kemur í mynd. Viðskeyti eins og „+“ standa kyrr. */
function Digit({ n, go }: { n: string; go: boolean }) {
  // Ártöl eins og 1976 standa kyrr; aðeins fjöldatölur telja upp.
  const m = n.match(/^(\d{1,3})(\D.*)?$/);
  const target = m ? +m[1] : 0;
  const v = useTween(go ? target : 0, 1400);
  if (!m) return <>{n}</>;
  return (
    <>
      {go ? Math.round(v) : target}
      {m[2]}
    </>
  );
}

export default function Scoreboard({ stats, label }: { stats: Stat[]; label: string }) {
  const ref = useRef<HTMLDListElement>(null);
  const [go, setGo] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <dl className="score" ref={ref} aria-label={label}>
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>{armed ? <Digit n={s.n} go={go} /> : s.n}</dd>
        </div>
      ))}
    </dl>
  );
}
