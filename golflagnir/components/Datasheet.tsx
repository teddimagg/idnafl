import { Download, Mail } from "lucide-react";
import { DATASHEETS } from "@/lib/datasheets";
import { SITE } from "@/lib/site";

/** Hnappur fyrir tækniblað: niðurhal ef PDF er komið, annars beiðni um að fá það sent. */
export default function Datasheet({ id, name }: { id: string; name: string }) {
  const href = DATASHEETS[id];
  if (href) {
    return (
      <a className="sheet" href={href} download aria-label={`Sækja tækniblað fyrir ${name} (PDF)`}>
        <Download size={18} aria-hidden="true" /> Sækja tækniblað (PDF)
      </a>
    );
  }
  const subject = encodeURIComponent(`Tækniblað: ${name}`);
  const body = encodeURIComponent(`Góðan dag,\n\nGætuð þið sent mér tækniblað fyrir ${name}?\n\nTakk,\n`);
  return (
    <a className="sheet sheet-ask" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`} aria-label={`Fá tækniblað fyrir ${name} sent`}>
      <Mail size={18} aria-hidden="true" /> Fá tækniblaðið sent
    </a>
  );
}
