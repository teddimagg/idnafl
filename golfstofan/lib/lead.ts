export const CONTACT = {
  email: "info@idnafl.is",
  phone: "565 3600",
  phoneHref: "tel:+3545653600",
  address: "Tónahvarf 5, 203 Kópavogi",
};

export type Lead = Record<string, string | number>;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

/**
 * Sendir fyrirspurn á Formspree. Ef ekkert Formspree-auðkenni er stillt
 * opnast tölvupóstur með öllum upplýsingum svo engin fyrirspurn tapist.
 */
export async function sendLead(lead: Lead): Promise<"sent" | "mailto"> {
  if (!FORMSPREE_ID) {
    const body = Object.entries(lead)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      "Fyrirspurn um gervigras"
    )}&body=${encodeURIComponent(body)}`;
    return "mailto";
  }
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: "Ný fyrirspurn af golfstofan.is", ...lead }),
  });
  if (!res.ok) throw new Error("send failed");
  return "sent";
}
