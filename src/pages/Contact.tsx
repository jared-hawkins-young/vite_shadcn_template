import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { CTASection } from "@/components/sections/CTASection";

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Get in touch"
        title="Call for your free consultation"
        subtitle="I'll review your insurance offer and vehicle details to give you an honest assessment of whether an appraisal makes sense for your situation."
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
        ctaSecondary={{ label: "Send a message", to: "#contact-form" }}
      />

      <ContactBlock
        heading="Contact Information"
        subheading="Reach out for your free consultation"
        channels={[
          { type: "phone", value: "704-216-0081" },
          { type: "email", value: "csi@csi-nc.net" },
          { type: "address", value: "Serving all of North Carolina" },
          { type: "hours", value: "Mon–Fri 10am–6pm, weekends potluck calls" },
        ]}
      />

      <div id="contact-form">
        <ContactForm
          heading="Send me a message"
          subheading="Prefer to start with a message? Include your vehicle details and insurance offer information."
          emailTo="csi@csi-nc.net"
          subjectPrefix="Auto Appraisal Inquiry"
          services={[
            { value: "total-loss", label: "Total Loss Appraisal" },
            { value: "diminished-value", label: "Diminished Value Claim" },
            { value: "consultation", label: "General Consultation" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What to Have Ready</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                When you call, it's helpful to have the following information available:
              </p>
              <ul className="text-lg leading-relaxed mb-6 space-y-2">
                <li>• Your vehicle's year, make, model, and trim level</li>
                <li>• Mileage and overall condition before the accident</li>
                <li>• Insurance company's total loss offer amount</li>
                <li>• Any factory options or packages on your vehicle</li>
                <li>• Photos of your vehicle (if available)</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Don't worry if you don't have all of this – we can work with whatever information 
                you have and guide you on gathering additional details if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to get started?"
        heading="Call for your free consultation"
        subheading="No obligation, no pressure – just an honest assessment of whether an appraisal makes sense for your case."
        button={{ label: "Call 704-216-0081", to: "tel:704-216-0081" }}
      />
    </>
  );
}
