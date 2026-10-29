"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Building2, Check, Flag, House, LandPlot, Ruler } from "lucide-react";
import { PROJECTS, estimate, kr, type ProjectType, type Surface } from "@/lib/pricing";
import { sendLead } from "@/lib/lead";
import { useTween } from "./useTween";

const ICONS: Record<ProjectType, typeof House> = {
  gardur: House,
  puttflot: Flag,
  svalir: Building2,
  golfvollur: LandPlot,
};

const MIN = 5;
const MAX = 2000;
// Rennan er á lógaritmískum kvarða svo litlir garðar fái nákvæmni.
const toSlider = (a: number) => Math.round((Math.log(a / MIN) / Math.log(MAX / MIN)) * 1000);
const fromSlider = (s: number) => {
  const a = MIN * Math.pow(MAX / MIN, s / 1000);
  return a < 50 ? Math.round(a) : a < 300 ? Math.round(a / 5) * 5 : Math.round(a / 10) * 10;
};

type Status = "idle" | "contact" | "sending" | "sent" | "mailto" | "error";

export default function Estimator({ initial = "gardur" }: { initial?: ProjectType }) {
  const uid = useId();
  const start = PROJECTS.find((p) => p.id === initial) ?? PROJECTS[0];
  const [type, setType] = useState<ProjectType>(start.id);
  const [area, setArea] = useState(start.defaultArea);
  const [areaText, setAreaText] = useState(String(start.defaultArea));
  const [surface, setSurface] = useState<Surface>(start.defaultSurface);
  const [dims, setDims] = useState(false);
  const [len, setLen] = useState("");
  const [wid, setWid] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const touched = useRef(false);
  const firstField = useRef<HTMLInputElement>(null);

  const est = useMemo(() => estimate(type, area, surface), [type, area, surface]);
  // Verðið rennur að nýju tölunni svo gesturinn sjái að það brást við.
  const shown = useTween(est.low);
  const [backed, setBacked] = useState(false);
  const spec = PROJECTS.find((p) => p.id === type)!;
  const slider = toSlider(Math.min(MAX, Math.max(MIN, area)));

  function commitArea(a: number) {
    const v = Math.min(20000, Math.max(1, Math.round(a)));
    setArea(v);
    setAreaText(String(v));
  }

  function pickType(t: ProjectType) {
    const s = PROJECTS.find((p) => p.id === t)!;
    setType(t);
    setSurface(s.defaultSurface);
    // Stærðin sem gesturinn sló inn heldur sér; annars fær hver gerð sína dæmigerðu stærð.
    if (!touched.current) commitArea(s.defaultArea);
  }

  // Tenglar eins og #reikna-puttflot velja gerð verks og skruna hingað.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#reikna-(\w+)/);
      if (m && PROJECTS.some((p) => p.id === m[1])) {
        pickType(m[1] as ProjectType);
        document.getElementById("reikna")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const l = parseFloat(len.replace(",", "."));
    const w = parseFloat(wid.replace(",", "."));
    if (dims && l > 0 && w > 0) {
      touched.current = true;
      commitArea(l * w);
    }
  }, [len, wid, dims]);

  useEffect(() => {
    if (status === "contact") firstField.current?.focus();
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    try {
      const r = await sendLead({
        Verk: spec.label,
        Fermetrar: area,
        Undirlag: surface === "mold" ? "Gras, mold eða möl" : "Hellur, steypa eða pallur",
        "Mælt gras": est.grass,
        "Áætlað verð": `${kr(est.low)} – ${kr(est.high)}`,
        Nafn: String(fd.get("nafn") ?? ""),
        Sími: String(fd.get("simi") ?? ""),
        Netfang: String(fd.get("netfang") ?? ""),
        Heimild: "Reiknivél",
      });
      setName(String(fd.get("nafn") ?? "").split(" ")[0]);
      setStatus(r);
    } catch {
      setStatus("error");
    }
  }

  const done = status === "sent" || status === "mailto";

  return (
    <div className={backed ? "calc is-back" : "calc"} data-ui>
      <span id="reikna-gardur" className="anchor" />
      <span id="reikna-puttflot" className="anchor" />
      <span id="reikna-svalir" className="anchor" />
      <span id="reikna-golfvollur" className="anchor" />

      <div className="calc-head">
        <p className="calc-title">Reiknaðu verðið</p>
      </div>

      {status === "idle" && (
        <>
          <fieldset className="calc-field">
            <legend className="calc-label">Hvað viltu leggja?</legend>
            <div className="chips">
              {PROJECTS.map((p) => {
                const Icon = ICONS[p.id];
                return (
                  <label key={p.id} className="chip">
                    <input
                      type="radio"
                      name={`${uid}-type`}
                      value={p.id}
                      checked={type === p.id}
                      onChange={() => pickType(p.id)}
                    />
                    <span>
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                      {p.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="calc-field">
            <label className="calc-label" htmlFor={`${uid}-area`}>
              Hversu stórt svæði?
            </label>
            <div className="area">
              <div className="area-box">
                <input
                  id={`${uid}-area`}
                  inputMode="numeric"
                  autoComplete="off"
                  value={areaText}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d]/g, "").slice(0, 5);
                    const t = raw && +raw > 20000 ? "20000" : raw;
                    setAreaText(t);
                    touched.current = true;
                    if (+t > 0) setArea(Math.min(20000, +t));
                  }}
                  onBlur={() => commitArea(area)}
                  aria-describedby={`${uid}-area-hint`}
                />
                <span aria-hidden="true">m²</span>
              </div>
              <input
                className="range"
                type="range"
                min={0}
                max={1000}
                value={slider}
                style={{ "--fill": `${slider / 10}%` } as React.CSSProperties}
                onChange={(e) => {
                  touched.current = true;
                  commitArea(fromSlider(+e.target.value));
                }}
                aria-label="Stærð svæðis í fermetrum"
                aria-valuetext={`${area} fermetrar`}
              />
            </div>
            <div id={`${uid}-area-hint`} className="calc-hint">
              {dims ? (
                <span className="dims">
                  <input
                    inputMode="decimal"
                    placeholder="Lengd"
                    aria-label="Lengd í metrum"
                    value={len}
                    onChange={(e) => setLen(e.target.value)}
                  />
                  <span aria-hidden="true">×</span>
                  <input
                    inputMode="decimal"
                    placeholder="Breidd"
                    aria-label="Breidd í metrum"
                    value={wid}
                    onChange={(e) => setWid(e.target.value)}
                  />
                  <span>m</span>
                </span>
              ) : (
                <button type="button" className="hint-btn" onClick={() => setDims(true)}>
                  <Ruler size={16} aria-hidden="true" />
                  Veistu bara lengd og breidd?
                </button>
              )}
            </div>
          </div>

          <fieldset className="calc-field">
            <legend className="calc-label">Hvað er á svæðinu núna?</legend>
            <div className="seg">
              <label>
                <input
                  type="radio"
                  name={`${uid}-surface`}
                  checked={surface === "mold"}
                  onChange={() => setSurface("mold")}
                />
                <span>Gras, mold eða möl</span>
              </label>
              <label>
                <input
                  type="radio"
                  name={`${uid}-surface`}
                  checked={surface === "hart"}
                  onChange={() => setSurface("hart")}
                />
                <span>Hellur, steypa eða pallur</span>
              </label>
            </div>
          </fieldset>
        </>
      )}

      {!done && (
        <div className="result">
          <p className="sr" aria-live="polite">
            Áætlað verð frá {kr(est.low)}
          </p>
          <p className="result-label">
            Áætlað verð fyrir {area} m² {spec.short}
          </p>
          <p className="result-price">
            frá <span key={est.low} className="tick">{kr(Math.round(shown / 1000) * 1000)}</span>
          </p>
          <p className="result-range">
            Algengt bil {kr(est.low)} – {kr(est.high)}, með vsk., efni og lögn
          </p>
          <p className="result-grass">
            <Check size={16} strokeWidth={2.5} aria-hidden="true" />
            Mælt með <strong>{est.grass}</strong>
          </p>
        </div>
      )}

      {status === "idle" && (
        <>
          <button type="button" className="btn btn-lime btn-block" onClick={() => setStatus("contact")}>
            Fá nákvæmt tilboð
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          <p className="calc-trust">
            <Check size={14} strokeWidth={2.5} aria-hidden="true" /> Frítt og án skuldbindingar
          </p>
        </>
      )}

      {(status === "contact" || status === "sending" || status === "error") && (
        <form className="calc-form" onSubmit={onSubmit}>
          <p className="calc-label">Hvert sendum við tilboðið?</p>
          <div className="fields">
            <label>
              <span>Nafn *</span>
              <input ref={firstField} name="nafn" required autoComplete="name" />
            </label>
            <label>
              <span>Sími *</span>
              <input name="simi" required type="tel" inputMode="tel" autoComplete="tel" />
            </label>
            <label>
              <span>Netfang</span>
              <input name="netfang" type="email" autoComplete="email" />
            </label>
            <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
          </div>
          <button className="btn btn-lime btn-block" disabled={status === "sending"}>
            {status === "sending" ? "Sendi…" : "Senda og fá tilboð"}
            {status !== "sending" && <ArrowRight size={20} aria-hidden="true" />}
          </button>
          {status === "error" && (
            <p className="calc-error" role="alert">
              Sending tókst ekki. Reyndu aftur eða hringdu í 565 3600.
            </p>
          )}
          <button type="button" className="calc-back" onClick={() => {
              setBacked(true);
              setStatus("idle");
            }}>
            Til baka í reiknivélina
          </button>
        </form>
      )}

      {done && (
        <div className="calc-done" role="status">
          <span className="done-icon" aria-hidden="true">
            <Check size={28} strokeWidth={2.5} />
          </span>
          <p className="calc-title">{status === "sent" ? `Takk${name ? `, ${name}` : ""}!` : "Næstum komið"}</p>
          <p>
            {status === "sent"
              ? `Fyrirspurnin um ${area} m² ${spec.short} er komin til okkar. Við höfum samband til að mæla svæðið og staðfesta verðið.`
              : "Tölvupóstur með öllum upplýsingum opnaðist. Ýttu á senda og við höfum samband."}
          </p>
        </div>
      )}
    </div>
  );
}
