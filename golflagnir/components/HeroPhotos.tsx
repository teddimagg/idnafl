"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Pic } from "@/lib/content";

/**
 * Myndir af gólfum sem skiptast hægt, eins og birta sem færist yfir sal.
 * Stöðvast þegar flipinn er falinn; með minnkaðri hreyfingu sést aðeins fyrsta myndin.
 */
export default function HeroPhotos({ pics, priority = false }: { pics: Pic[]; priority?: boolean }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (pics.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      t = setInterval(() => setI((x) => (x + 1) % pics.length), 5600);
    };
    const onVis = () => {
      clearInterval(t);
      if (!document.hidden) start();
    };
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(t);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [pics.length]);

  return (
    <div className="hero-photos cut">
      {pics.map((p, n) => (
        <Image
          key={p.src}
          src={p.src}
          alt={n === 0 ? p.alt : ""}
          aria-hidden={n === 0 ? undefined : true}
          fill
          priority={priority && n === 0}
          sizes="(max-width: 900px) 100vw, 50vw"
          className={n === i ? "on" : ""}
        />
      ))}
    </div>
  );
}
