// components/sections/BlogGrid.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Post = {
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  category?: string;
  href?: string;
  content?: string;
  readMinutes?: number; // kept for compatibility but not required
  slug?: string;
};

type BlogGridProps = {
  heading?: string;
  subheading?: string;
  posts: Post[];
  cta?: { label: string; to: string } | null;
  syncWithQueryParam?: boolean;
  queryKey?: string;
  minReadMinutes?: number; // kept for compatibility (no longer forced)
};

function toSlug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

// Compute read time directly from on-page text (content -> excerpt)
function computeReadMinutesFromText(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200)); // ~200 WPM
}

export function BlogGrid({
  heading = "Latest Insights",
  subheading = "Tips, tutorials and case studies.",
  posts,
  cta,
  syncWithQueryParam = true,
  queryKey = "post",
}: BlogGridProps) {
  const enriched = useMemo(
    () =>
      posts.map((p) => {
        const slug = p.slug ?? toSlug(p.title);
        const basis = (p.content ?? p.excerpt ?? "").toString();
        const computed = computeReadMinutesFromText(basis);
        return {
          ...p,
          slug,
          readMinutes: typeof p.readMinutes === "number" ? p.readMinutes : computed,
        };
      }),
    [posts]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!syncWithQueryParam) return;
    const slug = searchParams.get(queryKey);
    if (!slug) return setOpenIndex(null);
    const idx = enriched.findIndex((p) => p.slug === slug);
    setOpenIndex(idx >= 0 ? idx : null);
  }, [syncWithQueryParam, searchParams, queryKey, enriched]);

  const openPost = (idx: number) => {
    setOpenIndex(idx);
    if (syncWithQueryParam) {
      const s = new URLSearchParams(searchParams);
      s.set(queryKey, enriched[idx].slug!);
      setSearchParams(s, { replace: false });
    }
  };
  const closePost = () => {
    setOpenIndex(null);
    if (syncWithQueryParam) {
      const s = new URLSearchParams(searchParams);
      s.delete(queryKey);
      setSearchParams(s, { replace: false });
    }
  };
  const openNext = () => {
    if (openIndex == null) return;
    openPost((openIndex + 1) % enriched.length);
  };

  const active = openIndex != null ? enriched[openIndex] : null;

  // Scroll container ref + snap-to-top when article changes
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [openIndex]);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)" }} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{heading}</h2>
          {subheading && <p className="text-lg text-muted-foreground mt-2">{subheading}</p>}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enriched.map((p, i) => (
            <button
              key={p.slug ?? i}
              onClick={() => openPost(i)}
              className="text-left block group focus:outline-none"
              aria-label={`Open article: ${p.title}`}
            >
              <Card className="rounded-2xl border-0 bg-card/90 shadow-xl overflow-hidden relative">
                {p.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30"
                  style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
                />
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    {p.category && <Badge variant="secondary">{p.category}</Badge>}
                    {p.date && <span className="text-xs text-muted-foreground">{p.date}</span>}
                    <span className="text-xs text-muted-foreground ml-auto">{p.readMinutes} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <Button size="sm" variant="ghost" className="px-0 text-primary hover:text-primary">Read more →</Button>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {cta && (
          <div className="mt-10 text-center">
            <a href={cta.to}>
              <Button size="lg">{cta.label}</Button>
            </a>
          </div>
        )}
      </div>

      {/* Modal — white/soft card, no top-right X, theme-colored buttons, fixed header/footer, scrollable body */}
      <Dialog open={openIndex != null} onOpenChange={(o) => (o ? null : closePost())}>
        <DialogContent
          className="
            max-w-3xl md:max-w-4xl lg:max-w-5xl
            p-0 overflow-hidden
            rounded-2xl border-0
            bg-[hsl(var(--card))] text-[hsl(var(--foreground))]
            shadow-2xl
            max-h-[90vh] flex flex-col
          "
        >
          {active && (
            <>
              {/* Header stays fixed */}
              <DialogHeader className="p-6 pb-3 shrink-0">
                <DialogTitle className="text-2xl md:text-3xl">{active.title}</DialogTitle>
                <DialogDescription className="mt-1 flex flex-wrap items-center gap-2 text-muted-foreground">
                  {active.category && <Badge variant="secondary">{active.category}</Badge>}
                  {active.date && <span>{active.date}</span>}
                  <span>• {active.readMinutes} min read</span>
                </DialogDescription>
              </DialogHeader>

              {/* Hero image stays fixed height (if present) */}
              {active.image && (
                <div className="h-56 w-full overflow-hidden shrink-0">
                  <img src={active.image} alt="" className="h-full w-full object-cover" />
                </div>
              )}

              {/* Scrollable article body with more side whitespace */}
              <div
                ref={scrollRef}
                className="overflow-y-auto grow pt-4 pb-6 px-6 md:px-10 lg:px-12"
              >
                <div className="max-w-2xl mx-auto">
                  <article
                    className="
                      prose prose-neutral max-w-none
                      prose-headings:tracking-tight
                      [&>p]:my-4 [&>p]:leading-8
                      [&>p]:text-base md:[&>p]:text-lg
                      first:[&>p]:mt-0
                      [&>p]:first-line:indent-4
                    "
                  >
                    {(active.content || active.excerpt)
                      .split(/\n\s*\n/) // <-- double-newline paragraphs
                      .map((para, idx) => (
                        <p key={idx}>{para.trim()}</p>
                      ))}
                  </article>
                </div>
              </div>

              {/* Footer stays fixed */}
              <div className="flex justify-between items-center p-6 pt-4 shrink-0 border-t">
                <Button
                  onClick={closePost}
                  variant="secondary"
                  className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]"
                >
                  Close
                </Button>
                <Button
                  onClick={openNext}
                  className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]"
                >
                  Read next article →
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/** Example usage */
export function ExampleBlogGrid() {
  return (
    <BlogGrid
      heading="From the Blog"
      subheading="Practical insights and stories."
      posts={[
        {
          title: "5 Website Tweaks That Boost Conversions",
          excerpt:
            "Small changes, big impact. Here’s how to increase bookings with smart UX.",
          date: "Aug 1, 2025",
          category: "Growth",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
          slug: "website-tweaks-boost-conversions",
          content: `
Most websites don’t fail because of bad design, they fail because visitors don’t know what to do next.

Clear above-the-fold messaging, a single strong CTA, and proof placed right at decision points can dramatically improve conversions.

Performance also matters: a snappy site communicates professionalism before a single sentence is read.

Finally, reduce form friction. Ask only for what you need to begin the relationship.

Together these tweaks stack into meaningful revenue lift.
          `.trim(),
        },
        {
          title: "AI Assistants for Small Biz",
          excerpt:
            "From email triage to voice booking—what to automate first.",
          date: "Jul 20, 2025",
          category: "Automation",
          image:
            "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200",
          slug: "ai-assistants-for-small-biz",
          content: `
Start with the repetitive work that eats your day: inbox triage, FAQs, and scheduling.

AI assistants can label, summarize, and draft replies while you stay in control.

Layer in scheduling with clear constraints—service durations, buffers, travel zones—so the system never guesses.

Measure in hours saved and errors avoided. Expand only after trust is built.
          `.trim(),
        },
      ]}
      cta={{ label: "View all posts", to: "/blog" }}
    />
  );
}