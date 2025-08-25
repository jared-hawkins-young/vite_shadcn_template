import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Post = {
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  category?: string;
  href?: string;
};

type BlogGridProps = {
  heading?: string;
  subheading?: string;
  posts: Post[];
  cta?: { label: string; to: string } | null;
};

export function BlogGrid({
  heading = "Latest Insights",
  subheading = "Tips, tutorials and case studies.",
  posts,
  cta,
}: BlogGridProps) {
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
          {posts.map((p, i) => (
            <a key={i} href={p.href || "#"} className="block group">
              <Card className="rounded-2xl border-0 bg-card/90 shadow-xl overflow-hidden relative">
                {/* image */}
                {p.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                {/* conic flourish */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30"
                  style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }}
                />
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    {p.category && <Badge variant="secondary">{p.category}</Badge>}
                    {p.date && <span className="text-xs text-muted-foreground">{p.date}</span>}
                  </div>
                  <h3 className="text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <Button size="sm" variant="ghost" className="px-0 text-primary hover:text-primary">
                    Read more →
                  </Button>
                </CardContent>
              </Card>
            </a>
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
    </section>
  );
}

/** Example usage */
export function ExampleBlogGrid() {
  return (
    <BlogGrid
      posts={[
        {
          title: "5 Website Tweaks That Boost Conversions",
          excerpt: "Small changes, big impact. Here’s how to increase bookings with smart UX.",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
          date: "Aug 1, 2025",
          category: "Growth",
        },
        {
          title: "AI Assistants for Small Biz",
          excerpt: "From email triage to voice booking—what to automate first.",
          image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200",
          date: "Jul 20, 2025",
          category: "Automation",
        },
        {
          title: "Local SEO Checklist",
          excerpt: "Make sure you’re discoverable in your city with these quick wins.",
          image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200",
          date: "Jun 30, 2025",
          category: "SEO",
        },
      ]}
      cta={{ label: "Visit the blog", to: "#" }}
    />
  );
}