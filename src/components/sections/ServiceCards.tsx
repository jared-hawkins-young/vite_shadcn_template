import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Service = {
  icon?: string;
  title: string;
  desc: string;
  price?: string;
  cta?: { label: string; to: string };
};

type Props = {
  heading?: string;
  subheading?: string;
  items: Service[];
};

export function ServiceCards({
  heading = "Our Services",
  subheading = "Tailored solutions for your business",
  items,
}: Props) {
  return (
    <section className="relative py-24">
      {/* soft theme glow */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle at 50% 20%, hsl(var(--primary)/.25), transparent 70%)" }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{heading}</h2>
          {subheading && (
            <p className="mt-4 text-lg text-muted-foreground">{subheading}</p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Card key={i} className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* gradient flourish */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />

              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  {s.icon && <span className="text-2xl">{s.icon}</span>}
                  {s.title}
                </CardTitle>
                {s.price && (
                  <div className="text-lg font-bold text-primary">{s.price}</div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{s.desc}</p>
                {s.cta && (
                  <a href={s.cta.to}>
                    <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)] shadow">
                      {s.cta.label}
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