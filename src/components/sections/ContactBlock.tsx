import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Channel =
  | { type: "phone" | "email" | "address" | "hours"; label?: string; value: string }
  | { type: "custom"; label: string; value: string };

type Props = {
  heading?: string;
  subheading?: string;
  channels: Channel[];
};

export function ContactBlock({
  heading = "Get in Touch",
  subheading = "We usually respond within one business day",
  channels,
}: Props) {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{heading}</h2>
          {subheading && <p className="mt-3 text-muted-foreground">{subheading}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Card
              key={i}
              className="relative overflow-hidden rounded-2xl border-0 bg-card/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-30"
                style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
              />
              <CardHeader>
                <CardTitle className="text-lg">
                  {c.label ??
                    (c.type === "phone"
                      ? "Phone"
                      : c.type === "email"
                      ? "Email"
                      : c.type === "address"
                      ? "Address"
                      : c.type === "hours"
                      ? "Hours"
                      : "Info")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{c.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}