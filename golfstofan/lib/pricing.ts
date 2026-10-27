/**
 * Viðmiðunarverð fyrir reiknivélina.
 *
 * Verðin eru í íslenskum krónum á fermetra, með vsk., efni og lögn.
 * Þau eru byggð á opinberum verðbilum erlendis (BNA, Norðurlönd, Holland, 2025–2026)
 * fyrir uppsett gervigras og púttflatir, umreiknuð í ISK með álagi fyrir flutning
 * og íslenskan launakostnað. Golfstofan þarf að yfirfara þessar tölur fyrir opnun.
 */

export type ProjectType = "gardur" | "puttflot" | "svalir" | "golfvollur";
export type Surface = "mold" | "hart";

export type ProjectSpec = {
  id: ProjectType;
  label: string;
  short: string;
  grass: string;
  /** kr./m² fyrir gras og lögn á tilbúið undirlag: [lágt, hátt] */
  lay: [number, number];
  defaultArea: number;
  defaultSurface: Surface;
};

export const PROJECTS: ProjectSpec[] = [
  {
    id: "gardur",
    label: "Garður",
    short: "garð",
    grass: "SYNNatural 50L",
    lay: [9900, 14900],
    defaultArea: 80,
    defaultSurface: "mold",
  },
  {
    id: "puttflot",
    label: "Púttflöt",
    short: "púttflöt",
    grass: "PrecisionPutt + SYNFringe",
    lay: [24900, 39900],
    defaultArea: 25,
    defaultSurface: "mold",
  },
  {
    id: "svalir",
    label: "Svalir eða pallur",
    short: "svalir",
    grass: "SYNAugustine 347",
    lay: [8900, 13900],
    defaultArea: 20,
    defaultSurface: "hart",
  },
  {
    id: "golfvollur",
    label: "Golfvöllur",
    short: "golfvöll",
    grass: "PrecisionPutt + TeeStrike+",
    lay: [19900, 34900],
    defaultArea: 400,
    defaultSurface: "mold",
  },
];

/** Jarðvinna: uppgröftur, þjappað malarlag og jöfnun, kr./m² */
export const GROUND_PREP: [number, number] = [5000, 9000];

/** Lágmarksverð verks (útkall, flutningur, uppsetning) */
export const MINIMUM_JOB = 250000;

/** Lítil svæði kosta meira á fermetra, stór minna. */
function sizeFactor(area: number) {
  if (area < 15) return 1.3;
  if (area < 30) return 1.15;
  if (area < 100) return 1;
  if (area < 300) return 0.92;
  return 0.85;
}

const round = (n: number) => Math.round(n / 10000) * 10000;

export type Estimate = {
  low: number;
  high: number;
  perM2Low: number;
  grass: string;
};

export function estimate(type: ProjectType, area: number, surface: Surface): Estimate {
  const spec = PROJECTS.find((p) => p.id === type) ?? PROJECTS[0];
  const f = sizeFactor(area);
  const prep = surface === "mold" ? GROUND_PREP : [0, 0];
  const perLow = (spec.lay[0] + prep[0]) * f;
  const perHigh = (spec.lay[1] + prep[1]) * f;
  const low = Math.max(MINIMUM_JOB, round(perLow * area));
  const high = Math.max(low + 50000, round(perHigh * area));
  return { low, high, perM2Low: Math.round(perLow / 100) * 100, grass: spec.grass };
}

export const kr = (n: number) => new Intl.NumberFormat("is-IS").format(n).replace(/,/g, ".") + " kr.";
