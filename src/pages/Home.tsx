import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Hero
        eyebrow="Software Development Engineer"
        title="Jared Hawkins-Young"
        subtitle="Recent Computer Science graduate from UNC Charlotte with Data Science concentration. Passionate about scalable systems, AI/ML applications, and building impactful software in collaborative environments."
        imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="lg"
        ctaPrimary={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
        ctaSecondary={{ label: "Contact Me", to: "/contact" }}
      />

      {/* HIGHLIGHTS */}
      <FeatureShowcase
        heading="What I Bring to Your Team"
        subheading="Technical skills and passion for building impactful software solutions"
        items={[
          { icon: "🎓", title: "Fresh Graduate", desc: "B.S. Computer Science with Data Science concentration from UNC Charlotte, equipped with modern development practices." },
          { icon: "🤖", title: "AI/ML Focus", desc: "Experience with LangChain, LangGraph, PyTorch, TensorFlow, and building intelligent applications that solve real problems." },
          { icon: "☁️", title: "Cloud & Scale", desc: "Hands-on experience with AWS, Azure, GCP, and building scalable systems that grow with business needs." },
        ]}
      />

      {/* FINAL CTA */}
      <CTASection
        eyebrow="Ready to build something amazing?"
        heading="Let's discuss how I can contribute to your development team"
        subheading="I'm excited to apply my technical skills and passion for software development to meaningful projects."
        button={{ label: "Contact Me", to: "/contact" }}
      />
    </>
  );
}