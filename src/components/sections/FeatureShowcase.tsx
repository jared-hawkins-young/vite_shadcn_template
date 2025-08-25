// src/components/sections/FeatureShowcase.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Feature = { icon?: string; title: string; desc?: string };
type Props = {
  heading?: string;
  subheading?: string;
  items: Feature[];
  columns?: 3 | 4;
  accentRail?: boolean; // kept for API compatibility
};

export function FeatureShowcase({
  heading = "Everything You Need to Ship",
  subheading = "Opinionated defaults, flexible sections, token-driven theming.",
  items,
  columns = 3,
  accentRail = true,
}: Props) {
  const cols = columns === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";

  return (
    <section className="relative py-24">
      {/* gradient backdrop band */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
        </div>
        {subheading && (
          <p className="text-lg text-muted-foreground text-center -mt-8 mb-12">{subheading}</p>
        )}

        <div className={`grid ${cols} gap-6`}>
          {items.map((f, i) => (
            <div key={i} className="group relative">
              {/* gradient ring for pop */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)/.55), hsl(var(--accent)/.45))",
                }}
              />
              <Card
                className="
                  relative rounded-2xl bg-card/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md
                  border-0 shadow-xl hover:shadow-2xl transition-all duration-300
                  overflow-hidden group-hover:-translate-y-1
                "
              >
                {accentRail && <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />}

                {/* corner gradient flourish */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                  style={{
                    background:
                      "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))",
                  }}
                />

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {f.icon && (
                      <span
                        className="w-11 h-11 rounded-xl grid place-items-center text-xl text-primary-foreground shadow"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                        }}
                      >
                        {f.icon}
                      </span>
                    )}
                    <CardTitle className="text-xl">{f.title}</CardTitle>
                  </div>
                </CardHeader>

                {f.desc && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                )}

                {/* subtle inner glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 0% 0%, hsl(var(--primary)/.12), transparent 70%)",
                  }}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}