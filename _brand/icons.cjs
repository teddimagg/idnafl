// Crops each brand's mark (the part left of the first wide transparent gap) into a square app icon.
const sharp = require(require.resolve("sharp", { paths: ["../golfstofan"] }));
const jobs = [
  ["idnafl-horizontal.png", "idnafl"],
  ["metatron.png", "metatron"],
  ["golflagnir.png", "golflagnir"],
  ["golfstofan.png", "golfstofan"],
];
(async () => {
  for (const [file, app] of jobs) {
    const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
    const colHas = (x) => { for (let y = 0; y < info.height; y++) if (data[(y * info.width + x) * 4 + 3] > 20) return true; return false; };
    let x = 0; while (x < info.width && !colHas(x)) x++;
    let gap = 0, end = x;
    for (; x < info.width; x++) { if (colHas(x)) { gap = 0; end = x; } else if (++gap > Math.max(18, info.width * 0.02)) break; }
    const mark = await sharp(file).extract({ left: 0, top: 0, width: end + 1, height: info.height }).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 }).png().toBuffer();
    const m = await sharp(mark).metadata();
    const side = Math.round(Math.max(m.width, m.height) * 1.18);
    const square = await sharp({ create: { width: side, height: side, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } })
      .composite([{ input: mark, gravity: "center" }]).png().toBuffer();
    await sharp(square).resize(512, 512).png().toFile(`../${app}/app/icon.png`);
    await sharp(square).resize(180, 180).png().toFile(`../${app}/app/apple-icon.png`);
    console.log(app, "mark", m.width + "x" + m.height);
  }
})();
