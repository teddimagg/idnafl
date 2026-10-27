"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

/** Sýnir smámynd og hleður YouTube-spilaranum aðeins þegar smellt er. */
export default function VideoFacade({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="vid">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="vid-btn" onClick={() => setPlay(true)} aria-label={`Spila myndband: ${title}`}>
          <Image src={poster} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="vid-scrim" aria-hidden="true" />
          <span className="vid-play" aria-hidden="true">
            <Play size={26} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="vid-title">{title}</span>
        </button>
      )}
    </div>
  );
}
