/**
 * Efni Iðnafls-vefsins. Fullyrðingar koma af idnafl.is og úr gæðaskjölum Iðnafls (2025).
 */
import type { CompanyId } from "./site";

export type QA = { q: string; a: string };

export type Project = {
  name: string;
  place: string;
  company: CompanyId;
  kind: string;
  img: string;
  alt: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    name: "KA-völlurinn",
    place: "Akureyri",
    company: "metatron",
    kind: "Gervigrasvöllur",
    img: "/img/ka-vollurinn-akureyri.jpg",
    alt: "KA-völlurinn á Akureyri séður úr lofti",
    href: "https://metatron.is/verkefni#ka",
  },
  {
    name: "Vinnuaðstaða atNorth",
    place: "Keflavík",
    company: "golflagnir",
    kind: "500 gólf",
    img: "/img/atnorth-vinnuadstada.jpg",
    alt: "Ljóst epoxy gólf í vinnurými atNorth",
    href: "https://golflagnir.is/verkefni",
  },
  {
    name: "TGL-flötin hjá Oddi",
    place: "Garðabær",
    company: "golfstofan",
    kind: "TGL-kerfi",
    img: "/img/oddur-flot-sumar.jpg",
    alt: "Púttflöt Golfklúbbsins Odds",
    href: "https://www.golfstofan.is/golfklubbar",
  },
  {
    name: "SÚN-völlurinn",
    place: "Neskaupstaður",
    company: "metatron",
    kind: "Völlur og flóðlýsing",
    img: "/img/sun-vollurinn-nott.jpg",
    alt: "SÚN-völlurinn í Neskaupstað upplýstur að kvöldi",
    href: "https://metatron.is/verkefni#sun",
  },
  {
    name: "Sprungið gólf í Klettagörðum",
    place: "Reykjavík",
    company: "golflagnir",
    kind: "Blastrac og 500 gólf",
    img: "/img/klettagardar-eftir.jpg",
    alt: "Verkstæðisgólf í Klettagörðum eftir nýtt epoxy gólf",
    href: "https://golflagnir.is/golfefni/flex",
  },
  {
    name: "Kerecis-völlurinn",
    place: "Ísafjörður",
    company: "metatron",
    kind: "Gervigrasvöllur",
    img: "/img/kerecis-vollurinn-isafjordur.jpg",
    alt: "Kerecis-völlurinn á Ísafirði við fjörðinn",
    href: "https://metatron.is/verkefni#kerecis",
  },
  {
    name: "Púttflöt í Garðabæ",
    place: "Garðabær",
    company: "golfstofan",
    kind: "Púttflöt",
    img: "/img/puttflot-gardabaer-kylfingur.jpg",
    alt: "Kylfingur púttar á gervigrasflöt í garði",
    href: "https://www.golfstofan.is/puttflot",
  },
  {
    name: "Sundakælir Eimskips",
    place: "Reykjavík",
    company: "golflagnir",
    kind: "Iðnaðargólf",
    img: "/img/eimskip-sundakaelir.jpg",
    alt: "Gljáandi gólf í kæligeymslu Eimskips",
    href: "https://golflagnir.is/verkefni",
  },
  {
    name: "Vatnsnes",
    place: "Keflavík",
    company: "metatron",
    kind: "Garðagras",
    img: "/img/gardagras-vatnsnes.jpg",
    alt: "Garðagras í kringum Vatnsnes í Keflavík",
    href: "https://metatron.is/verkefni#vatnsnes",
  },
  {
    name: "Bifreiðaverkstæði Toyota",
    place: "Selfoss",
    company: "golflagnir",
    kind: "500 gólf á gólf og veggi",
    img: "/img/toyota-selfoss.jpg",
    alt: "Verkstæði Toyota á Selfossi með nýju gólfi",
    href: "https://golflagnir.is/verkefni",
  },
  {
    name: "Mötuneyti Arion banka",
    place: "Reykjavík",
    company: "golflagnir",
    kind: "Topp 4000",
    img: "/img/topp-4000-eldhus-arion.jpg",
    alt: "Topp 4000 gólf í eldhúsi Arion banka",
    href: "https://golflagnir.is/hentar-fyrir/idnadareldhus",
  },
];

export type Person = { name: string; role?: string; company: CompanyId | "idnafl"; email: string; img?: string };

/** Starfsfólk eins og það er birt á idnafl.is/mannaudur. */
export const PEOPLE: Person[] = [
  { name: "Ármann Andri Einarsson", role: "Framkvæmdastjóri", company: "idnafl", email: "armann@idnafl.is", img: "/img/folk/armann.jpg" },
  { name: "Guðmundur Breiðfjörð", role: "Rekstrarstjóri", company: "idnafl", email: "gummi@idnafl.is", img: "/img/folk/gudmundur.jpg" },
  { name: "Anna Valdís Einarsdóttir", role: "Verkefnastjóri", company: "metatron", email: "anna@metatron.is", img: "/img/folk/anna-valdis.jpg" },
  { name: "Anna Margrét Kristjánsdóttir", role: "Fjármál", company: "idnafl", email: "finance@idnafl.is", img: "/img/folk/anna-margret.jpg" },
  { name: "Emil Vasiliev Rangelov", company: "golflagnir", email: "golf@golflagnir.is", img: "/img/folk/emil.jpg" },
  { name: "Slawomir Piotr Turon", company: "golflagnir", email: "golf@golflagnir.is", img: "/img/folk/slawomir.jpg" },
  { name: "Peter Martisovic", company: "golflagnir", email: "golf@golflagnir.is", img: "/img/folk/peter.jpg" },
  { name: "Zdenek Lipowski", company: "golflagnir", email: "golf@golflagnir.is", img: "/img/folk/zdenek.jpg" },
  { name: "Krzystof Konopko", company: "golflagnir", email: "golf@golflagnir.is", img: "/img/folk/krzystof.jpg" },
  { name: "Yehya Al Arbeid", company: "metatron", email: "info@metatron.is", img: "/img/folk/yehya.jpg" },
  { name: "Ghassan Charrouf Almihitawi", company: "metatron", email: "info@metatron.is", img: "/img/folk/ghassan.jpg" },
  { name: "Kristján Helgi Hermannsson", company: "metatron", email: "info@metatron.is" },
  { name: "Hákon Sveinbjörnsson", company: "metatron", email: "info@metatron.is" },
];

/** Gildi Iðnafls úr sjálfbærni- og umhverfisstefnu (2025). */
export const VALUES = ["Ábyrg", "Heiðarleg", "Hreinskilin", "Fagleg", "Vandvirk", "Langtímaþenkjandi"];

export const POLICIES = [
  {
    title: "Innra eftirlit",
    updated: "mars 2025",
    text: "Hvernig áhætta, verkferlar og eftirlit eru skipulögð samkvæmt COSO-ramma um innra eftirlit.",
    file: "/skjol/innra-eftirlit-idnafls.pdf",
    cover: "/img/skjal-innra-eftirlit.jpg",
    size: "3,4 MB",
  },
  {
    title: "Sjálfbærnistefna",
    updated: "febrúar 2025",
    text: "Gildi, meginreglur og markmið Iðnafls, tengd heimsmarkmiðum 7, 9, 11 og 12, og ISO-staðlarnir sem við fylgjum.",
    file: "/skjol/sjalfbaernistefna-idnafls.pdf",
    cover: "/img/skjal-sjalfbaernistefna.jpg",
    size: "4,4 MB",
  },
  {
    title: "Samfélagsleg ábyrgð",
    updated: "mars 2025",
    text: "Umhverfis-, gæða-, mannréttinda- og öryggisstefna Iðnafls í einu skjali.",
    file: "/skjol/samfelagsleg-abyrgd-idnafls.pdf",
    cover: "/img/skjal-samfelagsleg-abyrgd.jpg",
    size: "3,7 MB",
  },
  {
    title: "Umhverfisstefna",
    updated: "apríl 2025",
    text: "Markmið Iðnafls í umhverfismálum og hvernig við fylgjum þeim eftir í verkum okkar.",
    file: "/skjol/umhverfisstefna-idnafls.pdf",
    cover: "/img/skjal-umhverfisstefna.jpg",
    size: "3,7 MB",
  },
];

export const SDGS = [
  { n: "7", t: "Sjálfbær orka" },
  { n: "9", t: "Nýsköpun og uppbygging" },
  { n: "11", t: "Sjálfbærar borgir og samfélög" },
  { n: "12", t: "Ábyrg neysla og framleiðsla" },
];

export const STANDARDS = [
  { n: "ISO 9001", t: "Gæðastjórnun" },
  { n: "ISO 45001", t: "Öryggi og heilsa á vinnustað" },
  { n: "ISO 26000", t: "Samfélagsleg ábyrgð" },
];

export const HOME_FAQ: QA[] = [
  {
    q: "Hvað er Iðnafl?",
    a: "Iðnafl ehf. á og rekur þrjú sérhæfð fyrirtæki: Gólflagnir (iðnaðargólf og epoxy), Metatron (gervigrasvellir, flóðlýsing og viðhald) og Golfstofuna (púttflatir og golfflatir). Saman erum við 15 manna teymi á Tónahvarfi 5 í Kópavogi.",
  },
  {
    q: "Er SS Gólf enn til?",
    a: "SS Gólf hefur sameinast Gólflögnum. Sama fólk og sömu gólfefni, nú undir nafni Gólflagna á golflagnir.is.",
  },
  {
    q: "Við hvern á ég að tala?",
    a: "Hringdu í 565 3600, sama númer fyrir öll fyrirtækin. Gólflagnir sjá um gólfin, Metatron um velli, flóðlýsingu og garðagras og Golfstofan um púttflatir og golfflatir.",
  },
  {
    q: "Hvar eruð þið?",
    a: "Á Tónahvarfi 5 í Kópavogi. Þangað fluttum við í maí 2024. Við vinnum um allt land.",
  },
];
