import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { CTASection } from "@/components/sections/CTASection";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Get in touch"
        title="Let's build something amazing together"
        subtitle="I'm passionate about creating innovative software solutions and eager to contribute to your development team's success."
        imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Send me a message", to: "#contact-form" }}
        ctaSecondary={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
      />

      {/* Contact Information */}
      <ContactBlock
        heading="Contact Information"
        subheading="Let's connect and discuss opportunities"
        channels={[
          { type: "email", value: "jared.hawkins.young@email.com" },
          { type: "address", value: "Charlotte, NC" },
          { type: "custom", label: "GitHub", value: "github.com/jaredhawkinsyoung" },
          { type: "custom", label: "LinkedIn", value: "linkedin.com/in/jaredhawkinsyoung" },
          { type: "hours", value: "Available for interviews Mon-Fri" },
        ]}
      />

      {/* Contact Form */}
      <div id="contact-form">
        <ContactForm
          heading="Send me a message"
          subheading="I'd love to hear about software development opportunities and technical challenges"
          emailTo="jared.hawkins.young@email.com"
          subjectPrefix="Software Developer Inquiry"
          services={[
            { value: "job-opportunity", label: "Job Opportunity" },
            { value: "project-collaboration", label: "Project Collaboration" },
            { value: "technical-consultation", label: "Technical Consultation" },
            { value: "code-review", label: "Code Review" },
            { value: "networking", label: "Networking" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>

      {/* Resume CTA */}
      <CTASection
        eyebrow="Want the full details?"
        heading="Download my complete resume"
        subheading="Get a comprehensive overview of my technical skills, projects, and educational background in software development."
        button={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
      />
    </>
  );
}
