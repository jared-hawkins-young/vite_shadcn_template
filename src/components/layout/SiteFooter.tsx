import { Link } from "react-router-dom";
import { footer } from "@/app/nav.config";

export default function SiteFooter() {
  return (
    <footer
      className="w-full mt-16"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-fg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {footer.links?.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="hover:opacity-90 opacity-80"
                style={{ color: "var(--footer-fg)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs opacity-70">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}