// src/components/sections/Section.tsx
type SectionProps = {
  id?: string;
  className?: string;
  container?: "default" | "narrow" | "full";
  tone?: "default" | "muted" | "elevated";
  children: React.ReactNode;
};

export function Section({
  id,
  className = "",
  container = "default",
  tone = "default",
  children,
}: SectionProps) {
  const toneClass =
    tone === "muted"
      ? "bg-muted text-muted-foreground"
      : tone === "elevated"
      ? "bg-card text-card-foreground"
      : "bg-background text-foreground";

  const wrapClass =
    container === "narrow"
      ? "container mx-auto max-w-4xl px-4"
      : container === "full"
      ? "px-4 sm:px-6 lg:px-8"
      : "container mx-auto px-4";

  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className={wrapClass}>{children}</div>
    </section>
  );
}