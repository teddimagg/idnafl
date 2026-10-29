"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Clock } from "lucide-react";
import { ROOMS, SUBSTRATES, SYSTEMS, estimate, kr, type Substrate, type SystemId } from "@/lib/pricing";
import { sendLead } from "@/lib/lead";
import { useTween } from "./useTween";

const MIN = 10;
const MAX = 5000;
// Rennan er á lógaritmískum kvarða svo bílskúr og vöruhús rúmist á sama ási.
const toSlider = (a: number) => Math.round((Math.log(a / MIN) / Math.log(MAX / MIN)) * 1000);
const fromSlider = (s: number) => {
  const a = MIN * Math.pow(MAX / MIN, s / 1000);
  return a < 60 ? Math.round(a) : a < 400 ? Math.round(a / 5) * 5 : Math.round(a / 50) * 50;
};

type Status = "idle" | "contact" | "sending" | "sent" | "mailto" | "error";

export default function Estimator({ initialRoom = "bilskur", compact = false }: { initialRoom?: string; compact?: boolean }) {
  const uid = useId();
  const startRoom = ROOMS.find((r) => r.id === initialRoom) ?? ROOMS[0];
  const [roomId, setRoomId] = useState(startRoom.id);
  const [system, setSystem] = useState<SystemId>(startRoom.systems[0]);
  const [area, setArea] = useState(startRoom.defaultArea);
  const [areaText, setAreaText] = useState(String(startRoom.defaultArea));
  const [substrate, setSubstrate] = useState<Substrate>("heilt");
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [backed, setBacked] = useState(false);
  const [pick, setPick] = useState(false);
  const touched = useRef(false);
  const firstField = useRef<HTMLInputElement>(null);

  const room = ROOMS.find((r) => r.id === roomId)!;
  const est = useMemo(() => estimate(system, area, substrate), [system, area, substrate]);
  const shown = useTween(est.low);
  const slider = toSlider(Math.min(MAX, Math.max(MIN, area)));

  function commitArea(a: number) {
    const v = Math.min(50000, Math.max(1, Math.round(a)));
    setArea(v);
    setAreaText(String(v));
  }

  function pickRoom(id: string) {
    const r = ROOMS.find((x) => x.id === id)!;
    setRoomId(id);
    setSystem(r.systems[0]);
    setPick(false);
    if (!touched.current) commitArea(r.defaultArea);
  }

  // Tenglar eins og #verd-bilskur velja rýmið og skruna að reiknivélinni.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#verd-([\w-]+)/);
      if (m && ROOMS.some((r) => r.id === m[1])) {
        pickRoom(m[1]);
        document.getElementById("verd")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        Rými: room.label,
        Gólfefni: est.system.name,
        Fermetrar: area,
        Undirlag: SUBSTRATES.find((s) => s.id === substrate)!.label,
        "Áætlað verð": `${kr(est.low)} – ${kr(est.high)}`,
        Nafn: String(fd.get("nafn") ?? ""),
        Sími: String(fd.get("simi") ?? ""),
        Netfang: String(fd.get("netfang") ?? ""),
        Staðsetning: String(fd.get("stadur") ?? ""),
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
    <div className={`calc${backed ? " is-back" : ""}${compact ? " calc-compact" : ""}`} data-ui>
      {ROOMS.map((r) => (
        <span key={r.id} id={`verd-${r.id}`} className="anchor" />
      ))}

      <p className="calc-title">Reiknaðu verðið</p>

      {status === "idle" && (
        <>
          <fieldset className="calc-field">
            <legend className="calc-label">Hvaða rými?</legend>
            <div className="chips">
              {ROOMS.map((r) => (
                <label key={r.id} className="chip">
                  <input type="radio" name={`${uid}-room`} checked={roomId === r.id} onChange={() => pickRoom(r.id)} />
                  <span>{r.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="calc-field">
            <legend className="calc-label">Gólfefni</legend>
            <div className="sys-now">
              <span>
                <strong>{est.system.name}</strong>
                <small>
                  {est.system.short}
                  {system === room.systems[0] ? ", mælt með fyrir rýmið" : ""}
                </small>
              </span>
              {room.systems.length > 1 && (
                <button type="button" className="sys-change" aria-expanded={pick} onClick={() => setPick((x) => !x)}>
                  {pick ? "Loka" : "Breyta"}
                </button>
              )}
            </div>
            {pick && (
            <div className="systems">
              {room.systems.map((id, i) => {
                const s = SYSTEMS.find((x) => x.id === id)!;
                return (
                  <label key={id} className="sys">
                    <input
                      type="radio"
                      name={`${uid}-sys`}
                      checked={system === id}
                      onChange={() => {
                        setSystem(id);
                        setPick(false);
                      }}
                    />
                    <span>
                      <strong>
                        {s.name}
                        {i === 0 && <em>Mælt með</em>}
                      </strong>
                      <small>{s.short}</small>
                    </span>
                  </label>
                );
              })}
            </div>
            )}
          </fieldset>

          <div className="calc-row">
            <div className="calc-field">
              <label className="calc-label" htmlFor={`${uid}-area`}>
                Stærð
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
                      const t = raw && +raw > 50000 ? "50000" : raw;
                      setAreaText(t);
                      touched.current = true;
                      if (+t > 0) setArea(+t);
                    }}
                    onBlur={() => commitArea(area)}
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
                  aria-label="Stærð gólfs í fermetrum"
                  aria-valuetext={`${area} fermetrar`}
                />
              </div>
            </div>
          </div>

          <fieldset className="calc-field">
            <legend className="calc-label">Ástand undirlags</legend>
            <div className="seg">
              {SUBSTRATES.map((s) => (
                <label key={s.id}>
                  <input type="radio" name={`${uid}-sub`} checked={substrate === s.id} onChange={() => setSubstrate(s.id)} />
                  <span>{s.label}</span>
                </label>
              ))}
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
            {est.system.name}, {area} m²
          </p>
          <p className="result-price">
            frá <span key={est.low} className="tick">{kr(Math.round(shown / 1000) * 1000)}</span>
          </p>
          <p className="result-range">
            Algengt bil {kr(est.low)} – {kr(est.high)} með vsk., efni og vinnu
          </p>
          <p className="result-time">
            <Clock size={16} aria-hidden="true" /> Verktími um {est.system.days}. Gönguhæft eftir 12–24 klst., fullt álag eftir
            7 daga.
          </p>
        </div>
      )}

      {status === "idle" && (
        <>
          <button type="button" className="btn btn-red btn-block" onClick={() => setStatus("contact")}>
            Fá bindandi tilboð
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          <p className="calc-trust">
            <Check size={14} strokeWidth={2.5} aria-hidden="true" /> Frí ráðgjöf og mæling á suðvesturhorninu
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
            <label>
              <span>Hvar er verkið?</span>
              <input name="stadur" autoComplete="address-level2" placeholder="Bæjarfélag" />
            </label>
            <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
          </div>
          <button className="btn btn-red btn-block" disabled={status === "sending"}>
            {status === "sending" ? "Sendi…" : "Senda og fá tilboð"}
            {status !== "sending" && <ArrowRight size={20} aria-hidden="true" />}
          </button>
          {status === "error" && (
            <p className="calc-error" role="alert">
              Sending tókst ekki. Reyndu aftur eða hringdu í 565 3600.
            </p>
          )}
          <button
            type="button"
            className="calc-back"
            onClick={() => {
              setBacked(true);
              setStatus("idle");
            }}
          >
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
              ? `Fyrirspurnin um ${est.system.name} á ${area} m² er komin til okkar. Við höfum samband og bókum skoðun.`
              : "Tölvupóstur með öllum upplýsingum opnaðist. Ýttu á senda og við höfum samband."}
          </p>
        </div>
      )}
    </div>
  );
}
