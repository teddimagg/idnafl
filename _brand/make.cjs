// Turns the supplied logo rasters into trimmed, transparent PNGs.
// Light variants lose their white ground, dark variants their black ground (colour-to-alpha).
const sharp = require(require.resolve("sharp", { paths: ["../golfstofan"] }));
const jobs = [
  ["src/1.png", "idnafl-stacked.png", "white"],
  ["src/2.png", "idnafl-mark-wordmark.png", "white"],
  ["src/8.png", "idnafl-horizontal.png", "white"],
  ["src/9.png", "idnafl-horizontal-dark.png", "black"],
  ["src/3.jpg", "metatron.png", "white"],
  ["src/10.png", "metatron-dark.png", "black"],
  ["src/4.png", "golflagnir.png", "white"],
  ["src/5.png", "golflagnir-dark.png", "black"],
  ["src/6.png", "golfstofan.png", "white"],
  ["src/7.png", "golfstofan-dark.png", "black"],
];
(async () => {
  const reds = {};
  for (const [src, out, ground] of jobs) {
    const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const px = Buffer.from(data);
    for (let i = 0; i < px.length; i += 4) {
      const r = px[i], g = px[i + 1], b = px[i + 2], a = px[i + 3];
      if (r > 200 && g < 110 && b < 110 && i % 200 === 0) { const k = `${r},${g},${b}`; reds[k] = (reds[k] || 0) + 1; }
      let alpha;
      if (ground === "white") alpha = Math.max(255 - r, 255 - g, 255 - b) / 255;
      else alpha = Math.max(r, g, b) / 255;
      if (alpha <= 0.02) { px[i + 3] = 0; continue; }
      const f = (c) => Math.max(0, Math.min(255, Math.round(ground === "white" ? (c - 255 * (1 - alpha)) / alpha : c / alpha)));
      px[i] = f(r); px[i + 1] = f(g); px[i + 2] = f(b); px[i + 3] = Math.round(a * alpha);
    }
    const buf = await sharp(px, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
    const meta = await sharp(buf).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 }).png({ compressionLevel: 9 }).toFile(out);
    console.log(out, meta.width + "x" + meta.height);
  }
  console.log("reds:", Object.entries(reds).sort((a, b) => b[1] - a[1]).slice(0, 6));
})();
