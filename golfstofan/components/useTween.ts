"use client";

import { useEffect, useRef, useState } from "react";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Talning sem rennur að nýju gildi í stað þess að hoppa.
 * Með minnkaðri hreyfingu birtist nýja gildið strax.
 */
export function useTween(target: number, duration = 450) {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  const raf = useRef(0);

  useEffect(() => {
    const start = from.current;
    if (start === target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = target;
      setValue(target);
      return;
    }
    const t0 = performance.now();
    cancelAnimationFrame(raf.current);
    const step = (now: number) => {
      // Fyrsti rammi getur borið tímastimpil á undan t0; neikvæð framvinda myndi láta töluna dýfa sér.
      const p = Math.min(1, Math.max(0, (now - t0) / duration));
      const v = start + (target - start) * easeOutExpo(p);
      from.current = v;
      setValue(v);
      if (p < 1) raf.current = requestAnimationFrame(step);
      else from.current = target;
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}
