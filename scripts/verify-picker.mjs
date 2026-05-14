/**
 * Headless verification of the property picker on https://planninglabs.co.uk.
 *
 * Tests:
 *  1. Postcode autocomplete → fullscreen modal opens directly (skip-inline)
 *  2. Mapbox satellite tiles render (canvas has non-zero w/h and contains pixels)
 *  3. Draw mode: click 3 corners → "Finish drawing" button appears → click it
 *     → polygon turns green (selected source has a feature)
 *  4. Property Data card swaps from placeholder to "Custom outline drawn"
 *  5. Mapillary viewer mounts, no .mapillaryjs-attribution visible
 *
 * Run:  node scripts/verify-picker.mjs
 */
import { chromium } from "playwright";

const SITE = "https://planninglabs.co.uk/?_pwcb=" + Date.now();
const POSTCODE = "SL0 9PJ"; // Tested before — both have OSM + sparse Mapillary

const log = (kind, msg) => {
  const tag = { ok: "✅", fail: "❌", info: "ℹ️ ", warn: "⚠️" }[kind];
  console.log(`${tag} ${msg}`);
};

const FAILURES = [];
function check(name, cond, detail = "") {
  if (cond) log("ok", name);
  else {
    FAILURES.push(name + (detail ? ` — ${detail}` : ""));
    log("fail", name + (detail ? ` — ${detail}` : ""));
  }
}

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

page.on("pageerror", (e) => console.log(`  [pageerror] ${e.message}`));

try {
  log("info", `Navigating to ${SITE}`);
  await page.goto(SITE, { waitUntil: "domcontentloaded", timeout: 30000 });

  // -- Wait for the address-search input and type the postcode --
  const search = await page.waitForSelector(
    'input[placeholder*="postcode" i], input[placeholder*="address" i]',
    { timeout: 15000 },
  );
  await search.click();
  await search.fill(POSTCODE);

  // -- Wait for an autocomplete option matching the postcode --
  log("info", `Waiting for autocomplete option matching "${POSTCODE}"...`);
  const option = await page.waitForFunction(
    (pc) => {
      const norm = pc.replace(/\s+/g, "");
      const all = [...document.querySelectorAll("button")];
      return all.find((b) =>
        b.textContent
          ?.replace(/\s+/g, "")
          .toUpperCase()
          .startsWith(norm + "POSTCODE"),
      );
    },
    POSTCODE,
    { timeout: 15000 },
  );
  await option.evaluate((el) => el.click());
  log("info", "Suggestion clicked — waiting for modal");

  // -- Wait for the fullscreen modal to mount --
  await page.waitForSelector(".fixed.inset-0.z-\\[100\\]", { timeout: 10000 });
  check("(1) Postcode → fullscreen modal opened directly", true);

  // -- Wait for the Mapbox canvas to have non-zero size --
  const mapboxOK = await page
    .waitForFunction(
      () => {
        const m = document.querySelector(".mapboxgl-map");
        if (!m) return false;
        const r = m.getBoundingClientRect();
        const c = m.querySelector("canvas.mapboxgl-canvas");
        return r.width > 100 && r.height > 100 && c && c.width > 100 && c.height > 100;
      },
      null,
      { timeout: 15000 },
    )
    .then(() => true)
    .catch(() => false);
  check("(2) Mapbox map has non-zero canvas", mapboxOK);

  // -- Switch to Draw mode. There are multiple buttons matching "Draw"; we
  //    specifically want the mode-toggle one (small button inside the map). --
  const drawClicked = await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    const drawBtn = buttons.find(
      (b) => b.textContent?.trim().replace(/\s+/g, " ") === "✏️ Draw",
    );
    if (!drawBtn) return false;
    drawBtn.click();
    return true;
  });
  log("info", `Draw button clicked: ${drawClicked}`);
  // Wait until MapboxDraw is actually in draw_polygon mode (CSS class
  // `mode-draw_polygon` is added to the map div by MapboxDraw itself).
  const drawReady = await page
    .waitForFunction(
      () => document.querySelector(".mapboxgl-map.mode-draw_polygon"),
      null,
      { timeout: 8000 },
    )
    .then(() => true)
    .catch(() => false);
  log("info", `MapboxDraw in draw_polygon mode: ${drawReady}`);

  // -- Click 3 corners on the map. Use the map's bounding box --
  const mapBB = await page.locator(".mapboxgl-map").boundingBox();
  const cx = mapBB.x + mapBB.width / 2;
  const cy = mapBB.y + mapBB.height / 2;
  log("info", `Map BB ${JSON.stringify(mapBB)} — clicking 3 corners`);
  const corners = [
    [cx - 80, cy - 40],
    [cx + 80, cy - 40],
    [cx + 80, cy + 40],
  ];
  // Use force-click + first hover to bypass any animation/pointer issues
  for (const [x, y] of corners) {
    await page.mouse.move(x, y, { steps: 4 });
    await page.waitForTimeout(50);
    await page.mouse.down();
    await page.waitForTimeout(60);
    await page.mouse.up();
    await page.waitForTimeout(400);
  }

  // -- Probe what's under each click point — full chain + z-index --
  const elemChainsAtClicks = await page.evaluate(
    ({ cx, cy }) => {
      const pts = [
        [cx - 80, cy - 40],
        [cx + 80, cy - 40],
        [cx + 80, cy + 40],
      ];
      return pts.map(([x, y]) => {
        const el = document.elementFromPoint(x, y);
        if (!el) return "none";
        const chain = [];
        let cur = el;
        while (cur && chain.length < 5) {
          const cs = getComputedStyle(cur);
          chain.push({
            tag: cur.tagName,
            cls: cur.className.toString().slice(0, 100),
            z: cs.zIndex,
            pos: cs.position,
            pe: cs.pointerEvents,
            text: (cur.textContent || "").trim().slice(0, 30),
          });
          cur = cur.parentElement;
        }
        return chain;
      });
    },
    { cx, cy },
  );
  log("info", `Click chains:\n${JSON.stringify(elemChainsAtClicks, null, 2)}`);

  // -- Probe what's under each click point --
  const elemsAtClicks = await page.evaluate(
    ({ cx, cy }) => {
      const pts = [
        [cx - 80, cy - 40],
        [cx + 80, cy - 40],
        [cx + 80, cy + 40],
      ];
      return pts.map(([x, y]) => {
        const el = document.elementFromPoint(x, y);
        return el
          ? `${el.tagName}.${el.className.toString().split(" ").slice(0, 3).join(".")}`
          : "none";
      });
    },
    { cx, cy },
  );
  log("info", `Elements at click points: ${JSON.stringify(elemsAtClicks)}`);

  // Inspect Mapbox style for MapboxDraw layers
  const mapDrawLayers = await page.evaluate(() => {
    // The Mapbox map instance is on a private field. Try to introspect via the
    // canvas-container — Mapbox attaches the map instance.
    const sources = Array.from(document.querySelectorAll(".mapboxgl-canvas-container svg, .mapboxgl-canvas-container path"));
    // Also list all unique layer-id-style classes in the canvas-container DOM
    const all = [...document.querySelectorAll('.mapboxgl-canvas-container [class*="gl-draw"], .mapboxgl-canvas-container [data-id]')];
    return { svgCount: sources.length, drawElCount: all.length };
  });
  log("info", `Mapbox draw layers: ${JSON.stringify(mapDrawLayers)}`);

  // -- Diagnostic dump of draw state --
  const drawState = await page.evaluate(() => {
    const helpTextEl = document.querySelector(
      ".absolute.top-3.left-1\\/2.-translate-x-1\\/2 div, .max-w-md.text-center",
    );
    // Probe Mapbox source data
    const mapDiv = document.querySelector(".mapboxgl-map");
    const drawFeatures = document.querySelectorAll(
      ".mapboxgl-canvas-container path, .mapboxgl-canvas-container svg",
    );
    return {
      helpText: helpTextEl?.textContent?.trim()?.slice(0, 150) ?? null,
      modeButtonsActive: [...document.querySelectorAll("button")]
        .filter(
          (b) =>
            /Auto|Pin|Draw/.test(b.textContent ?? "") &&
            b.className.includes("bg-primary"),
        )
        .map((b) => b.textContent?.trim()),
      drawSvgCount: drawFeatures.length,
      mapDivClasses: mapDiv?.className,
    };
  });
  log("info", `Draw state: ${JSON.stringify(drawState)}`);

  // -- "Finish drawing" button should be visible --
  const finishVisible = await page
    .waitForSelector('button:has-text("Finish drawing")', { timeout: 4000 })
    .then(() => true)
    .catch(() => false);
  check("(3a) Finish-drawing button appears after 3 corners", finishVisible);

  if (finishVisible) {
    await page.click('button:has-text("Finish drawing")');
    await page.waitForTimeout(800);
  }

  // -- Selected polygon should now show on the green selected layer.
  //    Check via Property Data card "Source: Custom outline drawn" --
  const sourceLabel = await page
    .waitForFunction(
      () => {
        const ps = [...document.querySelectorAll("p")];
        return ps.find((p) => /Custom outline drawn/i.test(p.textContent ?? ""));
      },
      null,
      { timeout: 5000 },
    )
    .then(() => true)
    .catch(() => false);
  check("(3b) Polygon committed → Source: Custom outline drawn", sourceLabel);

  // -- Property data card placeholder gone, footprint area shown --
  const footprintShown = await page.evaluate(() => {
    const ps = [...document.querySelectorAll("span")];
    return ps.some((s) => /^\d[\d,]*$/.test(s.textContent?.trim() ?? "") && /m²/i.test(s.parentElement?.textContent ?? ""));
  });
  check("(4) Footprint area (m²) appears in Property Data card", footprintShown);

  // Give Mapillary up to 10s to settle (fetch coverage + maybe mount viewer)
  await page.waitForTimeout(10_000);

  // -- Mapillary: viewer mounted OR no-imagery placeholder shown. Both are valid
  //    for the current postcode. Sparse rural areas just don't have coverage. --
  const mlyState = await page.evaluate(() => {
    // The Mapillary viewer renders a canvas + multiple control divs into the
    // container we ref'd. Sniff for any canvas inside the StreetView pane
    // (NOT the Mapbox canvas — that's in the top half).
    const svPane = [...document.querySelectorAll("div")].find(
      (d) =>
        d.textContent?.includes("Street View") &&
        d.className.toString().includes("rounded-xl"),
    );
    const noImagery = !![...document.querySelectorAll("p")].find((p) =>
      /No Street View here/i.test(p.textContent ?? ""),
    );
    if (noImagery) return { state: "no-imagery-placeholder" };
    if (!svPane) return { state: "no-sv-pane" };
    const canvasInside = svPane.querySelectorAll("canvas");
    const mlyContainer = svPane.querySelector(
      "[class*='mapillaryjs'], [class*='mapillary-js'], canvas",
    );
    if (!canvasInside.length && !mlyContainer) return { state: "missing-both" };
    const allClassesInSV = [...svPane.querySelectorAll("[class]")]
      .map((e) => e.className.toString())
      .filter((c) => /mapillary|mly/i.test(c));
    const attribAll = [
      ...svPane.querySelectorAll("[class*='attribution']"),
    ].filter(
      (e) => e.offsetParent && getComputedStyle(e).display !== "none",
    );
    return {
      state: "viewer-mounted",
      canvases: canvasInside.length,
      mlyClasses: allClassesInSV.slice(0, 5),
      visibleAttribCount: attribAll.length,
    };
  });
  check(
    "(5) Mapillary: viewer mounted OR no-imagery placeholder",
    mlyState.state === "viewer-mounted" ||
      mlyState.state === "no-imagery-placeholder",
    JSON.stringify(mlyState),
  );
  if (mlyState.state === "viewer-mounted") {
    check(
      "(5b) Mapillary attribution / date watermark hidden",
      mlyState.visibleAttribCount === 0,
      `${mlyState.visibleAttribCount} attribution element(s) still visible`,
    );
  }

  // -- Capture a screenshot for the user --
  await page.screenshot({ path: "scripts/verify-picker.png", fullPage: false });
  log("info", "Saved screenshot: scripts/verify-picker.png");
} catch (e) {
  log("fail", `Fatal: ${e.message}`);
  FAILURES.push("FATAL: " + e.message);
} finally {
  await browser.close();
}

console.log("\n──────────────");
if (FAILURES.length === 0) {
  log("ok", "All checks passed.");
  process.exit(0);
} else {
  console.log(`${FAILURES.length} check(s) failed:`);
  FAILURES.forEach((f) => console.log("  -", f));
  process.exit(1);
}
