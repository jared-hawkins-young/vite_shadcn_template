# Coding Standards & Guidelines

## File Modification Rules

### ✅ **ALLOWED FILES**
Copilot may **only write** to these files:
- `src/app/nav.config.ts`
- `src/pages/**/*.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

### ❌ **PROHIBITED ACTIONS**
- Do **not** modify any other files
- Do **not** run scripts or configure CI/CD
- Do **not** touch tooling configuration

---

## Code Style Guidelines

### Import Standards
```tsx
// Use absolute imports with @ alias
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";

// React Router for navigation
import { Link } from "react-router-dom";
```

### Component Structure
```tsx
export default function PageName() {
  return (
    <>
      <Helmet>
        {/* SEO meta tags */}
      </Helmet>
      
      {/* Page sections */}
    </>
  );
}
```

### TypeScript Requirements
- Always use TypeScript for new files
- Maintain strict type checking
- Use existing type definitions
- No `any` types without justification

### Styling Rules - CRITICAL REQUIREMENTS

**🚫 ABSOLUTELY FORBIDDEN - Hard Borders on Layout Elements:**
- **NEVER** use `border`, `border-*` classes on layout containers (sections, divs, main elements)
- **NEVER** use `border-t`, `border-b`, `border-l`, `border-r` on layout elements
- **NEVER** use `outline`, `outline-*` for layout separation
- **NEVER** use `ring-*` classes for container separation
- **NEVER** add borders to sections, page containers, or major layout elements

**✅ APPROVED - Visual Separation Techniques:**
- Use spacing classes: `gap-*`, `p-*`, `m-*`, `space-y-*`, `space-x-*`
- Apply shadows for depth: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- Use rounded corners: `rounded-*` classes for modern appearance
- Implement background tokens for section separation:
  - `bg-background` - Main background
  - `bg-muted` - Subtle section backgrounds
  - `bg-muted/50` - Semi-transparent backgrounds
  - `bg-card` - Card containers
  - `bg-accent` - Accent sections
- Use gradients: `bg-gradient-to-*` with theme colors
- Apply transparency: `bg-opacity-*` or `/opacity` syntax

**Theme Token Requirements:**
- Use theme tokens only: `bg-background`, `text-foreground`, `text-muted-foreground`
- No raw hex colors unless already tokenized in theme
- Follow established color patterns
- Maintain consistent visual hierarchy through color, not borders

### Router Requirements
- **Must use `react-router-dom`**
- No Next.js APIs or imports
- Use `<Link>` components for navigation
- Maintain consistent routing patterns

---

## Content Guidelines

### Marketing Copy
- **Tone**: Formal and energetic
- Focus on professional benefits
- Highlight technical advantages
- Use action-oriented language

### Images
- Unsplash URLs are allowed and encouraged
- Use descriptive `alt` text
- Include relevant keywords in descriptions
- Ensure images are responsive

### Security
- No secrets, API keys, or private URLs
- Keep all content public-safe
- Use placeholder contact information
- Avoid sensitive data in examples
