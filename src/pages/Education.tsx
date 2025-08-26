import { Hero } from "@/components/sections/Hero";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { CTASection } from "@/components/sections/CTASection";

export default function Education() {
  return (
    <>
      <Hero
        eyebrow="Academic Foundation"
        title="Computer Science Education at UNC Charlotte"
        subtitle="Building expertise in software engineering, algorithms, and system design through rigorous academic training and hands-on projects."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80&auto=format&fit=crop"
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "View Projects", to: "/experience" }}
        ctaSecondary={{ label: "Download Transcript", to: "/contact" }}
      />

      <FeatureShowcase
        heading="Core Computer Science Curriculum"
        subheading="Comprehensive foundation in software engineering principles, data structures, algorithms, and modern development practices."
        items={[
          {
            icon: "⚙️",
            title: "Data Structures & Algorithms",
            desc: "Advanced study of computational complexity, optimization techniques, and efficient algorithm design for real-world problem solving."
          },
          {
            icon: "🏗️",
            title: "Software Engineering",
            desc: "Object-oriented design patterns, SDLC methodologies, version control, testing frameworks, and collaborative development practices."
          },
          {
            icon: "💾",
            title: "Database Systems",
            desc: "Relational database design, SQL optimization, transaction management, and modern NoSQL database architectures."
          },
          {
            icon: "🌐",
            title: "Computer Networks",
            desc: "Network protocols, distributed systems architecture, client-server models, and web application security principles."
          },
          {
            icon: "🤖",
            title: "Artificial Intelligence",
            desc: "Machine learning algorithms, neural networks, natural language processing, and AI application development frameworks."
          },
          {
            icon: "🔒",
            title: "Cybersecurity Fundamentals",
            desc: "Security protocols, encryption methods, vulnerability assessment, and secure coding practices for enterprise applications."
          }
        ]}
      />

      <FeatureShowcase
        heading="Capstone & Research Experience"
        subheading="Applied learning through comprehensive projects that demonstrate technical proficiency and innovation."
        items={[
          {
            icon: "🎯",
            title: "Senior Capstone Project",
            desc: "Full-stack web application with React frontend, Node.js backend, PostgreSQL database, and AWS deployment infrastructure."
          },
          {
            icon: "🔬",
            title: "Machine Learning Research",
            desc: "Independent research project exploring deep learning applications in computer vision with TensorFlow and Python."
          },
          {
            icon: "📱",
            title: "Mobile Development",
            desc: "Cross-platform mobile application built with React Native, featuring real-time data synchronization and offline capabilities."
          },
          {
            icon: "☁️",
            title: "Cloud Architecture Design",
            desc: "Scalable microservices architecture deployed on AWS with containerization, load balancing, and automated CI/CD pipelines."
          }
        ]}
      />

      <CTASection
        eyebrow="Ready to Connect"
        heading="Let's discuss how my education translates to impact"
        subheading="My academic foundation in computer science provides the theoretical knowledge and practical skills needed to tackle complex software challenges."
        button={{ label: "Contact Me", to: "/contact" }}
      />
    </>
  );
}
