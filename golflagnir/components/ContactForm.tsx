"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { sendLead } from "@/lib/lead";

/** Stutt fyrirspurn fyrir verk sem passa ekki í reiknivélina. */
export default function ContactForm({ topic }: { topic?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "mailto" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) return;
    setStatus("sending");
    try {
      setStatus(
        await sendLead(
          {
            Nafn: String(fd.get("nafn") ?? ""),
            Sími: String(fd.get("simi") ?? ""),
            Netfang: String(fd.get("netfang") ?? ""),
            Verkefni: String(fd.get("verkefni") ?? ""),
            Efni: topic ?? "Almenn fyrirspurn",
          },
          topic ? `Fyrirspurn: ${topic}` : "Fyrirspurn"
        )
      );
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "mailto") {
    return (
      <div className="form-done" role="status">
        <span className="done-icon" aria-hidden="true">
          <Check size={26} strokeWidth={2.5} />
        </span>
        <p className="form-done-big">Takk fyrir!</p>
        <p>{status === "sent" ? "Við svörum öllum fyrirspurnum að bragði." : "Ýttu á senda í tölvupóstinum sem opnaðist."}</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit} data-ui>
      <div className="cform-row">
        <label>
          <span>Nafn *</span>
          <input name="nafn" required autoComplete="name" />
        </label>
        <label>
          <span>Sími *</span>
          <input name="simi" required type="tel" inputMode="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        <span>Netfang</span>
        <input name="netfang" type="email" autoComplete="email" />
      </label>
      <label>
        <span>Um verkið</span>
        <textarea name="verkefni" rows={3} placeholder="Til dæmis: 600 m² lagergólf í Hafnarfirði, gamla gólfið er sprungið" />
      </label>
      <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn btn-red btn-block" disabled={status === "sending"}>
        {status === "sending" ? "Sendi…" : "Senda fyrirspurn"}
        {status !== "sending" && <ArrowRight size={20} aria-hidden="true" />}
      </button>
      {status === "error" && (
        <p role="alert" className="form-error">
          Sending tókst ekki. Hringdu í 565 3600 eða sendu á golf@golflagnir.is.
        </p>
      )}
    </form>
  );
}
