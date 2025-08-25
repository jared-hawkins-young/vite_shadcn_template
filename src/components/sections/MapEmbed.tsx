// src/components/sections/MapEmbed.tsx
import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // if you don't have cn, replace with simple template strings

type Props = {
  /** Either a human-readable address or business name (preferred for embed) */
  query?: string;
  /** Or provide coordinates instead of query */
  lat?: number;
  lng?: number;
  /** 1–21 (lower = wider area) */
  zoom?: number;
  /** Section heading/subheading (optional) */
  heading?: string;
  subheading?: string;
  /** Height of the map area */
  height?: number; // px
  /** Full-bleed band vs contained card */
  variant?: "band" | "contained";
  /** Extra classNames */
  className?: string;
};

export function MapEmbed({
  query = "Wilmington, NC",
  lat,
  lng,
  zoom = 13,
  heading = "Find us",
  subheading = "Tap the pin for directions",
  height = 420,
  variant = "contained",
  className,
}: Props) {
  const src = useMemo(() => {
    if (typeof lat === "number" && typeof lng === "number") {
      // Simple coordinate-based embed
      return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
    }
    // Query-based embed (no key needed)
    const q = encodeURIComponent(query);
    return `https://www.google.com/maps?q=${q}&z=${zoom}&output=embed`;
  }, [query, lat, lng, zoom]);

  const MapFrame = (
    <div className="relative w-full overflow-hidden rounded-xl border bg-card shadow-xl">
      <iframe
        title="Map"
        src={src}
        style={{ border: 0, width: "100%", height }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* soft gradient top/bottom to feel on-brand */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background/40 to-transparent" />
    </div>
  );

  if (variant === "band") {
    return (
      <section className={cn("relative py-16", className)}>
        {/* themed backdrop band */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
            {subheading && <p className="text-muted-foreground mt-2">{subheading}</p>}
          </div>
          {MapFrame}
        </div>
      </section>
    );
  }

  // contained
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <Card className="p-6 rounded-2xl border-0 bg-card/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
            {subheading && <p className="text-muted-foreground mt-2">{subheading}</p>}
          </div>
          {MapFrame}
        </Card>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Example usage (copy into a page to verify quickly):

   <MapEmbed
     variant="band"
     query="Catch and Cruise, Wilmington NC"
     zoom={12}
     height={440}
     heading="Where we launch"
     subheading="Wilmington, NC — tap for directions"
   />

   // or with coordinates:
   <MapEmbed lat={34.2257} lng={-77.9447} zoom={13} />
------------------------------------------------------------------ */