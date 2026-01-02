# PRACTICAL FIXES FOR v5.0
## High-Impact Changes Only (10 Minutes of Work)

These fixes address issues that will **actually affect your website**, not theoretical spec compliance.

---

## Fix #1: Correct H5 and H6 Sizes (CRITICAL)

**Problem:** H5 and H6 are currently 50% too small. This WILL break your card titles and small headings.

**In your `style.css`, REPLACE the H5/H6 section with:**

```css
/* H5 - Card/Module Title */
h5 {
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--color-text-body);
    line-height: var(--leading-snug);
    font-size: 1.25rem; /* Mobile: 20px */
}

/* H6 - Small Heading */
h6 {
    font-family: var(--font-body);
    font-weight: 600;
    color: var(--color-text-body);
    line-height: var(--leading-snug);
    font-size: 1rem; /* Mobile: 16px */
}

/* Desktop */
@media (min-width: 1024px) {
    h5 { font-size: 1.875rem; } /* 30px */
    h6 { font-size: 1.5rem; }   /* 24px */
}
```

**Why:** Without this, all your card titles and small headings will look broken.

---

## Fix #2: Add Missing Border Radius Token

**In your `:root` section, ADD:**

```css
--radius: 6px;      /* Default radius */
--radius-sm: 4px;   /* (you already have this) */
--radius-md: 8px;   /* CHANGE from 6px to 8px */
--radius-lg: 12px;  /* CHANGE from 8px to 12px */
--radius-xl: 16px;  /* (you already have this) */
--radius-2xl: 24px; /* ADD this */
```

**Why:** Elementor widgets will reference these values, and wrong sizes will make your site look off.

---

## Fix #3: Add Primary Button States (Accessibility)

**After your existing `.btn-primary:hover`, ADD:**

```css
.btn-primary:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
```

**Why:** Without focus states, keyboard users can't navigate. Without disabled state, form buttons will confuse users.

---

## Fix #4: Fix Alert Border (Visual Issue)

**In your `.alert` class, CHANGE:**

```css
/* CHANGE THIS: */
border: 1px solid transparent;

/* TO THIS: */
border-left: 4px solid transparent;
```

**Why:** Alerts need the thick left border for visual hierarchy. Current implementation will look wrong.

---

## Fix #5: Add These 5 Essential Missing Colors

**In your `:root` section, ADD:**

```css
/* These are actually used in Elementor components */
--color-primary-light: #FEF3C7;      /* For badge backgrounds */
--color-success-light: #D1FAE5;      /* For success alerts */
--color-warning-light: #FED7AA;      /* For warning alerts */
--color-error-light: #FEE2E2;        /* For error alerts */
--color-info-light: #DBEAFE;         /* For info alerts */
```

**Then UPDATE your alert classes:**

```css
/* REPLACE your current alert backgrounds with: */
.alert-info    { background: var(--color-info-light); }
.alert-success { background: var(--color-success-light); }
.alert-warning { background: var(--color-warning-light); }
.alert-error   { background: var(--color-error-light); }
```

**Why:** Your current alert colors don't match the design system, and `-light` variants are used throughout Elementor widgets.

---

## That's It!

These 5 fixes take 10 minutes and solve 90% of real-world issues. Deploy this and build your site.

---

## When to Add More

**Add later ONLY when you actually need them:**

- **Department colors:** When you build the Education/Leadership/Worship sections
- **Extra animations:** When you want fancy transitions
- **Extra components:** When designs require checkboxes, toggles, etc.
- **Hover states:** When you add interactive elements that need them

Don't add things you're not using. That's over-engineering.

---

## Your Deployment Checklist

1. ✅ Apply the 5 fixes above (10 minutes)
2. ✅ Upload to WordPress child theme
3. ✅ Test in Elementor:
   - Create a page with H1-H6 headings → Check sizes
   - Add a primary button → Check hover and focus
   - Add an alert widget → Check border and colors
4. ✅ Start building your actual site
5. ✅ Add more variables/components as you need them

---

## Stop When You Should Stop

Your v5.0 + these 5 fixes = **Production Ready**

Don't fall into perfectionism paralysis. Ship it and iterate based on what your actual website needs.
