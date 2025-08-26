import Home from "@/pages/Home";
import TotalLoss from "@/pages/TotalLoss";
import DiminishedValue from "@/pages/DiminishedValue";
import About from "@/pages/About";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";

export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
};

export const brand = {
  title: "CSI-NC",
  logo: { text: "CSI-NC", src: null, alt: null },
} as const;

export const header = {
  sticky: true,
  cta: { label: "Call 704-216-0081", to: "tel:704-216-0081"}, // optional, set to null if unused
} as const;

export const footer = {
  links: [
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" },
  ],
  copyright: "© 2025 CSI-NC - Danny Wyatt",
} as const;

export const routes: RouteItem[] = [
  { label: "Home", path: "/", component: Home, show: true },
  { label: "Total Loss", path: "/total-loss", component: TotalLoss, show: true },
  { label: "Diminished Value", path: "/diminished-value", component: DiminishedValue, show: true },
  { label: "About", path: "/about", component: About, show: true },
  { label: "Insights", path: "/insights", component: Insights, show: true },
  { label: "Contact", path: "/contact", component: Contact, show: true },
];