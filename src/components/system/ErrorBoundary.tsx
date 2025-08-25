// src/components/system/ErrorBoundary.tsx
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error?: unknown };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Use the params so TS doesn't flag them as unused.
    if (import.meta.env.DEV) {
      // Only log in dev
      // eslint-disable-next-line no-console
      console.error("Render error:", error, info);
    }
  }

  handleReset = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] grid place-items-center p-6">
          <Card className="max-w-lg w-full">
            <CardHeader>
              <CardTitle>Something went wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                An unexpected error occurred while rendering this page.
              </p>
              <div className="flex gap-3">
                <Button onClick={this.handleReset}>Reload</Button>
                <Button variant="secondary" onClick={() => (window.location.href = "/")}>
                  Go Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;