import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="North Carolina Auto Appraisals"
        title="Straightforward Auto Appraisals"
        subtitle="Get what your vehicle is actually worth. Independent auto appraiser serving North Carolina drivers with honest, accurate valuations."
        imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="lg"
        ctaPrimary={{ label: "Call for Free Consult", to: "tel:704-216-0081" }}
        ctaSecondary={{ label: "Learn About Services", to: "#services" }}
      />

      <div id="services">
        <ServiceCards
          heading="Auto Appraisal Services"
          subheading="Specialized expertise for North Carolina drivers"
          items={[
            {
              icon: "🎯",
              title: "Total Loss Appraisals",
              desc: "Get accurate valuations when insurance companies undervalue your total loss claim. Option-specific comps and detailed documentation.",
              price: "Primary Focus",
              cta: { label: "Learn More", to: "/total-loss" }
            },
            {
              icon: "📉",
              title: "Diminished Value",
              desc: "Recover compensation for your vehicle's decreased value after an accident. Realistic expectations and honest assessments.",
              price: "Secondary Service",
              cta: { label: "Learn More", to: "/diminished-value" }
            }
          ]}
        />
      </div>

      <FeatureShowcase
        heading="Why Choose CSI-NC"
        subheading="Transparent service with North Carolina expertise"
        items={[
          {
            icon: "🏠",
            title: "Local North Carolina",
            desc: "Deep understanding of NC Total Loss Rule and local market conditions. Serving NC drivers exclusively."
          },
          {
            icon: "🎯",
            title: "Option-Accurate Comparables",
            desc: "I research vehicles with your exact options and packages, not just base models. This attention to detail often adds thousands to valuations."
          },
          {
            icon: "✅",
            title: "Honest Outcomes",
            desc: "No overselling or false promises. I'll give you a realistic assessment of your case and whether an appraisal makes financial sense."
          },
          {
            icon: "💰",
            title: "Fair Pricing",
            desc: "Transparent pricing with no surprises. I'll explain costs upfront during your free consultation."
          },
          {
            icon: "🤝",
            title: "Service Over Sales",
            desc: "My goal is to provide valuable service, not just sell appraisals. Sometimes I'll recommend against an appraisal if it doesn't make sense."
          },
          {
            icon: "📞",
            title: "Straightforward Communication",
            desc: "No fluff or industry jargon. Clear explanations of your options and what to expect throughout the process."
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Recent Success Example</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>2021 Chevy Silverado High Country:</strong> Insurance company offered $38,500 for this total loss claim. 
                After reviewing the vehicle's options package and researching comparable trucks with matching features, 
                I documented an actual cash value of $44,200.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>The difference?</strong> The insurance company used comparables for base model Silverados, 
                ignoring the High Country package worth several thousand dollars. My detailed appraisal showed 
                exactly what those options were worth in the current market.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Result:</strong> The insurance company increased their settlement by $5,700 after reviewing 
                my appraisal documentation. The client's appraisal fee was covered many times over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        heading="What Clients Say"
        items={[
          {
            who: "Mike R., Charlotte",
            when: "November 2024",
            text: "Danny saved me thousands on my total loss claim. The insurance company's offer was way too low, but Danny's appraisal got them to add $4,800 to the settlement. Worth every penny."
          },
          {
            who: "Sarah K., Raleigh",
            when: "October 2024",
            text: "Honest and straightforward – exactly what you want in an appraiser. Danny told me upfront what to expect and delivered exactly what he promised. No surprises, no runaround."
          }
        ]}
      />

      <CTASection
        eyebrow="Ready to get started?"
        heading="Call for your free consultation"
        subheading="I'll review your insurance offer and vehicle details to give you an honest assessment of whether an appraisal makes sense for your situation."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}