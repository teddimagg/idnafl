export const SITE = {
  name: "Iðnafl",
  legalName: "Iðnafl ehf.",
  slogan: "Leiðandi í lausnum",
  url: "https://idnafl.is",
  email: "info@idnafl.is",
  phone: "565 3600",
  phoneHref: "tel:+3545653600",
  phoneIntl: "+354 565 3600",
  street: "Tónahvarf 5",
  postal: "203",
  city: "Kópavogur",
  address: "Tónahvarf 5, 203 Kópavogur",
  geo: { lat: 64.09518, lng: -21.81277 },
};

export type CompanyId = "golflagnir" | "metatron" | "golfstofan";

/** Dótturfélögin. `logo` er fyrir ljósan grunn, `logoDark` fyrir dökkan. */
export const COMPANIES: Record<
  CompanyId,
  {
    name: string;
    /** eignarfall, „til Gólflagna“ */
    gen: string;
    /** „Gólflagnir hafa samband“, „Metatron hefur samband“ */
    has: string;
    url: string;
    host: string;
    email: string;
    logo: string;
    logoDark: string;
    w: number;
    h: number;
    what: string;
    text: string;
    services: string[];
    img: string;
    alt: string;
    /** mynd í fyrirtækjalistanum á forsíðu */
    photo: string;
    photoAlt: string;
  }
> = {
  golflagnir: {
    name: "Gólflagnir",
    gen: "Gólflagna",
    has: "hafa",
    url: "https://golflagnir.is",
    host: "golflagnir.is",
    email: "golf@golflagnir.is",
    logo: "/brand/golflagnir.png",
    logoDark: "/brand/golflagnir-dark.png",
    w: 1421,
    h: 299,
    what: "Iðnaðargólf og epoxy",
    text: "Samskeytalaus epoxy-, polyurethan- og terrazzogólf fyrir iðnað, matvælavinnslu, gagnaver, verkstæði og heimili. SS Gólf er nú hluti af Gólflögnum.",
    services: ["Epoxy gólf", "Ucrete og polyurethan", "Epoxy terrazzo", "Slípun og blastrac"],
    img: "/img/atnorth-vinnuadstada.jpg",
    alt: "Ljóst epoxy gólf í vinnurými atNorth",
    photo: "/img/eimskip-sundakaelir.jpg",
    photoAlt: "Gljáandi iðnaðargólf í kæligeymslu Eimskips",
  },
  metatron: {
    name: "Metatron",
    gen: "Metatron",
    has: "hefur",
    url: "https://metatron.is",
    host: "metatron.is",
    email: "info@metatron.is",
    logo: "/brand/metatron.png",
    logoDark: "/brand/metatron-dark.png",
    w: 1682,
    h: 232,
    what: "Gervigras og lýsing",
    text: "Gervigrasvellir frá A til Ö, Musco flóðlýsing, vökvunarkerfi og viðhald valla allt árið. Garðagras frá SYNLawn með 15 ára ábyrgð.",
    services: ["Gervigrasvellir", "Flóðlýsing", "Viðhald valla", "Garðagras"],
    img: "/img/sun-vollurinn-nott.jpg",
    alt: "Upplýstur gervigrasvöllur í Neskaupstað að kvöldi",
    photo: "/img/kerecis-vollurinn-isafjordur.jpg",
    photoAlt: "Kerecis-völlurinn á Ísafirði við fjörðinn",
  },
  golfstofan: {
    name: "Golfstofan",
    gen: "Golfstofunnar",
    has: "hefur",
    url: "https://www.golfstofan.is",
    host: "golfstofan.is",
    email: "info@idnafl.is",
    logo: "/brand/golfstofan.png",
    logoDark: "/brand/golfstofan-dark.png",
    w: 1558,
    h: 336,
    what: "Golfflatir og púttflatir",
    text: "Umboðsaðili SYNLawn á Íslandi. Púttflatir í garða, flatir og æfingasvæði fyrir golfklúbba. Lagði fyrsta TGL-kerfið í Evrópu.",
    services: ["Púttflatir", "TGL-kerfi", "Teigar og æfingasvæði"],
    img: "/img/oddur-flot-sumar.jpg",
    alt: "Púttflöt Golfklúbbsins Odds lögð SYNLawn grasi",
    photo: "/img/puttflot-gardabaer-kylfingur.jpg",
    photoAlt: "Kylfingur púttar á gervigrasflöt í garði í Garðabæ",
  },
};

export const COMPANY_ORDER: CompanyId[] = ["golflagnir", "metatron", "golfstofan"];

export const NAV = [
  { href: "/#fyrirtaekin", label: "Fyrirtækin" },
  { href: "/verkefni", label: "Verkefni" },
  { href: "/gaedakerfi", label: "Gæðakerfi" },
  { href: "/mannaudur", label: "Mannauður" },
  { href: "/hafa-samband", label: "Hafa samband" },
];
