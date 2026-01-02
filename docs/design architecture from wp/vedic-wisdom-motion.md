# Vedic Wisdom Platform - Motion & Interaction

**Version:** 1.0  
**Last Updated:** December 31, 2025

---

## 1. ANIMATION PRINCIPLES

### Design Philosophy

**Purpose-Driven Motion:**
- Animations should provide feedback, guide attention, or express brand personality
- Never animate purely for decoration
- Motion should feel natural and predictable

**Performance:**
- Animate only `transform` and `opacity` properties when possible (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left` (layout-triggering)
- Use `will-change` sparingly and only when necessary

**Consistency:**
- Use standard durations and easing functions throughout the platform
- Similar interactions should have similar animations

---

## 2. DURATION SCALE

### Standard Durations

| Token | Value (ms) | Use Case |
|-------|------------|----------|
| `duration-instant` | 0ms | No animation (instant changes) |
| `duration-fast` | 100ms | Micro-interactions, icon changes |
| `duration-normal` | 150ms | Default transitions, hover states |
| `duration-moderate` | 200ms | Button clicks, checkbox toggles |
| `duration-slow` | 250ms | Drawer slides, modal entrances |
| `duration-slower` | 300ms | Card flips, complex state changes |
| `duration-slowest` | 400ms | Page transitions, major layout shifts |

**CSS Variables:**
```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-moderate: 200ms;
  --duration-slow: 250ms;
  --duration-slower: 300ms;
  --duration-slowest: 400ms;
}
```

**Usage Guidelines:**
- **Hover effects:** 150ms (normal)
- **Button clicks:** 200ms (moderate)
- **Toggles/switches:** 200ms (moderate)
- **Modals/drawers:** 250ms (slow)
- **Card animations:** 300ms (slower)
- **Page transitions:** 400ms (slowest)

---

## 3. EASING FUNCTIONS

### Standard Easing Curves

**Ease Out (Default):**
- Use for: Entrances, things coming into view
- Curve: Elements start fast and slow down
- Value: `cubic-bezier(0, 0, 0.2, 1)`

```css
:root {
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

**Ease In:**
- Use for: Exits, things leaving view
- Curve: Elements start slow and speed up
- Value: `cubic-bezier(0.4, 0, 1, 1)`

```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

**Ease In-Out:**
- Use for: State changes, property transitions
- Curve: Smooth acceleration and deceleration
- Value: `cubic-bezier(0.4, 0, 0.2, 1)`

```css
:root {
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Linear:**
- Use for: Continuous animations, loading spinners
- Curve: Constant speed
- Value: `linear`

**Bounce (Special):**
- Use for: Playful interactions, success states
- Curve: Overshoots then settles
- Value: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

```css
:root {
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## 4. COMMON ANIMATION PATTERNS

### Fade In/Out

**Fade In:**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn var(--duration-moderate) var(--ease-out);
}
```

**Fade Out:**
```css
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-out {
  animation: fadeOut var(--duration-moderate) var(--ease-in);
}
```

---

### Slide In/Out

**Slide In from Right:**
```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInRight var(--duration-slow) var(--ease-out);
}
```

**Slide In from Bottom:**
```css
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-bottom {
  animation: slideInBottom var(--duration-slow) var(--ease-out);
}
```

**Slide Out to Right:**
```css
@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.slide-out-right {
  animation: slideOutRight var(--duration-slow) var(--ease-in);
}
```

---

### Scale In/Out

**Scale In (Grow):**
```css
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.scale-in {
  animation: scaleIn var(--duration-moderate) var(--ease-out);
}
```

**Scale Out (Shrink):**
```css
@keyframes scaleOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
}

.scale-out {
  animation: scaleOut var(--duration-moderate) var(--ease-in);
}
```

---

### Bounce

**Bounce In:**
```css
@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.bounce-in {
  animation: bounceIn var(--duration-slower) var(--ease-out);
}
```

---

### Shake (Error Feedback)

```css
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-4px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(4px);
  }
}

.shake {
  animation: shake var(--duration-slower);
}
```

---

### Pulse (Attention)

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}
```

---

### Spin (Loading)

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 600ms linear infinite;
}
```

---

### Shimmer (Loading Skeleton)

```css
@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    var(--color-surface-secondary) 0%,
    var(--color-border) 50%,
    var(--color-surface-secondary) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

---

## 5. COMPONENT-SPECIFIC ANIMATIONS

### Button Interactions

**Hover:**
```css
.btn {
  transition: 
    background-color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
  transition-duration: var(--duration-fast);
}
```

**Loading State:**
```css
.btn-loading .spinner {
  animation: spin 600ms linear infinite;
}

.btn-loading .btn-text {
  opacity: 0.7;
  transition: opacity var(--duration-normal);
}
```

---

### Card Interactions

**Hover (Interactive Cards):**
```css
.card-interactive {
  transition:
    transform var(--duration-moderate) var(--ease-out),
    box-shadow var(--duration-moderate) var(--ease-out);
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

**Card Entrance:**
```css
.card-enter {
  animation: scaleIn var(--duration-slow) var(--ease-out);
}
```

---

### Modal/Dialog Animations

**Modal Overlay:**
```css
.modal-overlay {
  animation: fadeIn var(--duration-moderate) var(--ease-out);
}

.modal-overlay.closing {
  animation: fadeOut var(--duration-moderate) var(--ease-in);
}
```

**Modal Content:**
```css
.modal {
  animation: scaleIn var(--duration-slow) var(--ease-out);
}

.modal.closing {
  animation: scaleOut var(--duration-slow) var(--ease-in);
}
```

---

### Drawer/Sidebar Animations

**Drawer Slide:**
```css
.drawer {
  transition: transform var(--duration-slow) var(--ease-out);
}

.drawer[data-open="false"] {
  transform: translateX(-100%);
}

.drawer[data-open="true"] {
  transform: translateX(0);
}
```

**Drawer Overlay:**
```css
.drawer-overlay {
  transition: opacity var(--duration-slow) var(--ease-out);
}

.drawer-overlay[data-visible="false"] {
  opacity: 0;
  pointer-events: none;
}

.drawer-overlay[data-visible="true"] {
  opacity: 1;
}
```

---

### Toast Notifications

**Toast Entrance:**
```css
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast {
  animation: slideInRight var(--duration-slow) var(--ease-out);
}
```

**Toast Exit:**
```css
@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

.toast.removing {
  animation: slideOutRight var(--duration-slow) var(--ease-in);
}
```

---

### Dropdown Menus

**Dropdown Entrance:**
```css
@keyframes dropdownIn {
  from {
    transform: translateY(-8px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dropdown {
  animation: dropdownIn var(--duration-moderate) var(--ease-out);
}
```

---

### Form Inputs

**Focus State:**
```css
.input {
  transition:
    border-color var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

**Error Shake:**
```css
.input-error {
  animation: shake var(--duration-slower);
}
```

---

### Toggle/Switch

**Toggle Transition:**
```css
.toggle-slider {
  transition: background-color var(--duration-moderate) var(--ease-out);
}

.toggle-slider::after {
  transition: transform var(--duration-moderate) var(--ease-out);
}

.toggle-input:checked + .toggle-slider::after {
  transform: translateX(24px);
}
```

---

### Accordion/Collapse

**Expand/Collapse:**
```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-slower) var(--ease-out);
}

.accordion-content.open {
  max-height: 1000px; /* Large enough to fit content */
}

/* Better approach using CSS Grid */
.accordion-content-grid {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-slower) var(--ease-out);
}

.accordion-content-grid.open {
  grid-template-rows: 1fr;
}

.accordion-content-inner {
  overflow: hidden;
}
```

---

## 6. SCROLL ANIMATIONS

### Scroll-Triggered Fade In

**HTML:**
```html
<div class="scroll-fade" data-scroll="false">
  <h2>Content appears on scroll</h2>
</div>
```

**CSS:**
```css
.scroll-fade {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--duration-slower) var(--ease-out),
    transform var(--duration-slower) var(--ease-out);
}

.scroll-fade[data-scroll="true"] {
  opacity: 1;
  transform: translateY(0);
}
```

**JavaScript:**
```javascript
// Intersection Observer for scroll animations
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.dataset.scroll = 'true';
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
  }
);

document.querySelectorAll('.scroll-fade').forEach((el) => {
  scrollObserver.observe(el);
});
```

---

### Parallax Scrolling (Subtle)

```css
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

**Or with JavaScript for more control:**
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
```

---

## 7. LOADING STATES

### Page Loading

**Initial Page Load Animation:**
```css
@keyframes pageLoad {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

body {
  animation: pageLoad var(--duration-slow) var(--ease-out);
}
```

### Skeleton Screens

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-surface-secondary) 0%,
    var(--color-border) 50%,
    var(--color-surface-secondary) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius);
}
```

### Progress Indicators

**Linear Progress:**
```css
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-indeterminate::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  background: var(--color-primary);
  animation: progress 1.5s ease-in-out infinite;
}
```

---

## 8. MICRO-INTERACTIONS

### Checkbox Check Animation

```css
.checkbox-input:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
  animation: checkmark var(--duration-moderate) var(--ease-bounce);
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 0;
  }
  30% {
    height: 10px;
    width: 5px;
    opacity: 1;
  }
  100% {
    height: 10px;
    width: 5px;
    opacity: 1;
  }
}
```

---

### Button Click Ripple

**HTML:**
```html
<button class="btn-ripple">
  Click me
  <span class="ripple"></span>
</button>
```

**CSS:**
```css
.btn-ripple {
  position: relative;
  overflow: hidden;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  width: 100px;
  height: 100px;
  margin-top: -50px;
  margin-left: -50px;
  animation: ripple 600ms ease-out;
  pointer-events: none;
}
```

**JavaScript:**
```javascript
document.querySelectorAll('.btn-ripple').forEach((button) => {
  button.addEventListener('click', function (e) {
    const ripple = this.querySelector('.ripple');
    const rect = this.getBoundingClientRect();
    
    ripple.style.left = e.clientX - rect.left + 'px';
    ripple.style.top = e.clientY - rect.top + 'px';
    
    ripple.style.animation = 'none';
    setTimeout(() => {
      ripple.style.animation = 'ripple 600ms ease-out';
    }, 10);
  });
});
```

---

### Like Button Animation

```css
@keyframes like {
  0%, 100% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(0.95);
  }
  45%, 80% {
    transform: scale(1);
  }
}

.like-button.liked {
  animation: like 600ms var(--ease-out);
}
```

---

## 9. REDUCED MOTION

### Accessibility Compliance

**Respect user preferences:**
```css
/* Disable all animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Selective animation reduction:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Keep essential feedback animations */
  .btn,
  .input:focus,
  .toggle {
    transition-duration: var(--duration-fast);
  }

  /* Remove decorative animations */
  .card:hover {
    transform: none;
  }

  .scroll-fade {
    opacity: 1;
    transform: none;
  }

  /* Disable infinite animations */
  .pulse,
  .spin {
    animation: none;
  }
}
```

---

## 10. PERFORMANCE OPTIMIZATION

### GPU Acceleration

**Use transform and opacity:**
```css
/* Good - GPU accelerated */
.animate-good {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Avoid - triggers layout/paint */
.animate-avoid {
  left: 100px;
  width: 200px;
  height: 200px;
}
```

### Will-Change Property

**Use sparingly:**
```css
/* Only for elements that will definitely animate */
.modal {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.modal.animation-complete {
  will-change: auto;
}
```

### Debouncing Scroll Events

```javascript
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Scroll-dependent animations here
  }, 100);
});
```

---

## 11. ANIMATION UTILITIES

### JavaScript Animation Helpers

```javascript
// Wait for animation to complete
function waitForAnimation(element, animationName) {
  return new Promise((resolve) => {
    function handleAnimationEnd(e) {
      if (e.animationName === animationName) {
        element.removeEventListener('animationend', handleAnimationEnd);
        resolve();
      }
    }
    element.addEventListener('animationend', handleAnimationEnd);
  });
}

// Wait for transition to complete
function waitForTransition(element, propertyName) {
  return new Promise((resolve) => {
    function handleTransitionEnd(e) {
      if (e.propertyName === propertyName) {
        element.removeEventListener('transitionend', handleTransitionEnd);
        resolve();
      }
    }
    element.addEventListener('transitionend', handleTransitionEnd);
  });
}

// Usage
async function animateModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('closing');
  await waitForAnimation(modal, 'fadeOut');
  modal.remove();
}
```

---

## 12. COMPLETE CSS VARIABLES

```css
:root {
  /* Durations */
  --duration-instant: 0ms;
  --duration-fast: 100ms;
  --duration-normal: 150ms;
  --duration-moderate: 200ms;
  --duration-slow: 250ms;
  --duration-slower: 300ms;
  --duration-slowest: 400ms;

  /* Easing */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-linear: linear;
}
```

---

## 13. TESTING & VALIDATION

### Animation Testing Checklist

**Performance:**
- [ ] Animations run at 60fps on target devices
- [ ] No jank or stuttering during animations
- [ ] Page remains interactive during animations

**Accessibility:**
- [ ] Reduced motion preferences respected
- [ ] Focus states remain visible during animations
- [ ] Screen readers handle animated content correctly

**Consistency:**
- [ ] Similar interactions use similar animations
- [ ] Durations and easing match design system
- [ ] Animations feel natural and purposeful

**Cross-Browser:**
- [ ] Animations work in Chrome, Firefox, Safari, Edge
- [ ] Fallbacks for unsupported features
- [ ] Mobile browser performance acceptable

---

**Document End**

All motion should enhance the user experience, not distract from it. When in doubt, use subtle, purposeful animation.
