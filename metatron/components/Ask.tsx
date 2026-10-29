import { Mail, Phone } from "lucide-react";
import Inquiry, { type Topic } from "./Inquiry";
import { SITE } from "@/lib/site";

/** Fyrirspurnin sem hluti af síðu: fyrirsögn og bein samskipti vinstra megin, formið hægra megin. */
export default function Ask({
  initial,
  title = "Hvað vantar þig?",
  text = "Veldu verkið, svaraðu einni eða tveimur spurningum og skildu eftir nafn og síma. Við höfum samband með tilboð.",
}: {
  initial?: Topic;
  title?: string;
  text?: string;
}) {
  return (
    <section className="ask" id="fyrirspurn" aria-labelledby="ask-h">
      <div className="ask-in">
        <div className="ask-text">
          <h2 id="ask-h" className="h2">
            {title}
          </h2>
          <p>{text}</p>
          <ul className="ask-direct">
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
        <Inquiry initial={initial} />
      </div>
    </section>
  );
}
