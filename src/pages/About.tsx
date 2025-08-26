import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="About Jared"
        title="Building the future through code and collaboration"
        subtitle="A passionate software engineer dedicated to creating scalable systems and innovative AI applications that make a real difference."
        imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "View My Skills", to: "/skills" }}
        ctaSecondary={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
      />

      {/* Objective & Introduction */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">My Objective</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                As a recent Computer Science graduate from UNC Charlotte with a concentration in Data Science, 
                I'm passionate about leveraging technology to solve complex problems and create meaningful impact. 
                My academic foundation, combined with hands-on project experience, has prepared me to contribute 
                immediately to development teams building the next generation of software solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My interests span the full spectrum of modern software development, from building scalable backend 
                systems and cloud-native applications to developing intelligent AI/ML solutions that enhance user 
                experiences. I'm particularly drawn to the intersection of data science and software engineering, 
                where analytical insights drive better product decisions and user outcomes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What excites me most about software development is the collaborative nature of building something 
                larger than any individual could create alone. I thrive in team environments where diverse perspectives 
                come together to solve challenging problems, and I'm always eager to learn from experienced developers 
                while contributing my fresh insights and enthusiasm for emerging technologies.
              </p>
              <p className="text-lg leading-relaxed">
                I'm actively seeking opportunities to join a development team where I can apply my technical skills, 
                continue learning, and contribute to building software that makes a positive impact on users and 
                businesses alike. Whether it's optimizing system performance, implementing machine learning models, 
                or designing intuitive user interfaces, I'm ready to tackle whatever challenges come my way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Areas of Focus</h2>
            <p className="mt-3 text-muted-foreground">Key areas where I'm building expertise and looking to contribute</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Scalable Systems</h3>
              <p className="text-muted-foreground">
                Building robust, scalable applications using cloud platforms and modern architectures 
                that can grow with business needs and handle increasing user demands.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI/ML Applications</h3>
              <p className="text-muted-foreground">
                Developing intelligent applications using machine learning frameworks and AI tools 
                to create smarter, more responsive software solutions.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Data-Driven Development</h3>
              <p className="text-muted-foreground">
                Leveraging data analysis and visualization to inform development decisions and 
                create software that truly serves user needs and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        eyebrow="Let's connect"
        heading="Ready to discuss opportunities?"
        subheading="I'd love to learn more about your team and explore how I can contribute to your development projects."
        button={{ label: "Contact Me", to: "/contact" }}
      />
    </>
  );
}