# Golfstofan

The golfstofan.is site rebuilt as a Next.js lead page. It explains the offer in one line and gives a live m² price calculator in the hero.

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
3. **Copy to confirm.** FAQ answers about winter and drainage are written in general terms. Check them against what Golfstofan actually promises.

## Where things are

- `app/page.tsx`: all sections and copy (grasses, steps, FAQ)
- `components/Estimator.tsx`: the calculator and the lead form in the hero
- `lib/lead.ts`: contact details and the Formspree submit
- `public/img`: photos taken from the current golfstofan.is
