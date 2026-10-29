import { JsonLd, faqPage } from "@/lib/seo";
import type { QA } from "@/lib/content";

export default function Faq({ items, title = "Spurt og svarað" }: { items: QA[]; title?: string }) {
  return (
    <section className="faq" aria-labelledby="faq-h">
      <div className="faq-in">
        <h2 id="faq-h" className="h2">
          {title}
        </h2>
        <div className="faq-list">
          {items.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqPage(items)} />
    </section>
  );
}
