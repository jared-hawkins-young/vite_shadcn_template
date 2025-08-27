import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import "./index.css";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// --- Init PostHog once (before render) ---
posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
  // optional niceties:
  capture_pageview: false, // we'll do manual pageview tracking below
  autocapture: true,
  person_profiles: "identified_only",
});

// --- A tiny component to track route changes ---
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Send a standard PostHog pageview on every route change
    posthog.capture("$pageview", {
      path: location.pathname + location.search + location.hash,
    });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    // Scroll to top on pathname change (but not on hash-only changes)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

// --- Mount the app ---
const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <BrowserRouter>
        <Analytics />
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);