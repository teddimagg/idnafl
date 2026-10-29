/**
 * Efni Metatron-vefsins. Allar fullyrðingar koma af metatron.is og idnafl.is (október 2026);
 * heimild er tilgreind í athugasemd þar sem hún er ekki augljós.
 */

export type QA = { q: string; a: string };

/** Næturmyndir kvikna eins og flóðljós þegar þær birtast; dagsmyndir koma inn án þess. */
export const isNight = (src: string) => /nott|flodlysing|fylkir|musco-(golfvollur|hofn|flugvollur)|fjordur/.test(src);

/** Tölur á stigatöflunni á forsíðu. */
export const STATS = [
  { n: "57", label: "gervigrasvellir í fullri stærð" }, // metatron.is/okkar-lausnir/fotboltavellir
  { n: "30+", label: "stór lýsingarkerfi sett upp hérlendis" }, // metatron.is/okkar-lausnir/lysingarbunadur
  { n: "5", label: "vellir afhentir á fyrstu fimm mánuðum 2025" },
  { n: "15", label: "ára ábyrgð á garðagrasi" },
];

/** Garðagras samkvæmt verðskrá metatron.is, verð á fermetra. Minnsta pöntun 10 fm. */
export const PRODUCTS = [
  { id: "gardagras-35", name: "Garðagras 35 mm", pile: "35 mm", price: 5190, note: "Hagkvæmasta grasið", img: "/img/gras-35mm.jpg" },
  { id: "gardagras-50", name: "Garðagras 50 mm", pile: "50 mm", price: 6990, note: "Lengra gras", img: "/img/gras-50mm.jpg" },
  { id: "berlin", name: "Garðagras Berlín", pile: "50 mm", price: 8390, note: "Hannað fyrir EM í Berlín 2024", img: "/img/gardagras-berlin.jpg" },
  { id: "synaugustine", name: "SYNAugustine 347", pile: "45 mm", price: 8490, note: "Líka á svalir og í karga", img: "/img/gras-synaugustine.jpg" },
] as const;
export const MIN_ORDER = 10;

export type Project = {
  id: string;
  name: string;
  place: string;
  year: string;
  kind: string;
  text: string;
  img: string;
  alt: string;
  yt?: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ka",
    name: "KA-völlurinn",
    place: "Akureyri",
    year: "2024",
    kind: "Keppnisvöllur",
    text: "Glænýr upphitaður keppnisvöllur. KA ætlar að gera hann að aðalvelli sínum.",
    img: "/img/ka-vollurinn-akureyri.jpg",
    alt: "KA-völlurinn á Akureyri séður úr lofti með leikmenn á æfingu",
    yt: "F0PlAMlESQI",
  },
  {
    id: "sun",
    name: "SÚN-völlurinn",
    place: "Neskaupstaður",
    year: "2024",
    kind: "Endurnýjun",
    text: "Gamli Norðfjarðarvöllurinn, breikkaður til suðurs. Nýtt gervigras, vökvunarkerfi, flóðlýsing, girðing og upplýsingaskjár.",
    img: "/img/sun-vollurinn-nott.jpg",
    alt: "SÚN-völlurinn í Neskaupstað upplýstur að kvöldi",
    yt: "xA3kBqBMjvw",
  },
  {
    id: "kerecis",
    name: "Kerecis-völlurinn",
    place: "Ísafjörður",
    year: "2024",
    kind: "Keppnisvöllur",
    text: "Nýr gervigrasvöllur Vestra á Ísafirði, með fjörðinn og fjöllin allt í kring.",
    img: "/img/kerecis-vollurinn-isafjordur.jpg",
    alt: "Kerecis-völlurinn á Ísafirði við fjörðinn",
    yt: "OLzsnqDXt3k",
  },
  {
    id: "2025",
    name: "Fimm vellir á fimm mánuðum",
    place: "Um allt land",
    year: "2025",
    kind: "Vellir í fullri stærð",
    text: "Fimm nýir fótboltavellir í fullri stærð afhentir á fyrstu fimm mánuðum ársins 2025.",
    img: "/img/fimm-vellir-2025.jpg",
    alt: "Merki félaganna sem fengu nýja velli árið 2025",
    yt: "0VrkepCl3Qg",
  },
  {
    id: "vatnsnes",
    name: "Vatnsnes",
    place: "Keflavík",
    year: "2024",
    kind: "Garðagras",
    text: "Garðagras í kringum Vatnsnes, sögufrægt hús sem Hótel Keflavík og Reykjanesbær hafa gert upp fyrir viðburði.",
    img: "/img/gardagras-vatnsnes.jpg",
    alt: "Vatnsnes í Keflavík með nýju garðagrasi allt í kring",
    yt: "efdGggbCicU",
  },
];

/** Golfverkin eru sýnd hjá systurfélaginu Golfstofunni. */
export const GOLF_PROJECTS = [
  { name: "TGL-flötin hjá Oddi", text: "Fyrsta TGL-kerfið í Evrópu.", href: "https://www.golfstofan.is/golfklubbar" },
  { name: "Púttflöt í Garðabæ", text: "Púttflöt og garðagras við heimahús.", href: "https://www.golfstofan.is/puttflot" },
];

/** Félög í merkjaröð metatron.is. Tengsl eru ekki tilgreind þar; staðfesta þarf áður en vefurinn fer í loftið. */
export const CLUBS = ["Breiðablik", "Fram", "Fylkir", "HK", "Selfoss", "Stjarnan", "Valur", "Vestri", "Víkingur"];

export const HOME_FAQ: QA[] = [
  {
    q: "Hvað gerir Metatron?",
    a: "Við leggjum gervigrasvelli frá A til Ö, setjum upp Musco flóðlýsingu og þýsk vökvunarkerfi, sjáum um viðhald vallanna allt árið og seljum og leggjum garðagras frá SYNLawn.",
  },
  {
    q: "Uppfylla vellirnir kröfur FIFA?",
    a: "Já. Grasvellir frá okkur uppfylla staðla og próf FIFA. Við vinnum með alþjóðlegum vottunaraðilum sem gera reglulega úttektir á völlum hér á landi, bæði FIFA Quality og FIFA Quality PRO.",
  },
  {
    q: "Vinnið þið utan höfuðborgarsvæðisins?",
    a: "Já, um allt land. Nýleg verk eru á Akureyri, Ísafirði, í Neskaupstað og Keflavík.",
  },
  {
    q: "Hvernig fæ ég tilboð?",
    a: "Veldu verkið í fyrirspurninni hér að ofan, segðu okkur frá því og skildu eftir nafn og síma. Við höfum samband og gerum tilboð. Þú getur líka hringt í 565 3600.",
  },
];

export const PITCH_FAQ: QA[] = [
  {
    q: "Uppfylla vellirnir kröfur FIFA?",
    a: "Já. Grasvellir frá okkur uppfylla staðla og próf FIFA. Við vinnum með alþjóðlegum FIFA-vottunaraðilum sem koma reglulega til landsins og taka út velli, bæði FIFA Quality og FIFA Quality PRO. Hafðu samband ef komið er að endurnýjun úttektar.",
  },
  {
    q: "Hvað er fjaðurlag undir gervigrasi?",
    a: "Púði sem er staðsteyptur undir grasið. Metatron á tækjabúnað til að staðsteypa fjaðurlagið hér á landi og áratuga reynsla er komin á þá aðferð.",
  },
  {
    q: "Leggið þið líka vökvunarkerfi og flóðlýsingu?",
    a: "Já. Við leggjum vandað vökvunarkerfi frá Þýskalandi og setjum upp Musco flóðlýsingu, svo völlurinn er afhentur tilbúinn til notkunar.",
  },
  {
    q: "Hvað kostar gervigrasvöllur?",
    a: "Það ræðst af stærð vallarins, undirlagi, grasi og hvort lýsing og vökvun fylgja. Sendu okkur upplýsingar um völlinn og við gerum tilboð.",
  },
  {
    q: "Sjáið þið um völlinn eftir afhendingu?",
    a: "Já. Við bjóðum þjónustuleiðir í áskrift, viðgerðir og vetrarþjónustu með snjómokstri og burstun, allan ársins hring.",
  },
];

export const GARDEN_FAQ: QA[] = [
  {
    q: "Hvað kostar gervigras í garðinn?",
    a: "Garðagras kostar frá 5.190 kr. á fermetra. Minnsta pöntun er 10 fermetrar. Ef við leggjum grasið bætast lögn og undirvinna við og kostnaðurinn fer eftir garðinum. Reiknaðu grasið hér að ofan og við gerum tilboð í lögnina.",
  },
  {
    q: "Þarf að slá eða vökva gervigras?",
    a: "Nei. Grasið helst grænt allt árið án sláttar, vökvunar eða áburðar. Það þarf aðeins að bursta það og blása af því laufi öðru hverju.",
  },
  {
    q: "Hentar gervigras börnum og gæludýrum?",
    a: "Já. Grasið er laust við þungmálma og eiturefni, það er slitsterkt og það myndast hvorki hólar né blettir.",
  },
  {
    q: "Hve lengi endist gervigras?",
    a: "Allt garðagras frá okkur er með 15 ára ábyrgð.",
  },
  {
    q: "Er hægt að kaupa bara grasið?",
    a: "Já. Grasið fæst eitt og sér, minnst 10 fermetrar. Veldu „Bara grasið“ í reiknivélinni.",
  },
];

export const LIGHT_FAQ: QA[] = [
  {
    q: "Hver er Musco?",
    a: "Musco Lighting er bandarískt fyrirtæki sem hefur hannað og þróað ljósakerfi fyrir íþróttaleikvanga frá árinu 1976. Metatron setur upp Musco lýsingu á Íslandi.",
  },
  {
    q: "Hvar hentar Musco lýsing?",
    a: "Á æfinga- og keppnisvöllum, inni og úti, á golfvöllum og æfingasvæðum og fyrir iðnað og stærri innviði eins og hafnir, flugvelli og vinnusvæði.",
  },
  {
    q: "Hvernig er lýsingunni stýrt?",
    a: "Kerfið er tengt stjórnstöð og vöktun og því er auðvelt að stýra því með snjallsíma.",
  },
  {
    q: "Hvaða ábyrgð fylgir?",
    a: "Allt að 10 ára ábyrgð.",
  },
  {
    q: "Hve mörg kerfi hafið þið sett upp?",
    a: "Yfir 30 stór lýsingarkerfi hafa verið sett upp hérlendis undanfarin misseri.",
  },
];

export const WATER_FAQ: QA[] = [
  {
    q: "Af hverju er gervigras vökvað?",
    a: "Rakt gervigras er svalara, núningur minni og boltinn rúllar jafnar. Þess vegna eru keppnisvellir oft vökvaðir fyrir leiki og æfingar.",
  },
  {
    q: "Hentar kerfið líka grasvöllum?",
    a: "Já. Kerfið er fyrir gervigrasvelli, hybrid-velli og hefðbundna grasvelli.",
  },
  {
    q: "Er hægt að vökva í knattspyrnuhúsi?",
    a: "Já. Vökvunarkerfin eru líka sett upp innanhúss.",
  },
  {
    q: "Sparar kerfið vatn?",
    a: "Skynjarar stýra vatnsmagninu, svo kerfið notar aðeins það vatn sem þarf, sparar orku og lengir líftíma vallarins.",
  },
];

export const CARE_FAQ: QA[] = [
  {
    q: "Hvað kostar þjónustuleið?",
    a: "Verðskrá fæst á info@metatron.is. Verð miðast við einn völl í fullri stærð á höfuðborgarsvæðinu og er án virðisaukaskatts. Akstur bætist við utan höfuðborgarsvæðisins.",
  },
  {
    q: "Hvað er innifalið?",
    a: "Eftir þjónustuleið: djúphreinsun, mýking, létt ástandsskoðun, innfyllingamæling, vorhreinsun í kringum völlinn, sótthreinsun og þjónustubók. Viðgerðir eru ekki innifaldar.",
  },
  {
    q: "Hvernig virkar áskriftin?",
    a: "Hún gildir í 12 mánuði og endurnýjast sjálfkrafa. Uppsögn er með þriggja mánaða fyrirvara og greitt er mánaðarlega. Gjaldið fylgir vísitölu neysluverðs um hver áramót.",
  },
  {
    q: "Bjóðið þið vetrarþjónustu?",
    a: "Já. Við mokum snjó og burstum vellina á veturna og þjónustum íþróttamannvirki allan ársins hring.",
  },
  {
    q: "Getið þið gert við slitinn völl?",
    a: "Já. Við gerum við slitna velli og gefum þeim nýtt líf.",
  },
];

export const HALL_FAQ: QA[] = [
  {
    q: "Hvað bjóðið þið fyrir íþróttahús?",
    a: "Flestar gerðir íþróttagólfa frá viðurkenndum framleiðendum, skiptitjöld og net, búnað í búningsklefa, áhorfendapalla og annan búnað sem íþróttahús þurfa.",
  },
  {
    q: "Hvað eru staðsteyptar fallvarnir?",
    a: "Púðar sem eru steyptir á staðnum undir leiktæki til að verja börn við fall. Þeir fást í ýmsum litum.",
  },
  {
    q: "Leggið þið hlaupabrautir?",
    a: "Já. Staðsteyptar hlaupabrautir eru á okkar sviði, rétt eins og leiksvæði.",
  },
];
