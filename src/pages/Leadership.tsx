import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";

export default function Leadership() {
  return (
    <>
      <Hero
        eyebrow="Community Leadership"
        title="Alpha Sigma Phi Community Service Chair"
        subtitle="Leading meaningful community impact initiatives while developing organizational leadership skills and fostering team collaboration."
        imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "View Experience", to: "/experience" }}
        ctaSecondary={{ label: "Connect", to: "/contact" }}
      />

      <FeatureShowcase
        heading="Community Service & Organizational Excellence"
        subheading="Driving positive change through strategic planning, team coordination, and sustainable community partnerships."
        items={[
          {
            icon: "🎯",
            title: "Strategic Planning",
            desc: "Develop comprehensive service strategies that align with organizational goals while maximizing community impact and member engagement."
          },
          {
            icon: "👥",
            title: "Team Coordination",
            desc: "Lead cross-functional teams of 20+ members, coordinating schedules, resources, and communications for successful project execution."
          },
          {
            icon: "🤝",
            title: "Partnership Development",
            desc: "Build and maintain relationships with local nonprofits, establishing sustainable partnerships that create lasting community value."
          },
          {
            icon: "📊",
            title: "Impact Measurement",
            desc: "Track and analyze service metrics, volunteer hours, and community feedback to continuously improve program effectiveness."
          },
          {
            icon: "🎤",
            title: "Public Speaking",
            desc: "Present initiatives to university administration, community leaders, and prospective partners with confidence and clarity."
          },
          {
            icon: "⚡",
            title: "Crisis Management",
            desc: "Adapt quickly to changing circumstances, pivot strategies when needed, and maintain team morale during challenging situations."
          }
        ]}
      />

      <ProcessTimeline
        heading="Key Milestones & Achievements"
        subheading="Progressive development of leadership capabilities through hands-on experience and measurable community impact."
        steps={[
          {
            title: "Elected Community Service Chair",
            description: "Selected by peers to lead all community service initiatives, overseeing annual planning and budget allocation for fraternity philanthropy.",
            icon: "🏆",
            badge: "2024"
          },
          {
            title: "Launched Local Partnership Program",
            description: "Established ongoing relationships with 5 local organizations, creating structured volunteer opportunities and measurable impact goals.",
            icon: "🤝",
            badge: "Q1 2024"
          },
          {
            title: "Organized Major Fundraising Event",
            description: "Coordinated campus-wide charity drive that raised $8,000+ for local food banks, managing logistics for 200+ participants.",
            icon: "💰",
            badge: "Q2 2024"
          },
          {
            title: "Implemented Digital Tracking System",
            description: "Developed volunteer hour tracking system that improved reporting accuracy by 90% and streamlined member participation.",
            icon: "📱",
            badge: "Q3 2024"
          },
          {
            title: "Expanded Community Reach",
            description: "Increased chapter's annual service hours by 150% through strategic planning and member engagement initiatives.",
            icon: "📈",
            badge: "Ongoing"
          }
        ]}
      />

      <FeatureShowcase
        heading="Leadership Skills for Software Development"
        subheading="Community leadership experience directly translates to technical team environments and software project management."
        items={[
          {
            icon: "🎯",
            title: "Project Management",
            desc: "Experience managing multiple concurrent initiatives with deadlines, budgets, and stakeholder expectations mirrors agile development practices."
          },
          {
            icon: "💬",
            title: "Cross-functional Collaboration",
            desc: "Leading diverse teams of volunteers prepares for working with designers, product managers, QA engineers, and other technical roles."
          },
          {
            icon: "📊",
            title: "Data-Driven Decision Making",
            desc: "Using metrics to evaluate program success translates directly to analyzing user engagement, performance metrics, and business KPIs."
          },
          {
            icon: "🔄",
            title: "Agile Adaptation",
            desc: "Quickly pivoting strategies based on feedback and changing requirements mirrors the iterative nature of software development cycles."
          }
        ]}
      />

      <CTASection
        eyebrow="Leadership in Action"
        heading="Ready to bring leadership skills to your development team"
        subheading="My community leadership experience demonstrates the collaboration, communication, and project management skills essential for successful software development."
        button={{ label: "Discuss Opportunities", to: "/contact" }}
      />
    </>
  );
}
