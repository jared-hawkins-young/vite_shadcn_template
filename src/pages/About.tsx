// src/pages/About.tsx
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { TeamShowcase } from "@/components/sections/TeamShowcase"
import { BlogGrid } from "@/components/sections/BlogGrid"
import { MapEmbed } from "@/components/sections/MapEmbed"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative h-96 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000"
          alt="About Lost Star"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        heading="Our Process"
        subheading="A simple path from idea to launch"
        steps={[
          {
            title: "Discovery",
            description:
              "We learn your goals, audiences, and success metrics, then propose the best path forward.",
          },
          {
            title: "Design & Plan",
            description:
              "User-first wireframes, content guidance, and timelines—aligned with your brand.",
          },
          {
            title: "Build",
            description:
              "We implement with shadcn/ui, Tailwind, and your theme tokens for a polished experience.",
          },
          {
            title: "Launch & Iterate",
            description:
              "Deploy, measure with PostHog, and iterate based on real user behavior.",
          },
        ]}
      />

      {/* Team Showcase */}
      <TeamShowcase
        heading="Meet the Team"
        subheading="People who care about outcomes"
        members={[
          { name: "Gabriel Chandler", role: "Founder & Lead Engineer", photo: "https://randomuser.me/api/portraits/men/42.jpg" },
          { name: "Sarah Lee", role: "Marketing Lead", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
          { name: "James Carter", role: "Technical Director", photo: "https://randomuser.me/api/portraits/men/75.jpg" },
          { name: "Anna Smith", role: "Customer Success", photo: "https://randomuser.me/api/portraits/women/32.jpg" },
        ]}
      />

      {/* Blog Grid */}
      <BlogGrid
        heading="From the Blog"
        subheading="Practical tips and playbooks for small businesses"
        posts={[
          {
            title: "How AI Agents Save Hours Every Week",
            excerpt: "Email triage, call routing, and lead qualification—on autopilot.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
            href: "#",
          },
          {
            title: "The 2025 Website Checklist",
            excerpt: "What every small business site needs to convert and rank.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            href: "#",
          },
          {
            title: "Automation You Can Ship in a Week",
            excerpt: "Simple workflows that make a big difference.",
            image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
            href: "#",
          },
        ]}
      />

      {/* Map / Location */}
      <MapEmbed
        heading="Where We Operate"
        subheading="Wilmington, North Carolina"
        query="Wilmington, NC"
      />
    </div>
  )
}