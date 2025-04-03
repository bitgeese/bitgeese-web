module.exports = {
  ci: {
    collect: {
      // Audit the static build output directory
      staticDistDir: './dist',
      numberOfRuns: 3, // Run multiple times for more stable results
    },
    assert: {
      assertions: {
        // Example assertions (adjust thresholds as needed)
        // Use 'warn' to not fail the build initially, change to 'error' for stricter enforcement
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }], // Keep accessibility strict
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        // Specific metric assertions (values are examples, adjust based on testing)
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }], // milliseconds
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }], // milliseconds
        interactive: ['warn', { maxNumericValue: 3500 }], // milliseconds (approximates TTI)
      },
    },
    upload: {
      // Upload reports to temporary public storage, links expire after 7 days
      target: 'temporary-public-storage',
    },
  },
};
