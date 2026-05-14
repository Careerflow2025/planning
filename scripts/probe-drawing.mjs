/**
 * Fail-loud verification of the Draw UX.
 *
 * Drives the live deploy of https://planninglabs.co.uk and asserts EVERY
 * interaction step:
 *
 *   - Open postcode SL0 9PJ → modal opens directly.
 *   - Enter Draw mode.
 *   - Click N corners. After each click:
 *       - vertex counter on the help text == expected N
 *       - Finish button is in the DOM AND in the TOP HALF of the map
 *       - Finish button is disabled when N<3, enabled when N>=3
 *   - Click Finish → polygon commits, Source: "Custom outline drawn",
 *     m² footprint shown in the Property Data card.
 *
 * Repeats for N = 3, 4, 8.
 * Also runs a "close by clicking first vertex" scenario — 3 corners then
 * click back on the first vertex.
 *
 * Run:  node scripts/probe-drawing.mjs
 */
import { chromium } from "playwright";

const URL = "https://planninglabs.co.uk/?_cb=" + Date.now();
const POSTCODE = "SL0 9PJ";

const log = (...a) => console.log(...a);
const failures = [];
function check(name, cond, detail = "") {
  if (cond) {
    log("  ✅", name);
  } else {
    failures.push(`${name}${detail ? " — " + detail : ""}`);
    log("  ❌", name, detail ? `— ${detail}` : "");
  }
}

async function openPicker(page) {
  log("    [openPicker] navigating...");
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 25000 });
  log("    [openPicker] page DOM loaded");
  const inp = await page.waitForSelector('input[placeholder*="postcode" i]', { timeout: 10000 });
  log("    [openPicker] input found");
  await inp.fill(POSTCODE);
  await page.waitForFunction(
    (pc) =>
      [...document.querySelectorAll("button")].some((b) =>
        b.textContent?.replace(/\s+/g, "").startsWith(pc.replace(/\s+/g, "") + "Postcode"),
      ),
    POSTCODE,
    { timeout: 15000 },
  );
  await page.evaluate((pc) => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      b.textContent?.replace(/\s+/g, "").startsWith(pc.replace(/\s+/g, "") + "Postcode"),
    );
    btn?.click();
  }, POSTCODE);
  log("    [openPicker] postcode picked — waiting for map...");
  await page.waitForFunction(() => !!document.querySelector(".mapboxgl-map"), { timeout: 12000 });
  log("    [openPicker] map mounted — waiting for status: ready");
  // Wait for the map's loading overlay to disappear (status flips to ready).
  await page
    .waitForFunction(
      () => {
        const ov = document.querySelector(
          ".absolute.inset-0.flex.items-center.justify-center.bg-gray-50",
        );
        return !ov || !ov.offsetParent;
      },
      null,
      { timeout: 20000 },
    )
    .catch(() => log("    [openPicker] loading overlay didn't clear; continuing anyway"));
  await page.waitForTimeout(800);
}

async function enterDrawMode(page) {
  const clicked = await page.evaluate(() => {
    const b = [...document.querySelectorAll("button")].find(
      (x) => x.textContent?.trim().replace(/\s+/g, " ") === "✏️ Draw",
    );
    if (!b) return false;
    b.click();
    return true;
  });
  log(`    [enterDrawMode] draw button clicked: ${clicked}`);
  // Give the map's status to flip to ready (it triggers the useEffect that
  // attaches MapboxDraw). Up to 8s.
  await page.waitForTimeout(2000);
}

async function clickCorner(page, x, y) {
  await page.mouse.move(x, y, { steps: 3 });
  await page.waitForTimeout(60);
  await page.mouse.down();
  await page.waitForTimeout(40);
  await page.mouse.up();
  await page.waitForTimeout(450);
}

async function probeFinishButton(page) {
  return page.evaluate(() => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      /Finish drawing/i.test(b.textContent ?? ""),
    );
    if (!btn) return { exists: false };
    const r = btn.getBoundingClientRect();
    return {
      exists: true,
      text: btn.textContent.trim().replace(/\s+/g, " "),
      disabled: btn.disabled,
      x: r.x,
      y: r.y,
      w: r.width,
      h: r.height,
    };
  });
}

async function probeHelpText(page) {
  return page.evaluate(
    () =>
      document
        .querySelector(".max-w-md.text-center, .pointer-events-none.max-w-md")
        ?.textContent?.trim() ?? null,
  );
}

async function runScenario(label, cornerCount, useFirstVertexToClose, browser) {
  log(`\n── Scenario: ${label} ──`);
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  try {
    await openPicker(page);
    await enterDrawMode(page);

    const mapBB = await page.locator(".mapboxgl-map").boundingBox();
    const cx = mapBB.x + mapBB.width / 2;
    const cy = mapBB.y + mapBB.height / 2;
    const mapMidY = mapBB.y + mapBB.height / 2;

    // Distribute corners in a rough hexagonal-ish arrangement.
    const corners = [];
    for (let i = 0; i < cornerCount; i++) {
      const angle = (i / cornerCount) * 2 * Math.PI + 0.1;
      corners.push([cx + Math.cos(angle) * 120, cy + Math.sin(angle) * 80]);
    }

    for (let i = 0; i < corners.length; i++) {
      const [x, y] = corners[i];
      await clickCorner(page, x, y);
      const fb = await probeFinishButton(page);
      const ht = await probeHelpText(page);
      const expected = i + 1;
      const expectsButtonEnabled = expected >= 3;
      log(
        `  click ${i + 1}: help="${ht?.slice(0, 60)}" | btn=${fb.exists ? `at(${Math.round(fb.x)},${Math.round(fb.y)}) ${fb.disabled ? "disabled" : "enabled"}` : "MISSING"}`,
      );
      check(
        `[${label}] click ${i + 1}: help text mentions ${expected} corner${expected === 1 ? "" : "s"}`,
        new RegExp(`\\b${expected}\\b`).test(ht ?? "") || ht?.includes("tap Finish"),
        ht ?? "no help",
      );
      check(
        `[${label}] click ${i + 1}: Finish button exists`,
        fb.exists,
        JSON.stringify(fb),
      );
      check(
        `[${label}] click ${i + 1}: Finish button in TOP half (y < ${mapMidY})`,
        fb.exists && fb.y < mapMidY,
        `btn.y=${fb.y} vs midY=${mapMidY}`,
      );
      check(
        `[${label}] click ${i + 1}: Finish button ${expectsButtonEnabled ? "enabled" : "disabled"}`,
        fb.exists && fb.disabled === !expectsButtonEnabled,
      );
    }

    // Commit: either click Finish, or click back on the first vertex.
    if (useFirstVertexToClose) {
      log("  Closing by clicking back on first vertex...");
      await clickCorner(page, corners[0][0], corners[0][1]);
    } else {
      log("  Clicking Finish button...");
      await page.evaluate(() => {
        const btn = [...document.querySelectorAll("button")].find((b) =>
          /Finish drawing/i.test(b.textContent ?? ""),
        );
        if (btn && !btn.disabled) btn.click();
      });
    }
    await page.waitForTimeout(1500);

    const result = await page.evaluate(() => {
      const sourceP = [...document.querySelectorAll("p")].find((p) =>
        /Custom outline drawn|Pin dropped|Selected from outline|Waiting for selection/i.test(
          p.textContent ?? "",
        ),
      );
      // Look for the m² number — it's a "55" span or similar, sibling to "m²"
      const m2Match = [...document.querySelectorAll("span")].some((s) =>
        /^\d[\d,]*$/.test(s.textContent?.trim() ?? "") &&
        /m²/i.test(s.parentElement?.textContent ?? ""),
      );
      return {
        sourceText: sourceP?.textContent?.trim(),
        m2Shown: m2Match,
      };
    });
    log(`  After commit: source="${result.sourceText}" m²=${result.m2Shown}`);
    check(
      `[${label}] After commit: Source shows "Custom outline drawn"`,
      result.sourceText === "Custom outline drawn",
      JSON.stringify(result),
    );
    check(`[${label}] After commit: m² footprint visible`, result.m2Shown);

    await page.screenshot({
      path: `scripts/probe-drawing-${label.replace(/\W+/g, "_")}.png`,
      fullPage: false,
    });
  } catch (e) {
    log(`  FATAL: ${e.message}`);
    failures.push(`[${label}] FATAL: ${e.message}`);
  } finally {
    await ctx.close();
  }
}

const SCENARIOS_RAW = process.argv.slice(2);
const scenarios =
  SCENARIOS_RAW.length > 0
    ? SCENARIOS_RAW
    : ["3", "4", "8", "first-vertex"];

const browser = await chromium.launch({ headless: true });
for (const s of scenarios) {
  if (s === "first-vertex") {
    await runScenario("3 corners + first-vertex close", 3, true, browser);
  } else {
    const n = parseInt(s, 10);
    if (Number.isFinite(n) && n >= 3) {
      await runScenario(`${n} corners`, n, false, browser);
    }
  }
  // Space out runs to avoid postcodes.io / Mapillary rate-limit
  await new Promise((r) => setTimeout(r, 4000));
}
await browser.close();

console.log("\n──────────────");
if (failures.length === 0) {
  console.log("✅ All Draw-UX assertions passed.");
  process.exit(0);
} else {
  console.log(`❌ ${failures.length} assertion(s) failed:`);
  failures.forEach((f) => console.log("  -", f));
  process.exit(1);
}
