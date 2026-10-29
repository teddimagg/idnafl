"use client";

import { useState } from "react";

const STEPS = [
  {
    name: "Ráðgjöf",
    text: "Sendu okkur myndir, teikningar eða lýsingu og við ráðleggjum hvaða gólfefni hentar. Ráðgjöfin kostar ekkert.",
  },
  {
    name: "Skoðun og tilboð",
    text: "Starfsmaður Gólflagna kemur og skoðar aðstæður. Í kjölfarið færðu bindandi tilboð í verkið.",
  },
  {
    name: "Undirbúningur",
    text: "Undirlagið er demantsslípað eða blastrac-blásið, sprungur lagaðar og gert við svo nýja gólfið haldi.",
  },
  {
    name: "Lögn",
    text: "Við mætum á umsömdum tíma og leggjum gólfið. Svæðið er lokað á meðan og við vinnum í samráði við aðra verktaka.",
  },
  {
    name: "Afhending",
    text: "Gólfið er gönguhæft eftir 12–24 klst. og fullhart eftir 7 daga. Við berum ábyrgð á efni og vinnu í þrjú ár.",
  },
];

/** Ferlið sem lárétt harmonikka: dekksti áfanginn fyrst, sá ljósasti síðast. */
export default function Process() {
  const [open, setOpen] = useState(0);
  return (
    <ol className="process-row">
      {STEPS.map((s, i) => (
        <li key={s.name} className={i === open ? "on" : ""} style={{ "--tone": i } as React.CSSProperties}>
          <button type="button" aria-expanded={i === open} onClick={() => setOpen(i)} className="process-btn">
            <span className="process-name">{s.name}</span>
          </button>
          <div className="process-body" hidden={i !== open}>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
