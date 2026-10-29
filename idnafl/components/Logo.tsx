/**
 * Merki Iðnafls í haus, án slagorðs. Teiknað inn við fyrstu birtingu: svarti ramminn dregst, rauða húsið
 * dregst frá mæninum niður báðum megin og stafirnir rísa upp einn af öðrum.
 * Formin eru rakin úr idnafl-horizontal.png; grímurnar fylgja miðlínu hvers ramma.
 */

const BLACK =
  "M216.5 0L218.3 0L266.3 49.8L249.3 66.3L217.8 34.8L216.5 35L35 216.5L83.3 265.5L116.3 233.5L133.3 250L84.8 300L83 300L0 216.5Z";
const RED =
  "M283.3 66.3L434.3 216.5L352 300L350 300L284 233.8L216.3 300L133.3 216.8ZM283.5 101L168 216.8L216.8 265.3L283.8 198.8L351.3 265.3L399.3 216.3Z";
const LETTERS = [
  "M520.5 93.5H549V226.2H520.5Z",
  "M618.3 93.5H675L685.5 96.5L693 104L696 112.8L696.5 119.5V199.8L694 213.8L691 218.8L686 223L673.8 226.2H618.3V169H605.3V151H618.3ZM647 113V151H657.3V169H647V206H664L667 204.8L668 201.5V117.8L665 113Z",
  "M783 91.3L819.8 92.3L827.8 96.3L834 105.5L835.8 115.8V226.2H807V115L804.3 112H790.8L788 115V226.2H759.3V116.3L760.3 108.3L764.3 99.5L768.5 95.5L775.5 92.3Z",
  "M921.5 91.3L960 92.3L968 96.3L974 104.5L976 113V226.2H947.3V181.8H926.3V226.2H897.8L898.3 111L900.5 103.3L905.8 96.5L911 93.3ZM929.5 111L927.3 112.5L926.3 115.8V159.5H947.3V113.8L944.8 111Z",
  "M1040.3 93.5H1100V118.3H1069V150H1098V174H1069V226.2H1040.3Z",
  "M1160 93.5H1188.4V202H1220V226.2H1160Z",
];

/* Miðlínur rammanna, framlengdar aðeins út fyrir endana svo gríman nái hornunum. */
const DRAW_BLACK = "M264 64L217 17L17.5 216.5L83.5 282.5L130.5 236";
const DRAW_RED_R = "M265 65.3L416.8 216.4L351.2 282.7L265.5 197.9";
const DRAW_RED_L = "M301.8 65.3L150.7 216.8L216.6 282.7L302.3 197.9";

export default function Logo() {
  return (
    <svg className="lg" viewBox="0 0 1220 300" width="1220" height="300" aria-hidden="true" focusable="false">
      <defs>
        <mask id="lg-mk" maskUnits="userSpaceOnUse" x="0" y="0" width="470" height="300">
          <path className="lg-draw lg-dk" d={DRAW_BLACK} pathLength={1} />
        </mask>
        <mask id="lg-mr" maskUnits="userSpaceOnUse" x="100" y="40" width="370" height="260">
          <path className="lg-draw lg-dr" d={DRAW_RED_R} pathLength={1} />
          <path className="lg-draw lg-dr" d={DRAW_RED_L} pathLength={1} />
        </mask>
        <clipPath id="lg-cw">
          <rect x="500" y="80" width="720" height="152" />
        </clipPath>
      </defs>
      <path d={BLACK} fill="#000" mask="url(#lg-mk)" />
      <path d={RED} fill="#fc4236" fillRule="evenodd" mask="url(#lg-mr)" />
      <g clipPath="url(#lg-cw)" fill="#fc4236" fillRule="evenodd">
        {LETTERS.map((d, i) => (
          <path key={i} className="lg-l" d={d} style={{ animationDelay: `${520 + i * 50}ms` }} />
        ))}
      </g>
    </svg>
  );
}
