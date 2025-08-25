import { useEffect } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { activeTheme, themes } from "@/app/theme.config";

type Props = {
  children: React.ReactNode;
};

function ThemeApplier() {
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", activeTheme);
    const vars = themes[activeTheme];
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  }, []);

  return null;
}

export default function SiteShell({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ThemeApplier />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}