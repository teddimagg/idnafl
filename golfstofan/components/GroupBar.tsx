import Image from "next/image";
import { GROUP, SITE } from "@/lib/site";

/** Sameiginlegur fótur allra síðna Iðnafls: systurfyrirtækin, hvert með sína sérhæfingu. */
export default function GroupBar() {
  return (
    <div className="group">
      <div className="group-in">
        <p className="group-lead">
          {SITE.name} er hluti af Iðnafli. <span>Leiðandi í lausnum.</span>
        </p>
        <ul className="group-list">
          {GROUP.filter((g) => g.name !== SITE.name).map((g) => (
            <li key={g.name}>
              <a href={g.url} aria-label={`${g.name}, ${g.what.toLowerCase()}`}>
                <Image src={g.logo} alt="" width={g.w} height={g.h} />
                <span>{g.what}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
