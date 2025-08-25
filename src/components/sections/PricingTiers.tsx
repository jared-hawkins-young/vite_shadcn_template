import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlight?: boolean;
  cta?: { label: string; to: string };
};

type Props = {
  heading?: string;
  subheading?: string;
  tiers: Tier[];
};

export function PricingTiers({
  heading = "Simple, transparent pricing",
  subheading = "Choose a plan that fits your needs",
  tiers,
}: Props) {
  return (
    <section className="relative py-24">
      {/* faint background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30"
           style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">{heading}</h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Card key={i}
                  className={`relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                    t.highlight ? "ring-2 ring-[hsl(var(--primary))] scale-105" : ""
                  }`}>
              {/* background accent for highlight */}
              {t.highlight && (
                <div className="absolute inset-0 -z-10 bg-[hsl(var(--primary)/.05)]" />
              )}

              <CardHeader>
                <CardTitle className="text-xl font-bold">{t.name}</CardTitle>
                <div className="mt-2 text-3xl font-extrabold text-foreground">
                  {t.price}
                  {t.period && <span className="ml-1 text-lg font-normal text-muted-foreground">{t.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-primary">✔</span> {f}
                    </li>
                  ))}
                </ul>
                {t.cta && (
                  <a href={t.cta.to}>
                    <Button className="w-full mt-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)] shadow">
                      {t.cta.label}
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}