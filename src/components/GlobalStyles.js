import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
=============== 
Modern Design Variables
===============
*/
:root {
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  --spacing-xxl: 6rem;
  --spacing-xxxl: 8rem;

  /* Typography */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Space Grotesk', var(--font-primary);
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  
  /* Colors */
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #2563eb;
  --color-secondary: #8b5cf6;
  --color-accent: #f59e0b;
  
  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Layout */
  --nav-height: 4rem;
  --min-footer-height: 11vh;
  --card-height: 29rem;
  --container-padding: clamp(1rem, 5vw, 3rem);
  --border-radius-sm: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  
  /* Effects */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/*
=============== 
Modern Global Styles
===============
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-primary);
  line-height: 1.5;
  color: var(--color-gray-100);
  background-color: var(--color-gray-900);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: calc(100vh - 2 * var(--nav-height) - 2rem);
}

section {
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-xl) var(--container-padding);
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-50);
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }
h5 { font-size: var(--text-lg); }
h6 { font-size: var(--text-base); }

p {
  margin-bottom: var(--spacing-md);
  color: var(--color-gray-300);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-base);
  
  &:hover {
    color: var(--color-primary-light);
  }
}

.link-icons {
  line-height: 0;
  font-size: var(--text-2xl);
  margin: 0 var(--spacing-md);
  color: var(--color-gray-300);
  transition: var(--transition-base);

  &:hover {
    color: var(--color-primary);
    transform: translateY(-2px);
  }
}

/* Modern Card Styles */
.card {
  background: var(--color-gray-800);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
}

/* Modern Button Styles */
button {
  font-family: var(--font-primary);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border: none;
  background: var(--color-primary);
  color: white;
  cursor: pointer;
  transition: var(--transition-base);
  
  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
}

/* Responsive Design */
@media screen and (min-width: 768px) {
  .link-icons {
    font-size: var(--text-3xl);
  }
  
  .form-group {
    max-width: 750px;
  }
}

@media screen and (min-width: 1367px) {
  :root {
    --container-padding: 4rem;
  }
}
`;

export default GlobalStyles;
