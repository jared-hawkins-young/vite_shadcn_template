// src/components/layout/SiteHeader.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { brand, header, routes } from "@/app/nav.config";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const visibleRoutes = routes.filter((r) => r.show !== false);

  return (
    <header
      className={`text-white z-50 ${header.sticky ? "sticky top-0" : ""}`}
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-fg)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top row */}
        <div className="h-20 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center space-x-2">
            {brand.logo?.src ? (
              <img
                src={brand.logo.src}
                alt={brand.logo.alt ?? brand.title}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">
                  {brand.logo?.text ?? ""}
                </span>
              </div>
            )}
            <div className="text-lg font-semibold">{brand.title}</div>
          </Link>

          {/* Center: Desktop Nav (centered) */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {visibleRoutes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                className={({ isActive }) =>
                  `transition-colors font-medium ${
                    isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                  }`
                }
              >
                {r.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Always-visible CTA + Hamburger on mobile */}
          <div className="flex items-center space-x-4 justify-end">
            {!!header.cta && (
              <Link to={header.cta.to} className="shrink-0">
                <Button className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-4 md:px-6 text-sm md:text-base">
                  {header.cta.label?.toUpperCase?.() ?? "BOOK NOW"}
                </Button>
              </Link>
            )}

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "mb-1"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {visibleRoutes.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  className="hover:opacity-90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {r.label}
                </Link>
              ))}

              {/* Optional: duplicate CTA inside menu for redundancy (kept) */}
              {!!header.cta && (
                <div className="pt-2">
                  <Link to={header.cta.to} onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-6 w-full">
                      {header.cta.label?.toUpperCase?.() ?? "BOOK NOW"}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}