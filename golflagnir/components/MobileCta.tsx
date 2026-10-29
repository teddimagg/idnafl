"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

/** Fasti hnappurinn á síma: vísar á reiknivél síðunnar sjálfrar ef hún er til, annars forsíðunnar. */
export default function MobileCta() {
  const path = usePathname();
  const [href, setHref] = useState("/#verd");
  useEffect(() => {
    setHref(document.getElementById("verd") ? "#verd" : "/#verd");
  }, [path]);
  return (
    <a href={href} className="mobile-cta btn btn-red">
      Reikna verð <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}
