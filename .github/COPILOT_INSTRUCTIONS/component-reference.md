# Component Reference Guide

## Available UI Components

### Hero Component
```tsx
<Hero
  eyebrow="Optional eyebrow text"
  title="Main headline"
  subtitle="Supporting description"
  imageUrl="https://images.unsplash.com/photo-..."
  overlay={true}
  align="center"
  height="lg"
  ctaPrimary={{ label: "Primary Action", to: "/path" }}
  ctaSecondary={{ label: "Secondary Action", to: "/path" }}
/>
```

### ServiceCards Component
```tsx
<ServiceCards
  heading="Services Heading"
  subheading="Optional subheading"
  items={[
    {
      icon: "🎯",
      title: "Service Title",
      desc: "Service description",
      price: "Optional price",
      cta: { label: "Learn More", to: "/path" }
    }
  ]}
/>
```

### FeatureShowcase Component
```tsx
<FeatureShowcase
  heading="Features Heading"
  subheading="Features description"
  items={[
    {
      icon: "⚡",
      title: "Feature Title",
      desc: "Feature description"
    }
  ]}
/>
```

### Testimonials Component
```tsx
<Testimonials
  heading="What People Say"
  items={[
    {
      who: "Person Name, Title",
      when: "Company/Role",
      text: "Testimonial content"
    }
  ]}
/>
```

### ContactForm Component
```tsx
<ContactForm
  heading="Contact Form Title"
  subheading="Form description"
  emailTo="contact@example.com"
  subjectPrefix="Form Inquiry"
  services={[
    { value: "general", label: "General Question" },
    { value: "support", label: "Technical Support" }
  ]}
/>
```

### ContactBlock Component
```tsx
<ContactBlock
  heading="Contact Information"
  subheading="Get in touch description"
  channels={[
    { type: "email", value: "hello@example.com" },
    { type: "address", value: "Location" },
    { type: "hours", value: "Mon–Fri 9am–5pm" }
  ]}
/>
```

### FAQ Component
```tsx
<FAQ
  heading="Frequently Asked Questions"
  items={[
    {
      q: "Question text?",
      a: "Answer text with detailed explanation."
    }
  ]}
/>
```

### CTASection Component
```tsx
<CTASection
  eyebrow="Optional eyebrow"
  heading="Call to action headline"
  subheading="Supporting description"
  button={{ label: "Action Button", to: "/path" }}
/>
```

---

## Layout Components

### Site Structure
Pages automatically include:
- Site header with navigation
- Main content area
- Site footer with links

### Page Template
```tsx
export default function PageName() {
  return (
    <>
      <Helmet>
        {/* SEO meta tags */}
      </Helmet>
      
      {/* Compose page using sections */}
      <Hero {...props} />
      <ServiceCards {...props} />
      <CTASection {...props} />
    </>
  );
}
```

---

## Styling Guidelines

### Theme Tokens
Use these design tokens consistently:
- `bg-background` - Main background
- `bg-muted` - Subtle background
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `border` - Border color
- `primary` - Brand color
- `secondary` - Secondary brand color

### Layout Spacing
- `py-24` - Section vertical padding
- `container mx-auto px-4` - Content container
- `space-y-6` - Vertical spacing between elements
- `gap-6` - Grid/flex gap spacing

### No Border Rule
Never use hard borders (`border`, `border-*`) on layout containers. Instead use:
- Background color differences
- Shadows (`shadow-lg`, `shadow-xl`)
- Rounded corners (`rounded-lg`, `rounded-xl`)
- Spacing (`p-6`, `py-12`)

---

## Best Practices

### Component Composition
- Keep components focused and single-purpose
- Use existing sections without modification
- Compose pages from multiple sections
- Follow established patterns

### Performance
- Use appropriate image sizes from Unsplash
- Implement lazy loading where beneficial
- Keep component complexity manageable
- Avoid unnecessary re-renders
