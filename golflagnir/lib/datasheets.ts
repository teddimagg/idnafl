/**
 * Tækniblöð. Gólflagnir eru að uppfæra öll tækniblöð; þegar nýtt PDF er tilbúið er það sett í
 * public/taekniblod/ og slóðin skráð hér, t.d. "topp-4000": "/taekniblod/topp-4000.pdf".
 * Á meðan slóð vantar býðst gestinum að fá blaðið sent.
 */
export const DATASHEETS: Record<string, string | undefined> = {
  "maxi-700": undefined,
  "topp-1500": undefined,
  "topp-4000": undefined,
  "maxi-500": undefined,
  "maxi-5000": undefined,
  "maxi-flex-5000": undefined,
  "maxi-crete": undefined,
  "epoxy-terrazzo": undefined,
  steinteppi: undefined,
  "lakkad-flot": undefined,
  "slipud-steypa": undefined,
  rykbinding: undefined,
  "vespox-evp": undefined,
};

export const DATASHEET_LIST: { id: string; name: string; system: string }[] = [
  { id: "maxi-700", name: "Maxi 700", system: "epoxy-golf" },
  { id: "topp-1500", name: "Maxi 1500", system: "epoxy-golf" },
  { id: "topp-4000", name: "Topp 4000", system: "epoxy-golf" },
  { id: "maxi-500", name: "Maxi 500", system: "epoxy-golf" },
  { id: "maxi-5000", name: "Maxi 5000", system: "epoxy-golf" },
  { id: "maxi-flex-5000", name: "Maxi Flex 5000", system: "polyurethan" },
  { id: "maxi-crete", name: "Maxi Crete", system: "ucrete" },
  { id: "epoxy-terrazzo", name: "Epoxy terrazzo", system: "epoxy-terrazzo" },
  { id: "steinteppi", name: "Steinteppi", system: "epoxy-terrazzo" },
  { id: "lakkad-flot", name: "Lakkað flot", system: "flotun" },
  { id: "slipud-steypa", name: "Slípuð og póleruð steypa", system: "slipun-og-blastrac" },
  { id: "rykbinding", name: "Rykbinding, Vespox EW V", system: "slipun-og-blastrac" },
  { id: "vespox-evp", name: "Vespox EVP epoxy málning", system: "malning" },
];
