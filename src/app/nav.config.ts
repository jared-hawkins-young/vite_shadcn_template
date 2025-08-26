import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import Leadership from "@/pages/Leadership";
import Contact from "@/pages/Contact";

export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
};

export const brand = {
  title: "Jared Hawkins-Young",
  logo: { text: "JHY", src: null, alt: null },
} as const;

export const header = {
  sticky: true,
  cta: { label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf"}, // optional, set to null if unused
} as const;

export const footer = {
  links: [
    { label: "Privacy", to: "#" },
    { label: "Terms", to: "#" },
  ],
  copyright: "© 2025 Jared Hawkins-Young",
} as const;

export const routes: RouteItem[] = [
  { label: "Home", path: "/", component: Home, show: true },
  { label: "About", path: "/about", component: About, show: true },
  { label: "Skills", path: "/skills", component: Skills, show: true },
  { label: "Experience", path: "/experience", component: Experience, show: true },
  { label: "Education", path: "/education", component: Education, show: true },
  { label: "Leadership", path: "/leadership", component: Leadership, show: true },
  { label: "Contact", path: "/contact", component: Contact, show: true },
];