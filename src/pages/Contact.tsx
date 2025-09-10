import { Helmet } from "react-helmet";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { CTASection } from "@/components/sections/CTASection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Demo Template - Get Started Today</title>
        <meta
          name="description"
          content="Contact us to learn more about our React template with TypeScript and shadcn/ui. Get started building professional websites today."
        />
        <link rel="canonical" href="https://demo-template.com/contact" />
        <meta property="og:title" content="Contact Demo Template - Get Started Today" />
        <meta property="og:description" content="Contact us to learn more about our React template with TypeScript and shadcn/ui. Get started building professional websites today." />
        <meta property="og:url" content="https://demo-template.com/contact" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&q=80&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Hero
        eyebrow="Get in touch"
        title="Contact our demo template team"
        subtitle="Have questions about our React TypeScript template? Need help getting started? We're here to help you build amazing websites."
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Send Message", to: "#contact-form" }}
        ctaSecondary={{ label: "View Demo", to: "/" }}
      />

      <ContactBlock
        heading="Contact Information"
        subheading="Reach out for template support and questions"
        channels={[
          { type: "email", value: "hello@demo-template.com" },
          { type: "address", value: "Available Worldwide" },
          { type: "hours", value: "Mon–Fri 9am–5pm EST" },
        ]}
      />

      <div id="contact-form">
        <ContactForm
          heading="Send us a message"
          subheading="Have questions about the template? Need help getting started? We're here to help."
          emailTo="hello@demo-template.com"
          subjectPrefix="Demo Template Inquiry"
          services={[
            { value: "general", label: "General Question" },
            { value: "technical", label: "Technical Support" },
            { value: "customization", label: "Customization Help" },
            { value: "license", label: "License Question" },
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
