import { Helmet } from "react-helmet";
import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Demo Template - Modern React Website Builder</title>
        <meta
          name="description"
          content="Professional React template with TypeScript, shadcn/ui components, and modern design. Build stunning websites quickly with our demo template."
        />
        <link rel="canonical" href="https://demo-template.com/" />
        <meta property="og:title" content="Demo Template - Modern React Website Builder" />
        <meta property="og:description" content="Professional React template with TypeScript, shadcn/ui components, and modern design. Build stunning websites quickly with our demo template." />
        <meta property="og:url" content="https://demo-template.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&q=80&auto=format&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Demo Template",
            "url": "https://demo-template.com",
            "logo": "https://demo-template.com/vite.svg",
            "description": "Professional React template with TypeScript, shadcn/ui components, and modern design tools for building stunning websites."
          })}
        </script>
      </Helmet>

      <Hero
        eyebrow="Welcome to our Demo"
        title="Beautiful websites made simple"
        subtitle="This is a demo template showcasing modern web design with React, TypeScript, and shadcn/ui components. Perfect for building your next project."
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="lg"
        ctaPrimary={{ label: "Get Started", to: "/contact" }}
        ctaSecondary={{ label: "Learn More", to: "/about" }}
      />

      <FeatureShowcase
        heading="Why Choose Our Template"
        subheading="Modern tools and practices for building exceptional web experiences"
        items={[
          {
            icon: "⚡",
            title: "Lightning Fast",
            desc: "Built with Vite for instant hot reload and optimized production builds that load in milliseconds."
          },
          {
            icon: "🎨",
            title: "Beautiful Design",
            desc: "Clean, modern UI components built with shadcn/ui and Tailwind CSS for stunning visual appeal."
          },
          {
            icon: "🔧",
            title: "Developer Friendly",
            desc: "TypeScript support, ESLint configuration, and well-organized code structure for easy customization."
          },
          {
            icon: "📱",
            title: "Fully Responsive",
            desc: "Looks perfect on desktop, tablet, and mobile devices with responsive design patterns."
          },
          {
            icon: "🚀",
            title: "Production Ready",
            desc: "Optimized bundle size, SEO-friendly structure, and deployment-ready configuration."
          },
          {
            icon: "🔒",
            title: "Type Safe",
            desc: "Full TypeScript integration ensures fewer bugs and better developer experience."
          }
        ]}
      />

      <ServiceCards
        heading="Template Features"
        subheading="Everything you need to build amazing websites"
        items={[
          {
            icon: "🎯",
            title: "Component Library",
            desc: "Pre-built, customizable components for common website sections like heroes, features, and testimonials.",
            price: "Included",
            cta: { label: "Explore Components", to: "/about" }
          },
          {
            icon: "🎨",
            title: "Design System",
            desc: "Consistent theming, color schemes, and typography that you can easily customize to match your brand.",
            price: "Included",
            cta: { label: "View Design", to: "/about" }
          },
          {
            icon: "📖",
            title: "Documentation",
            desc: "Comprehensive guides and examples to help you get started quickly and customize everything to your needs.",
            price: "Included",
            cta: { label: "Read Docs", to: "/contact" }
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Built with Modern Technology</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                This template showcases the latest in web development technology. Built with React 18, 
                TypeScript, and Vite for an exceptional developer experience. The UI components are 
                powered by shadcn/ui and styled with Tailwind CSS for rapid customization.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Whether you're building a marketing site, portfolio, or web application, this template 
                provides a solid foundation with modern best practices, accessibility features, and 
                responsive design out of the box.
              </p>
              <p className="text-lg leading-relaxed">
                The component-based architecture makes it easy to add new sections, customize existing 
                ones, and maintain consistency across your entire website. Get started in minutes, 
                not hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials
        heading="What Developers Say"
        items={[
          {
            who: "Sarah Chen, Frontend Developer",
            when: "React Developer",
            text: "This template saved me weeks of setup time. The component library is comprehensive and the TypeScript integration is flawless. Highly recommended for any React project."
          },
          {
            who: "Marcus Rodriguez, UI Designer",
            when: "Design Systems Lead",
            text: "Beautiful design out of the box with easy customization options. The shadcn/ui components are well-implemented and the overall architecture is solid."
          }
        ]}
      />

      <CTASection
        eyebrow="Ready to get started?"
        heading="Build your next project with confidence"
        subheading="Download this template and start building beautiful, modern websites with React, TypeScript, and shadcn/ui components."
        button={{ label: "Get Started", to: "/contact" }}
      />
    </>
  );
}