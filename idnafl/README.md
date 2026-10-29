# Iðnafl

idnafl.is rebuilt as a Next.js site for the parent company. The home page leads with the Iðnafl logo and the slogan "Leiðandi í lausnum", shows the three companies (Gólflagnir, Metatron, Golfstofan), and routes every visitor to the right one with "Hvað vantar þig?": pick the job and the site shows which company does it, links straight to that company's calculator or inquiry, and offers a short call-back form.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Formspree.** Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`. Each message carries a "Fyrirtæki" field (Gólflagnir, Metatron, Golfstofan or Iðnafl) so it can be forwarded. Without the ID, the form opens a prefilled email to the right company's address.
2. **Staff.** `lib/content.ts` → `PEOPLE` matches idnafl.is/mannaudur. Kristján Helgi Hermannsson and Hákon Sveinbjörnsson have no portrait yet; add photos to `public/img/folk/` and set `img`.
3. **Policies.** The four 2025 policy PDFs are in `public/skjol/` and the old WordPress PDF URLs redirect there. Replace a file in place when a policy is updated, and change `updated` and `size` in `POLICIES`.
4. **Domain.** `next.config.ts` redirects www.idnafl.is to idnafl.is, old pages to their new place, and old project posts to the sister site that owns the work.

## SEO

- Organization JSON-LD with the three companies as `subOrganization`, BreadcrumbList on every sub page, FAQPage on the home page, Person for the managers, DigitalDocument for each policy PDF.
- `app/sitemap.ts`, `app/robots.ts`, canonical URLs, Open Graph image `public/img/og.jpg`.
- Iðnafl ranks for its own name; service searches belong on golflagnir.is, metatron.is and golfstofan.is, and every project and company card links there.

## Where things are

- `lib/site.ts`: contact details, navigation and the three companies (names with Icelandic case forms, logos, photos)
- `lib/content.ts`: projects, people, values, policies, FAQ
- `components/Router.tsx`: "Hvað vantar þig?"
- `components/ProjectGrid.tsx`: projects with a company filter
