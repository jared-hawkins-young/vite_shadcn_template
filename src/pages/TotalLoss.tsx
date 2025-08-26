import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function TotalLoss() {
  return (
    <>
      <Hero
        eyebrow="Total Loss Appraisals"
        title="Get what your vehicle is actually worth"
        subtitle="Insurance companies often underappraise total loss vehicles. I provide accurate, option-specific valuations to help you get a fair settlement."
        imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Call for Free Consult", to: "tel:704-216-0081" }}
        ctaSecondary={{ label: "Learn About Process", to: "#process" }}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Insurance Companies Underappraise</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Insurance companies have one goal: pay as little as possible on claims. They often use generic 
                valuation tools that don't account for your vehicle's specific options, packages, or condition. 
                This can cost you thousands of dollars in your settlement.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In North Carolina, the Total Loss Rule requires insurers to pay the actual cash value (ACV) 
                of your vehicle. But "actual cash value" should reflect what it would cost to replace your 
                specific vehicle with one of like kind and quality – not just the base model.
              </p>
              <p className="text-lg leading-relaxed">
                That's where I come in. I provide detailed, option-accurate appraisals that show what your 
                vehicle is truly worth, giving you the documentation you need to negotiate a fair settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="process">
        <ProcessTimeline
          heading="My Total Loss Appraisal Process"
          subheading="A straightforward approach to get you accurate results"
          steps={[
            {
              title: "Free Phone Consultation",
              description: "We'll discuss your vehicle, the insurance offer, and whether an appraisal makes sense for your situation.",
              icon: "phone",
              badge: "Step 1"
            },
            {
              title: "Evidence Review",
              description: "I'll review your vehicle's documentation, photos, maintenance records, and the insurance company's valuation.",
              icon: "search",
              badge: "Step 2"
            },
            {
              title: "Market Research",
              description: "I research comparable vehicles with matching options and packages to establish true market value.",
              icon: "search",
              badge: "Step 3"
            },
            {
              title: "Detailed Valuation",
              description: "You receive a comprehensive appraisal report documenting your vehicle's actual cash value.",
              icon: "palette",
              badge: "Step 4"
            },
            {
              title: "Settlement Guidance",
              description: "I provide guidance on how to present the appraisal to your insurance company for maximum impact.",
              icon: "wrench",
              badge: "Step 5"
            }
          ]}
        />
      </div>

      <FeatureShowcase
        heading="Why Options and Packages Matter"
        subheading="The difference between generic and accurate valuations"
        items={[
          {
            icon: "🎯",
            title: "Option-Specific Comparables",
            desc: "I find vehicles with your exact options and packages, not just the base model. This often adds thousands to your valuation."
          },
          {
            icon: "📊",
            title: "Market Data Analysis",
            desc: "I use multiple data sources and real market listings to establish true replacement cost, not outdated book values."
          },
          {
            icon: "📝",
            title: "Detailed Documentation",
            desc: "Your appraisal includes detailed explanations and supporting data that insurance adjusters respect and understand."
          },
          {
            icon: "💰",
            title: "Fair Settlement Support",
            desc: "I provide guidance on presenting your case to maximize your chances of a fair settlement increase."
          }
        ]}
      />

      <FAQ
        heading="Common Questions About Total Loss Appraisals"
        items={[
          {
            id: "worth-it",
            icon: "💡",
            question: "Is an appraisal worth the cost?",
            answer: "If there's a significant gap between the insurance offer and what you think your vehicle is worth, an appraisal often pays for itself many times over. I'll give you an honest assessment during our free consultation."
          },
          {
            id: "timing",
            icon: "⏰",
            question: "When should I get an appraisal?",
            answer: "The sooner the better. Once you accept an insurance settlement, it's much harder to renegotiate. Call me as soon as you receive their initial offer."
          },
          {
            id: "guarantee",
            icon: "🎯",
            question: "Do you guarantee I'll get more money?",
            answer: "I can't guarantee outcomes, but I can guarantee an accurate, well-documented appraisal. Many clients see settlement increases of $2,000-$8,000 or more."
          },
          {
            id: "cost",
            icon: "💰",
            question: "How much does an appraisal cost?",
            answer: "Fees vary based on the complexity of the vehicle and appraisal. I'll provide clear pricing upfront during our consultation – no surprises."
          }
        ]}
      />

      <CTASection
        eyebrow="Ready to get started?"
        heading="Call for your free consultation"
        subheading="I'll review your situation and give you an honest assessment of whether an appraisal makes sense for your case."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}
