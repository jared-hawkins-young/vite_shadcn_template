// src/components/sections/ProcessTimeline.tsx
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";
import { Rocket, Search, Palette, Wrench } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon?: keyof typeof ICONS;
  badge?: string;
};

type ProcessTimelineProps = {
  heading?: string;
  subheading?: string;
  steps: Step[];
  align?: "left" | "center";
};

// Only the icons we actually use. Add more as needed.
const ICONS: Record<string, LucideIcon> = {
  Rocket,
  Search,
  Palette,
  Wrench,
};

export function ProcessTimeline({
  heading = "How It Works",
  subheading = "A simple, transparent process from idea to launch.",
  steps,
  align = "center",
}: ProcessTimelineProps) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }}
      />
      <div className="container mx-auto px-4">
        <div className={cn("mb-12 flex flex-col gap-2", alignCls)}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
          {subheading && <p className="text-lg text-muted-foreground">{subheading}</p>}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => {
              const Icon = ICONS[s.icon ?? "Rocket"] ?? Rocket;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={`${s.title}-${i}`}
                  className={cn("md:grid md:grid-cols-2 md:gap-8 items-center", isLeft ? "" : "md:[&>*:first-child]:col-start-2")}
                >
                  <div className={cn("order-2 md:order-none", isLeft ? "md:text-right" : "")}>
                    <div className={cn("flex", isLeft ? "md:justify-end" : "md:justify-start")}>
                      <div className="relative w-full md:max-w-xl">
                        <Card className="rounded-2xl border-0 bg-card/90 shadow-xl backdrop-blur supports-[backdrop-filter]:backdrop-blur-md relative overflow-hidden">
                          <div
                            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30"
                            style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
                          />
                          <CardContent className="p-6 md:p-8">
                            <div className="flex items-center gap-3">
                              <div
                                className="size-11 rounded-xl grid place-items-center text-primary"
                                style={{ background: "linear-gradient(135deg, hsl(var(--primary)/.15), hsl(var(--accent)/.15))" }}
                              >
                                <Icon className="size-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-xl font-semibold">{s.title}</h3>
                                  {s.badge && <Badge variant="secondary">{s.badge}</Badge>}
                                </div>
                              </div>
                            </div>
                            <Separator className="my-4" />
                            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* timeline dot */}
                  <div className="hidden md:block">
                    <div className={cn("relative h-full", isLeft ? "md:justify-start" : "md:justify-end")}>
                      <div className="relative mx-auto h-0 w-0">
                        <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow ring-4 ring-background" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Example usage remains the same.
export function ExampleProcessTimeline() {
  return (
    <ProcessTimeline
      steps={[
        { title: "Discovery", description: "We map your goals & users.", icon: "Search", badge: "Step 1" },
        { title: "Design", description: "We craft wireframes & UI.", icon: "Palette", badge: "Step 2" },
        { title: "Build", description: "We implement & integrate.", icon: "Wrench", badge: "Step 3" },
        { title: "Launch", description: "QA, deploy & measure.", icon: "Rocket", badge: "Step 4" },
      ]}
    />
  );
}