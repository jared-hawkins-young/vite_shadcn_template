import { Hero } from "@/components/sections/Hero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function Insights() {
  return (
    <>
      <Hero
        eyebrow="Auto Appraisal Insights"
        title="Understanding Your Rights in North Carolina"
        subtitle="Plain English explanations of auto appraisal topics that matter to NC drivers dealing with insurance claims."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Call with Questions", to: "tel:704-216-0081" }}
      />

      <BlogGrid
        heading="Recent Articles"
        subheading="Practical insights to help you navigate auto insurance claims in North Carolina"
        posts={[
          {
            title: "North Carolina Total Loss Rule Explained",
            excerpt: "What the NC Total Loss Rule means for your claim and how insurance companies must calculate actual cash value under state law.",
            href: "#nc-total-loss-rule",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&auto=format&fit=crop",
            date: "December 2024"
          },
          {
            title: "Why Vehicle Options Matter in Appraisals",
            excerpt: "How factory options and packages can add thousands to your vehicle's value, and why generic valuations miss the mark.",
            href: "#vehicle-options-matter",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
            date: "November 2024"
          },
          {
            title: "Common Comparable Vehicle Mistakes",
            excerpt: "The most frequent errors insurance companies make when selecting comparable vehicles for total loss valuations.",
            href: "#comparable-mistakes",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format&fit=crop",
            date: "October 2024"
          },
          {
            title: "Spotting Low Insurance Offers",
            excerpt: "Red flags that indicate your insurance company's total loss offer may be below market value and worth challenging.",
            href: "#spotting-low-offers",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80&auto=format&fit=crop",
            date: "September 2024"
          },
          {
            title: "When to Challenge an Insurance Valuation",
            excerpt: "Key factors to consider when deciding whether to accept an insurance company's total loss offer or seek an independent appraisal.",
            href: "#when-to-challenge",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
            date: "August 2024"
          },
          {
            title: "Diminished Value Reality Check",
            excerpt: "Setting realistic expectations for diminished value claims in North Carolina, including typical timelines and settlement ranges.",
            href: "#diminished-value-reality",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80&auto=format&fit=crop",
            date: "July 2024"
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Have Questions?</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground text-center">
              <p className="text-lg leading-relaxed mb-6">
                These articles cover the most common situations I encounter, but every claim is different. 
                If you have questions about your specific situation or want to discuss whether an appraisal 
                makes sense for your case, give me a call.
              </p>
              <p className="text-lg leading-relaxed">
                I offer free consultations to help you understand your options and make informed decisions 
                about your auto insurance claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need specific guidance?"
        heading="Call for a free consultation"
        subheading="Every insurance claim is different. Let's discuss your specific situation and explore your options."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}
