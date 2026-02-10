# Specification

## Summary
**Goal:** Build a premium, mobile-first QR menu for an Indian cafe with a distinctive warm-minimal aesthetic and a “digital book” multi-page sliding experience.

**Planned changes:**
- Create a cohesive warm-neutral visual theme using deep charcoal text and #D97706 (saffron orange) as the only accent color.
- Import and apply exactly two Google Fonts (serif for headings, sans-serif for body) with a clear mobile-friendly type hierarchy for sections, item names, prices, and descriptions.
- Implement seven menu sections as separate, horizontally sliding pages: Hot Beverages, Cold Beverages, Breakfast & Snacks, Street Food, Main Course, Breads, Desserts.
- Populate each section with 3–4 realistic Indian menu items (mostly vegetarian) including one-line descriptions and prices in ₹30–₹400.
- Build the menu item card layout with circular images/placeholders (95–110px), 3px border, subtle shadow, veg/non-veg indicator badge on the image (veg #16A34A, non-veg #DC2626), and generous spacing/dividers.
- Add optional item badges (“Bestseller”, “Chef’s Special”, “Spicy” with 🌶️) on select items without cluttering mobile readability.
- Add compact, always-available navigation (next/prev and/or pager) that indicates the current section while staying visually minimal.
- Use optimized Unsplash image URLs (?w=400&h=400&fit=crop) per item with a consistent circular fallback placeholder on missing/failed loads.
- Add a minimal header (cafe name + tagline) and footer note (“Freshly made with love” / “Scan to order”) consistent with the theme.
- Ensure accessibility and mobile quality: semantic headings/sections, strong contrast, no horizontal scrolling at 375–428px, subtle animations with reduced-motion support, and smooth stable scrolling within pages.

**User-visible outcome:** Users can open a premium-looking mobile QR menu, swipe/tap through section “pages” with smooth horizontal slide transitions, and browse clearly styled item cards with photos, veg/non-veg markers, badges, descriptions, and rupee pricing.
