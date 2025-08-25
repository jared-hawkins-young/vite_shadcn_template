import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { DividerBand } from "@/components/sections/DividerBand";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { Testimonials } from "@/components/sections/Testimonials";
import { MediaCarousel } from "@/components/sections/MediaCarousel";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero
        eyebrow="Modern websites, faster"
        title="Launch a polished, high‑converting site—without the headache"
        subtitle="Config‑first sections, theme‑driven design, and a clean stack so updates stay easy."
        imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="lg"
        ctaPrimary={{ label: "Book Free Consultation", to: "/contact" }}
        ctaSecondary={{ label: "See Packages", to: "/about" }}
      />

      {/* FEATURE SHOWCASE */}
      <FeatureShowcase
        heading="Built to win clients"
        subheading="Every section is token‑styled and production‑ready"
        items={[
          { icon: "⚡", title: "Fast setup", desc: "Drop in sections, tune copy, publish. No design thrash." },
          { icon: "🎯", title: "Marketing‑ready", desc: "Clear structure, strong CTAs, trust signals throughout." },
          { icon: "🧩", title: "Flexible", desc: "Add services, FAQs, pricing, testimonials—whenever you need." },
        ]}
      />

      {/* SERVICES */}
      <ServiceCards
        heading="What we can ship for you"
        subheading="Pick what you need now—add more as you grow"
        items={[
          {
            icon: "🌐",
            title: "Website Design",
            desc: "Responsive, fast, accessible. SEO‑friendly structure out of the box.",
            price: "From $1,500",
            cta: { label: "Learn more", to: "/about" },
          },
          {
            icon: "🧭",
            title: "Brand & Messaging",
            desc: "Clean voice and visuals that make you memorable.",
            price: "From $800",
            cta: { label: "Learn more", to: "/about" },
          },
          {
            icon: "📈",
            title: "Local SEO",
            desc: "Be found where your customers are searching.",
            price: "From $500/mo",
            cta: { label: "Learn more", to: "/about" },
          },
        ]}
      />

      {/* FULL‑BLEED DIVIDER */}
      <DividerBand
        height="md"
        imageUrl="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
        overlay
        >
        <div className="container mx-auto px-4 py-16 text-center text-white">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20">
            Enterprise tech for small business
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight drop-shadow">
            Lost Star Technologies
            </h2>
            {/* optional subtitle / buttons here */}
        </div>
        </DividerBand>

      {/* PRICING */}
      <PricingTiers
        heading="Straightforward pricing"
        subheading="No surprises. Scale up when you’re ready."
        tiers={[
          {
            name: "Starter",
            price: "$499",
            period: "one‑time",
            features: ["1‑page landing", "Basic SEO", "Analytics setup"],
            cta: { label: "Start here", to: "/contact" },
          },
          {
            name: "Professional",
            price: "$999",
            period: "one‑time",
            highlight: true,
            features: ["Up to 5 pages", "Blog ready", "SEO package", "Polished sections"],
            cta: { label: "Most popular", to: "/contact" },
          },
          {
            name: "Growth",
            price: "$1499",
            period: "one‑time",
            features: ["Custom pages", "Advanced sections", "Priority support"],
            cta: { label: "Talk to us", to: "/contact" },
          },
        ]}
      />

      {/* TESTIMONIALS */}
      <Testimonials
        heading="What clients say"
        subheading="Real results from small businesses"
        items={[
          { who: "Sarah's Salon", when: "1 mo ago", text: "Bookings doubled after launch. Clean, fast, and easy to update." },
          { who: "Mike's Auto Repair", when: "2 mo ago", text: "Local SEO + new site = consistent leads every week." },
          { who: "Dave's Landscaping", when: "3 wks ago", text: "Our quote requests jumped 40%. Looks great on mobile." },
        ]}
      />

      {/* MEDIA / GALLERY */}
      <MediaCarousel
        heading="Recent work"
        subheading="A feel for the polish and structure"
        aspect="16/9"
        items={[
          { src: "https://images.unsplash.com/photo-1516571450254-33bcd5b4a8bb?w=1600&q=80&auto=format&fit=crop", caption: "Clean hero + strong CTA" },
          { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop", caption: "Readable content blocks" },
          { src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1600&q=80&auto=format&fit=crop", caption: "Trust + testimonials" },
        ]}
      />

      {/* FAQ (SHINY ACCORDION) */}
      <FAQ
        heading="Common questions"
        supportLinkHref="/contact"
        items={[
          {
            id: "timeline",
            icon: "Clock",
            question: "How fast can we launch?",
            answer:
              "Most small‑business sites launch in 2–3 weeks. Larger builds with extra sections or integrations can take 4–6 weeks.",
          },
          {
            id: "support",
            icon: "LifeBuoy",
            question: "Do you offer ongoing support?",
            answer:
              "Yes—content updates, security, performance, and analytics reviews are included in our support plans.",
          },
          {
            id: "integrations",
            icon: "PlugZap",
            question: "Can you integrate our tools?",
            answer:
              "We regularly connect sites to Stripe, Google tools, booking platforms, CRMs, and more.",
          },
        ]}
      />

      {/* CTA STRIP */}
      <CTASection
        eyebrow="Next step"
        heading="Ready to launch something you’re proud of?"
        subheading="Tell us what you need—we’ll map the fastest path to live."
        button={{ label: "Book free consult", to: "/contact" }}
      />

      {/* CONTACT DETAILS */}
      <ContactBlock
        heading="Contact"
        subheading="We’re quick on replies"
        channels={[
          { type: "phone", value: "(919) 671-7620" },
          { type: "email", value: "Jahy81802@gmail.com" },
          { type: "address", value: "United States & Canada" },
          { type: "hours", value: "Mon–Fri: 9am–6pm" },
        ]}
      />

      {/* CONTACT FORM (no empty Select values) */}
      <ContactForm
        emailTo="Jahy81802@gmail.com"
        subjectPrefix="Lost Star Inquiry"
        services={[
          { value: "website", label: "Website Design & Hosting" },
          { value: "ai-email", label: "AI Email Agents" },
          { value: "ai-voice", label: "AI Voice Agents" },
          { value: "automation", label: "Business Automation" },
          { value: "marketing", label: "Digital Marketing Setup" },
          { value: "custom-software", label: "Custom Software Development" },
          { value: "database", label: "Database Management" },
          { value: "support", label: "Technical Support" },
          { value: "consultation", label: "General Consultation" },
        ]}
      />
    </>
  );
}