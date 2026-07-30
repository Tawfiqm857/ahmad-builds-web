Plan to update Ahmad Tawfiq Muhammad's portfolio with new role, new projects, and UI/UX polish.

## Scope

1. Update professional experience to reflect current role at STYAM Integrated Services Limited and past role at Joe Express Tech Hub.
2. Add two new projects: `styamconnect.app` and `akcoekano.com`.
3. Polish UI/UX across the site while keeping the existing dark-blue/black/white Poppins design system.

## Content changes

### About section
- Update current-role sentence to: "Shareholder & Software Engineer at STYAM Integrated Services Limited, Gwagwalada, Abuja."
- Keep the human-centered / social-science angle.

### Experience section
- Make STYAM Integrated Services Limited the primary experience card:
  - Title: "Shareholder & Software Engineer" (user-described) — I will also note "Lead Software Development" responsibility where natural.
  - Dates: 2021 – Present.
  - Location: Gwagwalada, Abuja.
  - Responsibilities: software/web development, IT systems, team leadership, client projects, and product ownership.
- Convert Joe Express Tech Hub to a secondary/past experience card:
  - Title: "Software Development Facilitator".
  - Dates: 2023 – February 2026.
- Keep the Education block unchanged.
- Optionally adjust achievement stats to be more general (e.g., projects delivered, systems built) rather than student-only metrics.

### Projects section
- Add two new projects alongside the existing ones:

**STYAM Connect**
- URL: `https://www.styamconnect.app`
- Description: Official multi-service platform for STYAM Integrated Services Limited. Connects clients with web/software development, IT services & support, event planning, and retail/custom orders across Nigeria.
- Key features: service catalog, WhatsApp integration, contact/quote flow, responsive multi-section landing page.
- Tech: React, TypeScript, Tailwind CSS, Vercel.

**Akco EKano**
- URL: `https://www.akcoekano.com`
- Description: Academic records system for Aminu Kano College of Education. Covers course registration, CA/exam score entry, multi-stage result approval (HOD → Dean → Registry → Senate), CGPA analytics, and transcript management.
- Key features: role-based portals (Students, Lecturers, HOD/Dean, Registry), CSV bulk import, approval audit trail, analytics dashboard.
- Tech: React, TypeScript, Tailwind CSS, Node.js, Supabase.

- Visuals: use the site's own hero imagery (where available) or capture/generate a clean preview image for each project card.

## UI/UX polish

All changes stay within the existing dark-blue/black/white Poppins theme.

### Visual refresh
- Refine cards with subtler borders, consistent border-radius, and softer shadows.
- Improve section separators and spacing to reduce visual clutter.
- Standardize typography scale and line-height across all sections.
- Use a more restrained gradient-text usage so gradients stay premium rather than repetitive.

### Layout polish
- Hero: tighten alignment, improve balance between text and image, and ensure CTAs are clearly grouped.
- About: improve the three-column bio/image/highlights balance, especially on tablet.
- Projects: use a more polished grid (still 2-column on desktop, improved single-column on mobile) and add clearer project tags/links.
- Experience: separate current and past roles into distinct cards, improve the responsibility grid.
- Contact: keep the two-column layout but improve form and contact-card spacing.

### Animations
- Keep scroll-triggered fade-up/scale animations but add staggered delays so children reveal as a group.
- Add smooth hover transitions on cards and buttons (already partially present; unify timing/easing).
- Add a subtle floating/pulse effect only to the Hero decorative elements.
- Ensure all animations respect `prefers-reduced-motion`.

### Mobile UX
- Ensure the mobile nav is fully accessible: larger tap targets, clear open/close state, body scroll lock while open.
- Improve hero text scaling and image stacking on small screens.
- Make project cards and experience cards stack cleanly with readable spacing.
- Ensure all buttons and links meet minimum 44×44 CSS px touch targets.
- Verify section padding and horizontal padding consistency on all viewports.

## Validation
- Build the project to confirm no TypeScript errors.
- Check the live preview on desktop and mobile viewport sizes.
- Verify that all four project links, social links, and email/WhatsApp links open correctly.

## Summary
The portfolio will read as current, professional, and cohesive: Ahmad as a Shareholder & Software Engineer at STYAM, with Joe Express as prior experience, and four featured projects including the new STYAM Connect and Akco EKano platforms, all within the existing dark-blue/black/white design system.