import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";

export default function Experience() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Professional Experience"
        title="Building innovative solutions across diverse projects"
        subtitle="From multi-tenant platforms to AI-powered applications, showcasing versatility and technical growth through real-world projects."
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
        ctaSecondary={{ label: "View Skills", to: "/skills" }}
      />

      {/* Major Projects */}
      <ServiceCards
        heading="Key Projects & Experience"
        subheading="Showcasing technical versatility and problem-solving capabilities"
        items={[
          {
            icon: "🏢",
            title: "Multi-tenant Website Platform",
            desc: "Oakridge Automation - Architected and developed a scalable multi-tenant platform enabling businesses to manage multiple websites from a single interface with customizable branding and content management.",
            price: "Full-Stack Development",
            cta: { label: "Learn more", to: "/contact" },
          },
          {
            icon: "🎤",
            title: "Multi-Agent Voice Assistant",
            desc: "Oakridge Automation - Built an intelligent voice assistant system using LangChain and Whisper, implementing multi-agent workflows for complex task handling and natural language processing.",
            price: "AI/ML Development",
            cta: { label: "Learn more", to: "/contact" },
          },
          {
            icon: "📧",
            title: "Forecastable Email Platform",
            desc: "Epic Execute Consulting - Developed an email summarization and analytics platform that processes large volumes of email data to provide actionable insights and automated reporting capabilities.",
            price: "Data Engineering",
            cta: { label: "Learn more", to: "/contact" },
          },
          {
            icon: "📊",
            title: "Vrolio Data Engineering",
            desc: "Multiple data engineering projects involving ETL pipelines, database optimization, and analytics dashboards. Built scalable data processing systems using Python, SQL, and cloud technologies.",
            price: "Data Engineering",
            cta: { label: "Learn more", to: "/contact" },
          },
          {
            icon: "💬",
            title: "College Chat Chatbot",
            desc: "Academic Project - Developed an intelligent chatbot for college students using natural language processing, providing automated assistance with course information, campus resources, and student services.",
            price: "Academic Project",
            cta: { label: "Learn more", to: "/contact" },
          }
        ]}
      />

      {/* Technical Achievements */}
      <FeatureShowcase
        heading="Technical Achievements"
        subheading="Key accomplishments demonstrating technical growth and impact"
        items={[
          { icon: "🏗️", title: "Scalable Architecture", desc: "Designed and implemented multi-tenant architecture serving hundreds of users with high availability and performance." },
          { icon: "🤖", title: "AI Integration", desc: "Successfully integrated multiple AI models and frameworks to create intelligent, responsive applications that enhance user experience." },
          { icon: "📈", title: "Data Processing", desc: "Built efficient ETL pipelines processing large datasets with optimized performance and reliable data quality assurance." },
          { icon: "☁️", title: "Cloud Deployment", desc: "Deployed applications across AWS, Azure, and GCP with containerization and automated CI/CD pipelines for reliable delivery." },
          { icon: "🔧", title: "Problem Solving", desc: "Consistently delivered solutions to complex technical challenges through analytical thinking and creative problem-solving approaches." },
          { icon: "🤝", title: "Collaboration", desc: "Worked effectively with cross-functional teams, contributing to project planning, code reviews, and knowledge sharing initiatives." },
        ]}
      />

      {/* Technology Stack */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Technology Stack Experience</h2>
            <p className="mt-3 text-muted-foreground">Technologies used across various projects and roles</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Backend Development</h3>
              <p className="text-muted-foreground mb-3">Python, Java, Node.js, RESTful APIs, microservices architecture</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Java</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">APIs</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🗄️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data Engineering</h3>
              <p className="text-muted-foreground mb-3">ETL pipelines, ClickHouse, PostgreSQL, data processing, analytics</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">ClickHouse</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">PostgreSQL</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">ETL</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI/ML Development</h3>
              <p className="text-muted-foreground mb-3">LangChain, LangGraph, Whisper, PyTorch, TensorFlow, NLP</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">LangChain</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Whisper</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        eyebrow="Interested in my work?"
        heading="Let's discuss how my experience can benefit your team"
        subheading="I'm excited to share more details about these projects and explore how I can contribute to your development goals."
        button={{ label: "Contact Me", to: "/contact" }}
      />
    </>
  );
}
