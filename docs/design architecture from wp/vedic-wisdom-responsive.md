# Vedic Wisdom Platform - Responsive Behavior

**Version:** 1.0  
**Last Updated:** December 31, 2025

---

## 1. RESPONSIVE BREAKPOINTS

### Breakpoint System

| Name | Min Width | Max Width | Typical Devices | Container Width |
|------|-----------|-----------|-----------------|-----------------|
| `xs` | 0px | 639px | Small phones (iPhone SE, Android compact) | 100% - 32px padding |
| `sm` | 640px | 767px | Large phones (iPhone 14, Pixel) | 640px max |
| `md` | 768px | 1023px | Tablets (iPad, Android tablets) | 768px max |
| `lg` | 1024px | 1279px | Small laptops, large tablets landscape | 1024px max |
| `xl` | 1280px | 1535px | Desktops, laptops | 1280px max |
| `2xl` | 1536px | — | Large desktops, 4K displays | 1408px max |

**Mobile-First Approach:**
All base styles target mobile (xs), then progressively enhance for larger screens.

---

## 2. NAVIGATION PATTERNS

### Desktop Navigation (≥1024px)

**Top Navigation Bar:**
```css
.nav-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.nav-logo {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: all 150ms ease;
}

.nav-link:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.nav-link.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.nav-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}
```

---

### Tablet Navigation (768px - 1023px)

**Reduced horizontal links, profile menu:**
```css
@media (max-width: 1023px) {
  .nav-desktop {
    padding: 16px 24px;
  }

  .nav-links {
    gap: 24px;
  }

  /* Hide secondary nav items, show in menu */
  .nav-link.secondary {
    display: none;
  }
}
```

---

### Mobile Navigation (≤767px)

**Hamburger menu with drawer:**

**HTML Structure:**
```html
<nav class="nav-mobile">
  <div class="nav-mobile-header">
    <img src="logo.svg" class="nav-logo" alt="Logo">
    <button class="nav-mobile-toggle" aria-label="Toggle menu">
      <span class="hamburger"></span>
    </button>
  </div>
  
  <div class="nav-mobile-drawer" data-open="false">
    <div class="nav-mobile-overlay"></div>
    <div class="nav-mobile-content">
      <ul class="nav-mobile-links">
        <li><a href="#" class="nav-mobile-link">Home</a></li>
        <li><a href="#" class="nav-mobile-link">Education</a></li>
        <li><a href="#" class="nav-mobile-link">Worship</a></li>
        <li><a href="#" class="nav-mobile-link">Community</a></li>
      </ul>
      <div class="nav-mobile-actions">
        <button class="btn-primary btn-full-width">Sign In</button>
      </div>
    </div>
  </div>
</nav>
```

**CSS:**
```css
@media (max-width: 767px) {
  .nav-mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: var(--z-sticky);
  }

  .nav-mobile-toggle {
    width: 40px;
    height: 40px;
    padding: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    width: 24px;
    height: 2px;
    background: var(--color-text-primary);
    transition: all 200ms ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    display: block;
  }

  /* Drawer Closed */
  .nav-mobile-drawer {
    position: fixed;
    inset: 0;
    z-index: var(--z-sidebar);
    pointer-events: none;
  }

  .nav-mobile-overlay {
    position: absolute;
    inset: 0;
    background: var(--color-overlay-medium);
    opacity: 0;
    transition: opacity 250ms ease;
  }

  .nav-mobile-content {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    max-width: 320px;
    background: var(--color-surface);
    box-shadow: var(--shadow-xl);
    transform: translateX(100%);
    transition: transform 250ms ease;
    overflow-y: auto;
  }

  /* Drawer Open */
  .nav-mobile-drawer[data-open="true"] {
    pointer-events: auto;
  }

  .nav-mobile-drawer[data-open="true"] .nav-mobile-overlay {
    opacity: 1;
  }

  .nav-mobile-drawer[data-open="true"] .nav-mobile-content {
    transform: translateX(0);
  }

  .nav-mobile-links {
    list-style: none;
    margin: 0;
    padding: 24px 0;
  }

  .nav-mobile-link {
    display: block;
    padding: 16px 24px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-primary);
    text-decoration: none;
    transition: background 150ms ease;
  }

  .nav-mobile-link:hover,
  .nav-mobile-link.active {
    background: var(--color-surface-secondary);
    color: var(--color-primary);
  }

  .nav-mobile-actions {
    padding: 0 24px 24px;
  }

  .btn-full-width {
    width: 100%;
  }
}
```

---

## 3. SIDEBAR LAYOUTS

### Desktop Sidebar (≥1024px)

**Persistent sidebar:**
```css
.layout-with-sidebar {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  padding: 24px;
}

.main-content {
  padding: 32px;
  background: var(--color-background);
}
```

---

### Tablet Sidebar (768px - 1023px)

**Narrower sidebar or collapsible:**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .layout-with-sidebar {
    grid-template-columns: 240px 1fr;
  }

  .sidebar {
    padding: 16px;
  }

  /* Option: Collapsible sidebar */
  .sidebar.collapsed {
    grid-template-columns: 64px 1fr;
  }

  .sidebar.collapsed .sidebar-label {
    display: none;
  }

  .sidebar.collapsed .sidebar-icon {
    margin: 0;
  }
}
```

---

### Mobile Sidebar (≤767px)

**Drawer-style sidebar:**
```css
@media (max-width: 767px) {
  .layout-with-sidebar {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 80%;
    max-width: 280px;
    z-index: var(--z-sidebar);
    transform: translateX(-100%);
    transition: transform 250ms ease;
    height: 100vh;
  }

  .sidebar[data-open="true"] {
    transform: translateX(0);
  }

  .main-content {
    padding: 16px;
  }

  /* Overlay when sidebar is open */
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: var(--color-overlay-medium);
    z-index: calc(var(--z-sidebar) - 1);
    opacity: 0;
    pointer-events: none;
    transition: opacity 250ms ease;
  }

  .sidebar-overlay[data-visible="true"] {
    opacity: 1;
    pointer-events: auto;
  }
}
```

---

## 4. GRID SYSTEM RESPONSIVE BEHAVIOR

### Card Grids

**Desktop (≥1280px): 4 columns**
```css
.grid-cards {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);
}
```

**Desktop (1024px - 1279px): 3 columns**
```css
@media (min-width: 1024px) and (max-width: 1279px) {
  .grid-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Tablet (768px - 1023px): 2 columns**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .grid-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
```

**Mobile (≤767px): 1 column**
```css
@media (max-width: 767px) {
  .grid-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

---

### Data Tables

**Desktop (≥1024px): Full table**
```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}
```

**Tablet (768px - 1023px): Hide less important columns**
```css
@media (max-width: 1023px) {
  .table .col-optional {
    display: none;
  }
}
```

**Mobile (≤767px): Card-style table**
```css
@media (max-width: 767px) {
  .table thead {
    display: none;
  }

  .table tbody,
  .table tr,
  .table td {
    display: block;
  }

  .table tr {
    margin-bottom: 16px;
    padding: 16px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }

  .table td {
    padding: 8px 0;
    border: none;
    display: flex;
    justify-content: space-between;
  }

  .table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: var(--color-text-secondary);
  }
}
```

---

## 5. FORMS RESPONSIVE BEHAVIOR

### Form Layout

**Desktop (≥768px): Multi-column forms**
```css
.form-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}

.form-grid .form-group.full-width {
  grid-column: 1 / -1;
}
```

**Mobile (≤767px): Single column**
```css
@media (max-width: 767px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

### Input Sizing

**Mobile optimization:**
```css
@media (max-width: 767px) {
  .input,
  .select,
  .textarea {
    font-size: 16px; /* Prevents iOS zoom on focus */
  }

  .btn {
    min-height: 44px; /* Ensures touch-friendly size */
  }
}
```

---

## 6. MODAL RESPONSIVE BEHAVIOR

**Desktop (≥768px): Centered modal**
```css
.modal {
  width: 90%;
  max-width: 560px;
}
```

**Mobile (≤767px): Full-width bottom sheet**
```css
@media (max-width: 767px) {
  .modal {
    width: 100%;
    max-width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    transform: translateY(100%);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    max-height: 90vh;
    animation: slideUp 250ms ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
}
```

---

## 7. HERO SECTIONS

**Desktop (≥1024px):**
```css
.hero {
  padding: 96px 32px;
  text-align: center;
}

.hero-title {
  font-size: 4.5rem;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 32px;
}
```

**Tablet (768px - 1023px):**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .hero {
    padding: 64px 24px;
  }

  .hero-title {
    font-size: 3.75rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }
}
```

**Mobile (≤767px):**
```css
@media (max-width: 767px) {
  .hero {
    padding: 48px 16px;
    text-align: left;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-description {
    font-size: 1rem;
  }
}
```

---

## 8. IMAGE & MEDIA HANDLING

### Responsive Images

**HTML Structure:**
```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-desktop.jpg">
  <source media="(min-width: 768px)" srcset="image-tablet.jpg">
  <img src="image-mobile.jpg" alt="Description" class="responsive-img">
</picture>
```

**CSS:**
```css
.responsive-img {
  width: 100%;
  height: auto;
  display: block;
}
```

### Video Embeds

```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## 9. CONTENT STACKING

### Desktop: Side-by-side
```css
.content-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
```

### Tablet: Adjust gap
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .content-split {
    gap: 32px;
  }
}
```

### Mobile: Stack vertically
```css
@media (max-width: 767px) {
  .content-split {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* Image first on mobile */
  .content-split .image {
    order: -1;
  }
}
```

---

## 10. SPACING ADJUSTMENTS

### Section Padding

**Desktop:**
```css
.section {
  padding: 80px 0;
}
```

**Tablet:**
```css
@media (max-width: 1023px) {
  .section {
    padding: 64px 0;
  }
}
```

**Mobile:**
```css
@media (max-width: 767px) {
  .section {
    padding: 48px 0;
  }
}
```

---

## 11. TYPOGRAPHY RESPONSIVE SCALING

### Fluid Typography (Optional Enhancement)

```css
/* H1: Scales from 48px (mobile) to 72px (desktop) */
h1 {
  font-size: clamp(3rem, 2rem + 4vw, 4.5rem);
}

/* H2: Scales from 36px to 60px */
h2 {
  font-size: clamp(2.25rem, 1.5rem + 3vw, 3.75rem);
}

/* Body: Slight scaling for readability */
body {
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}
```

---

## 12. TOUCH-FRIENDLY INTERACTIONS

### Minimum Touch Targets (Mobile)

```css
@media (max-width: 767px) {
  /* All interactive elements minimum 44x44px */
  button,
  a,
  input,
  select,
  .interactive {
    min-height: 44px;
    min-width: 44px;
  }

  /* Increase spacing between interactive elements */
  .btn-group {
    gap: 12px;
  }
}
```

### Hover States on Touch Devices

```css
/* Disable hover effects on touch devices */
@media (hover: none) {
  .card:hover {
    transform: none;
    box-shadow: var(--shadow-sm);
  }
}
```

---

## 13. DEPARTMENT SECTION RESPONSIVE CARDS

**Desktop (≥1024px): 3 cards per row**
```css
.department-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

**Tablet (768px - 1023px): 2 cards per row**
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .department-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

**Mobile (≤767px): Horizontal scroll or stack**

**Option A: Horizontal Scroll**
```css
@media (max-width: 767px) {
  .department-cards {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 16px;
  }

  .department-card {
    flex: 0 0 280px;
    scroll-snap-align: start;
  }

  /* Hide scrollbar but keep functionality */
  .department-cards::-webkit-scrollbar {
    display: none;
  }
}
```

**Option B: Full Stack**
```css
@media (max-width: 767px) {
  .department-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
```

---

## 14. ACCESSIBILITY CONSIDERATIONS

### Skip Links (Mobile & Desktop)

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
}

.skip-link:focus {
  left: 50%;
  transform: translateX(-50%);
  top: 16px;
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius);
}
```

### Focus Indicators (Always Visible)

```css
/* Ensure focus is always visible regardless of device */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 15. RESPONSIVE TESTING CHECKLIST

### Required Tests

**Mobile (375px - iPhone SE):**
- [ ] Navigation opens/closes correctly
- [ ] Touch targets minimum 44x44px
- [ ] Forms don't trigger zoom (16px font minimum)
- [ ] Cards stack properly
- [ ] Tables convert to card layout
- [ ] No horizontal scroll (except intentional)

**Tablet (768px - iPad):**
- [ ] Sidebar behavior appropriate
- [ ] Grid layouts use 2 columns
- [ ] Navigation condensed appropriately
- [ ] Forms maintain 2-column where appropriate

**Desktop (1280px+):**
- [ ] Full navigation visible
- [ ] Sidebar persistent
- [ ] Grid layouts use full columns
- [ ] Hover states work correctly

**Cross-Device:**
- [ ] Content readable at all sizes
- [ ] Images load appropriately
- [ ] Modals/drawers work on all devices
- [ ] Focus states visible
- [ ] Touch and mouse interactions work

---

## 16. JAVASCRIPT BREAKPOINT HELPER

```javascript
// Breakpoint detection utility
const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}

function isMobile() {
  return window.innerWidth < breakpoints.md;
}

function isTablet() {
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
}

function isDesktop() {
  return window.innerWidth >= breakpoints.lg;
}

// Usage
if (isMobile()) {
  // Mobile-specific JavaScript
}

// Listen for resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const breakpoint = getCurrentBreakpoint();
    console.log(`Current breakpoint: ${breakpoint}`);
  }, 250);
});
```

---

**Document End**

For animation and transition specifications, see the Motion & Interaction documentation.
