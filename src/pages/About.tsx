import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";

export default function About() {
  return (
    <>
      <Hero
        eyebrow="About Our Demo"
        title="Modern web development made simple"
        subtitle="Learn about this demo template built with React, TypeScript, and the latest web technologies to help you create stunning websites quickly."
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Get Started", to: "/contact" }}
        ctaSecondary={{ label: "View Demo", to: "/" }}
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80&auto=format&fit=crop" 
                  alt="Modern web development workspace"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Built for Developers</h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-4">
                    This demo template showcases modern web development practices using React 18, 
                    TypeScript, and Vite. It's designed to help developers quickly bootstrap 
                    professional websites with clean, maintainable code.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Every component is carefully crafted with accessibility in mind, responsive 
                    design principles, and performance optimization. The template uses shadcn/ui 
                    components styled with Tailwind CSS for a consistent design system.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether you're building a marketing site, portfolio, or web application, 
                    this template provides a solid foundation with modern tooling and best practices 
                    built-in from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureShowcase
        heading="Template Philosophy & Features"
        subheading="What makes this template special for modern web development"
        items={[
          {
            icon: "⚡",
            title: "Performance First",
            desc: "Lightning-fast builds with Vite, optimized bundle sizes, and performance best practices built into every component."
          },
          {
            icon: "🎨",
            title: "Design System",
            desc: "Consistent UI components with shadcn/ui and Tailwind CSS, providing a cohesive design language throughout your site."
          },
          {
            icon: "🔧",
            title: "Developer Experience",
            desc: "Hot reload, TypeScript support, ESLint configuration, and organized file structure for productive development."
          },
          {
            icon: "📱",
            title: "Mobile First",
            desc: "Responsive design patterns ensure your site looks perfect on every device, from mobile phones to desktop screens."
          },
          {
            icon: "♿",
            title: "Accessibility",
            desc: "WCAG compliant components with proper ARIA labels, keyboard navigation, and screen reader support built-in."
          },
          {
            icon: "🚀",
            title: "Production Ready",
            desc: "Optimized for deployment with proper SEO meta tags, sitemap generation, and performance monitoring setup."
          }
        ]}
      />

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Frontend Framework:</strong> React 18 with functional components and hooks for modern, 
                efficient component development. TypeScript integration provides type safety and enhanced 
                developer experience with intelligent code completion and error detection.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>Build Tool:</strong> Vite offers incredibly fast development server startup and 
                hot module replacement. Production builds are optimized with code splitting and tree 
                shaking for minimal bundle sizes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong>UI Components:</strong> shadcn/ui provides a comprehensive set of accessible, 
                customizable components built on top of Radix UI primitives. Styled with Tailwind CSS 
                for rapid customization and consistent design.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Code Quality:</strong> ESLint and Prettier ensure consistent code formatting and 
                catch potential issues early. The project structure follows React best practices with 
                clear separation of concerns and reusable component architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to start building?"
        heading="Get started with this template today"
        subheading="Download the template and start building your next project with modern web development tools and best practices."
        button={{ label: "Get Started", to: "/contact" }}
      />
    </>
  );
}