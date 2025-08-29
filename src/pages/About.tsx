import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--muted)), transparent 40%, hsl(var(--muted)) 100%)",
          }}
        />

        <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Us</h1>
          <p className="text-lg text-muted-foreground">
            We’re dedicated to helping small businesses grow with smart websites, automation,
            and local visibility strategies. Our mission is simple: make digital tools practical,
            affordable, and effective.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-10">
            {/* Blog teaser cards with direct links */}
            <Card className="rounded-2xl border-0 shadow-xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">Website Conversions</h3>
                <p className="text-sm text-muted-foreground">
                  Read our article on 5 website tweaks that can instantly boost bookings.
                </p>
                <Link to="/blog?post=website-tweaks-boost-conversions">
                  <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary)/.9)]">
                    Read Article
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">AI for Small Biz</h3>
                <p className="text-sm text-muted-foreground">
                  Explore how AI assistants can save hours a week in our step-by-step guide.
                </p>
                <Link to="/blog?post=ai-assistants-for-small-biz">
                  <Button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent)/.9)]">
                    Read Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}