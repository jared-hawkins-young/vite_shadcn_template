import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { Testimonials } from "@/components/sections/Testimonials";

export default function DiminishedValue() {
  return (
    <>
      <Hero
        eyebrow="Diminished Value Claims"
        title="Recover the hidden cost of your accident"
        subtitle="Even after perfect repairs, your vehicle is worth less due to its accident history. Let's set realistic expectations and pursue fair compensation."
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Call to Discuss", to: "tel:704-216-0081" }}
        ctaSecondary={{ label: "Learn More", to: "#details" }}
      />

      <section id="details" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Setting Realistic Expectations</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Let's be honest about diminished value claims: they're challenging, time-consuming, and results vary widely. 
                Unlike total loss appraisals where we can show clear market data, diminished value is more subjective 
                and depends heavily on your insurance company's willingness to negotiate.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                That said, legitimate diminished value exists when your vehicle has accident history, especially for 
                newer or higher-value vehicles. I don't oversell these claims – I give you honest assessments based 
                on your specific situation, vehicle, and the strength of your case.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The process is slower than total loss appraisals, often taking months to resolve. Settlement amounts 
                typically range from $2,000 to $8,000 for most passenger vehicles, though luxury or specialty vehicles 
                may see higher recoveries.
              </p>
              <p className="text-lg leading-relaxed">
                Before we proceed, I'll give you a realistic assessment of your chances and expected timeline. 
                No false promises – just straightforward evaluation of whether pursuing diminished value makes sense for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureShowcase
        heading="When Diminished Value Claims Make Sense"
        subheading="Not every accident results in a viable diminished value claim"
        items={[
          {
            icon: "🚗",
            title: "Newer Vehicles",
            desc: "Vehicles under 5 years old with significant damage typically have the strongest diminished value cases."
          },
          {
            icon: "💰",
            title: "Higher Value Vehicles",
            desc: "Luxury vehicles, trucks, and specialty cars often see more significant diminished value impacts."
          },
          {
            icon: "🔧",
            title: "Substantial Repairs",
            desc: "Claims involving structural damage, frame work, or airbag deployment typically result in higher diminished value."
          },
          {
            icon: "📋",
            title: "Good Documentation",
            desc: "Clean title history, maintenance records, and quality repair documentation strengthen your case."
          },
          {
            icon: "⚖️",
            title: "Not At-Fault Claims",
            desc: "While not required in NC, not-at-fault claims typically have better success rates with insurance companies."
          },
          {
            icon: "🎯",
            title: "Realistic Expectations",
            desc: "Understanding that this is a longer process with no guaranteed outcome, but potential for fair recovery."
          }
        ]}
      />

      <Testimonials
        heading="Recent Diminished Value Case"
        items={[
          {
            who: "Recent Client",
            when: "2024 Settlement",
            text: "Danny was upfront about the challenges with my diminished value claim from the start. The process took about 4 months, but we eventually settled for $4,800 on my 2022 truck. His realistic expectations and persistence made the difference."
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">My Approach to Diminished Value</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I don't take every diminished value case that walks through the door. During our consultation, 
                I'll evaluate your vehicle, damage history, repair quality, and insurance company to give you 
                an honest assessment of whether it's worth pursuing.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If we move forward, I'll prepare a thorough diminished value report using accepted methodologies 
                and market data. The goal is to present a professional, well-documented case that gives you the 
                best chance of a fair settlement.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout the process, I'll keep you informed of progress and help you understand your options 
                if the insurance company pushes back. Some cases settle quickly, others require more persistence – 
                I'll guide you through either scenario.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Considering a diminished value claim?"
        heading="Let's have an honest conversation"
        subheading="I'll evaluate your situation and give you a realistic assessment of whether a diminished value claim makes sense for your case."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}
