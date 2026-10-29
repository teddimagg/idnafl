/**
 * Viðmiðunarverð fyrir reiknivélina, í krónum á fermetra með vsk., efni og vinnu.
 *
 * Byggt á opinberum verðbilum fyrir lögð gólf í Evrópu og Norðurlöndum 2025–2026
 * (epoxy 20–80 €/m², polyurethane 40–100 €/m², epoxy terrazzo 20–40 $/ft², bílskúrar í
 * Danmörku 400–500 DKK/m² án vsk.), umreiknað í krónur með álagi fyrir íslenskar aðstæður.
 * Gólflagnir þurfa að yfirfara tölurnar fyrir opnun.
 */

export type SystemId =
  | "maxi-700"
  | "maxi-1500"
  | "topp-4000"
  | "maxi-500"
  | "maxi-5000"
  | "polyurethan"
  | "ucrete"
  | "terrazzo"
  | "metallic"
  | "slipun";

export type PriceSpec = { id: SystemId; name: string; short: string; perM2: [number, number]; days: string };

export const SYSTEMS: PriceSpec[] = [
  { id: "maxi-700", name: "Maxi 700 epoxy", short: "Þunnt epoxy, 0,7 mm", perM2: [6900, 10900], days: "1–2 dagar" },
  { id: "maxi-1500", name: "Maxi 1500 epoxy", short: "Einlitt epoxy, 2–3 mm", perM2: [10900, 16900], days: "2–3 dagar" },
  { id: "topp-4000", name: "Topp 4000 epoxy", short: "Marglitt kvarsgólf með hálkuvörn", perM2: [12900, 19900], days: "3–4 dagar" },
  { id: "maxi-500", name: "Maxi 500 epoxy", short: "Sterkt epoxy, 3–4 mm", perM2: [13900, 21900], days: "3–4 dagar" },
  { id: "maxi-5000", name: "Maxi 5000 epoxy", short: "5 mm með grófri hálkuvörn", perM2: [15900, 24900], days: "3–5 dagar" },
  { id: "polyurethan", name: "Polyurethan", short: "Fjaðrandi og hljóðdempandi", perM2: [13900, 22900], days: "3–5 dagar" },
  { id: "ucrete", name: "Ucrete", short: "Hitaþolið polyurethan-steypugólf", perM2: [21900, 34900], days: "3–5 dagar" },
  { id: "terrazzo", name: "Epoxy terrazzo", short: "Slípað gólf úr íslensku grjóti", perM2: [34900, 59900], days: "1–2 vikur" },
  { id: "metallic", name: "Metallic epoxy", short: "Sérhannað metallic yfirborð", perM2: [16900, 27900], days: "3–4 dagar" },
  { id: "slipun", name: "Slípuð steypa", short: "Slípað, pólerað eða lakkað", perM2: [5900, 10900], days: "1–3 dagar" },
];

export type Room = {
  id: string;
  label: string;
  /** Hvað rýmið kallar fyrst á; reiknivélin mælir með fyrsta kerfinu. */
  systems: SystemId[];
  defaultArea: number;
};

export const ROOMS: Room[] = [
  { id: "bilskur", label: "Bílskúr", systems: ["topp-4000", "maxi-700", "metallic"], defaultArea: 35 },
  { id: "idnadur", label: "Iðnaður eða lager", systems: ["maxi-500", "maxi-1500", "ucrete"], defaultArea: 400 },
  { id: "matvaeli", label: "Matvæla- eða fiskvinnsla", systems: ["maxi-5000", "ucrete", "topp-4000"], defaultArea: 300 },
  { id: "eldhus", label: "Iðnaðareldhús", systems: ["ucrete", "maxi-5000", "topp-4000"], defaultArea: 80 },
  { id: "verkstaedi", label: "Verkstæði", systems: ["maxi-500", "topp-4000", "maxi-1500"], defaultArea: 200 },
  { id: "bilastaedi", label: "Bílastæðahús", systems: ["maxi-500", "maxi-5000"], defaultArea: 1500 },
  { id: "verslun", label: "Verslun, skrifstofa eða skóli", systems: ["polyurethan", "terrazzo", "maxi-1500"], defaultArea: 250 },
  { id: "heimili", label: "Heimili", systems: ["terrazzo", "metallic", "slipun"], defaultArea: 60 },
  { id: "votrymi", label: "Búningsklefi eða votrými", systems: ["topp-4000", "maxi-1500"], defaultArea: 60 },
];

export type Substrate = "heilt" | "sprungid" | "gamalt";
export const SUBSTRATES: { id: Substrate; label: string; perM2: [number, number] }[] = [
  { id: "heilt", label: "Heil steypa", perM2: [0, 0] },
  { id: "sprungid", label: "Sprungur eða olíublettir", perM2: [2500, 5500] },
  { id: "gamalt", label: "Gamalt gólfefni á", perM2: [3500, 7000] },
];

/** Lágmarksverð verks: ferðir, uppsetning og efnisblöndun. */
export const MINIMUM_JOB = 190000;

function sizeFactor(area: number) {
  if (area < 20) return 1.25;
  if (area < 60) return 1.1;
  if (area < 300) return 1;
  if (area < 1000) return 0.88;
  return 0.78;
}

const round = (n: number) => Math.round(n / 10000) * 10000;

export function estimate(system: SystemId, area: number, substrate: Substrate) {
  const s = SYSTEMS.find((x) => x.id === system) ?? SYSTEMS[0];
  const prep = SUBSTRATES.find((x) => x.id === substrate)?.perM2 ?? [0, 0];
  const f = sizeFactor(area);
  const low = Math.max(MINIMUM_JOB, round((s.perM2[0] + prep[0]) * f * area));
  const high = Math.max(low + 60000, round((s.perM2[1] + prep[1]) * f * area));
  return { low, high, system: s };
}

export const kr = (n: number) => new Intl.NumberFormat("is-IS").format(n).replace(/,/g, ".") + " kr.";
