import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS } from "@/lib/content";
import { JsonLd, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Verkefni Iðnafls",
  description:
    "Verkefni Gólflagna, Metatron og Golfstofunnar: gervigrasvellir á Akureyri, Ísafirði og í Neskaupstað, iðnaðargólf fyrir atNorth, Eimskip og Toyota og TGL-flötin hjá Oddi.",
  alternates: { canonical: "/verkefni" },
};

export default function Projects() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Verkefni", path: "/verkefni" }])} />
      <PageHead
        crumb="Verkefni"
        title="Verkefni"
        lead="Iðnafl á sér langa sögu og sterka stöðu í iðnaðargólfum, gervigrasvöllum, lýsingu og þjónustu."
      />
      <section className="work work-page" aria-label="Verkefnalisti">
        <div className="work-in">
          <ProjectGrid items={PROJECTS} />
        </div>
      </section>
    </>
  );
}
