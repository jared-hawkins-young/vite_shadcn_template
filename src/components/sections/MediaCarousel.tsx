import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Slide = { src: string; alt?: string; caption?: string };
type Props = {
  heading?: string;
  subheading?: string;
  items: Slide[];
  aspect?: "16/9" | "4/3" | "1/1";
  autoplayMs?: number;
};

const aspectToClass: Record<NonNullable<Props["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

export function MediaCarousel({
  heading = "Photos",
  subheading,
  items,
  aspect = "16/9",
  autoplayMs = 3500,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: autoplayMs })]);

  const onSelect = useCallback(() => {
    // you can hook into selection if needed later
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{heading}</h2>
          {subheading && <p className="mt-2 text-muted-foreground">{subheading}</p>}
        </div>

        <div className="relative rounded-2xl border border-border/60 bg-card/90 shadow-xl overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {items.map((s, i) => (
                <div key={i} className="embla__slide min-w-0 flex-[0_0_100%]">
                  <div className={`w-full ${aspectToClass[aspect]} relative`}>
                    <img
                      src={s.src}
                      alt={s.alt ?? ""}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {s.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-sm text-white/90">{s.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* light accent rail */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent" />
        </div>
      </div>
    </section>
  );
}