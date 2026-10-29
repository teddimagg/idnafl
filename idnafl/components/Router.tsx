"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { COMPANIES, SITE, type CompanyId } from "@/lib/site";
import { sendLead } from "@/lib/lead";

type Need = {
  id: string;
  label: string;
  to: CompanyId | "idnafl";
  /** Beinn tengill á reiknivél eða fyrirspurn hjá réttu fyrirtæki. */
  tool?: { href: string; label: string };
};

const NEEDS: Need[] = [
  { id: "golf", label: "Iðnaðargólf eða epoxy", to: "golflagnir", tool: { href: "https://golflagnir.is/#verd", label: "Reiknaðu verðið á gólfinu" } },
  { id: "vollur", label: "Gervigrasvöllur", to: "metatron", tool: { href: "https://metatron.is/gervigrasvellir#fyrirspurn", label: "Fyrirspurn um völl" } },
  { id: "lysing", label: "Flóðlýsing", to: "metatron", tool: { href: "https://metatron.is/flodlysing#fyrirspurn", label: "Fyrirspurn um lýsingu" } },
  { id: "gardur", label: "Gras í garðinn", to: "metatron", tool: { href: "https://metatron.is/gervigras-i-gardinn#fyrirspurn", label: "Reiknaðu grasið" } },
  { id: "putt", label: "Púttflöt eða golfflöt", to: "golfstofan", tool: { href: "https://www.golfstofan.is/puttflot#reikna", label: "Reiknaðu verðið á flötinni" } },
  { id: "annad", label: "Annað eða almennt", to: "idnafl" },
];

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

/**
 * „Hvernig getum við aðstoðað?“: gesturinn velur verk og sér strax hvaða fyrirtæki sér um það,
 * með beinum tengli á reiknivél þess og stuttu formi ef hann vill frekar að hringt sé í sig.
 */
export default function Router() {
  const uid = useId();
  const [need, setNeed] = useState<Need | undefined>();
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const picked = useRef(false);

  const co = need && need.to !== "idnafl" ? COMPANIES[need.to] : undefined;
  const email = co?.email ?? SITE.email;

  // Á mjóum skjá birtist svarið fyrir neðan listann, svo því er skrunað í mynd.
  useEffect(() => {
    if (!need || !picked.current || !panel.current) return;
    panel.current.focus({ preventScroll: true });
    if (window.matchMedia("(max-width: 900px)").matches) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  }, [need]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    const lead: Record<string, string> = {
      Erindi: need?.label ?? "Almennt",
      Fyrirtæki: co?.name ?? "Iðnafl",
      Nafn: String(fd.get("nafn") ?? ""),
      Sími: String(fd.get("simi") ?? ""),
    };
    const msg = String(fd.get("skilabod") ?? "").trim();
    if (msg) lead["Skilaboð"] = msg;
    try {
      const r = await sendLead(lead, `${co?.name ?? "Iðnafl"}: ${need?.label ?? "Fyrirspurn"}`, email);
      setName(lead.Nafn.split(" ")[0]);
      setStatus(r);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="router">
      <fieldset className="needs">
        <legend>Veldu verk</legend>
        <div className="need-list">
          {NEEDS.map((n) => (
            <label key={n.id} className="need">
              <input
                type="radio"
                name={`${uid}-need`}
                value={n.id}
                checked={need?.id === n.id}
                onChange={() => {
                  picked.current = true;
                  setNeed(n);
                  setStatus("idle");
                }}
              />
              <span>{n.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={need ? "route on" : "route"} ref={panel} tabIndex={-1} aria-live="polite">
        {!need && (
          <div className="route-empty">
            <p>Viltu frekar hringja?</p>
            <a className="route-phone" href={SITE.phoneHref}>
              <Phone size={20} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        )}

        {need && (status === "sent" || status === "mailto") && (
          <div className="route-done" role="status">
            <span className="done-icon" aria-hidden="true">
              <Check size={28} strokeWidth={2.5} />
            </span>
            <p className="route-done-h">{name ? `Takk, ${name}.` : "Takk fyrir."}</p>
            <p>
              {status === "sent"
                ? `${co ? `${co.name} ${co.has}` : "Við höfum"} samband fljótlega.`
                : "Pósturinn þinn opnaðist með fyrirspurninni. Sendu hann og við höfum samband."}
            </p>
          </div>
        )}

        {need && status !== "sent" && status !== "mailto" && (
          <div className="route-body" key={need.id}>
            <div className="route-head">
              {co ? (
                <>
                  <Image src={co.logo} alt={co.name} width={co.w} height={co.h} className="route-logo" />
                  <p className="route-what">{co.text}</p>
                </>
              ) : (
                <>
                  <Image src="/brand/idnafl-horizontal.png" alt="Iðnafl" width={1220} height={300} className="route-logo" />
                  <p className="route-what">Skrifstofa Iðnafls svarar almennum erindum.</p>
                </>
              )}
              <div className="route-links">
                {need.tool && (
                  <a className="btn btn-red" href={need.tool.href}>
                    {need.tool.label} <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                )}
                <a className="route-mail" href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden="true" /> {email}
                </a>
              </div>
            </div>

            <form className="route-form" onSubmit={onSubmit}>
              <p className="route-form-h">Eða við hringjum í þig</p>
              <div className="fields">
                <label>
                  Nafn
                  <input name="nafn" required autoComplete="name" />
                </label>
                <label>
                  Sími
                  <input name="simi" type="tel" required autoComplete="tel" inputMode="tel" />
                </label>
                <label className="wide">
                  Um hvað snýst verkið? <span className="opt-l">valfrjálst</span>
                  <textarea name="skilabod" rows={3} />
                </label>
              </div>
              <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button type="submit" className="btn btn-ink btn-block" disabled={status === "sending"}>
                {status === "sending" ? "Sendi…" : `Senda til ${co?.gen ?? "Iðnafls"}`}
              </button>
              {status === "error" && (
                <p className="route-error" role="alert">
                  Sending tókst ekki. Hringdu í <a href={SITE.phoneHref}>{SITE.phone}</a> eða sendu á <a href={`mailto:${email}`}>{email}</a>.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
