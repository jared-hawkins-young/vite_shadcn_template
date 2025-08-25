// src/components/sections/Testimonials.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Testimonial = { who: string; when?: string; text: string; badge?: string };
type Props = {
  heading?: string;
  subheading?: string;
  items: Testimonial[];
};

export function Testimonials({
  heading = "What Clients Say",
  subheading = "Real wins from small businesses",
  items,
}: Props) {
  return (
    <section className="relative py-24">
      {/* gradient backdrop band */}
      <div className="absolute inset-0 -z-10"
           style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
          {subheading && <p className="text-lg text-muted-foreground mt-2">{subheading}</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Card
              key={i}
              className="rounded-2xl bg-card/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md border-0 shadow-xl relative overflow-hidden"
            >
              {/* corner gradient flourish */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full grid place-items-center font-semibold text-primary"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)/.18), hsl(var(--accent)/.18))" }}
                  >
                    {t.badge ?? t.who.slice(0, 1)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.who}</div>
                    {t.when && <div className="text-xs text-muted-foreground">{t.when}</div>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl leading-none select-none text-primary/50">“</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="text-4xl leading-none select-none text-primary/50 self-end text-right">”</div>
                <div className="flex gap-1" aria-label="rating">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} aria-hidden>⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}