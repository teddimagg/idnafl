import { COMPANIES, COMPANY_ORDER, SITE } from "./site";

/** Skrifar schema.org gögn inn á síðuna svo leitarvélar skilji efnið. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const orgId = `${SITE.url}/#fyrirtaeki`;

export function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/idnafl-stacked.png`,
    image: `${SITE.url}/img/og.jpg`,
    email: SITE.email,
    telephone: SITE.phoneIntl,
    slogan: SITE.slogan,
    description:
      "Iðnafl á og rekur Gólflagnir, Metatron og Golfstofuna: iðnaðargólf, gervigrasvelli, flóðlýsingu og golfflatir. 15 manna teymi á Tónahvarfi 5 í Kópavogi.",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 15 },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      postalCode: SITE.postal,
      addressLocality: SITE.city,
      addressCountry: "IS",
    },
    subOrganization: COMPANY_ORDER.map((id) => ({ "@type": "Organization", name: COMPANIES[id].name, url: COMPANIES[id].url })),
    sameAs: COMPANY_ORDER.map((id) => COMPANIES[id].url),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Iðnafl", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function faqPage(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
