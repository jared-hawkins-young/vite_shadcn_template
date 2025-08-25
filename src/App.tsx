import { Routes, Route } from "react-router-dom";
import SiteShell from "@/components/layout/SiteShell";
import ErrorBoundary from "@/components/system/ErrorBoundary";
import { routes } from "@/app/nav.config";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button asChild>
          <a href="/">Go home</a>
        </Button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SiteShell>
      <ErrorBoundary>
        <Routes>
          {routes
            .filter((r) => r.show !== false)
            .map((r) => (
              <Route key={r.path} path={r.path} element={<r.component />} />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </SiteShell>
  );
}