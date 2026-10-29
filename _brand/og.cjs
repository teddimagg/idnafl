// Builds a 1200x630 share image per site: brand logo on the site's ground beside one of its own photos.
const sharp = require(require.resolve("sharp", { paths: ["../golfstofan"] }));
const [,, app, photo, logo, bg] = process.argv;
(async () => {
  const W = 1200, H = 630;
  const pic = await sharp(`../${app}/public/img/${photo}`).resize(620, H, { fit: "cover" }).toBuffer();
  const lg = await sharp(logo).resize({ width: 460, height: 180, fit: "inside" }).toBuffer();
  await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
    .composite([{ input: pic, left: W - 620, top: 0 }, { input: lg, left: 60, top: Math.round(H / 2 - 90) }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`../${app}/public/img/og.jpg`);
  console.log("og for", app);
})();
