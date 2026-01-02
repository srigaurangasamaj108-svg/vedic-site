# Vedic Wisdom Platform - Spacing & Layout System

**Version:** 1.0  
**Last Updated:** December 31, 2025

---

## 1. SPACING SCALE (8px Modular System)

### Base Unit: 8px

All spacing values are multiples of 8px for visual consistency and easier implementation.

| Token | Value (px) | Value (rem) | Use Case |
|-------|------------|-------------|----------|
| `space-0` | 0px | 0 | Reset/none |
| `space-1` | 4px | 0.25rem | Tight spacing, icon gaps |
| `space-2` | 8px | 0.5rem | Minimal spacing, inline elements |
| `space-3` | 12px | 0.75rem | Small gaps, compact layouts |
| `space-4` | 16px | 1rem | Standard spacing (base unit) |
| `space-5` | 20px | 1.25rem | Small section padding |
| `space-6` | 24px | 1.5rem | Medium spacing |
| `space-8` | 32px | 2rem | Large spacing, card padding |
| `space-10` | 40px | 2.5rem | Section padding |
| `space-12` | 48px | 3rem | Large section gaps |
| `space-16` | 64px | 4rem | Major section spacing |
| `space-20` | 80px | 5rem | Extra large spacing |
| `space-24` | 96px | 6rem | Hero sections |
| `space-32` | 128px | 8rem | Massive spacing |

---

## 2. SPACING USAGE PATTERNS

### Component Padding (Internal Spacing)

**Buttons:**
- Small: `8px 16px` (space-2 space-4)
- Medium: `12px 24px` (space-3 space-6)
- Large: `16px 32px` (space-4 space-8)

**Cards:**
- Compact: `16px` (space-4)
- Default: `24px` (space-6)
- Spacious: `32px` (space-8)

**Input Fields:**
- Height: `40px` minimum (space-10)
- Padding: `12px 16px` (space-3 space-4)

**Modals/Drawers:**
- Padding: `32px` (space-8)
- Header/Footer: `24px` (space-6)

---

### Component Gaps (Between Elements)

**Inline Elements:**
- Icons to text: `8px` (space-2)
- Button groups: `8px` (space-2)
- Form fields horizontal: `16px` (space-4)

**Stacked Elements:**
- Paragraph spacing: `16px` (space-4)
- Section spacing: `32px` (space-8)
- Major section spacing: `64px` (space-16)

**Grid Gaps:**
- Tight: `16px` (space-4)
- Default: `24px` (space-6)
- Spacious: `32px` (space-8)

---

### Margin Patterns

**Heading Margins:**
- H1 margin-bottom: `32px` (space-8)
- H2 margin-bottom: `24px` (space-6)
- H3 margin-bottom: `20px` (space-5)
- H4-H6 margin-bottom: `16px` (space-4)

**Content Margins:**
- Paragraph margin-bottom: `16px` (space-4)
- List margin-bottom: `16px` (space-4)
- Section margin-bottom: `48px` (space-12)

---

## 3. CONTAINER SYSTEM

### Container Widths

| Breakpoint | Max Width | Padding (each side) |
|------------|-----------|---------------------|
| Mobile (default) | 100% | 16px (space-4) |
| sm (≥640px) | 640px | 24px (space-6) |
| md (≥768px) | 768px | 32px (space-8) |
| lg (≥1024px) | 1024px | 32px (space-8) |
| xl (≥1280px) | 1280px | 40px (space-10) |
| 2xl (≥1536px) | 1408px | 48px (space-12) |

**CSS Implementation:**
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1408px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
```

---

### Content Width Constraints

**Reading Width:**
- Max width: `70ch` (optimal: 65-75 characters)
- Use for article content, blog posts, long-form text

**Narrow Content:**
- Max width: `768px`
- Use for forms, single-column layouts

**Wide Content:**
- Max width: `1280px`
- Use for dashboards, data tables, media galleries

```css
.content-reading {
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
}

.content-narrow {
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

.content-wide {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
```

---

## 4. GRID SYSTEM

### 12-Column Grid

**Desktop (≥1024px):**
- Columns: 12
- Gap: 24px (space-6)
- Margin: 32px (space-8)

**Tablet (768px - 1023px):**
- Columns: 12
- Gap: 24px (space-6)
- Margin: 32px (space-8)

**Mobile (≤767px):**
- Columns: 4
- Gap: 16px (space-4)
- Margin: 16px (space-4)

**CSS Grid Implementation:**
```css
.grid {
  display: grid;
  gap: 1rem; /* 16px */
  grid-template-columns: repeat(4, 1fr);
}

@media (min-width: 768px) {
  .grid {
    gap: 1.5rem; /* 24px */
    grid-template-columns: repeat(12, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 1.5rem; /* 24px */
  }
}

/* Column Spanning */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-8 { grid-column: span 8; }
.col-span-12 { grid-column: span 12; }

@media (max-width: 767px) {
  .col-span-12,
  .col-span-8,
  .col-span-6 {
    grid-column: span 4; /* Full width on mobile */
  }
}
```

---

### Common Grid Layouts

**Two-Column (50/50):**
```css
.grid-two-col {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-two-col {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Three-Column:**
```css
.grid-three-col {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-three-col {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-three-col {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Sidebar Layout (25/75):**
```css
.layout-sidebar {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .layout-sidebar {
    grid-template-columns: 280px 1fr;
  }
}
```

**Dashboard Layout (25/50/25):**
```css
.layout-dashboard {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 1280px) {
  .layout-dashboard {
    grid-template-columns: 280px 1fr 320px;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .layout-dashboard {
    grid-template-columns: 240px 1fr;
  }
  .layout-dashboard > :last-child {
    grid-column: 1 / -1; /* Right sidebar goes below on medium screens */
  }
}
```

---

## 5. BREAKPOINTS

### Standard Breakpoints

| Name | Min Width | Max Width | Target Devices |
|------|-----------|-----------|----------------|
| `xs` | 0px | 639px | Small phones (iPhone SE) |
| `sm` | 640px | 767px | Large phones (iPhone 14) |
| `md` | 768px | 1023px | Tablets (iPad) |
| `lg` | 1024px | 1279px | Small laptops, large tablets |
| `xl` | 1280px | 1535px | Desktops, laptops |
| `2xl` | 1536px | — | Large desktops, 4K screens |

**CSS Media Queries:**
```css
/* Mobile first approach */
/* Base styles apply to xs by default */

@media (min-width: 640px) {
  /* sm and up */
}

@media (min-width: 768px) {
  /* md and up (tablets) */
}

@media (min-width: 1024px) {
  /* lg and up (laptops) */
}

@media (min-width: 1280px) {
  /* xl and up (desktops) */
}

@media (min-width: 1536px) {
  /* 2xl and up (large desktops) */
}
```

**JavaScript Breakpoint Utilities:**
```javascript
export const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Usage
const isMobile = window.innerWidth < breakpoints.md;
const isDesktop = window.innerWidth >= breakpoints.lg;
```

---

## 6. SECTION SPACING

### Page Sections

**Hero Section:**
- Padding top: `96px` (space-24) desktop, `64px` (space-16) mobile
- Padding bottom: `96px` (space-24) desktop, `64px` (space-16) mobile

**Standard Section:**
- Padding top: `64px` (space-16) desktop, `48px` (space-12) mobile
- Padding bottom: `64px` (space-16) desktop, `48px` (space-12) mobile
- Between sections: `80px` (space-20) desktop, `64px` (space-16) mobile

**Compact Section:**
- Padding top: `48px` (space-12)
- Padding bottom: `48px` (space-12)

**CSS Implementation:**
```css
.section-hero {
  padding-top: 4rem;    /* 64px mobile */
  padding-bottom: 4rem; /* 64px mobile */
}

@media (min-width: 1024px) {
  .section-hero {
    padding-top: 6rem;    /* 96px desktop */
    padding-bottom: 6rem; /* 96px desktop */
  }
}

.section-standard {
  padding-top: 3rem;    /* 48px mobile */
  padding-bottom: 3rem; /* 48px mobile */
}

@media (min-width: 1024px) {
  .section-standard {
    padding-top: 4rem;    /* 64px desktop */
    padding-bottom: 4rem; /* 64px desktop */
  }
}
```

---

## 7. BORDER RADIUS

### Standard Radius Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `rounded-none` | 0 | Square, no rounding |
| `rounded-sm` | 4px | Subtle rounding, badges |
| `rounded` | 6px | Standard rounding, buttons, inputs |
| `rounded-md` | 8px | Cards, modals |
| `rounded-lg` | 12px | Large cards, panels |
| `rounded-xl` | 16px | Hero cards, feature boxes |
| `rounded-2xl` | 24px | Special emphasis |
| `rounded-full` | 9999px | Pills, avatars, circular buttons |

**CSS Variables:**
```css
:root {
  --radius-sm: 4px;
  --radius: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

**Usage Examples:**
```css
.btn { border-radius: var(--radius); } /* 6px */
.card { border-radius: var(--radius-md); } /* 8px */
.avatar { border-radius: var(--radius-full); } /* circular */
```

---

## 8. ELEVATION (SHADOWS)

### Shadow Scale

**Level 0 (None):**
```css
box-shadow: none;
```

**Level 1 (Subtle):**
- Use: Hover states, slight elevation
```css
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

**Level 2 (Default):**
- Use: Cards, dropdowns, tooltips
```css
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px -1px rgba(0, 0, 0, 0.1);
```

**Level 3 (Medium):**
- Use: Elevated cards, active states
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -2px rgba(0, 0, 0, 0.1);
```

**Level 4 (High):**
- Use: Modals, popovers, important panels
```css
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -4px rgba(0, 0, 0, 0.1);
```

**Level 5 (Highest):**
- Use: Dialogs, important floating elements
```css
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 8px 10px -6px rgba(0, 0, 0, 0.1);
```

**CSS Variables:**
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
```

---

## 9. Z-INDEX SCALE

### Layering System

| Token | Value | Use Case |
|-------|-------|----------|
| `z-0` | 0 | Base layer, default |
| `z-10` | 10 | Dropdowns, tooltips |
| `z-20` | 20 | Fixed headers, sticky elements |
| `z-30` | 30 | Sidebars, drawers |
| `z-40` | 40 | Modal overlays |
| `z-50` | 50 | Modals, dialogs |
| `z-60` | 60 | Popovers on modals |
| `z-70` | 70 | Toasts, notifications |
| `z-80` | 80 | Critical alerts |
| `z-90` | 90 | Loading overlays |
| `z-100` | 100 | Absolute top (debugging) |

**CSS Variables:**
```css
:root {
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-sidebar: 30;
  --z-modal-overlay: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-toast: 70;
  --z-alert: 80;
  --z-loading: 90;
}
```

---

## 10. ASPECT RATIOS

### Common Ratios

| Token | Ratio | Use Case |
|-------|-------|----------|
| `aspect-square` | 1:1 | Profile images, icons |
| `aspect-video` | 16:9 | Video embeds, thumbnails |
| `aspect-wide` | 21:9 | Ultra-wide images, banners |
| `aspect-portrait` | 3:4 | Portrait images, cards |
| `aspect-golden` | 1.618:1 | Aesthetically pleasing layouts |

**CSS Implementation:**
```css
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-wide { aspect-ratio: 21 / 9; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-golden { aspect-ratio: 1.618 / 1; }
```

---

## 11. IMPLEMENTATION

### Complete CSS Variables

```css
:root {
  /* Spacing Scale (8px base) */
  --space-0: 0;
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */

  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1408px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* Z-index */
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-sidebar: 30;
  --z-modal-overlay: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-toast: 70;
  --z-alert: 80;
  --z-loading: 90;
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      spacing: {
        '0': '0',
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '5': '1.25rem',   // 20px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '10': '2.5rem',   // 40px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
        '20': '5rem',     // 80px
        '24': '6rem',     // 96px
        '32': '8rem',     // 128px
      },
      maxWidth: {
        'reading': '70ch',
        'narrow': '768px',
        'wide': '1280px',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
    },
  },
};
```

---

**Document End**
