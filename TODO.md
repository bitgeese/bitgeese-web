# TODO List - Prioritized

## P1: Foundational SEO & Performance

- [x] **Create `robots.txt`:** Add a `public/robots.txt` file to guide web crawlers. Define rules for allowed/disallowed paths.
- [x] **Setup Sitemap Generation:** Configure Astro (e.g., using `@astrojs/sitemap`) to automatically generate `sitemap.xml` on build.
- [x] **Audit Meta Tags:** Review base layouts (`src/layouts/`) and crucial pages (`src/pages/`) for optimal `<title>` and `<meta name="description">` tags. Ensure they are unique and descriptive.
- [x] **Implement Open Graph & Twitter Cards:** Add necessary meta tags (og:title, og:description, og:image, twitter:card, etc.) to the base layout for better social media sharing previews.
- [x] **Check Image Optimization:** Set up Astro's built-in image optimization configuration in `astro.config.mjs`. Created demo page at `/image-demo` to showcase best practices.
- [x] **Run Dependency Audit:** Executed `pnpm audit` to check for known vulnerabilities in project dependencies - no issues found.
- [x] **Configure Canonical URLs:** Verified that `astro-seo` integration handles `rel="canonical"` links correctly using `Astro.url.href` and the configured `site` property.
- [ ] **Performance Audit (Setup):** Configured Lighthouse CI with GitHub Actions (`.github/workflows/lighthouse.yml`) to run audits on PRs. Initial thresholds set in `lighthouserc.js`. Need to monitor results and adjust budgets.
- [ ] **Setup Google Search Console:** Verify site ownership and monitor indexing status, crawl errors, and performance reports.

## P2: Accessibility, Schema & Best Practices

- [x] **Accessibility Audit (Basic):**
  - [x] Review semantic HTML usage in key components and layouts.
  - [x] Check color contrast ratios for text and background elements.
  - [x] Test basic keyboard navigation for interactive elements (links, buttons, forms).
- [x] **Setup Linting/Formatting:** Added ESLint and Prettier with Astro plugins. Added npm scripts for linting and formatting.
- [x] **Review Responsive Design:** Created testing page at `/responsive-test` to verify proper behavior across different screen sizes.
- [ ] **Implement Structured Data (Schema.org):** Add relevant schema markup (e.g., Organization, WebSite, potentially Article/BreadcrumbList) to pages/layouts to improve search engine understanding. (Elevated Priority)
- [ ] **Implement High-Priority Accessibility Fixes:** Address issues identified in `a11y.md` (skip link, focus styles, mailto link, contrast).

## P3: Advanced SEO & Content

- [ ] **Content Review:** Analyze existing content for clarity, relevance, and keyword optimization (requires content expertise).
- [ ] **Cross-browser Testing:** Test the website on major browsers (Chrome, Firefox, Safari, Edge).
- [ ] **Review/Implement Breadcrumbs:** Consider adding breadcrumb navigation for improved user orientation and SEO site structure.
- [ ] **Review Footer Navigation/Content:** Ensure footer links are relevant, useful, and contain appropriate information (e.g., copyright, privacy policy).

## P4: Testing & Maintenance

- [ ] **Consider Automated Testing:** Evaluate adding unit tests (e.g., with Vitest) for critical components or utility functions.
- [ ] **Setup Security Headers:** If deploying, configure appropriate security headers (CSP, HSTS, etc.) at the hosting level or via Astro middleware.
