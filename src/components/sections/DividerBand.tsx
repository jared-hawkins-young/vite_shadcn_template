// src/components/sections/DividerBand.tsx
// A full-bleed horizontal band that spans edge-to-edge.
// Use it as a visual divider between sections.
// Supports optional background image + overlay tint.

type DividerBandProps = {
  height?: "xs" | "sm" | "md" | "lg";
  imageUrl?: string | null;
  overlay?: boolean; // add a subtle gradient for readability
  children?: React.ReactNode; // optional centered content (eyebrow, title, button, etc.)
  align?: "center" | "left";
};

export function DividerBand({
  height = "md",
  imageUrl = null,
  overlay = true,
  children,
  align = "center",
}: DividerBandProps) {
  const h =
    height === "xs"
      ? "min-h-[120px]"
      : height === "sm"
      ? "min-h-[200px]"
      : height === "md"
      ? "min-h-[320px]"
      : "min-h-[480px]";

  const contentAlign =
    align === "left" ? "items-center md:items-center text-left" : "items-center text-center";

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className={`relative ${h}`}>
        {imageUrl && (
          <>
            <img
              src={imageUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/35" />
            )}
          </>
        )}

        <div className="relative z-10 flex justify-center">
          <div className="container mx-auto px-4 py-10">
            {children ? (
              <div className={`max-w-4xl mx-auto flex flex-col gap-3 ${contentAlign} text-background`}>
                {children}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}