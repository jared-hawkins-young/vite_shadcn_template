import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About Danny Wyatt"
        title="Decades of auto appraisal experience serving North Carolina"
        subtitle="Independent auto appraiser with deep expertise in total loss valuations and a straightforward approach to helping NC drivers get fair settlements."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
        ctaSecondary={{ label: "Learn About Services", to: "/" }}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop" 
                  alt="Danny Wyatt, Independent Auto Appraiser"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Meet Danny Wyatt</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-4">
                    I've been helping North Carolina drivers navigate auto insurance claims for decades. 
                    My experience includes working on the development of the NC Total Loss Rule, giving me 
                    deep insight into how these regulations should actually protect consumers.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    My approach is straightforward: no fluff, no overselling, just honest assessments 
                    of whether an appraisal makes sense for your situation. Sometimes I'll recommend 
                    against an appraisal if the numbers don't work in your favor.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I focus primarily on total loss appraisals because that's where I can make the 
                    biggest difference for clients. When insurance companies use generic valuations 
                    that ignore your vehicle's specific options, that's where my expertise pays off.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureShowcase
        heading="My Values & Approach"
        subheading="What you can expect when working with CSI-NC"
        items={[
          {
            icon: "💬",
            title: "Transparent Communication",
            desc: "I explain everything in plain English. No industry jargon, no confusing terms – just clear information about your options and what to expect."
          },
          {
            icon: "🤝",
            title: "Service Over Sales",
            desc: "My goal is to provide valuable service, not just sell appraisals. If an appraisal doesn't make financial sense for your case, I'll tell you."
          },
          {
            icon: "🏠",
            title: "North Carolina Local",
            desc: "I exclusively serve NC drivers and understand our state's insurance laws, market conditions, and local factors that affect vehicle values."
          },
          {
            icon: "⚡",
            title: "No Fluff Approach",
            desc: "I focus on what matters: getting you accurate valuations and fair settlements. No unnecessary complexity or overselling of services."
          },
          {
            icon: "💰",
            title: "Fair Pricing",
            desc: "Transparent pricing with clear explanations upfront. My fees are designed to be worthwhile for clients who truly benefit from an appraisal."
          },
          {
            icon: "✅",
            title: "Honest Outcomes",
            desc: "I provide realistic expectations about timelines, potential outcomes, and whether your case is worth pursuing. No false promises."
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Availability & Contact</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground text-center">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Business Hours:</strong> Monday through Friday, 10am to 6pm<br/>
                <strong>Weekend Calls:</strong> Available for urgent matters (potluck basis)
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I prefer phone consultations for initial discussions because it allows me to ask 
                the right questions about your vehicle and situation. This helps me give you an 
                honest assessment quickly, without wasting your time.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Phone:</strong> 704-216-0081<br/>
                <strong>Email:</strong> csi@csi-nc.net<br/>
                <strong>Service Area:</strong> All of North Carolina
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to discuss your case?"
        heading="Call for your free consultation"
        subheading="I'll review your situation and give you an honest assessment of whether an appraisal makes sense – no obligation, no pressure."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}