# TODO List - Prioritized

## P1: Foundational SEO & Performance

- [x] **Create `robots.txt`:** Add a `public/robots.txt` file to guide web crawlers. Define rules for allowed/disallowed paths.
- [x] **Setup Sitemap Generation:** Configure Astro (e.g., using `@astrojs/sitemap`) to automatically generate `sitemap.xml` on build.
- [x] **Audit Meta Tags:** Review base layouts (`src/layouts/`) and crucial pages (`src/pages/`) for optimal `<title>` and `<meta name="description">` tags. Ensure they are unique and descriptive.
- [x] **Implement Open Graph & Twitter Cards:** Add necessary meta tags (og:title, og:description, og:image, twitter:card, etc.) to the base layout for better social media sharing previews.
- [x] **Check Image Optimization:** Set up Astro's built-in image optimization configuration in `astro.config.mjs`. Created demo page at `/image-demo` to showcase best practices.
- [x] **Run Dependency Audit:** Executed `pnpm audit` to check for known vulnerabilities in project dependencies - no issues found.

## P2: Accessibility & Best Practices

- [x] **Accessibility Audit (Basic):**
    - [x] Review semantic HTML usage in key components and layouts.
    - [x] Check color contrast ratios for text and background elements.
    - [x] Test basic keyboard navigation for interactive elements (links, buttons, forms).
- [x] **Setup Linting/Formatting:** Added ESLint and Prettier with Astro plugins. Added npm scripts for linting and formatting.
- [x] **Review Responsive Design:** Created testing page at `/responsive-test` to verify proper behavior across different screen sizes.

## P3: Advanced SEO & Content

- [x] **Implement Structured Data (Schema.org):** Add relevant schema markup (e.g., Organization, WebSite, Article) to pages/layouts to improve search engine understanding.
- [ ] **Content Review:** Analyze existing content for clarity, relevance, and keyword optimization (requires content expertise).
- [ ] **Cross-browser Testing:** Test the website on major browsers (Chrome, Firefox, Safari, Edge).

## P4: Testing & Maintenance

- [ ] **Consider Automated Testing:** Evaluate adding unit tests (e.g., with Vitest) for critical components or utility functions.
- [ ] **Setup Security Headers:** If deploying, configure appropriate security headers (CSP, HSTS, etc.) at the hosting level or via Astro middleware.
