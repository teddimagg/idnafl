# Metatron

metatron.is rebuilt as a Next.js site: artificial-turf pitches, Musco floodlighting, irrigation, pitch maintenance, sports halls and garden turf. Every page ends in the same interactive inquiry ("Hvað vantar þig?"): pick the job, answer one or two questions, leave a name and phone number. For garden turf it prices the grass straight from the price list.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before launch

1. **Formspree.** Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`. Without it the inquiry opens a prefilled email to info@metatron.is, so no lead is lost.
2. **Garden turf prices.** `lib/content.ts` → `PRODUCTS` holds the per-m² prices from the current metatron.is shop (5.190, 6.990, 8.390, 8.490 kr.). Confirm they are current and whether they include VAT.
3. **Claims to confirm** (all in `lib/content.ts` and the page files):
   - "57 gervigrasvellir í fullri stærð" (metatron.is). idnafl.is says "yfir 60 keppnisvelli". Pick one.
   - "Musco lýsir 18 af 20 völlum ensku úrvalsdeildarinnar" (from idnafl.is) on `/flodlysing`.
   - The club list `CLUBS` comes from the logo carousel on metatron.is, which does not say what work was done for each club.
   - Project years in `PROJECTS`.
4. **Video.** The three hero loops in `public/video` are 9–12 s, 1280×720 H.264 (about 2.5 MB each), cut from the original metatron.is clips. They only load on screens that allow motion and are not in data-saver mode.
5. **Domain.** `next.config.ts` redirects www.metatron.is to metatron.is and every old WordPress URL to its new page. Golf pages go to golfstofan.is, staff (`/mannaudur`) to idnafl.is.

## SEO

- One page per service, each with its own title, description, h1, FAQ, Service + FAQPage + BreadcrumbList JSON-LD: `/gervigrasvellir`, `/flodlysing`, `/gervigras-i-gardinn` (with Product + Offer per turf), `/vidhald`, `/vokvunarkerfi`, `/ithrottahus-og-leiksvaedi`.
- `/verkefni` with anchors per project (`#ka`, `#sun`, `#kerecis`, `#2025`, `#vatnsnes`), `/hafa-samband`, `/personuvernd`.
- LocalBusiness JSON-LD with Iðnafl as parent in `app/layout.tsx`; `app/sitemap.ts`, `app/robots.ts`, Open Graph image `public/img/og.jpg`.

## Where things are

- `lib/content.ts`: stats, products, projects, FAQs
- `lib/site.ts`: contact details, navigation, services and the sister-site list
- `components/Inquiry.tsx`: the interactive inquiry (topics, follow-up questions, garden calculator, contact fields)
- `components/HeroVideo.tsx`, `components/Scoreboard.tsx`: hero loop and the counting stats
- `public/img`, `public/video`: photos and clips from metatron.is and idnafl.is
