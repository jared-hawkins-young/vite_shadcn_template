# Copilot Instructions

## Purpose
Copilot may **read the entire repository** to learn component APIs, but may **only write** to:

- src/app/nav.config.ts
- src/pages/**/*.tsx

Do **not** modify any other files. Do **not** run scripts or configure CI/CD.

---

## What you can edit
1. **Navigation config** – src/app/nav.config.ts  
   - Import page components from src/pages/**.  
   - Add or modify items in routes.  
   - Update brand, header, or footer **only if explicitly asked**.  

2. **Pages** – src/pages/**/*.tsx  
   - Compose pages using existing sections from @/components/sections/*.  
   - Use theme tokens (e.g., bg-background, text-foreground).  
   - No raw hex colors unless already tokenized in theme.config.  

---

## Hard rules
- Router: must use react-router-dom. No Next.js APIs/imports.  
- Components: use existing sections exactly as typed. Always check props in source first.  
- Tone: marketing copy must be formal and energetic.  
- Images: Unsplash URLs are allowed.  
- Transcript: treat the transcript/brief as the only source of truth.  
- Security: no secrets, keys, or private URLs.  
- No scripts: do not run build/dev or touch tooling/CI.  

---

## Nav config contract
- File: src/app/nav.config.ts  
- Exports:  
    export type RouteItem = {  
      label: string;  
      path: string;  
      component: React.ComponentType;  
      show?: boolean;  
      cta?: { label: string; to: string } | null;  
    }  

    export const routes: RouteItem[] = [...]  

- When adding a new page:  
  1. import NewPage from "@/pages/NewPage";  
  2. Add to routes: { label: "New Page", path: "/new-page", component: NewPage, show: true }  
  3. Only adjust brand/header/footer if the task explicitly asks.  

---

## Page composition guidelines
- Imports: import { Hero } from "@/components/sections/Hero";  
- Structure:  
    export default function NewPage() {  
      return (  
        <>  
          <Hero ... />  
          {/* Add sections as needed */}  
        </>  
      );  
    }  

---

## Component cheat-sheet
(Always confirm props by reading component source in src/components/sections/*.)

- Hero: eyebrow?, title*, subtitle?, imageUrl?, height?, align?, overlay?, ctaPrimary?, ctaSecondary?. Use overlay + white text when image background is used.  
- FeatureShowcase: Grid of cards. Items: { icon?, title*, desc* }.  
- ServiceCards: Items: { icon?, title*, desc*, price?, cta? }.  
- PricingTiers: Tiers: { name, price, period, features[], cta }.  
- Testimonials: Items: { who, when, text }.  
- MediaCarousel: Items: { src, caption? }, with aspect.  
- FAQ: Items: { id, icon, question, answer }. Answers use text-muted-foreground.  
- CTASection: eyebrow?, heading*, subheading?, button.  
- ContactBlock: Channels: { type: "phone"|"email"|"address"|"hours", value: string }.  
- ContactForm: emailTo, subjectPrefix, services[]. Placeholder option must have value="". Menu has solid bg and scroll.  
- DividerBand: Full-bleed with background image. Pass children (not content prop).  
- ProcessTimeline: Steps: { title, description, icon?, badge? }.  
- TeamShowcase: Members: { name, role, avatarUrl? }.  
- MapEmbed: Props: { query?, lat?, lng?, zoom?, heading?, subheading?, height?, variant? }.  
- BlogGrid: Items: { title, excerpt, href, imageUrl?, date? }.  

---

## Example task → expected edits
Task: “Add a Services page with a Hero, ServiceCards, and CTASection, and wire it into nav.”

1. Create src/pages/Services.tsx:  

    import { Hero } from "@/components/sections/Hero";  
    import { ServiceCards } from "@/components/sections/ServiceCards";  
    import { CTASection } from "@/components/sections/CTASection";  

    export default function Services() {  
      return (  
        <>  
          <Hero  
            eyebrow="What we do"  
            title="Services designed to grow your business"  
            subtitle="Clear packages, fast delivery, and room to scale."  
            imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop"  
            overlay  
            align="center"  
            height="md"  
            ctaPrimary={{ label: "Get a quote", to: "/contact" }}  
          />  

          <ServiceCards  
            heading="Pick your starting point"  
            subheading="Add more as you grow"  
            items={[  
              { icon: "🌐", title: "Website Design", desc: "Fast, accessible, SEO-friendly.", price: "From $1,500", cta: { label: "Learn more", to: "/contact" } },  
              { icon: "📈", title: "Local SEO", desc: "Be found where customers search.", price: "From $500/mo", cta: { label: "Learn more", to: "/contact" } },  
              { icon: "⚙️", title: "Automation", desc: "Connect tools & save time.", price: "Custom", cta: { label: "Discuss", to: "/contact" } }  
            ]}  
          />  

          <CTASection  
            eyebrow="Next step"  
            heading="Ready to move forward?"  
            subheading="Tell us what you need—we’ll map the fastest path to live."  
            button={{ label: "Contact us", to: "/contact" }}  
          />  
        </>  
      );  
    }  

2. Update src/app/nav.config.ts:  

    import Services from "@/pages/Services";  

    export const routes = [  
      // ...existing  
      { label: "Services", path: "/services", component: Services, show: true },  
    ];  

---

## Validation checklist
- Props match component types.  
- Imports use @/components/..., @/pages/..., and react-router-dom.  
- Theme tokens used, no arbitrary hex.  
- ContactForm placeholder has value="".  
- MapEmbed only uses supported props.  
- DividerBand uses children (not a content prop).  
- No server-only code or Next.js imports.  
- Public-safe: no secrets or private URLs.  