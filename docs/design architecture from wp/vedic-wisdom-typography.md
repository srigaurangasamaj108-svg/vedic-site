# Vedic Wisdom Platform - Typography System

**Version:** 1.0  
**Last Updated:** December 31, 2025  
**Compliance:** WCAG AAA readability standards

---

## 1. FONT FAMILIES

### Primary Font Stack (Body & UI)

**Font Family:** Inter  
**Fallback Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

**Rationale:** Clean, highly legible, excellent for extended reading, strong support for international characters including Devanagari script if needed.

**CDN Implementation:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Display Font Stack (Headings)

**Font Family:** Playfair Display  
**Fallback Stack:** `Georgia, "Times New Roman", serif`

**Rationale:** Elegant serif that conveys tradition and reverence, appropriate for sacred content while remaining approachable.

**CDN Implementation:**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

### Monospace Font Stack (Code)

**Font Family:** JetBrains Mono  
**Fallback Stack:** `"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace`

**Usage:** Technical content, code snippets, system messages

---

## 2. TYPE SCALE

### Base Configuration

**Base Font Size:** 16px (1rem)  
**Scale Ratio:** 1.25 (Major Third)  
**Line Height Base:** 1.5 (24px)

### Scale System

| Token | Size (px) | Size (rem) | Use Case |
|-------|-----------|------------|----------|
| `text-xs` | 12px | 0.75rem | Tiny labels, badges |
| `text-sm` | 14px | 0.875rem | Secondary text, captions |
| `text-base` | 16px | 1rem | Body text (default) |
| `text-lg` | 18px | 1.125rem | Emphasized body text |
| `text-xl` | 20px | 1.25rem | Small headings, leads |
| `text-2xl` | 24px | 1.5rem | H6, card titles |
| `text-3xl` | 30px | 1.875rem | H5 |
| `text-4xl` | 36px | 2.25rem | H4 |
| `text-5xl` | 48px | 3rem | H3 |
| `text-6xl` | 60px | 3.75rem | H2 |
| `text-7xl` | 72px | 4.5rem | H1, hero text |

---

## 3. HEADING SPECIFICATIONS

### H1 - Page Title

**Desktop:**
- Font: Playfair Display
- Size: 72px (4.5rem) / `text-7xl`
- Weight: 700 (Bold)
- Line Height: 1.1 (79.2px)
- Letter Spacing: -0.02em
- Color: `#1F2937` (text-primary)
- Margin Bottom: 32px

**Tablet (≤1024px):**
- Size: 60px (3.75rem)
- Line Height: 1.1 (66px)

**Mobile (≤640px):**
- Size: 48px (3rem)
- Line Height: 1.2 (57.6px)

**CSS Implementation:**
```css
h1, .text-h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4.5rem; /* 72px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  h1, .text-h1 { font-size: 3.75rem; } /* 60px */
}

@media (max-width: 640px) {
  h1, .text-h1 { 
    font-size: 3rem; /* 48px */
    line-height: 1.2;
  }
}
```

---

### H2 - Section Title

**Desktop:**
- Font: Playfair Display
- Size: 60px (3.75rem) / `text-6xl`
- Weight: 700 (Bold)
- Line Height: 1.2 (72px)
- Letter Spacing: -0.01em
- Color: `#1F2937` (text-primary)
- Margin Bottom: 24px

**Tablet (≤1024px):**
- Size: 48px (3rem)

**Mobile (≤640px):**
- Size: 36px (2.25rem)
- Line Height: 1.3

**CSS Implementation:**
```css
h2, .text-h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: 1.5rem;
}

@media (max-width: 1024px) {
  h2, .text-h2 { font-size: 3rem; } /* 48px */
}

@media (max-width: 640px) {
  h2, .text-h2 { 
    font-size: 2.25rem; /* 36px */
    line-height: 1.3;
  }
}
```

---

### H3 - Subsection Title

**Desktop:**
- Font: Playfair Display
- Size: 48px (3rem) / `text-5xl`
- Weight: 600 (Semi-Bold)
- Line Height: 1.3 (62.4px)
- Letter Spacing: -0.01em
- Color: `#1F2937` (text-primary)
- Margin Bottom: 20px

**Tablet/Mobile (≤1024px):**
- Size: 36px (2.25rem)
- Weight: 700

**Mobile (≤640px):**
- Size: 30px (1.875rem)

**CSS Implementation:**
```css
h3, .text-h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem; /* 48px */
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
  margin-bottom: 1.25rem;
}

@media (max-width: 1024px) {
  h3, .text-h3 { 
    font-size: 2.25rem; /* 36px */
    font-weight: 700;
  }
}

@media (max-width: 640px) {
  h3, .text-h3 { font-size: 1.875rem; } /* 30px */
}
```

---

### H4 - Component Title

**All Breakpoints:**
- Font: Inter
- Size: 36px (2.25rem) / `text-4xl`
- Weight: 600 (Semi-Bold)
- Line Height: 1.4 (50.4px)
- Letter Spacing: -0.005em
- Color: `#1F2937` (text-primary)
- Margin Bottom: 16px

**Mobile (≤640px):**
- Size: 24px (1.5rem)
- Line Height: 1.5

**CSS Implementation:**
```css
h4, .text-h4 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 2.25rem; /* 36px */
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.005em;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  h4, .text-h4 { 
    font-size: 1.5rem; /* 24px */
    line-height: 1.5;
  }
}
```

---

### H5 - Card/Module Title

**All Breakpoints:**
- Font: Inter
- Size: 30px (1.875rem) / `text-3xl`
- Weight: 600 (Semi-Bold)
- Line Height: 1.4 (42px)
- Letter Spacing: 0
- Color: `#1F2937` (text-primary)
- Margin Bottom: 12px

**Mobile (≤640px):**
- Size: 20px (1.25rem)
- Line Height: 1.5

**CSS Implementation:**
```css
h5, .text-h5 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1.875rem; /* 30px */
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

@media (max-width: 640px) {
  h5, .text-h5 { 
    font-size: 1.25rem; /* 20px */
    line-height: 1.5;
  }
}
```

---

### H6 - Small Heading

**All Breakpoints:**
- Font: Inter
- Size: 24px (1.5rem) / `text-2xl`
- Weight: 600 (Semi-Bold)
- Line Height: 1.5 (36px)
- Letter Spacing: 0
- Color: `#1F2937` (text-primary)
- Margin Bottom: 12px

**Mobile (≤640px):**
- Size: 18px (1.125rem)

**CSS Implementation:**
```css
h6, .text-h6 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
}

@media (max-width: 640px) {
  h6, .text-h6 { font-size: 1.125rem; } /* 18px */
}
```

---

## 4. BODY TEXT SPECIFICATIONS

### Body Large (Lead Text)

- Font: Inter
- Size: 18px (1.125rem) / `text-lg`
- Weight: 400 (Regular)
- Line Height: 1.7 (30.6px)
- Color: `#1F2937` (text-primary)
- Max Width: 65ch (optimal reading width)

**Usage:** Introduction paragraphs, important body text

```css
.text-lead {
  font-size: 1.125rem;
  line-height: 1.7;
  max-width: 65ch;
}
```

---

### Body Default

- Font: Inter
- Size: 16px (1rem) / `text-base`
- Weight: 400 (Regular)
- Line Height: 1.6 (25.6px)
- Color: `#1F2937` (text-primary)
- Max Width: 70ch

**Usage:** Main body text, paragraphs, descriptions

```css
body, p, .text-body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-primary);
  max-width: 70ch;
}
```

---

### Body Small

- Font: Inter
- Size: 14px (0.875rem) / `text-sm`
- Weight: 400 (Regular)
- Line Height: 1.6 (22.4px)
- Color: `#4B5563` (text-secondary)

**Usage:** Secondary information, captions, metadata

```css
.text-small {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
```

---

### Body Extra Small

- Font: Inter
- Size: 12px (0.75rem) / `text-xs`
- Weight: 400 (Regular)
- Line Height: 1.5 (18px)
- Color: `#6B7280` (text-muted)

**Usage:** Tiny labels, badges, legal text

```css
.text-xs {
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}
```

---

## 5. FONT WEIGHTS

| Token | Value | Usage |
|-------|-------|-------|
| `font-normal` | 400 | Body text, default |
| `font-medium` | 500 | Emphasized text, labels |
| `font-semibold` | 600 | Headings (H4-H6), buttons, strong emphasis |
| `font-bold` | 700 | Major headings (H1-H3), very strong emphasis |

**CSS Variables:**
```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

---

## 6. LINE HEIGHTS

| Token | Value | Usage |
|-------|-------|-------|
| `leading-none` | 1 | Tight headings, display text |
| `leading-tight` | 1.1-1.3 | Large headings (H1-H3) |
| `leading-snug` | 1.4 | Medium headings (H4-H5) |
| `leading-normal` | 1.5 | H6, compact text |
| `leading-relaxed` | 1.6 | Body text (default) |
| `leading-loose` | 1.7 | Lead paragraphs, enhanced readability |

---

## 7. LETTER SPACING

| Token | Value | Usage |
|-------|-------|-------|
| `tracking-tighter` | -0.02em | Very large headings (H1) |
| `tracking-tight` | -0.01em | Large headings (H2-H3) |
| `tracking-normal` | 0 | Body text, most headings |
| `tracking-wide` | 0.025em | All-caps text, buttons |
| `tracking-wider` | 0.05em | Small all-caps text |

---

## 8. SEMANTIC TEXT STYLES

### Link Styles

**Default Link:**
```css
a, .link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms ease;
}

a:hover, .link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

a:focus-visible, .link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

**Inline Link (within text):**
```css
.link-inline {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 150ms ease;
}

.link-inline:hover {
  color: var(--color-primary-hover);
  text-decoration-thickness: 2px;
}
```

---

### Label Styles

**Form Label:**
```css
label, .label {
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  line-height: 1.4;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
  display: block;
}
```

**Helper Text:**
```css
.helper-text {
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}
```

---

### Code/Technical Text

**Inline Code:**
```css
code, .code-inline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875em; /* 14px when parent is 16px */
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
```

**Code Block:**
```css
pre, .code-block {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem; /* 14px */
  line-height: 1.6;
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  overflow-x: auto;
}
```

---

## 9. RESPONSIVE TYPOGRAPHY

### Breakpoint-Based Scaling

**Desktop (≥1280px):**
- Base size: 16px
- Scale: Full scale (1.25 ratio)
- Line height: Relaxed (1.6-1.7)

**Tablet (768px - 1279px):**
- Base size: 16px
- Scale: Slightly reduced for large headings
- Line height: Relaxed (1.6)

**Mobile (≤767px):**
- Base size: 16px (maintain readability)
- Scale: Significantly reduced for large headings
- Line height: More generous (1.6-1.7)
- Max-width: Full width (no ch limit)

**Fluid Typography (Optional):**
```css
/* H1 scales from 48px to 72px between 640px and 1280px */
h1 {
  font-size: clamp(3rem, 2rem + 4vw, 4.5rem);
}

/* Body text remains consistent */
body {
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}
```

---

## 10. ACCESSIBILITY REQUIREMENTS

### Minimum Requirements

1. **Font Size:** Never below 14px for body text
2. **Line Height:** Minimum 1.5 for body text
3. **Line Length:** 45-75 characters (optimal: 65ch)
4. **Paragraph Spacing:** Minimum 1.5x font size
5. **Letter Spacing:** Minimum -0.02em, never negative for body text
6. **Contrast:** WCAG AAA (see color palette doc)

### Focus States

All interactive text elements must have visible focus indicators:
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Screen Reader Considerations

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 11. IMPLEMENTATION

### CSS Custom Properties

```css
:root {
  /* Font Families */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.4;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.7;

  /* Letter Spacing */
  --tracking-tighter: -0.02em;
  --tracking-tight: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    fontFamily: {
      body: ['Inter', '-apple-system', 'sans-serif'],
      display: ['Playfair Display', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5' }],
      sm: ['0.875rem', { lineHeight: '1.6' }],
      base: ['1rem', { lineHeight: '1.6' }],
      lg: ['1.125rem', { lineHeight: '1.7' }],
      xl: ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.5rem', { lineHeight: '1.5' }],
      '3xl': ['1.875rem', { lineHeight: '1.4' }],
      '4xl': ['2.25rem', { lineHeight: '1.4' }],
      '5xl': ['3rem', { lineHeight: '1.3' }],
      '6xl': ['3.75rem', { lineHeight: '1.2' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },
};
```

---

## 12. USAGE EXAMPLES

### Article/Blog Post

```html
<article class="article">
  <h1>Understanding Vedic Principles</h1>
  <p class="text-lead">
    Ancient wisdom meets modern practice in this comprehensive guide.
  </p>
  <p>
    The Vedas represent thousands of years of accumulated knowledge...
  </p>
  <h2>Core Teachings</h2>
  <p>
    Each teaching builds upon fundamental principles of...
  </p>
</article>
```

### Card Component

```html
<div class="card">
  <h5>Daily Meditation Practice</h5>
  <p class="text-small">
    Begin your journey with these foundational techniques.
  </p>
  <a href="#" class="link">Learn more →</a>
</div>
```

---

**Document End**
