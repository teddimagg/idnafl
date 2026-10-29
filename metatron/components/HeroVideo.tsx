"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Myndbandið hleðst aðeins eftir að síðan er komin upp, ekki ef beðið er um minni hreyfingu eða gagnasparnað.
 * Kyrrmyndin er alltaf undir svo síðan lítur eins út meðan myndbandið hleðst.
 */
export default function HeroVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [on, setOn] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || save) return;
    v.src = src;
    v.load();
    const onPlaying = () => setOn(true);
    v.addEventListener("playing", onPlaying);
    v.play().then(() => setReady(true)).catch(() => {});
    // Myndbandið stöðvast þegar það er farið úr mynd og heldur áfram þegar það kemur aftur.
    const io = new IntersectionObserver(([e]) => {
      if (v.dataset.user) return;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => {
      v.removeEventListener("playing", onPlaying);
      io.disconnect();
    };
  }, [src]);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      delete v.dataset.user;
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.dataset.user = "1";
      v.pause();
      setPaused(true);
    }
  }

  return (
    <div className="hero-media">
      <Image src={poster} alt={alt} fill priority sizes="100vw" className="hero-poster" />
      <video ref={ref} className={on ? "hero-video on" : "hero-video"} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />
      {ready && (
        <button type="button" className="hero-pause" onClick={toggle} aria-label={paused ? "Spila myndband" : "Stöðva myndband"}>
          {paused ? <Play size={16} fill="currentColor" aria-hidden="true" /> : <Pause size={16} fill="currentColor" aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
