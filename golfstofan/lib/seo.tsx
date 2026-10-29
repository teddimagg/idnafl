import { SITE } from "./site";

/** Skrifar schema.org gögn inn á síðuna svo leitarvélar skilji efnið. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
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
    logo: `${SITE.url}/brand/golfstofan.png`,
    image: `${SITE.url}/img/og.jpg`,
    email: SITE.email,
    telephone: SITE.phoneIntl,
    slogan: "Gervigras fyrir garðinn og golfið",
    description:
      "Golfstofan er umboðsaðili SYNLawn á Íslandi og leggur púttflatir, golfflatir, teiga og gervigras í garða. Sama gras og í TGL. Fyrsta TGL-kerfið í Evrópu var lagt hjá Golfklúbbnum Oddi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      postalCode: SITE.postal,
      addressLocality: SITE.city,
      addressCountry: "IS",
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: { "@type": "Country", name: "Ísland" },
    brand: { "@type": "Brand", name: "SYNLawn" },
    parentOrganization: { "@type": "Organization", name: "Iðnafl ehf.", url: "https://idnafl.is" },
    sameAs: ["https://idnafl.is", "https://metatron.is"],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Golfstofan", path: "/" }, ...items].map((it, i) => ({
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
    serviceType: "Lagning gervigrass",
  };
}
