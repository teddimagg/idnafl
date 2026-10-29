export const SITE = {
  name: "Metatron",
  legalName: "Metatron ehf.",
  url: "https://metatron.is",
  email: "info@metatron.is",
  phone: "565 3600",
  phoneHref: "tel:+3545653600",
  phoneIntl: "+354 565 3600",
  street: "Tónahvarf 5",
  postal: "203",
  city: "Kópavogur",
  address: "Tónahvarf 5, 203 Kópavogur",
  geo: { lat: 64.09518, lng: -21.81277 },
  social: {
    facebook: "https://www.facebook.com/Metatronehf",
    instagram: "https://www.instagram.com/metatronehf",
    youtube: "https://www.youtube.com/@Metatronehf",
  },
};

/** Systurfyrirtækin innan Iðnafls, sýnd neðst á öllum síðum. Lógóin eru ljós útgáfa fyrir dökkan grunn. */
export const GROUP = [
  { name: "Iðnafl", url: "https://idnafl.is", logo: "/brand/idnafl-horizontal-dark.png", w: 1220, h: 300, what: "Móðurfélagið" },
  { name: "Gólflagnir", url: "https://golflagnir.is", logo: "/brand/golflagnir-dark.png", w: 1421, h: 299, what: "Iðnaðargólf og epoxy" },
  { name: "Metatron", url: "https://metatron.is", logo: "/brand/metatron-dark.png", w: 1682, h: 232, what: "Gervigras og lýsing" },
  { name: "Golfstofan", url: "https://www.golfstofan.is", logo: "/brand/golfstofan-dark.png", w: 1558, h: 336, what: "Golfflatir og púttflatir" },
];

export const NAV = [
  { href: "/gervigrasvellir", label: "Gervigrasvellir" },
  { href: "/flodlysing", label: "Flóðlýsing" },
  { href: "/gervigras-i-gardinn", label: "Garðagras" },
  { href: "/vidhald", label: "Viðhald" },
  { href: "/verkefni", label: "Verkefni" },
];

/** Allar þjónustusíður, notað í fæti og á forsíðu. */
export const SERVICES = [
  { href: "/gervigrasvellir", label: "Gervigrasvellir", line: "Fótboltavellir frá A til Ö, með púða, vökvun og FIFA-úttekt.", img: "/img/kerecis-vollurinn-isafjordur.jpg", alt: "Kerecis-völlurinn á Ísafirði séður úr lofti" },
  { href: "/flodlysing", label: "Flóðlýsing", line: "Musco lýsing fyrir velli, golfvelli, hafnir og iðnað.", img: "/img/fylkir-flodlysing.jpg", alt: "Upplýstur knattspyrnuleikvangur að kvöldi" },
  { href: "/gervigras-i-gardinn", label: "Gervigras í garðinn", line: "SYNLawn garðagras með 15 ára ábyrgð.", img: "/img/gardagras-vatnsnes.jpg", alt: "Garðagras í kringum Vatnsnes í Keflavík" },
  { href: "/vidhald", label: "Viðhald og þjónusta", line: "Þjónustuleiðir, viðgerðir og vetrarþjónusta allt árið.", img: "/img/thjonusta-sportchamp.jpg", alt: "Viðhaldsvél á gervigrasvelli" },
  { href: "/vokvunarkerfi", label: "Vökvunarkerfi", line: "Þýsk vökvunarkerfi fyrir gervigras, hybrid- og grasvelli.", img: "/img/vokvun-uti.jpg", alt: "Vökvunarbyssa vökvar gervigrasvöll" },
  { href: "/ithrottahus-og-leiksvaedi", label: "Íþróttahús og leiksvæði", line: "Íþróttagólf, skiptitjöld, áhorfendapallar og fallvarnir.", img: "/img/leiksvaedi-thak.jpg", alt: "Leiksvæði í litum á þaki séð úr lofti" },
];
