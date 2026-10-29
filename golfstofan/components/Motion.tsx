"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Valmyndin fær bakgrunn þegar skrunað er og fasti hnappurinn á síma birtist
 * þegar reiknivélin er farin úr mynd. Myndir merktar .wipe rúllast inn frá vinstri,
 * eins og gras sem er lagt, þegar þær koma fyrst í mynd. Efnið er alltaf sýnilegt án skriftu.
 */
export default function Motion() {
  // Keyrt aftur við hverja síðuskiptingu svo nýjar myndir og listar fái sína hreyfingu.
  const path = usePathname();
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const dock = document.getElementById("reikna");
    const ctaIo = new IntersectionObserver(([e]) => {
      root.classList.toggle("past-hero", !e.isIntersecting && e.boundingClientRect.top < 0);
    });
    if (dock) ctaIo.observe(dock);
    const end = document.getElementById("hafa-samband");
    const endIo = new IntersectionObserver(([e]) => {
      root.classList.toggle("near-end", e.isIntersecting || e.boundingClientRect.top < 0);
    });
    if (end) endIo.observe(end);

    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      ctaIo.disconnect();
      endIo.disconnect();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return cleanup;
    root.classList.add("js-motion");

    // Chrome telur alveg klippta mynd ósýnilega, svo fylgst er með foreldrinu en myndin rúllast.
    const wipeOf = new Map<Element, Element[]>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            wipeOf.get(e.target)?.forEach((w) => w.classList.add("in"));
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll(".wipe, .stagger").forEach((el) => {
      // Myndir sem eru þegar í mynd við hleðslu fá ekki rúllu.
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in");
        return;
      }
      const host = el.parentElement ?? el;
      wipeOf.set(host, [...(wipeOf.get(host) ?? []), el]);
      io.observe(host);
    });

    return () => {
      cleanup();
      io.disconnect();
    };
  }, [path]);
  return null;
}
