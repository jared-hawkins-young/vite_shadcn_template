import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { CTASection } from "@/components/sections/CTASection";

export default function Skills() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Technical Skills"
        title="Full-stack development with modern technologies"
        subtitle="Comprehensive skill set spanning programming languages, cloud platforms, AI/ML frameworks, and development tools."
        imageUrl="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "View Experience", to: "/experience" }}
        ctaSecondary={{ label: "Download Resume", to: "/Jared-Hawkins-Young-Resume.pdf" }}
      />

      {/* Programming Languages */}
      <FeatureShowcase
        heading="Programming Languages"
        subheading="Core languages for building robust applications"
        items={[
          { icon: "🐍", title: "Python", desc: "Primary language for data science, AI/ML development, and backend applications with extensive library ecosystem." },
          { icon: "☕", title: "Java", desc: "Object-oriented programming for enterprise applications, Android development, and scalable backend systems." },
          { icon: "🗃️", title: "SQL", desc: "Database design, complex queries, optimization, and data manipulation across multiple database systems." },
          { icon: "⚡", title: "C++", desc: "System-level programming, performance optimization, and understanding of low-level computer operations." },
          { icon: "🌐", title: "HTML/CSS", desc: "Modern web development with semantic HTML5, responsive CSS3, and contemporary design principles." },
          { icon: "📜", title: "JavaScript", desc: "Frontend and backend development with modern ES6+ features and asynchronous programming patterns." },
        ]}
      />

      {/* Cloud & Infrastructure */}
      <ServiceCards
        heading="Cloud Platforms & Infrastructure"
        subheading="Experience with major cloud providers and modern deployment strategies"
        items={[
          {
            icon: "☁️",
            title: "AWS (Amazon Web Services)",
            desc: "EC2, S3, Lambda, RDS, and other AWS services for building scalable cloud applications and infrastructure.",
            cta: { label: "View projects", to: "/experience" },
          },
          {
            icon: "🔷",
            title: "Microsoft Azure",
            desc: "Azure services for cloud computing, machine learning, and enterprise application development and deployment.",
            cta: { label: "View projects", to: "/experience" },
          },
          {
            icon: "🌐",
            title: "Google Cloud Platform",
            desc: "GCP services for data analytics, machine learning, and scalable web application hosting and management.",
            cta: { label: "View projects", to: "/experience" },
          },
        ]}
      />

      {/* AI/ML Tools */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">AI/ML Tools & Frameworks</h2>
            <p className="mt-3 text-muted-foreground">Modern tools for building intelligent applications</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🔗</div>
              <h3 className="font-semibold text-foreground mb-1">LangChain</h3>
              <p className="text-sm text-muted-foreground">LLM application framework</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-foreground mb-1">LangGraph</h3>
              <p className="text-sm text-muted-foreground">Multi-agent workflows</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🎤</div>
              <h3 className="font-semibold text-foreground mb-1">Whisper</h3>
              <p className="text-sm text-muted-foreground">Speech recognition</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🦙</div>
              <h3 className="font-semibold text-foreground mb-1">Ollama</h3>
              <p className="text-sm text-muted-foreground">Local LLM deployment</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="font-semibold text-foreground mb-1">PyTorch</h3>
              <p className="text-sm text-muted-foreground">Deep learning framework</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-semibold text-foreground mb-1">TensorFlow</h3>
              <p className="text-sm text-muted-foreground">ML model development</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🔬</div>
              <h3 className="font-semibold text-foreground mb-1">Scikit-learn</h3>
              <p className="text-sm text-muted-foreground">ML algorithms & tools</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🐼</div>
              <h3 className="font-semibold text-foreground mb-1">Pandas/NumPy</h3>
              <p className="text-sm text-muted-foreground">Data analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Databases & Data Tools */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Databases & Data Tools</h2>
            <p className="mt-3 text-muted-foreground">Experience with modern data storage and analysis solutions</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">ClickHouse</h3>
              <p className="text-muted-foreground">High-performance columnar database for analytics and real-time data processing.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🐘</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">PostgreSQL</h3>
              <p className="text-muted-foreground">Advanced relational database with strong ACID compliance and JSON support.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🐬</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">MySQL</h3>
              <p className="text-muted-foreground">Reliable relational database for web applications and data storage.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🍃</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">MongoDB</h3>
              <p className="text-muted-foreground">NoSQL document database for flexible, scalable data storage.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tableau</h3>
              <p className="text-muted-foreground">Professional data visualization and business intelligence platform.</p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Matplotlib</h3>
              <p className="text-muted-foreground">Python plotting library for creating statistical visualizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Developer Tools & Technologies</h2>
            <p className="mt-3 text-muted-foreground">Modern development environment and automation tools</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="font-semibold text-foreground mb-1">VS Code</h3>
              <p className="text-sm text-muted-foreground">Primary IDE</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🐳</div>
              <h3 className="font-semibold text-foreground mb-1">Docker</h3>
              <p className="text-sm text-muted-foreground">Containerization</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🐙</div>
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">Version control</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold text-foreground mb-1">Selenium</h3>
              <p className="text-sm text-muted-foreground">Web automation</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🍲</div>
              <h3 className="font-semibold text-foreground mb-1">Beautiful Soup</h3>
              <p className="text-sm text-muted-foreground">Web scraping</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold text-foreground mb-1">Git</h3>
              <p className="text-sm text-muted-foreground">Source control</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🐧</div>
              <h3 className="font-semibold text-foreground mb-1">Linux</h3>
              <p className="text-sm text-muted-foreground">Server management</p>
            </div>
            <div className="bg-card rounded-xl p-4 text-center shadow-lg">
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold text-foreground mb-1">APIs</h3>
              <p className="text-sm text-muted-foreground">Integration & design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        eyebrow="Ready to build together?"
        heading="Let's discuss how these skills can benefit your projects"
        subheading="I'm excited to apply my technical expertise to solve challenging problems and build innovative solutions."
        button={{ label: "Contact Me", to: "/contact" }}
      />
    </>
  );
}
