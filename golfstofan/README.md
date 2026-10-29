# Golfstofan

golfstofan.is rebuilt as a Next.js site. It explains the offer in one line and puts a live m² price calculator in the hero of every page. Golfstofan is part of Iðnafl; the footer links its sister sites (Iðnafl, Gólflagnir, Metatron).

## Run

```bash
npm install
npm run dev
```

Production: `npm run build && npm start`.

## Before launch

1. **Formspree.** Create a form at formspree.io and put its ID in `.env.local`:
   `NEXT_PUBLIC_FORMSPREE_ID=xxxxxxx`. Until it is set, the calculator's form opens a prefilled email to info@idnafl.is so no lead is lost.
2. **Prices.** `lib/pricing.ts` holds reference prices per m² (incl. VAT, materials and installation), the ground-prep surcharge, size discounts and the minimum job. They come from public 2025–26 price ranges abroad, converted to ISK with an Iceland markup. Golfstofan must replace them with its own figures.
3. **Copy to confirm.** FAQ answers about winter and drainage are written in general terms. The "allt að 20 ára ábyrgð" on golf turf comes from metatron.is. Check both against what Golfstofan actually promises. Price examples in the FAQ are computed from `lib/pricing.ts`, so they update with it.
4. **Domain.** `next.config.ts` redirects golfstofan.is to www.golfstofan.is and the old WordPress URLs (`/expo/`, `/fadu-tilbod/`) to the new pages.

## SEO

- Pages: `/` (gervigras í garða og golf), `/puttflot` (púttflöt í garðinn), `/golfklubbar` (flatir og æfingasvæði fyrir golfklúbba, TGL), `/personuvernd`.
- Each page has its own title, description, canonical, FAQ with FAQPage JSON-LD, plus Service and BreadcrumbList on the sub pages. LocalBusiness JSON-LD with Iðnafl as parent is in `app/layout.tsx`.
- `app/sitemap.ts`, `app/robots.ts`, Open Graph image `public/img/og.jpg`.

## Where things are

- `lib/content.ts`: grasses, steps and all FAQ copy
- `lib/site.ts`: contact details, navigation and the sister-site list
- `app/*/page.tsx`: page sections
- `components/Estimator.tsx`: the calculator and its lead form (`initial` picks the project type per page)
- `lib/lead.ts`: the Formspree submit
- `public/img`: photos from golfstofan.is and metatron.is (Oddur and Garðabær builds)
