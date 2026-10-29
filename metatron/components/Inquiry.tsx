"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Check, Droplets, Goal, Lightbulb, MessageSquare, Minus, Plus, Sprout, Wrench } from "lucide-react";
import { MIN_ORDER, PRODUCTS } from "@/lib/content";
import { kr, sendLead } from "@/lib/lead";
import { SITE } from "@/lib/site";
import { useTween } from "./useTween";

export type Topic = "vollur" | "lysing" | "gardur" | "vidhald" | "vokvun" | "annad";

// `um` stýrir þolfalli á hnappnum: „Senda fyrirspurn um flóðlýsingu“.
const TOPICS: { id: Topic; label: string; um: string; Icon: typeof Goal }[] = [
  { id: "vollur", label: "Gervigrasvöllur", um: "gervigrasvöll", Icon: Goal },
  { id: "lysing", label: "Flóðlýsing", um: "flóðlýsingu", Icon: Lightbulb },
  { id: "gardur", label: "Gras í garðinn", um: "gras í garðinn", Icon: Sprout },
  { id: "vidhald", label: "Viðhald vallar", um: "viðhald", Icon: Wrench },
  { id: "vokvun", label: "Vökvunarkerfi", um: "vökvunarkerfi", Icon: Droplets },
  { id: "annad", label: "Annað", um: "annað", Icon: MessageSquare },
];

/** Spurningar sem birtast eftir því hvaða verk er valið. Öll svör eru valfrjáls. */
const DETAILS: Partial<Record<Topic, { q: string; options: string[] }[]>> = {
  vollur: [
    { q: "Hvernig völlur?", options: ["Keppnisvöllur", "Æfingavöllur", "Sparkvöllur", "Knattspyrnuhús"] },
    { q: "Hvað þarf að gera?", options: ["Nýr völlur", "Skipta um gras", "Viðgerð"] },
  ],
  lysing: [
    { q: "Hvar á að lýsa?", options: ["Æfingavöllur", "Keppnisvöllur", "Golfvöllur", "Höfn eða iðnaður"] },
    { q: "Hvað þarf að gera?", options: ["Nýtt kerfi", "Skipta út eldra kerfi"] },
  ],
  vidhald: [
    {
      q: "Hvaða þjónusta?",
      options: ["Þjónustuleið í áskrift", "Djúphreinsun og mýking", "Viðgerð", "Snjómokstur og burstun", "FIFA-úttekt"],
    },
  ],
  vokvun: [
    { q: "Hvernig völlur?", options: ["Gervigrasvöllur", "Hybrid-völlur", "Grasvöllur", "Knattspyrnuhús"] },
    { q: "Hvað þarf að gera?", options: ["Nýtt kerfi", "Endurnýjun"] },
  ],
};

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

/**
 * Fyrirspurnin: veldu verk, svaraðu einni eða tveimur spurningum, skildu eftir nafn og síma.
 * Fyrir garðagras reiknast verð grassins beint úr verðskránni.
 */
export default function Inquiry({ initial }: { initial?: Topic }) {
  const uid = useId();
  const path = usePathname();
  const [topic, setTopic] = useState<Topic | undefined>(initial);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [product, setProduct] = useState<(typeof PRODUCTS)[number]["id"]>(PRODUCTS[1].id);
  const [area, setArea] = useState(60);
  const [areaText, setAreaText] = useState("60");
  const [lay, setLay] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const detailsRef = useRef<HTMLDivElement>(null);
  const picked = useRef(false);

  const prod = PRODUCTS.find((p) => p.id === product)!;
  const grassPrice = Math.max(MIN_ORDER, area) * prod.price;
  const shown = useTween(grassPrice);
  const t = TOPICS.find((x) => x.id === topic);

  // Tenglar eins og #fyrirspurn-lysing velja verkið og skruna hingað.
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#fyrirspurn-(\w+)/);
      if (m && TOPICS.some((x) => x.id === m[1])) {
        choose(m[1] as Topic);
        document.getElementById("fyrirspurn")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Þegar verk er valið í fyrsta sinn færist fókus að næsta skrefi svo lyklaborðsnotandi fylgi með.
  useEffect(() => {
    if (topic && picked.current) detailsRef.current?.focus({ preventScroll: true });
  }, [topic]);

  function choose(next: Topic) {
    picked.current = true;
    setTopic(next);
    setAnswers({});
  }

  function commitArea(a: number) {
    const v = Math.min(20000, Math.max(1, Math.round(a)));
    setArea(v);
    setAreaText(String(v));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    const lead: Record<string, string | number> = { Erindi: t?.label ?? "Fyrirspurn", ...answers };
    if (topic === "gardur") {
      Object.assign(lead, {
        Gras: prod.name,
        Fermetrar: area,
        "Verð grass": kr(grassPrice),
        Lögn: lay ? "Já, tilboð í lögn" : "Bara grasið",
      });
    }
    for (const [k, label] of [
      ["nafn", "Nafn"],
      ["simi", "Sími"],
      ["netfang", "Netfang"],
      ["stadur", "Staður"],
      ["skilabod", "Skilaboð"],
    ] as const) {
      const v = String(fd.get(k) ?? "").trim();
      if (v) lead[label] = v;
    }
    lead["Síða"] = path;
    try {
      const r = await sendLead(lead, `Fyrirspurn: ${t?.label ?? "Annað"}`);
      setName(String(fd.get("nafn") ?? "").split(" ")[0]);
      setStatus(r);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className="ask-card ask-done" role="status">
        <span className="done-icon" aria-hidden="true">
          <Check size={30} strokeWidth={2.5} />
        </span>
        <p className="ask-done-h">{name ? `Takk, ${name}.` : "Takk fyrir."}</p>
        <p>
          {status === "sent"
            ? "Fyrirspurnin er komin til okkar. Við höfum samband fljótlega."
            : "Pósturinn þinn opnaðist með fyrirspurninni. Sendu hann og við höfum samband."}
        </p>
        <button type="button" className="ask-reset" onClick={() => setStatus("idle")}>
          Senda aðra fyrirspurn
        </button>
      </div>
    );
  }

  return (
    <form className="ask-card" onSubmit={onSubmit} aria-label="Fyrirspurn til Metatron">
      <fieldset className="ask-step">
        <legend>
          <span className="step-n" aria-hidden="true">
            1
          </span>
          Veldu verk
        </legend>
        <div className="topics">
          {TOPICS.map(({ id, label, Icon }) => (
            <label key={id} className="topic">
              <input type="radio" name={`${uid}-topic`} value={id} checked={topic === id} onChange={() => choose(id)} />
              <span>
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {topic && (
        <>
          <div className="ask-step ask-more" ref={detailsRef} tabIndex={-1} key={topic}>
            <p className="ask-legend">
              <span className="step-n" aria-hidden="true">
                2
              </span>
              {topic === "gardur" ? "Reiknaðu grasið" : topic === "annad" ? "Segðu okkur frá verkinu" : "Segðu okkur meira"}
            </p>

            {DETAILS[topic]?.map((d) => (
              <fieldset key={d.q} className="ask-q">
                <legend>{d.q}</legend>
                <div className="opts">
                  {d.options.map((o) => (
                    <label key={o} className="opt">
                      <input
                        type="radio"
                        name={`${uid}-${d.q}`}
                        value={o}
                        checked={answers[d.q] === o}
                        onChange={() => setAnswers((a) => ({ ...a, [d.q]: o }))}
                      />
                      <span>{o}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}

            {topic === "gardur" && (
              <div className="grass-calc">
                <fieldset className="ask-q">
                  <legend>Hvaða gras?</legend>
                  <div className="prods">
                    {PRODUCTS.map((p) => (
                      <label key={p.id} className="prod">
                        <input type="radio" name={`${uid}-prod`} value={p.id} checked={product === p.id} onChange={() => setProduct(p.id)} />
                        <span>
                          <strong>{p.name}</strong>
                          <small>{p.note}</small>
                          <em>{kr(p.price)}/m²</em>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="ask-q">
                  <label className="ask-q-label" htmlFor={`${uid}-area`}>
                    Hversu margir fermetrar?
                  </label>
                  <div className="area-row">
                  <div className="stepper">
                    <button type="button" aria-label="Fækka um 5 fermetra" onClick={() => commitArea(Math.max(MIN_ORDER, area - 5))}>
                      <Minus size={18} aria-hidden="true" />
                    </button>
                    <span className="stepper-box">
                      <input
                        id={`${uid}-area`}
                        inputMode="numeric"
                        autoComplete="off"
                        value={areaText}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/[^\d]/g, "").slice(0, 5);
                          setAreaText(raw);
                          if (+raw > 0) setArea(Math.min(20000, +raw));
                        }}
                        onBlur={() => commitArea(area)}
                        aria-describedby={`${uid}-min`}
                      />
                      <span aria-hidden="true">m²</span>
                    </span>
                    <button type="button" aria-label="Fjölga um 5 fermetra" onClick={() => commitArea(area + 5)}>
                      <Plus size={18} aria-hidden="true" />
                    </button>
                  </div>
                  <p className="ask-hint" id={`${uid}-min`}>
                    {area < MIN_ORDER ? `Minnsta pöntun er ${MIN_ORDER} m², verðið miðast við það.` : `Minnsta pöntun er ${MIN_ORDER} m².`}
                  </p>
                  </div>
                </div>
                <p className="sr" aria-live="polite">
                  {prod.name}, {Math.max(MIN_ORDER, area)} fermetrar: {kr(grassPrice)}
                </p>
                <div className="grass-total" aria-hidden="true">
                  <strong>{kr(Math.round(shown / 10) * 10)}</strong>
                  <span>
                    {prod.name}, {Math.max(MIN_ORDER, area)} m² samkvæmt verðskrá. Lögn og undirvinna bætast við.
                  </span>
                </div>
                <fieldset className="ask-q">
                  <legend>Eigum við að leggja það?</legend>
                  <div className="opts">
                    <label className="opt">
                      <input type="radio" name={`${uid}-lay`} checked={lay} onChange={() => setLay(true)} />
                      <span>Já, fá tilboð í lögn</span>
                    </label>
                    <label className="opt">
                      <input type="radio" name={`${uid}-lay`} checked={!lay} onChange={() => setLay(false)} />
                      <span>Bara grasið</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            )}
          </div>

          <fieldset className="ask-step">
            <legend>
              <span className="step-n" aria-hidden="true">
                3
              </span>
              Hvert eigum við að svara?
            </legend>
            <div className="fields">
              <label>
                Nafn
                <input name="nafn" required autoComplete="name" />
              </label>
              <label>
                Sími
                <input name="simi" type="tel" required autoComplete="tel" inputMode="tel" />
              </label>
              <label>
                Netfang <span className="opt-l">valfrjálst</span>
                <input name="netfang" type="email" autoComplete="email" />
              </label>
              <label>
                {topic === "gardur" ? "Bæjarfélag" : "Félag, fyrirtæki eða staður"} <span className="opt-l">valfrjálst</span>
                <input name="stadur" autoComplete="organization" />
              </label>
              <label className="wide">
                {topic === "annad" ? "Hvað getum við gert fyrir þig?" : "Eitthvað fleira?"}{" "}
                {topic !== "annad" && <span className="opt-l">valfrjálst</span>}
                <textarea name="skilabod" rows={3} required={topic === "annad"} />
              </label>
            </div>
            <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          </fieldset>

          <button type="submit" className="btn btn-red btn-block" disabled={status === "sending"}>
            {status === "sending" ? "Sendi…" : `Senda fyrirspurn um ${t!.um}`}
            <ArrowRight size={20} aria-hidden="true" />
          </button>
          {status === "error" && (
            <p className="ask-error" role="alert">
              Sending tókst ekki. Hringdu í <a href={SITE.phoneHref}>{SITE.phone}</a> eða sendu á{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          )}
        </>
      )}
    </form>
  );
}
