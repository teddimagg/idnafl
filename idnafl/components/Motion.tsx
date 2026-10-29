"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Valmyndin fær skugga þegar skrunað er. Rammar merktir .frame teiknast utan um myndina
 * eins og línurnar í merki Iðnafls, og listar merktir .stagger koma inn hver á eftir öðrum.
 * Efnið er alltaf sýnilegt án skriftu.
 */
export default function Motion() {
  // Keyrt aftur við hverja síðuskiptingu svo nýjar myndir og listar fái sína hreyfingu.
  const path = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("scroll", onScroll);
    }
    root.classList.add("js-motion");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll(".frame, .stagger").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("in");
        return;
      }
      io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [path]);
  return null;
}
