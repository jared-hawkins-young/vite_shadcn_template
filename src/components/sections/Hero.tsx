// src/components/sections/Hero.tsx
import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  height?: "sm" | "md" | "lg";
  align?: "left" | "center";
  overlay?: boolean;
  ctaPrimary?: { label: string; to: string } | null;
  ctaSecondary?: { label: string; to: string } | null;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  height = "lg",
  align = "center",
  overlay = true,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const h =
    height === "sm"
      ? "min-h-[40vh]"
      : height === "md"
      ? "min-h-[60vh]"
      : "min-h-[80vh] md:min-h-[90vh]";
  const alignCls =
    align === "left"
      ? "items-center md:items-center text-left md:text-left"
      : "items-center text-center";

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className={`relative ${h} overflow-hidden`}>
        {imageUrl && (
          <>
            <img
              src={imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            )}
          </>
        )}

        <div className="relative z-10 flex justify-center">
          <div className="container mx-auto px-4 py-16">
            <div
              className={`max-w-4xl mx-auto flex flex-col gap-4 ${alignCls} text-white`}
            >
              {eyebrow && (
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-white/20">
                  {eyebrow}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-2xl/9 opacity-95">{subtitle}</p>
              )}

              {(ctaPrimary || ctaSecondary) && (
                <div
                  className={`mt-6 flex flex-col sm:flex-row gap-3 ${
                    align === "left" ? "" : "justify-center"
                  }`}
                >
                  {ctaPrimary && (
                    <a href={ctaPrimary.to}>
                      <Button
                        size="lg"
                        className="bg-white text-black font-semibold shadow-lg hover:bg-gray-100"
                      >
                        {ctaPrimary.label}
                      </Button>
                    </a>
                  )}
                  {ctaSecondary && (
                    <a href={ctaSecondary.to}>
                      <Button
                        size="lg"
                        className="bg-white text-black font-semibold shadow-lg hover:bg-gray-100"
                      >
                        {ctaSecondary.label}
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* subtle bottom fade into page background */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>
    </div>
  );
}