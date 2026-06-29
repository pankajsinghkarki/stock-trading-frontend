const isLocalhost =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname);
const isLocalDevelopment =
  process.env.NODE_ENV === "development" && isLocalhost;
const isLoopbackUrl = (url) => {
  try {
    return ["localhost", "127.0.0.1"].includes(new URL(url).hostname);
  } catch (error) {
    return false;
  }
};
const configuredApiUrl = process.env.REACT_APP_API_URL || "";
const configuredDashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "";

export const API_BASE_URL =
  configuredApiUrl && (isLocalDevelopment || !isLoopbackUrl(configuredApiUrl))
    ? configuredApiUrl
    : isLocalDevelopment
    ? "http://localhost:3002"
    : "https://stock-trading-platform-ykat.onrender.com";

const PRODUCTION_DASHBOARD_URL = "https://stock-trading-platform-psi.vercel.app";

export const DASHBOARD_URL =
  configuredDashboardUrl && !isLoopbackUrl(configuredDashboardUrl)
    ? configuredDashboardUrl
    : PRODUCTION_DASHBOARD_URL;
