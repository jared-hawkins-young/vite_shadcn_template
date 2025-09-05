# Copilot Instructions (Expanded)

## Purpose
Copilot may **read the entire repository** to learn component APIs, but may **only write** to:

- `src/app/nav.config.ts`
- `src/pages/**/*.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

Do **not** modify any other files. Do **not** run scripts or configure CI/CD.

---

## What you can edit
1. **Navigation config** – `src/app/nav.config.ts`  
   - Import page components from `src/pages/**`.  
   - Add or modify items in `routes`.  
   - Update brand, header, or footer **only if explicitly asked**.  

2. **Pages** – `src/pages/**/*.tsx`  
   - Compose pages using existing sections from `@/components/sections/*`.  
   - Use theme tokens (e.g., `bg-background`, `text-foreground`).  
   - **Styling rule:** never use hard line borders on containers (no `border`, `border-*`). Use spacing, shadows, rounded corners, and background tokens for separation.  
   - **Tone:** marketing copy must be formal and energetic.  
   - **Images:** Unsplash URLs are allowed.  
   - **SEO-first:** Each page must include proper `<title>`, `<meta name="description">`, one `<h1>`, logical H2/H3s, internal links, descriptive `alt` text, and (where appropriate) JSON-LD schema.

3. **Public assets (SEO)**  
   - **`public/sitemap.xml`**: keep updated with **every** public route.  
   - **`public/robots.txt`**: must allow crawling and point to the sitemap.

---

## Hard rules
- **Router:** must use `react-router-dom`. No Next.js APIs/imports.  
- **Components:** use existing sections exactly as typed. Always check props in `src/components/sections/*`.  
- **No hard line borders:** avoid `border` classes on layout containers. Use padding/gap/rounded/shadow/background tokens instead.  
- **Theme tokens only:** no raw hex unless already tokenized in the theme.  
- **Transcript as truth:** treat transcript/brief as the only content source.  
- **Security:** no secrets, keys, or private URLs.  
- **No scripts:** do not run build/dev or touch tooling/CI.

---

## SEO requirements (every page)
- **Head tags:** Provide `<title>` (≤60 chars) and `<meta name="description">` (≤155 chars). Prefer `react-helmet-async` per page.  
- **Headings:** Exactly one **H1** per page; H2/H3 for sections. Include city/region for local SEO when relevant.  
- **Canonical:** Add `<link rel="canonical">` for primary pages.  
- **Open Graph / Twitter:** Provide `og:title`, `og:description`, `og:url`, and `og:image` (1200×630). Include Twitter `summary_large_image`.  
- **Schema JSON-LD:**  
  - Home: `Organization` or `LocalBusiness` with `name`, `url`, `telephone`, `logo`, `image`, `areaServed`.  
  - Service/Trips/FAQs: add `FAQPage` if helpful.  
  - Blog posts: `Article` when applicable.  
- **Images:** Descriptive `alt` (include location/species/offer when relevant).  
- **Internal links:** Link to related pages with meaningful anchor text.  
- **Performance:** Use responsive images, lazy loading when available, concise copy, avoid heavy inline styles.  
- **Sitemap & robots:** Update `public/sitemap.xml` with route changes; ensure `public/robots.txt` references the sitemap.

---

## Nav config contract
**File:** `src/app/nav.config.ts`

```ts
export type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
  show?: boolean;
  cta?: { label: string; to: string } | null;
}

export const routes: RouteItem[] = [];
When adding a new page:
	1.	import NewPage from "@/pages/NewPage";
	2.	Add to routes: { label: "New Page", path: "/new-page", component: NewPage, show: true }
	3.	Only adjust brand/header/footer if explicitly asked.
	4.	Update public/sitemap.xml to include /new-page.

⸻

Page composition guidelines

Imports example:

import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

Structure template (no hard borders):

export default function NewPage() {
  return (
    <>
      <Hero
        eyebrow="Eyebrow"
        title="Primary H1-worthy headline"
        subtitle="Supporting promise with location/offer clarity"
        imageUrl="https://images.unsplash.com/photo-..."
        overlay
        align="center"
        height="md"
        ctaPrimary={{ label: "Book now", to: "/book-now" }}
      />

      {/* Add sections as needed; use spacing/shadows/background tokens, not borders */}
      <ServiceCards /* ...props */ />
      <Testimonials /* ...props */ />
      <FAQ /* ...props */ />
      <CTASection /* ...props */ />
    </>
  );
}

Required public files (for catchandcruisenc.com)

public/sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Include EVERY public route; update when routes change -->
  <url><loc>https://catchandcruisenc.com/</loc></url>
  <url><loc>https://catchandcruisenc.com/about</loc></url>
  <url><loc>https://catchandcruisenc.com/trip-options</loc></url>
  <url><loc>https://catchandcruisenc.com/media</loc></url>
  <url><loc>https://catchandcruisenc.com/contact</loc></url>
  <url><loc>https://catchandcruisenc.com/book-now</loc></url>
  <url><loc>https://catchandcruisenc.com/booking-success</loc></url>
  <url><loc>https://catchandcruisenc.com/booking-cancelled</loc></url>
  <url><loc>https://catchandcruisenc.com/blog</loc></url>
</urlset>

public/robots.txt

User-agent: *
Allow: /

Sitemap: https://catchandcruisenc.com/sitemap.xml

(If a client requests explicit LLM allowances, add GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot, etc., each with Allow: /.)

---

## Additional SEO Requirements

- **Meta descriptions:**  
  Every page **must include a `<meta name="description">` tag** using `react-helmet-async`.  
  - Keep it unique, ≤155 characters.  
  - Include the target keyword (service + city) and a clear value proposition.  
  - Example:  
    ```tsx
    <Helmet>
      <title>Wilmington Fishing Charters | Catch & Cruise NC</title>
      <meta
        name="description"
        content="Top-rated Wilmington & Wrightsville Beach fishing charters, leisure cruises, and sandbar adventures. Book online or call (910) 233-3668."
      />
    </Helmet>
    ```

- **Descriptive link text:**  
  All internal and external links must use **meaningful anchor text** that describes the destination.  
  - Avoid generic text like “click here” or “learn more.”  
  - Use phrases such as “Wilmington fishing charter trip options,” “Contact a Wilmington charter captain,” or “Book a Wrightsville Beach fishing trip.”  
  - Example with React Router:  
    ```tsx
    <Link to="/trip-options">Explore Wilmington fishing charter trip options</Link>
    ```

⸻

Example task → expected edits

Task: “Add a Services page with a Hero, ServiceCards, CTASection; wire it into nav; update sitemap & robots.”
	1.	Create src/pages/Services.tsx with sections (no borders, SEO meta via Helmet).
	2.	Update src/app/nav.config.ts to include /services.
	3.	Update public/sitemap.xml to add /services.
	4.	Confirm public/robots.txt includes the correct Sitemap: URL.

⸻

Validation checklist
	•	Props match component types in @/components/sections/*.
	•	Imports use @/components/..., @/pages/..., and react-router-dom.
	•	No hard borders on containers; use spacing/shadows/backgrounds.
	•	Theme tokens used, no arbitrary hex.
	•	SEO: title, meta description, H1, OG/Twitter, canonical, internal links, descriptive alt.
	•	JSON-LD on Home (LocalBusiness/Organization), FAQPage on applicable pages.
	•	Sitemap updated whenever routes change.
	•	robots.txt present and points to sitemap.
	•	Public-safe: no secrets or private URLs.


