import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import BookingInline from "@/pages/BookingInline";

export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
};

export const brand = {
  title: "Demo Template",
  logo: { text: "D", src: null, alt: null },
} as const;

export const header = {
  sticky: true,
  cta: { label: "Get Started", to: "/contact"}, // optional, set to null if unused
} as const;

export const footer = {
  links: [
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" },
  ],
  copyright: "© 2025 Demo Template",
} as const;

export const routes: RouteItem[] = [
  { label: "Home", path: "/", component: Home, show: true },
  { label: "About", path: "/about", component: About, show: true },
  { label: "Contact", path: "/contact", component: Contact, show: true },
  { label: "Book Now", path: "/book-now", component: BookingInline, show: true },
];