// src/components/sections/CTASection.tsx
import { Button } from "@/components/ui/button";

type CTAProps = {
  heading: string;
  subheading?: string;
  button?: { label: string; to: string } | null;
  eyebrow?: string;
};

export function CTASection({ heading, subheading, button, eyebrow }: CTAProps) {
  return (
    // 1) WHITE background (theme background)
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* 2) COLORED CARD using ACCENT */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]">
          {/* thin separator that hints both primary & accent */}
          <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />

          <div className="px-8 py-16 text-center">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[hsl(var(--accent-foreground)/.12)]">
                {eyebrow}
              </div>
            )}

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {heading}
            </h2>

            {subheading && (
              <p className="text-lg mt-3 opacity-90">{subheading}</p>
            )}

            {/* 3) BUTTON in PRIMARY so it contrasts with the accent card */}
            {button && (
              <div className="mt-6">
                <a href={button.to}>
                  <Button
                    size="lg"
                    className="shadow-lg bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))/0.9]"
                  >
                    {button.label}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}