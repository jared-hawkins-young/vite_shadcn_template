import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Member = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
  tags?: string[];
};

type TeamShowcaseProps = {
  heading?: string;
  subheading?: string;
  members: Member[];
};

export function TeamShowcase({
  heading = "Meet the Team",
  subheading = "Experts dedicated to your success.",
  members,
}: TeamShowcaseProps) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
          {subheading && <p className="text-lg text-muted-foreground mt-2">{subheading}</p>}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Card
              key={i}
              className="rounded-2xl border-0 bg-card/90 shadow-xl overflow-hidden relative"
            >
              {/* corner flourish */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
                style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
              />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="size-14 ring-2 ring-primary/20">
                    {m.photo ? <AvatarImage src={m.photo} alt={m.name} /> : null}
                    <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-lg font-semibold">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.role}</div>
                  </div>
                </div>
                {m.bio && <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>}
                {m.tags && m.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t, j) => (
                      <Badge key={j} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Example usage */
export function ExampleTeamShowcase() {
  return (
    <TeamShowcase
      members={[
        {
          name: "Alex Carter",
          role: "Founder / PM",
          photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600",
          bio: "Leads strategy and delivery, ensuring projects launch on-time with impact.",
          tags: ["Strategy", "Roadmaps"],
        },
        {
          name: "Sofia Nguyen",
          role: "Design Lead",
          photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
          bio: "Crafts clean, conversion-focused UI and brand systems.",
          tags: ["UI/UX", "Brand"],
        },
        {
          name: "Marcus Lee",
          role: "Tech Lead",
          photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600",
          bio: "Owns architecture, integrations, and performance.",
          tags: ["React", "APIs", "Infra"],
        },
      ]}
    />
  );
}