# Architecture & Component Guidelines

## Project Architecture

### Current Repository Structure
```
src/
├── components/
│   ├── layout/          # SiteHeader, SiteFooter, SiteShell
│   ├── sections/        # Page section components (Hero, ServiceCards, etc.)
│   └── ui/             # shadcn/ui components (button, card, input, etc.)
├── pages/              # Route components (Home, About, Contact, etc.)
├── app/               # Configuration files (nav.config.ts, theme.config.ts)
├── hooks/             # Custom React hooks
├── lib/               # Utilities, API helpers, types
└── assets/            # Static assets (SVGs, images)
```

### Component Hierarchy Details
```
src/components/
├── layout/
│   ├── SiteHeader.tsx    # Main navigation header
│   ├── SiteFooter.tsx    # Site footer with links
│   └── SiteShell.tsx     # Main layout wrapper
├── sections/
│   ├── Hero.tsx          # Hero sections with CTAs
│   ├── ServiceCards.tsx  # Service/feature cards
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── ContactForm.tsx   # Contact forms
│   ├── ContactBlock.tsx  # Contact information display
│   ├── FAQ.tsx          # FAQ sections
│   ├── CTASection.tsx   # Call-to-action sections
│   ├── FeatureShowcase.tsx # Feature highlights
│   ├── BlogGrid.tsx     # Blog post grid
│   ├── MediaCarousel.tsx # Image/media carousels
│   ├── PricingTiers.tsx # Pricing tables
│   ├── TeamShowcase.tsx # Team member displays
│   ├── BookingSuccessSection.tsx # Booking confirmation
│   ├── BookingCancelledSection.tsx # Booking cancellation
│   ├── CalendarToPay.tsx # Calendar booking interface
│   ├── ProcessTimeline.tsx # Step-by-step process display
│   ├── MapEmbed.tsx     # Embedded maps for location
│   ├── DividerBand.tsx  # Section dividers with styling
│   └── Section.tsx      # Base section wrapper
└── ui/                  # All shadcn/ui components (button, card, input, etc.)
```

### Page Composition Pattern
Pages are composed using existing sections from `@/components/sections/*`:

```tsx
export default function ExamplePage() {
  return (
    <>
      <Helmet>{/* SEO tags */}</Helmet>
      
      <Hero {...heroProps} />
      <ServiceCards {...serviceProps} />
      <Testimonials {...testimonialProps} />
      <CTASection {...ctaProps} />
    </>
  );
}
```

---

## Navigation Configuration

### Route Structure
**File**: `src/app/nav.config.ts`

```typescript
export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
}
```

### Adding New Pages
1. Import component: `import NewPage from "@/pages/NewPage";`
2. Add to routes: `{ label: "New Page", path: "/new-page", component: NewPage, show: true }`
3. Update `public/sitemap.xml` with new route
4. Only modify brand/header/footer if explicitly requested

---

## Component Usage Guidelines

### Available Sections
Based on the actual `src/components/sections/` folder:

- **Hero**: Page headers with CTAs and background images
- **ServiceCards**: Feature/service listings with pricing
- **Testimonials**: Customer feedback and reviews
- **ContactForm**: Contact forms with service selection and validation
- **ContactBlock**: Contact information display
- **FAQ**: Frequently asked questions with accordion
- **CTASection**: Call-to-action sections with buttons
- **FeatureShowcase**: Feature highlights with icons
- **BlogGrid**: Blog post listings and previews
- **MediaCarousel**: Image and media carousels
- **PricingTiers**: Pricing tables and subscription plans
- **TeamShowcase**: Team member profiles
- **BookingSuccessSection**: Booking confirmation pages
- **BookingCancelledSection**: Booking cancellation pages
- **CalendarToPay**: Calendar booking interface
- **ProcessTimeline**: Step-by-step process display
- **MapEmbed**: Embedded maps for location
- **DividerBand**: Section dividers with styling
- **Section**: Base section wrapper component

### Other Components Available
Root-level components in `src/components/`:
- **app-sidebar.tsx**: Application sidebar navigation
- **chart-area-interactive.tsx**: Interactive chart components
- **data-table.tsx**: Data table with sorting/filtering
- **nav-documents.tsx**: Document navigation
- **nav-main.tsx**: Main navigation component
- **nav-secondary.tsx**: Secondary navigation
- **nav-user.tsx**: User navigation/profile
- **section-cards.tsx**: Card-based sections
- **site-header.tsx**: Alternative site header

### Component Props
- Always check prop types in `src/components/sections/*`
- Use existing sections exactly as typed
- Don't modify component interfaces
- Follow established patterns

### Layout Principles - CRITICAL STYLING RULES

**🚫 ABSOLUTELY FORBIDDEN: Hard Borders on Layout Containers**
- **NEVER** use `border`, `border-*`, `outline`, or any hard line borders on layout containers
- **NEVER** use `border-t`, `border-b`, `border-l`, `border-r` on sections, divs, or layout elements
- **NEVER** use `ring-*` classes for layout separation

**✅ APPROVED: Spacing and Visual Separation Techniques**
- Use spacing (`gap-*`, `p-*`, `m-*`, `space-y-*`, `space-x-*`) for separation
- Apply shadows (`shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`) for depth
- Use rounded corners (`rounded-*`) for modern appearance
- Implement background tokens:
  - `bg-background` - Main background color
  - `bg-muted` - Subtle background for sections
  - `bg-muted/50` - Semi-transparent muted background
  - `bg-card` - Card backgrounds
  - `bg-accent` - Accent sections
- Use gradients for visual interest:
  - `bg-gradient-to-*` with theme colors
  - Linear gradients with muted colors
- Use opacity and transparency for layering:
  - `bg-opacity-*` or `/50` syntax for transparency

**Visual Hierarchy Without Borders:**
- Different background colors/shades for section separation
- Consistent padding and margin patterns
- Shadow depth to create layers
- Typography scale for content hierarchy
- Color contrast using theme tokens

---

## Pages Structure

### Current Pages
All pages are in `src/pages/` and use react-helmet for SEO:

- **Home.tsx**: Main landing page with Hero, FeatureShowcase, ServiceCards, Testimonials, CTASection
- **About.tsx**: About page with company information and team details
- **Contact.tsx**: Contact page with Hero, ContactBlock, ContactForm, CTASection
- **Blog.tsx**: Blog listing page with BlogGrid
- **BookingInline.tsx**: Inline booking interface with CalendarToPay
- **BookingSuccess.tsx**: Booking confirmation page
- **BookingCancelled.tsx**: Booking cancellation page

### Page Composition Pattern
Pages are composed using existing sections from `@/components/sections/*`:

```tsx
import { Helmet } from "react-helmet";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
// ... other imports

export default function ExamplePage() {
  return (
    <>
      <Helmet>
        <title>Page Title - Demo Template</title>
        <meta name="description" content="Page description for SEO" />
        <link rel="canonical" href="https://demo-template.com/page-url" />
        {/* Additional SEO meta tags */}
      </Helmet>
      
      <Hero {...heroProps} />
      <ServiceCards {...serviceProps} />
      <Testimonials {...testimonialProps} />
      <CTASection {...ctaProps} />
    </>
  );
}
```

---

## State Management
- Use React's built-in state (`useState`, `useEffect`) for component-level data
- Prop drilling for simple data passing between components
- No external state management libraries (Redux, Zustand) currently implemented
- Keep state as local as possible to the components that need it
- Use custom hooks in `src/hooks/` for reusable stateful logic

## Performance Considerations
- Use responsive images with proper `srcSet` and sizing
- Implement lazy loading where beneficial (long pages, image carousels)
- Keep bundle size optimized through tree-shaking
- Avoid heavy inline styles - prefer Tailwind classes
- Use efficient React patterns (memo, useMemo, useCallback when needed)
- Optimize images through Unsplash URL parameters (`w=`, `h=`, `q=`, `auto=format`)

## File Organization Best Practices
- Keep components small and focused on single responsibilities
- Use TypeScript for all components and strict type checking
- Import paths use `@/` alias for clean imports from src/
- Group related functionality in appropriate folders
- Use consistent naming conventions (PascalCase for components, camelCase for utilities)
