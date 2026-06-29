export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://stock-trading-platform-ykat.onrender.com";

const PRODUCTION_DASHBOARD_URL = "https://stock-trading-platform-psi.vercel.app";
const configuredDashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "";

export const DASHBOARD_URL = configuredDashboardUrl.includes("localhost")
  ? PRODUCTION_DASHBOARD_URL
  : configuredDashboardUrl || PRODUCTION_DASHBOARD_URL;
