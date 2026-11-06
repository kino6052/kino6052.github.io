import { getApp, hasAnalytics } from "../lib/firebase";

async function start() {
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (await isSupported()) getAnalytics(await getApp());
}

if (hasAnalytics) {
  const idle = window.requestIdleCallback ?? ((run: () => void) => setTimeout(run, 2000));
  idle(() => void start());
}
