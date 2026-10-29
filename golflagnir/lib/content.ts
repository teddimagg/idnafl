/**
 * Allt efni Gólflagna á einum stað: gólfkerfin, rýmin sem þau henta, verkefnin og spurningar.
 * Síðurnar /golfefni/[slug] og /hentar-fyrir/[slug] eru byggðar úr þessu.
 * Staðreyndir eru teknar af golflagnir.is, ssgolf.is og bæklingi Gólflagna 2026.
 */

export type Spec = [string, string];
export type Faq = { q: string; a: string };
export type Pic = { src: string; alt: string; w: number; h: number };

export type Product = {
  id: string;
  name: string;
  text: string;
  specs: Spec[];
  pic?: Pic;
};

export type System = {
  slug: string;
  name: string;
  /** Fyrirsögn síðunnar: inniheldur leitarorðið. */
  h1: string;
  title: string;
  description: string;
  lead: string;
  intro: string[];
  benefits: string[];
  products?: Product[];
  specs?: Spec[];
  cure?: Spec[];
  uses: string[];
  room: string;
  pic: Pic;
  gallery?: Pic[];
  faq?: Faq[];
};

export type UseCase = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  intro: string[];
  needs: string[];
  picks: { system: string; why: string }[];
  room: string;
  pic: Pic;
  faq?: Faq[];
};

const p = (src: string, alt: string, w: number, h: number): Pic => ({ src: `/img/${src}`, alt, w, h });

export const PICS = {
  hangar: p("epoxy-flugskyli.jpg", "Gljáandi grátt epoxy gólf með gulum öryggislínum í flugskýli", 640, 480),
  food: p("epoxy-matvaelaidnadur.jpg", "Ljóst epoxy gólf undir færiböndum í matvælavinnslu", 800, 600),
  carpark: p("maxi-500-bilakjallari.jpg", "Maxi 500 epoxy gólf í bílakjallara með hvítum merkingum", 512, 384),
  maxi700: p("maxi-700-merkingar.jpg", "Maxi 700 epoxy gólf með gulum öryggismerkingum í matvælaiðnaði", 560, 420),
  topp4000: p("topp-4000-fiskvinnsla-veggir.jpg", "Marglitt Topp 4000 lagt á gólf og veggi í fiskvinnslu", 524, 560),
  maxi5000: p("maxi-5000-halkuvorn.jpg", "Maxi 5000 með grófri hálkuvörn í fiskvinnslu", 420, 560),
  maxi1500: p("maxi-1500-buningsklefi.jpg", "Maxi 1500 epoxy gólf í búningsklefa", 720, 405),
  flex: p("flex-golf.jpg", "Gljáandi gólf lagt yfir Flex-undirlag þar sem gólfið var sprungið", 800, 450),
  flexHall: p("flex-salur.jpg", "Stór salur með nýlögðu gólfi yfir Flex-undirlagi", 800, 534),
  metallic: p("metallic-epoxy.jpg", "Metallic epoxy gólf í svörtum, gráum og bláum tónum", 640, 800),
  puHall: p("polyurethan-salur.jpg", "Ljóst polyurethan gólf í björtum sal", 800, 600),
  puShop: p("polyurethan-verslun.jpg", "Polyurethan gólf í verslun", 431, 287),
  puMarks: p("polyurethan-merkingar.jpg", "Appelsínugular merkingar lagðar í polyurethan gólf", 424, 640),
  puSchool: p("polyurethan-skoli.jpg", "Polyurethan gólf á tröppum í skólastofnun", 800, 494),
  puFurniture: p("polyurethan-husgagnaverslun.jpg", "Polyurethan gólf í húsgagnaverslun", 480, 360),
  puHealth: p("polyurethan-heilbrigdisstofnun.jpg", "Polyurethan gólf á heilbrigðisstofnun", 514, 348),
  puOffice: p("polyurethan-skrifstofa.jpg", "Polyurethan gólf í skrifstofurými", 480, 360),
  terrazzoDark: p("terrazzo-dokkt.jpg", "Slípað dökkt epoxy terrazzo úr íslensku grjóti", 800, 450),
  terrazzoLight: p("terrazzo-ljost.jpg", "Ljóst epoxy terrazzo með rauðum og svörtum steinum", 640, 380),
  ucreteYellow: p("ucrete-gult.jpg", "Gult Ucrete gólf í iðnaðarrými", 600, 800),
  ucreteFood: p("ucrete-matvaelavinnsla.jpg", "Grænt Ucrete gólf í matvælavinnslu", 800, 400),
  paint: p("malning.jpg", "Nýmálað grátt gólf", 600, 800),
  outdoor: p("utandyra-sealer.jpg", "Steypt plan utandyra meðhöndlað með þéttiefni", 800, 600),
  grindDrive: p("slipun-innkeyrsla.jpg", "Starfsmaður Gólflagna slípar innkeyrslu", 800, 600),
  levelStairs: p("flotun-stigi.jpg", "Flotaður stigi og gólf", 600, 800),
  levelRoom: p("flotun-rymi.jpg", "Nýflotað rými með hallamáli", 800, 450),
  grinders: p("slipun-velar.jpg", "Stórar slípivélar Gólflagna að störfum", 800, 600),
  blastrac: p("blastrac.jpg", "Blastrac stálkúlublástur á gömlu verkstæðisgólfi", 800, 600),
  warehouse: p("epoxy-vorugeymsla.jpg", "Langt gljáandi epoxy gólf í vörugeymslu", 600, 800),
  trowel: p("epoxy-logn-spadi.jpg", "Epoxy dregið út með spaða", 603, 800),
  atnorth: p("atnorth-vinnuadstada.jpg", "Nýtt ljósgrátt epoxy gólf í löngum sal atNorth með límtrésperrum", 2000, 1500),
  corridor: p("framleidslugangur-gangbraut.jpg", "Grá-blátt gljáandi epoxy gólf með hvítum gangbrautarmerkingum í framleiðslugangi", 2000, 1333),
  trucks: p("maxi-5000-vorubilaverkstaedi.jpg", "Maxi 5000 gólf með gulum línum á vörubílaverkstæði", 1400, 934),
  racks: p("lager-rekkar.jpg", "Gljáandi epoxy gólf með gulum merkilínum milli hárra lagerrekka", 2000, 1500),
  crackedBefore: p("klettagardar-fyrir.jpg", "Sprungið, grænmálað steypugólf á verkstæði í Klettagörðum fyrir lögn", 1536, 1152),
  crackedAfter: p("klettagardar-eftir.jpg", "Sami salur í Klettagörðum með nýju, gljáandi gráu 500 gólfi", 1536, 1152),
  arion: p("topp-4000-eldhus-arion.jpg", "Matt Topp 4000 gólf í iðnaðareldhúsi Arion banka í Borgartúni", 2000, 1333),
  marel: p("topp-4000-eldhus-marel.jpg", "Matt Topp 4000 gólf í mötuneytiseldhúsi Marels", 2000, 1500),
  garage: p("bilskur-kvarsgolf.jpg", "Grásprengt kvarsgólf í bílskúr", 1500, 2000),
  garageCars: p("bilakjallari.jpg", "Ljósgrátt gljáandi gólf og gular rendur á súlum í bílakjallara", 2000, 1333),
  eskja: p("eskja-fiskvinnsla.jpg", "Epoxy gólf undir færiböndum í fiskvinnslu Eskju", 960, 720),
  bathroom: p("heimili-badsyning.jpg", "Grásprengt kvarsgólf í baðinnréttingasýningu", 2000, 1333),
  byko: p("byko-verslun.jpg", "Ljóst epoxy gólf milli rekka í verslun BYKO", 2000, 1500),
  alvotechBefore: p("alvotech-fyrir.jpg", "Salur Alvotech á meðan gólfið var slípað", 836, 494),
  alvotechAfter: p("alvotech-eftir.jpg", "Salur Alvotech með nýju ljósgrá-bláu epoxy gólfi", 960, 446),
  pool: p("sundholl-laugarbakki.jpg", "Kvarsgólf með hálkuvörn á sundlaugarbakka innilaugar", 720, 960),
  wallLandspitali: p("topp-4000-veggefni-landspitali.jpg", "Topp 4000 á gólfi og veggjum í eldhúsi Landspítala", 2000, 1500),
  colours: p("kvarssandur-litaprufur.jpg", "Fimm litaprufur af kvarssandsgólfi", 2000, 1333),
  blastracAtnorth: p("blastrac-atnorth.jpg", "Starfsmaður við Blastrac stálkúlublásara í geymslurými atNorth", 2000, 1500),
  terrazzoWhite: p("terrazzo-hvitt.jpg", "Nærmynd af slípuðu hvítu epoxy terrazzo með marmaraflögum", 1400, 792),
  terrazzoHall: p("terrazzo-gangur.jpg", "Blágrænt terrazzo gólf á gangi milli skápa", 1400, 792),
  stod: p("stod-eftir.jpg", "Langt bjart rými með nýju gljáandi gólfi og útsýni til fjalla", 2000, 1500),
  topp1500Garage: p("topp-1500-bilakjallari.jpg", "Maxi 1500 í bílakjallara með hleðslustöðvum", 1400, 791),
};

export const SYSTEMS: System[] = [
  {
    slug: "epoxy-golf",
    name: "Epoxy gólf",
    h1: "Epoxy gólf",
    title: "Epoxy gólf: iðnaðargólf, bílskúrar og matvælaiðnaður",
    description:
      "Samskeytalaus epoxy gólf í fimm styrkleikaflokkum, frá þunnu Maxi 700 upp í Maxi 5000 með grófri hálkuvörn. Litir, merkingar og hálkuvörn eftir óskum. Reiknaðu verðið.",
    lead: "Samskeytalaust, níðsterkt og auðvelt að þrífa. Við veljum styrkleikann eftir því hvernig rýmið er notað.",
    intro: [
      "Epoxy gólf er lagt sem eitt samfellt lag, án samskeyta þar sem óhreinindi og bakteríur safnast fyrir. Það þolir olíu, fitu og flestar sýrur og hentar því jafnt í fiskvinnslu, gagnaver og bílskúr.",
      "Litir eru sérpantaðir eftir óskum, yfirborðið glansandi eða matt og fyrirtækjamerkingar, öryggismerkingar og hálkuvörn eru lagðar beint í gólfið.",
      "Efnin okkar eru laus við upplausnarefni og því nánast lyktarlaus. Þau menga ekki matvæli, hvorki við lögn né eftir hana, og hægt er að leggja þau upp í kverkar sem húlkíl svo engin horn verði eftir til að þrífa.",
    ],
    benefits: [
      "Samskeytalaust á gólf og veggi",
      "Mikið slit-, högg- og efnaþol",
      "Hálkuvörn eftir álagi og bleytu",
      "Merkingar og litir lagðir í gólfið",
      "Lyktarlítið og mengar ekki matvæli",
    ],
    products: [
      {
        id: "maxi-700",
        name: "Maxi 700",
        text: "Tveggja þátta epoxy án leysiefna, lagt á demantsslípaða steypu. Glær grunnur og lituð þykkmálning, raka- og vatnsgufuþétt og fljótlegt í ásetningu. Fyrir verkstæði, lager, sýningarsali og matvælaiðnað þar sem álag er lítið.",
        specs: [["Þykkt", "um 0,7 mm"], ["Áferð", "Einlitt og slétt"], ["Hálkuvörn", "Möguleg"]],
        pic: PICS.maxi700,
      },
      {
        id: "topp-1500",
        name: "Maxi 1500",
        text: "Þriggja þátta fjölliðuefni, einlitt eða marglitt úr glæru bindiefni og lituðum kvarssandi. Fyrir alla matvælavinnslu, verkstæði og bílageymslur þar sem umferð er mikil. Má leggja í kverkar og yfir eldri fjölliðugólf til endurnýjunar.",
        specs: [["Þykkt", "2–3 mm"], ["Áferð", "Einlitt eða marglitt"], ["Endurnýjun", "Má leggja yfir eldra gólf"]],
        pic: PICS.topp1500Garage,
      },
      {
        id: "topp-4000",
        name: "Topp 4000",
        text: "Þriggja þátta samskeytalaust gólf úr glæru epoxy og lituðum kvarssandi. Gott efnaþol gegn sýrum, olíum og fitu, sérlega auðvelt í þrifum og fæst með bakteríu- og sveppavörn. Einnig til sem veggefni, svo gólf og veggir verða ein heild.",
        specs: [["Áferð", "Marglitt kvarsgólf, glans eða matt"], ["Hálkuvörn", "Fáanleg"], ["Gangandi umferð", "Eftir 18 klst. við 20°C"]],
        pic: PICS.arion,
      },
      {
        id: "maxi-500",
        name: "Maxi 500",
        text: "Þriggja þátta epoxy fyrir gólf undir álagi, til dæmis vörumóttökur, lagerrými og bílakjallara. Lagt samskeytalaust á gólf og veggi. Auðvelt að fríska upp síðar með því að demantsslípa yfirlagið og leggja nýja epoxy kápu.",
        specs: [["Þykkt", "3–4 mm"], ["Áferð", "Einlitt og slétt"], ["Endurnýjun", "Ný kápa yfir gamla"]],
        pic: PICS.garageCars,
      },
      {
        id: "maxi-5000",
        name: "Maxi 5000",
        text: "Þriggja þátta epoxy með kvarssandi eða áloxíði (Dynagrip) sem hefur hörkuna 9 á Mohs-kvarða, næst á eftir demanti. Fyrir fiskmóttökur, sláturhús, kjötvinnslur og verkstæði þar sem álagið er mest og gólfið er blautt.",
        specs: [["Þykkt", "4–5 mm"], ["Áferð", "Einlitt með grófri hálkuvörn"], ["Hitaþol", "Allt að 60°C"]],
        pic: PICS.trucks,
      },
    ],
    cure: [
      ["Gönguhæft", "12–24 klst. við 15–20°C"],
      ["Almenn umferð", "Eftir 48 klst."],
      ["Má bleyta", "Eftir 48 klst."],
      ["Fullt álag", "Eftir 7 daga"],
    ],
    uses: ["matvaelaidnadur", "fiskvinnsla", "lyfjaidnadur", "gagnaver", "idnadareldhus", "verkstaedi", "bilastaedahus", "bilskurar", "lagergolf", "buningsklefar"],
    room: "idnadur",
    pic: PICS.atnorth,
    gallery: [PICS.corridor, PICS.colours, PICS.wallLandspitali, PICS.racks],
    faq: [
      {
        q: "Hve langan tíma tekur að leggja epoxy gólf?",
        a: "Verkið tekur yfirleitt 2–4 daga eftir stærð. Að leggja Topp 4000 í bílskúr tekur til dæmis 3–4 daga.",
      },
      {
        q: "Hvenær má ganga á nýtt epoxy gólf?",
        a: "Ef hiti í rýminu er 15–20°C er gólfið gönguhæft eftir 12 klst. Það þolir alla umferð eftir 48 klst. og er fullhart eftir 7 daga.",
      },
      {
        q: "Hvaða styrkleika þarf ég?",
        a: "Það ræðst af álaginu. Maxi 700 dugar þar sem umferð er létt, Topp 4000 og Maxi 500 þar sem lyftarar og bílar fara um, og Maxi 5000 þar sem gólfið er blautt og álagið mest. Við ráðleggjum þér að kostnaðarlausu.",
      },
    ],
  },
  {
    slug: "polyurethan",
    name: "Polyurethan gólf",
    h1: "Polyurethan gólf",
    title: "Polyurethan gólf: hljóðlátt og fjaðrandi iðnaðargólf",
    description:
      "Samskeytalaust polyurethan gólf með fjaðurlagi, hljóðdempun og fallvörn. Fyrir skóla, heilbrigðisstofnanir, söfn, verslanir og skrifstofur. Litir og merkingar eftir óskum.",
    lead: "Samskeytalaust gólf sem gefur aðeins eftir undir fæti, dempar hljóð og þolir mikla daglega umferð.",
    intro: [
      "Polyurethan er iðnaðargólf sem má leggja með fjaðurlagi, hljóðdempun eða fallvörn. Það hentar þar sem fólk stendur og gengur allan daginn, í skólum, á heilbrigðisstofnunum og í verslunum.",
      "Litir eru sérpantaðir, yfirborðið glansandi eða matt og fyrirtækjamerkingar, öryggismerkingar og hálkuvörn eru lagðar í gólfið. Sum gólfefnin okkar frá Herculan hafa útlit sem líkist parketi en endast mun lengur.",
      "Þar sem hreyfing er í undirlagi, til dæmis í fiskvinnslum og bílastæðahúsum, notum við Maxi Flex 5000 sem sameinar epoxy grunn og teygjanlegt polyurethan millilag.",
    ],
    benefits: ["Fjaðurlag og hljóðdempun", "Fallvörn þar sem þarf", "Samskeytalaust og auðvelt að þrífa", "Merkingar lagðar í gólfið", "Glans eða matt"],
    products: [
      {
        id: "maxi-flex-5000",
        name: "Maxi Flex 5000",
        text: "Epoxy grunnur, polyurethan millilag með ístráðu fylliefni og litað topplag. Háglansandi, raka- og vatnsgufuþétt og án leysiefna. Fyrir verkstæði, lager og matvælaiðnað þar sem álag er mikið og hreyfing í undirlagi.",
        specs: [["Þykkt", "3–4 mm"], ["Gangandi umferð", "Eftir 24 klst."], ["Fullt álag", "Eftir 7 daga"]],
      },
      {
        id: "herculan",
        name: "Herculan",
        text: "Slitsterk, sérblönduð gólfefni fyrir vinnustaði og íþróttaaðstöðu, sum með útliti sem líkist parketi og endingu sem stenst mikla daglega notkun.",
        specs: [["Notkun", "Vinnustaðir og íþróttahús"], ["Áferð", "Einlitt eða parketáferð"]],
      },
    ],
    uses: ["skolar-og-stofnanir", "verslanir-og-skrifstofur", "lyfjaidnadur", "fiskvinnsla", "bilastaedahus"],
    room: "verslun",
    pic: PICS.puHall,
    gallery: [PICS.puSchool, PICS.puShop, PICS.puHealth, PICS.puMarks],
  },
  {
    slug: "ucrete",
    name: "Ucrete og PU-steypa",
    h1: "Hitaþolið Ucrete gólf",
    title: "Ucrete og Maxi Crete: hitaþolin gólf fyrir matvælaiðnað",
    description:
      "Polyurethan-steypugólf sem þola hita, gufuhreinsun og mikið efnaálag. Fyrir iðnaðareldhús, matvælaiðnað, mjólkuriðnað, ölgerðir og vélsmiðjur. Lagt í 3, 6 eða 9 mm.",
    lead: "Þar sem heitt vatn, gufa og sterk hreinsiefni fara á gólfið á hverjum degi.",
    intro: [
      "Venjulegt epoxy dugar ekki alltaf þar sem gólf eru gufuhreinsuð og heitt vatn rennur um þau daglega. Polyurethan-steypugólf eins og Ucrete eru sérstaklega hitaþolin og þola gufuhreinsun án þess að springa.",
      "Maxi Crete er þriggja þátta polyurethan efni með sementi sem þriðja þætti. Það er lagt í 3, 6 eða 9 mm þykkt og hitaþolið fer eftir þykktinni. Það er samskeytalaust, nánast lyktarlaust við lögn og auðvelt að þrífa og sótthreinsa.",
      "Það má leggja sem einlögn með meðal hálkuvörn, eða tvílagt með kvarssandi eða áloxíði stráðu í blauta lögnina og toppefni skafið yfir daginn eftir. Undirlagið þarf að hafa að minnsta kosti 25 N/mm² þrýstiþol og er hreinsað með stálkúlublæstri eða demantsslípun.",
    ],
    benefits: ["Þolir gufuhreinsun og heitt vatn", "Frábært efnaþol", "Springur ekki", "Auðvelt að sótthreinsa", "Þarf lítið viðhald"],
    specs: [["Þykkt", "3, 6 eða 9 mm"], ["Hitaþol", "Allt að 130°C við 9 mm"], ["Þrýstiþol", "56 MPa"], ["Gönguhæft", "Eftir 12 klst. við 20°C"], ["Fullt álag", "Eftir 4 daga"]],
    uses: ["idnadareldhus", "matvaelaidnadur", "fiskvinnsla", "verkstaedi"],
    room: "eldhus",
    pic: PICS.ucreteFood,
    gallery: [PICS.ucreteYellow, PICS.marel],
  },
  {
    slug: "epoxy-terrazzo",
    name: "Epoxy terrazzo",
    h1: "Epoxy terrazzo",
    title: "Epoxy terrazzo: slípað gólf úr íslensku grjóti",
    description:
      "Terrazzo úr íslensku grjóti og marmara, bundið í epoxy og slípað í glans eða matt. Samskeytalaust, slitsterkt og nánast viðhaldsfrítt. Fyrir verslanir, heimili og opinberar byggingar.",
    lead: "Gólf úr grjóti, bundið í epoxy og slípað þar til steinarnir glansa.",
    intro: [
      "Í epoxy terrazzo er marmara- eða bergmulningur í 4–8 mm kornastærð bundinn í lituðu epoxy. Efnið er lagt 12–14 mm þykkt og slípað í 4–5 þrepum með misgrófum demöntum þar til endanlegt útlit næst, yfirleitt 8–10 mm.",
      "Þar sem epoxy bindur fylliefnin í stað steypu verður gólfið þynnra en hefðbundið steypu-terrazzo. Fylliefnin geta verið íslenskt grjót, marmari, granít og jafnvel gler, í hvaða litasamsetningu sem er, og vörumerki eða skreytingar má leggja beint í gólfið.",
      "Terrazzo hentar sérstaklega vel í opinberar byggingar, skóla og söfn, þar sem ending og nánast ekkert viðhald skipta mestu, og á heimilum þar sem gólfið á að vera listaverk.",
    ],
    benefits: ["Mikið slitþol", "Samskeytalaust", "Einstakt útlit", "Auðvelt að endurnýja yfirborðið", "Raka- og vatnsgufuþétt"],
    specs: [
      ["Þykkt", "8–15 mm eftir grófleika"],
      ["Brotstyrkur", "88 N/mm²"],
      ["Beygjuþolstyrkur", "30 N/mm²"],
      ["Gangandi umferð", "Eftir 24 klst."],
      ["Fullt álag", "Eftir 7 daga"],
    ],
    products: [
      {
        id: "steinteppi",
        name: "Steinteppi",
        text: "Litaður eða náttúrulegur sandur bundinn með glæru epoxy. Fæst í ótal litum og blöndum og vörumerki má leggja í miðju teppisins.",
        specs: [["Þykkt", "5–15 mm eftir fylliefni"]],
      },
    ],
    uses: ["heimili", "verslanir-og-skrifstofur", "skolar-og-stofnanir"],
    room: "heimili",
    pic: PICS.terrazzoDark,
    gallery: [PICS.terrazzoWhite, PICS.terrazzoHall, PICS.terrazzoLight],
  },
  {
    slug: "metallic-epoxy",
    name: "Metallic epoxy",
    h1: "Metallic epoxy gólf",
    title: "Metallic epoxy gólf: sérhannað yfirborð",
    description:
      "Metallic áferð er sérpöntuð lausn sem við hönnum í epoxy gólfið. Engin tvö gólf verða eins. Fyrir sýningarsali, verslanir, heimili og bílskúra.",
    lead: "Málmlitarefni í epoxy sem mynda hreyfingu, dýpt og gljáa. Engin tvö gólf verða eins.",
    intro: [
      "Metallic áferð er sérpöntuð lausn sem er hönnuð í epoxy gólfið. Litarefnin mynda straum og dýpt sem minnir á stein, vatn eða marmara, og útkoman ræðst af því hvernig efnið er lagt.",
      "Undir yfirborðinu er sama samskeytalausa epoxy kerfið og í iðnaðargólfunum okkar, svo fallegt gólf þarf ekki að vera viðkvæmt. Við förum yfir litasamsetninguna með þér áður en lagt er.",
    ],
    benefits: ["Sérhannað fyrir hvert rými", "Samskeytalaust", "Glans með dýpt", "Auðvelt að þrífa"],
    uses: ["heimili", "bilskurar", "verslanir-og-skrifstofur"],
    room: "heimili",
    pic: PICS.metallic,
  },
  {
    slug: "flex",
    name: "Flex-undirlag",
    h1: "Flex fyrir sprungin gólf",
    title: "Flex undir epoxy: lausn fyrir sprungin gólf",
    description:
      "Flex er teygjanlegt lag sem lagt er undir epoxy gólf þar sem hreyfing er í undirlagi og sprungur í gólfi, svo að sprungurnar skili sér ekki upp í nýja gólfið.",
    lead: "Teygjanlegt lag undir epoxy, svo sprungur í gömlu gólfi skili sér ekki upp í nýtt yfirborð.",
    intro: [
      "Sprungið undirlag er algengasta ástæðan fyrir því að gólfefni gefa sig. Flex er sett undir epoxy gólfið þar sem hreyfing getur verið á undirlagi og sprungur í gólfi, og tekur hreyfinguna í stað þess að yfirborðið springi.",
      "Dæmi er gólf í Klettagörðum sem var mjög sprungið. Það var blastrac-blásið, grunnað með teygjanlegu epoxy og 500 gólf lagt yfir.",
    ],
    benefits: ["Tekur hreyfingu í undirlagi", "Lengir líftíma gólfsins", "Hægt að leggja yfir gömul gólf"],
    uses: ["lagergolf", "verkstaedi", "bilastaedahus"],
    room: "idnadur",
    pic: PICS.crackedAfter,
    gallery: [PICS.crackedBefore, PICS.flex, PICS.flexHall],
  },
  {
    slug: "flotun",
    name: "Flotun og lakkað flot",
    h1: "Flotun gólfa og lakkað flot",
    title: "Flotun gólfa, hallabreytingar og lakkað flot",
    description:
      "Flotun rýma, hallabreytingar að niðurföllum og viðgerðir á gólfum. Einnig lakkað flot og áferðarflotun sem endanlegt gólf fyrir heimili, verslanir og skrifstofur.",
    lead: "Slétt undirlag undir nýtt gólf, réttur halli að niðurföllum, eða flotið sjálft sem endanlegt gólf.",
    intro: [
      "Flot jafnar gólf undir nýtt gólfefni, lagar halla að niðurföllum og fyllir í skemmdir. Við flotum heil rými, breytum halla og gerum við.",
      "Lakkað flot er líka fallegt endanlegt gólf fyrir skrifstofur, verslanir, sýningarsali og heimili. Flotið er lagt 5–10 mm þykkt, glært Vespox EW V epoxy borið á og loks hálfmatt Bona Traffic lakk. Engin tvö gólf verða eins, því útlitið ræðst af því hvernig flotið er lagt, hitastigi og raka.",
    ],
    benefits: ["Slétt undirlag", "Réttur halli að niðurföllum", "Lakkað flot sem endanlegt gólf", "Lyktarlaus yfirborðsefni"],
    specs: [["Þykkt flots", "5–10 mm"], ["Yfirborð", "Vespox EW V og Bona Traffic lakk"]],
    uses: ["heimili", "verslanir-og-skrifstofur", "skolar-og-stofnanir"],
    room: "heimili",
    pic: PICS.levelRoom,
    gallery: [PICS.levelStairs],
  },
  {
    slug: "slipun-og-blastrac",
    name: "Slípun og blastrac",
    h1: "Slípun, pólering og blastrac",
    title: "Slípuð og póleruð steypa, rykbinding og blastrac",
    description:
      "Öll steinslípun, slípuð og póleruð steypa, rykbinding og blastrac meðhöndlun fyrir ný, gömul og mikið sprungin gólf. Öflugasta safn stórra slípivéla landsins.",
    lead: "Öflugasta safn stórra slípivéla landsins, fyrir nýja steypu jafnt sem gömul og sprungin gólf.",
    intro: [
      "Slípuð eða póleruð steypa sem er lökkuð eða innsigluð getur verið endanlegt gólfefni nánast hvar sem er. Meðferðin styrkir yfirborðið, gólfin eru nánast viðhaldsfrí og endanlegt útlit ræðst af því hversu margar umferðir eru farnar með misgrófum demöntum. Best er að ákveða þetta áður en platan er steypt.",
      "Blastrac er stálkúlublástur sem hreinsar og opnar yfirborð fyrir ný, gömul og mikið sprungin gólf. Hann er oft fyrsta skrefið áður en epoxy er lagt.",
      "Rykbinding með Vespox EW V styrkir steypt yfirborð og ver það gegn olíu og fitu þar sem ekki er óskað eftir gólfefni eða málningu. Yfirborðið verður vatnshelt en andar áfram.",
    ],
    benefits: ["Nánast viðhaldsfrítt", "Styrkir yfirborð steypunnar", "Rykbinding án gólfefnis", "Undirbúningur undir epoxy"],
    uses: ["lagergolf", "verkstaedi", "verslanir-og-skrifstofur", "heimili", "bilastaedahus"],
    room: "idnadur",
    pic: PICS.blastracAtnorth,
    gallery: [PICS.grinders, PICS.blastrac, PICS.grindDrive],
  },
  {
    slug: "malning",
    name: "Gólfmálning",
    h1: "Gólfmálning og epoxy málning",
    title: "Gólfmálning: epoxy málning á gólf, veggi og loft",
    description:
      "Við málum gólf, veggi og loft með vatnsþynntri, lyktarlausri epoxy málningu og akrýllausnum. Einnig sala á Vespox EVP epoxy málningu.",
    lead: "Við málum gólf, veggi og loft og seljum lyktarlausa epoxy málningu.",
    intro: [
      "Við tökum að okkur að mála gólf, veggi og loft og bjóðum einnig akrýllausnir.",
      "Vespox EVP er tvíþátta, vatnsþynnt og lyktarlaus epoxy málning fyrir steypt gólf, timburgólf, veggi og áður málaða fleti. Hún er þvottekta, þolir súr hreinsiefni og olíur og yfirborð steypunnar verður vatnshelt en andar áfram. Fæst í 6 og 12 kg pakkningum og einnig glær.",
    ],
    benefits: ["Lyktarlaus og vatnsþynnt", "Þvottekta", "Gólf, veggir og loft", "Fæst einnig til sölu"],
    uses: ["bilskurar", "lagergolf", "heimili", "skolar-og-stofnanir"],
    room: "bilskur",
    pic: PICS.paint,
  },
  {
    slug: "utandyra",
    name: "Yfirborðsefni utandyra",
    h1: "Yfirborðsefni utandyra",
    title: "Þéttiefni og yfirborðsefni fyrir steypt plön utandyra",
    description:
      "Þéttiefni og yfirborðsefni fyrir steypt plön, terrazzo, malbik, járn og stein utandyra. Fyrir innkeyrslur, gangstíga, göngubrýr og bílastæði.",
    lead: "Steypt plön, terrazzo, gangstígar og göngubrýr sem standast íslenskt veður.",
    intro: [
      "Við meðhöndlum steypt plön og terrazzo utandyra með þéttiefni sem ver yfirborðið fyrir vatni og veðrun.",
      "Vespu Flex er notað utandyra á malbik, járn og stein. Í það er jafnan stráð fylliefnum og það hentar vel á gangstíga, göngubrýr og jafnvel bílastæði.",
    ],
    benefits: ["Ver steypu fyrir vatni og veðrun", "Á malbik, járn og stein", "Hálkuvörn með fylliefnum"],
    uses: ["heimili", "bilastaedahus"],
    room: "heimili",
    pic: PICS.outdoor,
    gallery: [PICS.grindDrive],
  },
];

export const USES: UseCase[] = [
  {
    slug: "bilskurar",
    name: "Bílskúrar",
    h1: "Epoxy gólf í bílskúrinn",
    title: "Epoxy gólf í bílskúr: verð og lausnir",
    description:
      "Bílskúrsgólf sem þolir olíu, salt og dekk og er þrifið með kústi og vatni. Topp 4000 kvarsgólf er lagt á 3–4 dögum. Reiknaðu verðið fyrir bílskúrinn þinn.",
    lead: "Gólf sem þolir olíu, vegsalt og blaut dekk og er þrifið með kústi og vatni.",
    intro: [
      "Ómeðhöndluð steypa í bílskúr drekkur í sig olíu, rykar og verður hál þegar snjór bráðnar af bílnum. Epoxy lokar yfirborðinu, svo olían situr ofan á og auðvelt er að þurrka hana upp.",
      "Algengasta lausnin er Topp 4000, marglitt kvarsgólf sem fæst með hálkuvörn. Að leggja það í venjulegan bílskúr tekur 3–4 daga. Þynnra Maxi 700 er ódýrari kostur og metallic epoxy fyrir þá sem vilja sýningargólf.",
    ],
    needs: ["Þolir olíu, bensín og vegsalt", "Hálkuvörn fyrir blaut dekk", "Samskeytalaust og auðvelt að spúla", "Litur sem felur óhreinindi"],
    picks: [
      { system: "epoxy-golf", why: "Topp 4000 eða Maxi 700: sterkt, þrifalegt og fæst með hálkuvörn." },
      { system: "metallic-epoxy", why: "Fyrir bílskúr sem á líka að vera sýningarsalur." },
      { system: "malning", why: "Lyktarlaus epoxy málning þegar þú vilt hagkvæmustu lausnina." },
    ],
    room: "bilskur",
    pic: PICS.garage,
    faq: [
      { q: "Hvað kostar epoxy gólf í bílskúr?", a: "Reiknivélin hér á síðunni gefur viðmiðunarverð fyrir stærðina sem þú slærð inn. Við skoðum svo gólfið og gerum bindandi tilboð að kostnaðarlausu." },
      { q: "Hvenær má leggja bílnum aftur?", a: "Gólfið er gönguhæft eftir 12–24 klst. og þolir umferð eftir 48 klst. við 15–20°C. Fullhart er það eftir 7 daga." },
    ],
  },
  {
    slug: "matvaelaidnadur",
    name: "Matvælaiðnaður",
    h1: "Gólf fyrir matvælaiðnað",
    title: "Gólf fyrir matvælaiðnað: hreinlæti, efnaþol og hálkuvörn",
    description:
      "Samskeytalaus epoxy og polyurethan gólf fyrir matvælavinnslu, með kverkum upp á veggi, bakteríu- og sveppavörn og hálkuvörn. Efnin menga ekki matvæli.",
    lead: "Samskeytalaust gólf upp í kverkar, sem þolir hreinsiefni, hita og stöðuga bleytu.",
    intro: [
      "Í matvælavinnslu er gólfið hluti af hreinlætiskerfinu. Það þarf að vera samskeytalaust, þola sterk hreinsiefni og heitt vatn og ná upp á veggi svo engin horn verði eftir þar sem óhreinindi safnast.",
      "Við leggjum efni sem menga ekki matvæli, hvorki við lögn né eftir hana. Topp 4000 fæst með bakteríu- og sveppavörn, Maxi 5000 með grófri hálkuvörn þar sem gólfið er blautt, og Ucrete þar sem gufuhreinsað er daglega.",
    ],
    needs: ["Samskeytalaust með kverkum (húlkíl)", "Þolir hreinsiefni og heitt vatn", "Hálkuvörn þar sem gólf er blautt", "Mengar ekki matvæli"],
    picks: [
      { system: "epoxy-golf", why: "Topp 4000 með bakteríu- og sveppavörn, eða Maxi 5000 þar sem álagið er mest." },
      { system: "ucrete", why: "Þar sem heitt vatn og gufuhreinsun fara á gólfið á hverjum degi." },
      { system: "polyurethan", why: "Maxi Flex 5000 þar sem hreyfing er í undirlagi." },
    ],
    room: "matvaeli",
    pic: PICS.food,
  },
  {
    slug: "fiskvinnsla",
    name: "Fisk- og kjötvinnslur",
    h1: "Gólf fyrir fiskvinnslu",
    title: "Gólf fyrir fiskvinnslu og kjötvinnslu",
    description:
      "Gólfefni sem standast raka, salt og mikið álag í fiskvinnslum, fiskmóttökum og kjötvinnslum. Maxi 5000 með hálkuvörn úr áloxíði og Topp 4000 á gólf og veggi.",
    lead: "Gólf sem stenst ís, salt, blóð og lyftara og er öruggt þó það sé alltaf blautt.",
    intro: [
      "Fiskvinnslugólf eru blaut allan vinnudaginn og þurfa að vera stöm án þess að verða ómöguleg í þrifum. Maxi 5000 með áloxíði, næst á eftir demanti að hörku, gefur grófa hálkuvörn sem endist.",
      "Topp 4000 má leggja bæði á gólf og veggi svo vinnslusalurinn verði ein samfelld heild, og Maxi Flex 5000 tekur hreyfingu þar sem undirlagið er á ferð.",
    ],
    needs: ["Gróf hálkuvörn í stöðugri bleytu", "Þolir salt, blóð og fitu", "Gólf og veggir í einni heild", "Þolir lyftara og kör"],
    picks: [
      { system: "epoxy-golf", why: "Maxi 5000 með hálkuvörn úr áloxíði, Topp 4000 á gólf og veggi." },
      { system: "polyurethan", why: "Maxi Flex 5000 þar sem hreyfing er í undirlagi." },
      { system: "ucrete", why: "Þar sem heitt vatn og sterk efni fara á gólfið." },
    ],
    room: "matvaeli",
    pic: PICS.eskja,
  },
  {
    slug: "idnadareldhus",
    name: "Iðnaðareldhús og bakarí",
    h1: "Gólf í iðnaðareldhús og bakarí",
    title: "Gólf í iðnaðareldhús og bakarí",
    description:
      "Hreinlegt, slitsterkt og hitaþolið gólf fyrir iðnaðareldhús, mötuneyti og bakarí. Ucrete þolir gufuhreinsun og heitt vatn, Topp 4000 og 500 gólf mikla umferð.",
    lead: "Gólf sem þolir heitt vatn, fitu og gufuhreinsun á hverju kvöldi.",
    intro: [
      "Í eldhúsi lendir sjóðandi vatn, fita og sterk hreinsiefni á gólfinu. Þar þarf gólf sem springur ekki við hitabreytingar og er auðvelt að sótthreinsa.",
      "Ucrete og Maxi Crete eru gerð fyrir einmitt þetta. Þar sem hitaálagið er minna dugar Topp 4000 eða 500 gólf, bæði samskeytalaus og með kverkum upp á veggi. Eldhús Arion banka, Marels og Landspítala eru með Topp 4000.",
    ],
    needs: ["Hitaþol og gufuhreinsun", "Þolir fitu og hreinsiefni", "Hálkuvörn", "Kverkar upp á veggi"],
    picks: [
      { system: "ucrete", why: "Hitaþolið polyurethan-steypugólf fyrir mesta álagið." },
      { system: "epoxy-golf", why: "Topp 4000 eða Maxi 500 þar sem hitaálag er minna." },
    ],
    room: "eldhus",
    pic: PICS.arion,
  },
  {
    slug: "lyfjaidnadur",
    name: "Lyfjaiðnaður",
    h1: "Gólf fyrir lyfjaiðnað",
    title: "Gólf fyrir lyfjaiðnað og rannsóknastofur",
    description:
      "Slitsterk og samskeytalaus epoxy og polyurethan gólf sem uppfylla kröfur um hreinlæti og öryggi í lyfjaiðnaði og á rannsóknastofum.",
    lead: "Samskeytalaust gólf sem auðvelt er að sótthreinsa og helst eins árum saman.",
    intro: [
      "Í lyfjaiðnaði og á rannsóknastofum þarf gólf sem þolir sótthreinsun dag eftir dag, er samskeytalaust upp á veggi og rykar ekki.",
      "Topp 4000 og Maxi 1500 eru lögð samskeytalaust með kverkum og polyurethan gólf henta þar sem fólk stendur lengi og hljóðvist skiptir máli. Við útvegum einnig rafleiðandi (antistatic) gólfefni frá viðurkenndum framleiðendum og höfum meðal annars lagt gólf fyrir Alvotech.",
    ],
    needs: ["Þolir sótthreinsun", "Samskeytalaust með kverkum", "Rykar ekki", "Auðvelt að halda hreinu"],
    picks: [
      { system: "epoxy-golf", why: "Topp 4000 eða Maxi 1500, samskeytalaust upp á veggi." },
      { system: "polyurethan", why: "Þar sem fólk stendur lengi og hljóðvist skiptir máli." },
    ],
    room: "idnadur",
    pic: PICS.alvotechAfter,
  },
  {
    slug: "gagnaver",
    name: "Gagnaver",
    h1: "Gólf fyrir gagnaver",
    title: "Gólf fyrir gagnaver og tæknirými",
    description:
      "Slitsterk epoxy gólf sem ryka ekki, fyrir gagnaver, tæknirými og geymslur. Gólflagnir hafa lagt gólf fyrir atNorth.",
    lead: "Rykfrí, slitsterk gólf fyrir rými þar sem tækin mega ekki safna ryki.",
    intro: [
      "Óvarin steypa rykar og ryk er óvinur netþjóna og kælikerfa. Epoxy lokar yfirborðinu, þolir þunga umferð tækja og lyftara og er auðvelt að halda hreinu.",
      "Við höfum lagt gólf í vinnuaðstöðu og geymslurými atNorth, þar sem ending og hreinlæti skipta öllu. Þar sem stöðurafmagn skiptir máli útvegum við rafleiðandi (antistatic) gólfefni frá viðurkenndum framleiðendum.",
    ],
    needs: ["Rykar ekki", "Þolir þunga umferð tækja", "Auðvelt að halda hreinu", "Rafleiðandi gólfefni í boði"],
    picks: [
      { system: "epoxy-golf", why: "Maxi 500 eða Maxi 700 eftir álagi." },
      { system: "slipun-og-blastrac", why: "Rykbinding þar sem ekki þarf heilt gólfefni." },
    ],
    room: "idnadur",
    pic: PICS.atnorth,
  },
  {
    slug: "verkstaedi",
    name: "Verkstæði",
    h1: "Gólf fyrir verkstæði",
    title: "Epoxy gólf fyrir verkstæði og bifreiðaverkstæði",
    description:
      "Sterk epoxy gólf sem þola olíu, tjakka og þung tæki á verkstæðum og bifreiðaverkstæðum. Toyota valdi 500 gólf á gólf og veggi.",
    lead: "Gólf sem þolir olíu, tjakka og fallin verkfæri og lítur vel út í lok dags.",
    intro: [
      "Verkstæðisgólf fær á sig olíu, kælivökva, þung tæki og fallin verkfæri. Epoxy lokar steypunni, svo vökvar sitja ofan á og auðvelt er að þurrka þá upp. Ljóst gólf lýsir auk þess upp vinnusvæðið.",
      "Bifreiðaverkstæði Toyota er með 500 gólf á gólfum og veggjum. Topp 4000 og Maxi 1500 eru einnig algeng þar sem umferð er mikil.",
    ],
    needs: ["Þolir olíu og kælivökva", "Mikið högg- og slitþol", "Ljóst og bjart", "Auðvelt að þrífa"],
    picks: [
      { system: "epoxy-golf", why: "Maxi 500, Topp 4000 eða Maxi 1500 eftir álagi." },
      { system: "flex", why: "Þar sem gamla gólfið er sprungið." },
      { system: "slipun-og-blastrac", why: "Blastrac undir nýtt gólf á gömlu verkstæði." },
    ],
    room: "verkstaedi",
    pic: PICS.trucks,
  },
  {
    slug: "bilastaedahus",
    name: "Bílastæðahús",
    h1: "Gólf í bílastæðahús",
    title: "Gólf í bílastæðahús og bílakjallara",
    description:
      "Epoxy gólf með merkingum og hálkuvörn fyrir bílastæðahús og bílakjallara. Þolir vegsalt, vatn og stöðuga umferð.",
    lead: "Vegsalt, bráðið snjóvatn og stöðug umferð, á gólfi sem er merkt og stamt.",
    intro: [
      "Bílakjallarar fá á sig vegsalt og vatn allan veturinn og óvarin steypa og járnabinding láta á sjá. Epoxy ver steypuna og stæði, akstursleiðir og gönguleiðir eru merkt beint í gólfið.",
      "Maxi 500 er algeng lausn í bílakjallara, Maxi 5000 þar sem halli og bleyta kalla á grófa hálkuvörn, og Maxi Flex 5000 þar sem hreyfing er í plötunni.",
    ],
    needs: ["Ver steypu gegn vegsalti", "Merkingar lagðar í gólfið", "Hálkuvörn í halla", "Þolir stöðuga umferð"],
    picks: [
      { system: "epoxy-golf", why: "Maxi 500 með merkingum, Maxi 5000 með hálkuvörn." },
      { system: "polyurethan", why: "Maxi Flex 5000 þar sem hreyfing er í plötu." },
    ],
    room: "bilastaedi",
    pic: PICS.garageCars,
  },
  {
    slug: "lagergolf",
    name: "Lagergólf og vörumóttökur",
    h1: "Lagergólf og vörumóttökur",
    title: "Lagergólf: epoxy fyrir lager, kæla og vörumóttökur",
    description:
      "Sterk gólf fyrir lagerrými, kæla og vörumóttökur sem þola lyftara og bretti. Maxi 500 má endurnýja síðar með nýrri kápu. Gólflagnir lögðu gólf í Sundakæli Eimskips.",
    lead: "Gólf sem þolir lyftara og bretti og má fríska upp með nýrri kápu eftir nokkur ár.",
    intro: [
      "Lagergólf fá á sig lyftara, bretti og hjól sem mylja óvarða steypu. Maxi 500 er sterkt og samskeytalaust og þegar það slitnar er yfirlagið demantsslípað og ný epoxy kápa lögð yfir í stað þess að byrja upp á nýtt.",
      "Í Sundakæli Eimskips var gólfið blastrac-blásið og demantsslípað, sparslað með epoxy, grunnað með rakagrunni og loks lögð epoxy kápa með kvarssandi.",
    ],
    needs: ["Þolir lyftara og bretti", "Rykar ekki", "Hægt að endurnýja", "Merkingar fyrir akstursleiðir"],
    picks: [
      { system: "epoxy-golf", why: "Maxi 500 eða Maxi 700 eftir álagi." },
      { system: "slipun-og-blastrac", why: "Rykbinding eða slípuð steypa þar sem það dugar." },
      { system: "flex", why: "Þegar gólfið er sprungið fyrir." },
    ],
    room: "idnadur",
    pic: PICS.racks,
  },
  {
    slug: "skolar-og-stofnanir",
    name: "Skólar, söfn og stofnanir",
    h1: "Gólf fyrir skóla og stofnanir",
    title: "Gólf fyrir skóla, söfn og heilbrigðisstofnanir",
    description:
      "Polyurethan gólf með hljóðdempun og epoxy terrazzo sem endist í áratugi, fyrir skóla, söfn, opinberar byggingar og heilbrigðisstofnanir.",
    lead: "Gólf sem þolir þúsundir fóta á dag, dempar hljóð og þarf nánast ekkert viðhald.",
    intro: [
      "Í skólum og á stofnunum er gólfið í notkun frá morgni til kvölds. Polyurethan dempar hljóð og gefur eftir undir fæti og merkingar og leiðir má leggja beint í gólfið.",
      "Epoxy terrazzo hentar einstaklega vel í opinberar byggingar, skóla og söfn þar sem ending og nánast ekkert viðhald skipta máli.",
    ],
    needs: ["Hljóðdempun", "Ending í áratugi", "Merkingar og leiðir í gólfi", "Lítið viðhald"],
    picks: [
      { system: "polyurethan", why: "Hljóðdempandi og fjaðrandi fyrir mikla umferð." },
      { system: "epoxy-terrazzo", why: "Nánast viðhaldsfrítt í áratugi." },
      { system: "flotun", why: "Lakkað flot í minni rými." },
    ],
    room: "verslun",
    pic: PICS.puSchool,
  },
  {
    slug: "verslanir-og-skrifstofur",
    name: "Verslanir og skrifstofur",
    h1: "Verslunar- og skrifstofugólf",
    title: "Gólf fyrir verslanir, skrifstofur og sýningarsali",
    description:
      "Polyurethan, epoxy terrazzo, metallic og lakkað flot fyrir verslanir, skrifstofur og sýningarsali. Falleg samskeytalaus gólf sem þola mikla umferð.",
    lead: "Samskeytalaust gólf sem er hluti af hönnuninni og þolir þúsundir viðskiptavina.",
    intro: [
      "Í verslun er gólfið stærsti flöturinn sem viðskiptavinurinn sér. Samskeytalaust polyurethan eða terrazzo gefur rólegan, samfelldan grunn og vörumerki eða leiðir má leggja beint í gólfið.",
      "Lakkað flot og metallic epoxy gefa sýningarsölum og skrifstofum einstakt útlit, þar sem engin tvö gólf eru eins.",
    ],
    needs: ["Fallegt og samfellt", "Þolir mikla umferð", "Vörumerki í gólfi", "Auðvelt að þrífa"],
    picks: [
      { system: "polyurethan", why: "Hljóðlátt og fjaðrandi, í hvaða lit sem er." },
      { system: "epoxy-terrazzo", why: "Grjót og gljái sem endist." },
      { system: "metallic-epoxy", why: "Sýningargólf sem engir aðrir eiga." },
      { system: "flotun", why: "Lakkað flot fyrir skrifstofur." },
    ],
    room: "verslun",
    pic: PICS.byko,
  },
  {
    slug: "heimili",
    name: "Heimili",
    h1: "Gólf fyrir heimilið",
    title: "Epoxy, terrazzo og lakkað flot fyrir heimilið",
    description:
      "Epoxy terrazzo úr íslensku grjóti, lakkað flot, slípuð steypa og metallic epoxy fyrir heimili. Samskeytalaus gólf sem endast og eru auðveld í þrifum.",
    lead: "Samskeytalaus gólf sem eru auðveld í þrifum og eiga sér engan líka.",
    intro: [
      "Samskeytalaust gólf er auðvelt að þrífa og getur runnið óslitið milli rýma. Terrazzo úr íslensku grjóti, lakkað flot og slípuð steypa eru vinsælust á heimilum.",
      "Í bílskúrinn og þvottahúsið leggjum við epoxy sem þolir bleytu og olíu.",
    ],
    needs: ["Fallegt og einstakt", "Auðvelt að þrífa", "Óslitið milli rýma", "Endist í áratugi"],
    picks: [
      { system: "epoxy-terrazzo", why: "Íslenskt grjót í gljáandi gólfi." },
      { system: "flotun", why: "Lakkað flot þar sem engin tvö gólf eru eins." },
      { system: "slipun-og-blastrac", why: "Slípuð og póleruð steypa." },
      { system: "metallic-epoxy", why: "Sérhannað metallic yfirborð." },
    ],
    room: "heimili",
    pic: PICS.bathroom,
  },
  {
    slug: "buningsklefar",
    name: "Búningsklefar og votrými",
    h1: "Gólf í búningsklefa",
    title: "Gólf í búningsklefa, sturtur og sundlaugar",
    description:
      "Samskeytalaus epoxy gólf með hálkuvörn fyrir búningsklefa, sturtur, sundlaugar og snyrtingar. Topp 4000 og Maxi 1500.",
    lead: "Stamt og samskeytalaust gólf í rými sem er alltaf blautt.",
    intro: [
      "Í búningsklefum og sturtum er gólfið blautt og fólk berfætt. Þar þarf hálkuvörn sem heldur, kverkar upp á veggi og yfirborð sem er auðvelt að þrífa og sótthreinsa.",
      "Topp 4000 með hálkuvörn og Maxi 1500 eru algengust, lögð samskeytalaust upp á veggi.",
    ],
    needs: ["Hálkuvörn fyrir berfætta", "Samskeytalaust upp á veggi", "Auðvelt að sótthreinsa", "Þolir stöðuga bleytu"],
    picks: [{ system: "epoxy-golf", why: "Topp 4000 með hálkuvörn eða Maxi 1500." }],
    room: "votrymi",
    pic: PICS.pool,
  },
];

/** Viðskiptavinir sem koma fram í verkum og merkjum á golflagnir.is og ssgolf.is. Staðfestist fyrir opnun. */
export const CLIENTS = ["atNorth", "Alvotech", "Arion banki", "BYKO", "Brimborg", "Eimskip", "Eskja", "Festi", "Hagar", "Kópavogsbær", "Garðabær", "Landspítali", "Marel", "MS", "Toyota"];

export const PROJECTS = [
  {
    slug: "toyota-bifreidaverkstaedi",
    name: "Bifreiðaverkstæði Toyota",
    what: "500 gólf á gólf og veggi á Selfossi",
    date: "Apríl 2025",
    systems: ["epoxy-golf"],
  },
  {
    slug: "atnorth-geymslurymi",
    name: "atNorth, geymslurými",
    what: "Blastrac-blásið og 500 gólf lagt í geymslurými gagnavers",
    date: "Febrúar 2025",
    systems: ["epoxy-golf"],
  },
  {
    slug: "klettagardar-sprungid-golf",
    name: "Klettagarðar, sprungið gólf",
    what: "Blastrac-blásið, grunnað með teygjanlegu epoxy og 500 gólf lagt yfir mjög sprungið gólf",
    date: "Október 2024",
    systems: ["flex", "epoxy-golf"],
  },
  {
    slug: "eimskip-sundakaelir",
    name: "Eimskip, Sundakælir",
    what: "Blastrac og demantsslípun, sparslað með epoxy, rakagrunnur og epoxy kápa með kvarssandi í Reykjavík",
    date: "Mars 2024",
    systems: ["slipun-og-blastrac", "epoxy-golf"],
  },
  {
    slug: "atnorth-vinnuadstada",
    name: "atNorth, vinnuaðstaða",
    what: "500 gólf í vinnuaðstöðu gagnavers í Keflavík",
    date: "Febrúar 2024",
    systems: ["epoxy-golf"],
  },
  {
    slug: "arion-banki-eldhus",
    name: "Arion banki, Borgartúni",
    what: "Matt Topp 4000 í iðnaðareldhúsi",
    date: "",
    systems: ["epoxy-golf"],
  },
  {
    slug: "landspitali-eldhus",
    name: "Landspítali, eldhús",
    what: "Topp 4000 á gólfi og veggjum",
    date: "",
    systems: ["epoxy-golf"],
  },
  {
    slug: "alvotech",
    name: "Alvotech",
    what: "Salur slípaður og lagður samskeytalausu epoxy gólfi",
    date: "",
    systems: ["slipun-og-blastrac", "epoxy-golf"],
  },
];

export const FAQ: Faq[] = [
  {
    q: "Hvað kostar að leggja epoxy gólf?",
    a: "Það fer eftir gólfefni, stærð og ástandi undirlags. Reiknivélin gefur viðmiðunarverð strax og eftir skoðun gerum við bindandi tilboð í verkið.",
  },
  {
    q: "Hve langan tíma tekur að leggja gólfið?",
    a: "Yfirleitt 2–4 daga eftir stærð verksins. Að leggja Topp 4000 í bílskúr tekur til dæmis 3–4 daga.",
  },
  {
    q: "Hvenær má fara inn á gólfið eftir lögn?",
    a: "Ef hiti er 15–20°C í rýminu er gólfið gönguhæft eftir 12 klst. Það þolir alla umferð eftir 48 klst. og er fullhart eftir 7 daga. Ekki má bleyta það fyrr en eftir 48 klst.",
  },
  {
    q: "Komið þið á staðinn og gefið tilboð?",
    a: "Já. Við komum, skoðum og metum verkið að kostnaðarlausu á suðvesturhorninu. Aðra staði heimsækjum við gegn ferðakostnaði en launalaust.",
  },
  {
    q: "Farið þið hvert á land sem er?",
    a: "Já, við förum hvert á land sem er og tökum einnig að okkur verkefni erlendis.",
  },
  {
    q: "Eru efnin lyktarlaus?",
    a: "Öll efnin okkar eru laus við upplausnarefni og því nánast lyktarlaus.",
  },
  {
    q: "Hvaða ábyrgð er á gólfinu?",
    a: "Gólflagnir bera ábyrgð á efni og vinnu í þrjú ár. Ábyrgðin nær ekki til bilunar í undirlagi.",
  },
  {
    q: "Seljið þið epoxy efni?",
    a: "Gólfefnin seljum við lögð. Við seljum þó lyktarlausa, vatnsþynnta epoxy málningu, Vespox EVP, í 6 og 12 kg pakkningum.",
  },
];

export const systemBySlug = (slug: string) => SYSTEMS.find((s) => s.slug === slug);
export const useBySlug = (slug: string) => USES.find((u) => u.slug === slug);
