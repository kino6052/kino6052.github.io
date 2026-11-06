const config = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const hasFirebase = Boolean(config.apiKey && config.projectId && config.appId);
export const hasAnalytics = hasFirebase && Boolean(config.measurementId);

// Firebase loads only when it is used, so it never slows down the first paint.
export async function getApp() {
  const { getApps, initializeApp } = await import("firebase/app");
  return getApps()[0] ?? initializeApp(config);
}
