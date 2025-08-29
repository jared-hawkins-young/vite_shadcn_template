import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type BookingCancelledSectionProps = {
  tryAgainHref?: string;
  homeHref?: string;
  className?: string;
};

export function BookingCancelledSection({
  tryAgainHref = "/book-now",
  homeHref = "/",
  className,
}: BookingCancelledSectionProps) {
  return (
    <section className={className ?? "relative py-24"}>
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }}
      />
      <div className="container mx-auto px-4 max-w-xl">
        <div className="relative group">
          <div
            className="absolute -inset-[1px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
            style={{ background: "linear-gradient(135deg, hsl(var(--primary)/.55), hsl(var(--accent)/.45))" }}
          />
          <Card className="relative rounded-2xl border-0 bg-[hsl(var(--card))] shadow-2xl overflow-hidden">
            {/* top rail */}
            <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />
            {/* conic flourish */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
            />
            <CardContent className="p-10 text-center space-y-4">
              <div className="text-4xl mb-2">⚠️</div>
              <h2 className="text-2xl md:text-3xl font-bold">Payment Cancelled</h2>
              <p className="text-muted-foreground">
                Your payment was cancelled and no booking was created. You can try again whenever you’re ready.
              </p>

              <div className="mt-4 space-y-3">
                <a href={tryAgainHref}>
                  <Button className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]">
                    Try Again
                  </Button>
                </a>
                <a href={homeHref}>
                  <Button variant="outline" className="w-full">
                    Return to Home
                  </Button>
                </a>
              </div>

              <div className="border-t pt-4 mt-6 text-left">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Phone:</strong> (910) 233-3668<br />
                  <strong>Email:</strong> catchandcruisenc@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}