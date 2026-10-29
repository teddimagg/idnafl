import type { Grass } from "@/components/GrassIndex";
import { estimate, kr } from "./pricing";

export type QA = { q: string; a: string };

/** Verðdæmi í svörum eru reiknuð úr lib/pricing.ts svo þau passi alltaf við reiknivélina. */
const range = (e: { low: number; high: number }) => `${kr(e.low)} til ${kr(e.high)}`;
const garden = estimate("gardur", 80, "mold");
const putt = estimate("puttflot", 25, "mold");
const club = estimate("golfvollur", 400, "mold");

export const GRASSES: Grass[] = [
  {
    name: "PrecisionPutt",
    use: "Púttflatir heima og á golfvöllum",
    pile: "10 mm",
    text: "Rúllar á 10–12 STIMP, eins og keppnisflöt.",
    img: "/img/gras-precisionputt.png",
    href: "/puttflot",
    cta: "Púttflöt í garðinn",
  },
  {
    name: "TeeStrike+",
    use: "Teigar og æfingasvæði",
    pile: "29 mm",
    text: "Þú getur tíað í það eins og á alvöru teig.",
    img: "/img/gras-teestrike.png",
    href: "/golfklubbar",
    cta: "Teigar og æfingasvæði",
  },
  {
    name: "SYNNatural 50L",
    use: "Garðar og leiksvæði",
    pile: "50 mm",
    text: "Stráin snúa í allar áttir. Eins nálægt alvöru garðagrasi og til er.",
    img: "/img/gras-synnatural.png",
    href: "#reikna-gardur",
  },
  {
    name: "SYNAugustine 347",
    use: "Garðar, svalir og kargi",
    pile: "45 mm",
    text: "Fjölhæft gras í garðinn, á svalirnar og í karga.",
    img: "/img/gras-synaugustine.png",
    href: "#reikna-svalir",
  },
  {
    name: "SYNFringe",
    use: "Kantur í kringum flatir",
    pile: "25 mm",
    text: "Stuttklippt kargagras sem rammar flötina inn.",
    img: "/img/gras-synfringe.png",
    href: "/puttflot",
    cta: "Svona rammar það flötina inn",
  },
];

export const HOME_FAQ: QA[] = [
  {
    q: "Hvað kostar gervigras á fermetra?",
    a: `Garður sem er 80 m² kostar um ${range(garden)} með jarðvinnu og lögn. Á svölum er verðið lægra en púttflatir kosta meira. Reiknivélin efst gefur viðmið fyrir stærðina þína og við staðfestum verðið eftir skoðun.`,
  },
  {
    q: "Þarf að slá eða vökva?",
    a: "Nei. Grasið helst grænt allt árið. Það þarf bara að bursta það og blása af því laufi öðru hverju.",
  },
  {
    q: "Þolir það íslenskan vetur?",
    a: "Já. Það þolir frost og snjó og vatn rennur niður í malarlagið undir, svo það myndast hvorki drulla né pollar.",
  },
  {
    q: "Leggið þið á svalir og sameignir?",
    a: "Já. Á hörðu undirlagi þarf enga jarðvinnu og verðið er lægra.",
  },
];

export const PUTT_FAQ: QA[] = [
  {
    q: "Hvað kostar púttflöt í garðinn?",
    a: `Púttflöt sem er 25 m² og lögð á mold eða gras kostar um ${range(putt)} með jarðvinnu, grasi og lögn. Verðið fer eftir stærð og undirlagi. Reiknivélin gefur viðmið fyrir flötina þína og við staðfestum það eftir skoðun.`,
  },
  {
    q: "Rúllar hún eins og alvöru flöt?",
    a: "Já. PrecisionPutt rúllar á 10–12 STIMP, sama hraða og keppnisflatir. Halli og brot eru mótuð í undirlagið áður en grasið er lagt.",
  },
  {
    q: "Hvernig er flötin hönnuð?",
    a: "Við skoðum garðinn með þér, merkjum útlínur flatarinnar og ákveðum halla. Í kringum flötina leggjum við kantgras og garðagras svo hún falli inn í garðinn.",
  },
  {
    q: "Þolir púttflötin veturinn?",
    a: "Já. Grasið þolir frost og snjó og vatn rennur niður í gegnum það. Á vorin er flötin burstuð og hún er tilbúin.",
  },
  {
    q: "Þarf að slá, vökva eða bera á?",
    a: "Nei. Það þarf aðeins að bursta flötina og blása af henni laufi öðru hverju.",
  },
];

export const CLUB_FAQ: QA[] = [
  {
    q: "Hvað er TGL-kerfi?",
    a: "TGL er golfdeild sem Tiger Woods og Rory McIlroy stofnuðu með PGA-mótaröðinni. Hún er spiluð innanhúss á grasi frá SYNLawn. Kerfið er sama gras og höggdeyfilag og þar er notað. Fyrsta TGL-kerfið í Evrópu var lagt hjá Golfklúbbnum Oddi.",
  },
  {
    q: "Hvað kostar gervigrasflöt fyrir golfklúbb?",
    a: `Æfingasvæði með flöt og teig, um 400 m², kostar um ${range(club)} með jarðvinnu og lögn. Hvert svæði er hannað sérstaklega, svo við gefum bindandi tilboð eftir skoðun.`,
  },
  {
    q: "Er hægt að vippa og slá inn á flötina?",
    a: "Já. Undir flötinni er True Stop höggdeyfilag frá SYNLawn sem tekur við innáhöggum, svo þar má æfa vipp og innáhögg, ekki bara pútt.",
  },
  {
    q: "Hvað endist golfgrasið lengi?",
    a: "Golfgras frá SYNLawn er með allt að 20 ára ábyrgð. Það þolir íslenskan vetur og þarf hvorki slátt, vökvun né áburð.",
  },
  {
    q: "Getið þið líka lýst upp æfingasvæðið?",
    a: "Já. Lýsingarkerfi frá Musco eru á tugum íþróttavalla á Íslandi og Musco sérhæfir sig líka í lýsingu golfvalla. Við bjóðum heildarlausnir með Metatron fyrir flatir og æfingasvæði.",
  },
];

export const STEPS = [
  { title: "Við mælum", text: "Þú sendir fermetrana, við skoðum svæðið og þú færð skriflegt tilboð." },
  { title: "Við undirbúum", text: "Gamla yfirborðið fer og malarlag er þjappað og jafnað." },
  { title: "Við leggjum grasið", text: "Lagt, saumað og fest. Enginn sláttur eftir það." },
];
