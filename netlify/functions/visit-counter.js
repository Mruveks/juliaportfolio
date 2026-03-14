/**
 * Netlify serverless function — visit counter.
 *
 * Uses Netlify Blobs (available on all plans) to persist the counter across
 * deploys. The blob is keyed to the site and survives function restarts.
 *
 * If Blobs are not configured or unavailable, the function falls back
 * gracefully and returns a zero count rather than throwing.
 *
 * Docs: https://docs.netlify.com/blobs/overview/
 */

export default async (req, context) => {
  try {
    const { getStore } = await import("@netlify/blobs");
    const store = getStore({ name: "counters", consistency: "strong" });

    const raw = await store.get("visits");
    const current = raw ? parseInt(raw, 10) : 0;
    const next = current + 1;

    await store.set("visits", String(next));

    return Response.json({ count: next });
  } catch {
    // Blobs not available (local dev without Netlify CLI) — return 0
    return Response.json({ count: 0 });
  }
};

export const config = {
  path: "/.netlify/functions/visit-counter",
};
