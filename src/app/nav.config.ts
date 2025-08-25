import Home from "@/pages/Home";
import About from "@/pages/About";
import BookNow from "@/pages/BookNow";

export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
};

export const brand = {
  title: "Site Title",
  logo: { text: "ST", src: null, alt: null },
} as const;

export const header = {
  sticky: true,
  cta: { label: "Book Now", to: "/book-now"}, // optional, set to null if unused
} as const;

export const footer = {
  links: [
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" },
  ],
  copyright: "© 2025 Your Company",
} as const;

export const routes: RouteItem[] = [
  { label: "Home", path: "/", component: Home, show: true },
  { label: "About", path: "/about", component: About, show: true },
  { label: "Book Now", path: "/book-now", component: BookNow, show: true },
];