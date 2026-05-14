import { chromium } from "playwright";
const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push("pageerror: " + e.message));
page.on("console", (msg) => {
  if (msg.type() === "error") errs.push("console.error: " + msg.text().slice(0, 200));
});
page.on("response", (resp) => {
  if (resp.status() >= 400) errs.push(`HTTP ${resp.status()} ${resp.url().slice(0, 120)}`);
});
await page.goto("https://planninglabs.co.uk/?_pwcb=" + Date.now(), { waitUntil: "domcontentloaded" });
const inp = await page.waitForSelector('input[placeholder*="postcode" i]');
await inp.fill("TW9 4HE");
await page.waitForFunction(
  () => [...document.querySelectorAll("button")].some((b) => b.textContent?.trim().startsWith("TW9 4HE")),
  null,
  { timeout: 12000 },
);
await page.evaluate(() =>
  [...document.querySelectorAll("button")].find((b) => b.textContent?.trim().startsWith("TW9 4HE"))?.click(),
);
await page.waitForFunction(() => !!document.querySelector(".mapboxgl-map"), null, { timeout: 10000 });
await page.waitForTimeout(8000);
// Probe full element chain at the click point
const chainAtCenter = await page.evaluate(() => {
  const m = document.querySelector('.mapboxgl-map');
  if (!m) return 'no-map';
  const r = m.getBoundingClientRect();
  const cx = r.x + r.width / 2;
  const cy = r.y + r.height / 2;
  const el = document.elementFromPoint(cx, cy);
  if (!el) return 'no-elem';
  const chain = [];
  let cur = el;
  while (cur && chain.length < 8) {
    chain.push(`${cur.tagName}.${cur.className.toString().split(' ').slice(0, 4).join('.')}`);
    cur = cur.parentElement;
  }
  return { cx, cy, chain };
});
console.log('CHAIN AT MAP CENTER:', JSON.stringify(chainAtCenter, null, 2));

// Probe what's at the would-be click point AND list all .absolute.inset-0 elements
const blockingElems = await page.evaluate(() => {
  const all = [...document.querySelectorAll('.absolute.inset-0')];
  return all
    .filter((el) => el.offsetParent && getComputedStyle(el).display !== 'none')
    .map((el) => ({
      tag: el.tagName,
      classes: el.className.toString().slice(0, 160),
      textHead: (el.textContent || '').trim().slice(0, 80),
      zIndex: getComputedStyle(el).zIndex,
    }));
});
console.log('BLOCKING:', JSON.stringify(blockingElems, null, 2));

const state = await page.evaluate(() => {
  const overlay = document.querySelector(
    ".mapboxgl-map ~ .absolute.inset-0, .absolute.inset-0.flex.items-center.justify-center",
  );
  const overlayVis = overlay
    ? { display: getComputedStyle(overlay).display, hasOffsetParent: !!overlay.offsetParent }
    : null;
  const mapBB = document.querySelector(".mapboxgl-map")?.getBoundingClientRect();
  const spinners = [...document.querySelectorAll("svg.animate-spin")].filter((s) => s.offsetParent);
  const finishBtn = [...document.querySelectorAll("button")].find((b) => /Finish drawing/.test(b.textContent ?? ""));
  return {
    overlayVis,
    mapBB,
    visibleSpinners: spinners.length,
    finishBtn: !!finishBtn,
    bodyClasses: document.body.className.slice(0, 100),
  };
});
console.log("STATE:", JSON.stringify(state, null, 2));
console.log("ERRORS:", JSON.stringify(errs, null, 2));
await browser.close();
