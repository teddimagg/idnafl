const sharp = require(require.resolve("sharp", { paths: ["../golfstofan"] }));
const files = ["idnafl-horizontal.png","idnafl-horizontal-dark.png","metatron.png","metatron-dark.png","golflagnir.png","golflagnir-dark.png","golfstofan.png","golfstofan-dark.png","idnafl-stacked.png"];
(async () => {
  const W = 1400, rowH = 200;
  const comps = [];
  for (let i = 0; i < files.length; i++) {
    const dark = files[i].includes("dark");
    const bg = dark ? { r: 30, g: 60, b: 50 } : { r: 200, g: 205, b: 190 };
    const tile = await sharp({ create: { width: W, height: rowH, channels: 4, background: bg } }).png().toBuffer();
    const logo = await sharp(files[i]).resize({ height: 150, width: 1300, fit: "inside" }).toBuffer();
    const row = await sharp(tile).composite([{ input: logo, gravity: "center" }]).png().toBuffer();
    comps.push({ input: row, top: i * rowH, left: 0 });
  }
  await sharp({ create: { width: W, height: rowH * files.length, channels: 4, background: "#fff" } }).composite(comps).jpeg({ quality: 70 }).toFile("../_brand/preview.jpg");
})();
