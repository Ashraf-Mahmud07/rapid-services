/**
 * Tailwind config
 * - Maps semantic color names to CSS variables defined in src/app/globals.css
 * - Developers can change colors by editing the CSS variables in globals.css
 */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Semantic colors mapped to CSS custom properties. Edit variables in src/app/globals.css.
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        destructive: 'var(--color-destructive)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)'
      }
    }
  },
  plugins: []
};
 