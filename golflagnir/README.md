# Gólflagnir

golflagnir.is rebuilt as a Next.js site. SS Gólf (ssgolf.is) is merged into it. Its job is to rank for "epoxy gólf" and "iðnaðargólf" and turn visits into quote requests: there is a live m² price calculator on the home page, on every floor-system page and on every room page.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Formspree.** Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`. Without it, forms open a prefilled email to golf@golflagnir.is, so no lead is lost.
2. **Prices.** `lib/pricing.ts` holds reference prices per m² (incl. VAT, materials and labour), surcharges for substrate condition, size factors and the minimum job. These are estimates built from the brochure and public European price ranges. Gólflagnir must replace them with its own figures.
3. **Tækniblöð.** Put each new PDF in `public/taekniblod/` and register its path in `lib/datasheets.ts`. The old PDFs are deliberately not carried over. Until a sheet has a path, `/taekniblod` offers to email it.
4. **Claims to confirm.** In `lib/content.ts`:
   - the `CLIENTS` list (taken from the brochure and SS Gólf project pages);
   - the project dates left blank in `PROJECTS`.
5. **DNS.** Point ssgolf.is and www.ssgolf.is at this deployment. `next.config.ts` 301-redirects every old ssgolf.is and golflagnir.is URL to its new page, so search rankings carry over.

## SEO

- One page per floor system (`/golfefni/[slug]`, 10 pages) and per use (`/hentar-fyrir/[slug]`, 13 pages), each with its own title, description, h1, FAQ and Service + FAQPage + BreadcrumbList JSON-LD.
- Organization / HomeAndConstructionBusiness JSON-LD in `app/layout.tsx`, with Iðnafl as parent organisation.
- `app/sitemap.ts`, `app/robots.ts`, canonical URLs on every page, Open Graph image in `public/img/og.jpg`.
- Redirects from the old site (`/item/*`, `/catalog/category/*`, `/about`, dated blog URLs) and from ssgolf.is are in `next.config.ts`.

## Where things are

- `lib/content.ts`: all copy (systems, uses, projects, FAQ, photo captions)
- `lib/pricing.ts`: calculator rates
- `lib/site.ts`: contact details and the sister-site list for the group bar
- `components/Estimator.tsx`: the calculator and its quote form
- `public/img`: photos from the brochure, golflagnir.is and ssgolf.is
