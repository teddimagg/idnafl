import { SITE } from "./site";

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
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": orgId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/golflagnir.png`,
    image: `${SITE.url}/img/og.jpg`,
    email: SITE.email,
    telephone: SITE.phoneIntl,
    slogan: "Epoxy gólf og iðnaðargólf",
    description:
      "Gólflagnir leggja epoxy gólf, polyurethan gólf, Ucrete, epoxy terrazzo og önnur iðnaðargólf um allt land. Áratuga reynsla, frí ráðgjöf og 3 ára ábyrgð á efni og vinnu.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      postalCode: SITE.postal,
      addressLocality: SITE.city,
      addressCountry: "IS",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: { "@type": "Country", name: "Ísland" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    parentOrganization: { "@type": "Organization", name: "Iðnafl ehf.", url: "https://idnafl.is" },
    sameAs: ["https://idnafl.is", "https://ssgolf.is"],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
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

export function service(opts: { name: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    image: opts.image ? `${SITE.url}${opts.image}` : undefined,
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Ísland" },
    serviceType: "Gólflagnir",
  };
}
