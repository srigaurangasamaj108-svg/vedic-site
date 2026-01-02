# Vedic Wisdom Platform - Component Specifications

**Version:** 1.0  
**Last Updated:** December 31, 2025

---

## 1. BUTTONS

### Button Variants

#### Primary Button

**Default State:**
```css
.btn-primary {
  /* Layout */
  padding: 12px 24px;
  border-radius: var(--radius);
  border: none;
  
  /* Typography */
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.025em;
  
  /* Colors */
  background: var(--color-primary);
  color: var(--color-text-on-dark);
  
  /* Effects */
  box-shadow: var(--shadow-sm);
  transition: all 150ms ease;
  cursor: pointer;
  
  /* Accessibility */
  outline: none;
}
```

**Hover State:**
```css
.btn-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

**Focus State:**
```css
.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: var(--shadow-md), 0 0 0 4px var(--color-focus-ring);
}
```

**Active/Pressed State:**
```css
.btn-primary:active {
  background: var(--color-primary-active);
  box-shadow: var(--shadow-sm);
  transform: translateY(0);
}
```

**Disabled State:**
```css
.btn-primary:disabled {
  background: var(--color-border);
  color: var(--color-text-muted);
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
  transform: none;
}
```

**Loading State:**
```html
<button class="btn-primary btn-loading">
  <span class="spinner"></span>
  <span class="btn-text">Processing...</span>
</button>
```

```css
.btn-loading {
  position: relative;
  pointer-events: none;
}

.btn-loading .btn-text {
  opacity: 0.7;
}

.btn-loading .spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

#### Secondary Button

**Default State:**
```css
.btn-secondary {
  padding: 12px 24px;
  border-radius: var(--radius);
  border: none;
  
  background: var(--color-secondary);
  color: var(--color-text-on-dark);
  
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  
  box-shadow: var(--shadow-sm);
  transition: all 150ms ease;
  cursor: pointer;
}
```

**Hover State:**
```css
.btn-secondary:hover {
  background: var(--color-secondary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

**Focus/Active/Disabled/Loading:** Same patterns as primary

---

#### Outlined Button

**Default State:**
```css
.btn-outlined {
  padding: 12px 24px;
  border-radius: var(--radius);
  border: 2px solid var(--color-primary);
  background: transparent;
  
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  
  transition: all 150ms ease;
  cursor: pointer;
}
```

**Hover State:**
```css
.btn-outlined:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-hover);
  color: var(--color-primary-hover);
}
```

**Focus State:**
```css
.btn-outlined:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--color-focus-ring);
}
```

**Active State:**
```css
.btn-outlined:active {
  background: var(--color-primary-light);
  border-color: var(--color-primary-active);
  color: var(--color-primary-active);
}
```

**Disabled State:**
```css
.btn-outlined:disabled {
  border-color: var(--color-border);
  color: var(--color-text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}
```

---

#### Ghost/Text Button

**Default State:**
```css
.btn-ghost {
  padding: 12px 24px;
  border-radius: var(--radius);
  border: none;
  background: transparent;
  
  color: var(--color-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  
  transition: all 150ms ease;
  cursor: pointer;
}
```

**Hover State:**
```css
.btn-ghost:hover {
  background: var(--color-primary-light);
  color: var(--color-primary-hover);
}
```

**Focus/Active/Disabled:** Similar patterns

---

### Button Sizes

#### Small Button
```css
.btn-sm {
  padding: 8px 16px;
  font-size: 0.875rem;
  line-height: 1.4;
}

.btn-sm .spinner {
  width: 14px;
  height: 14px;
}
```

#### Medium Button (Default)
```css
.btn-md {
  padding: 12px 24px;
  font-size: 1rem;
  line-height: 1.5;
}

.btn-md .spinner {
  width: 16px;
  height: 16px;
}
```

#### Large Button
```css
.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
  line-height: 1.5;
}

.btn-lg .spinner {
  width: 18px;
  height: 18px;
}
```

---

### Icon Buttons

**With Icon Left:**
```html
<button class="btn-primary">
  <svg class="btn-icon-left">...</svg>
  <span>Continue</span>
</button>
```

```css
.btn-icon-left {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
```

**With Icon Right:**
```html
<button class="btn-primary">
  <span>Next</span>
  <svg class="btn-icon-right">...</svg>
</button>
```

```css
.btn-icon-right {
  width: 20px;
  height: 20px;
  margin-left: 8px;
}
```

**Icon Only:**
```css
.btn-icon {
  padding: 12px;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-icon svg {
  width: 20px;
  height: 20px;
}
```

---

## 2. FORM INPUTS

### Text Input

**Default State:**
```css
.input {
  /* Layout */
  width: 100%;
  padding: 12px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  
  /* Typography */
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  
  /* Colors */
  background: var(--color-surface);
  
  /* Effects */
  transition: all 150ms ease;
  outline: none;
}

.input::placeholder {
  color: var(--color-text-muted);
}
```

**Hover State:**
```css
.input:hover {
  border-color: var(--color-border-dark);
}
```

**Focus State:**
```css
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

**Disabled State:**
```css
.input:disabled {
  background: var(--color-surface-secondary);
  color: var(--color-text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}
```

**Error State:**
```html
<div class="input-group">
  <label class="label">Email</label>
  <input type="email" class="input input-error" value="invalid@">
  <span class="input-error-message">Please enter a valid email address</span>
</div>
```

```css
.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(185, 28, 28, 0.15);
}

.input-error-message {
  display: block;
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--color-error);
}
```

**Success State:**
```css
.input-success {
  border-color: var(--color-success);
}

.input-success:focus {
  border-color: var(--color-success);
  box-shadow: 0 0 0 3px rgba(4, 120, 87, 0.15);
}

.input-success-message {
  display: block;
  margin-top: 8px;
  font-size: 0.875rem;
  color: var(--color-success);
}
```

---

### Input with Icon

**Left Icon:**
```html
<div class="input-wrapper">
  <svg class="input-icon-left">...</svg>
  <input type="text" class="input input-with-icon-left" placeholder="Search...">
</div>
```

```css
.input-wrapper {
  position: relative;
}

.input-icon-left {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--color-text-muted);
  pointer-events: none;
}

.input-with-icon-left {
  padding-left: 44px;
}
```

**Right Icon (e.g., clear button):**
```html
<div class="input-wrapper">
  <input type="text" class="input input-with-icon-right" value="Text">
  <button class="input-icon-right" aria-label="Clear">
    <svg>...</svg>
  </button>
</div>
```

```css
.input-icon-right {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 0;
}

.input-with-icon-right {
  padding-right: 44px;
}
```

---

### Textarea

```css
.textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-primary);
  
  background: var(--color-surface);
  resize: vertical;
  
  transition: all 150ms ease;
}

.textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  outline: none;
}
```

---

### Select Dropdown

**Default State:**
```css
.select {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  
  background: var(--color-surface);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  
  appearance: none;
  cursor: pointer;
  transition: all 150ms ease;
}

.select:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
  outline: none;
}
```

---

### Checkbox

**HTML Structure:**
```html
<label class="checkbox-wrapper">
  <input type="checkbox" class="checkbox-input">
  <span class="checkbox-label">I agree to the terms</span>
</label>
```

**Default State:**
```css
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  gap: 12px;
}

.checkbox-input {
  appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin: 2px 0 0 0;
  border: 2px solid var(--color-border-dark);
  border-radius: 4px;
  background: var(--color-surface);
  cursor: pointer;
  transition: all 150ms ease;
  position: relative;
}
```

**Checked State:**
```css
.checkbox-input:checked {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
}
```

**Focus State:**
```css
.checkbox-input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Disabled State:**
```css
.checkbox-input:disabled {
  background: var(--color-surface-secondary);
  border-color: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}

.checkbox-input:disabled + .checkbox-label {
  color: var(--color-text-muted);
  cursor: not-allowed;
}
```

---

### Radio Button

**HTML Structure:**
```html
<div class="radio-group">
  <label class="radio-wrapper">
    <input type="radio" name="option" class="radio-input">
    <span class="radio-label">Option 1</span>
  </label>
  <label class="radio-wrapper">
    <input type="radio" name="option" class="radio-input">
    <span class="radio-label">Option 2</span>
  </label>
</div>
```

**Default State:**
```css
.radio-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 12px;
  margin-bottom: 12px;
}

.radio-input {
  appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 2px solid var(--color-border-dark);
  border-radius: 50%;
  background: var(--color-surface);
  cursor: pointer;
  transition: all 150ms ease;
  position: relative;
}
```

**Checked State:**
```css
.radio-input:checked {
  border-color: var(--color-primary);
}

.radio-input:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary);
}
```

**Focus State:**
```css
.radio-input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

### Toggle/Switch

**HTML Structure:**
```html
<label class="toggle-wrapper">
  <span class="toggle-label">Enable notifications</span>
  <input type="checkbox" class="toggle-input">
  <span class="toggle-slider"></span>
</label>
```

**Default State:**
```css
.toggle-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: relative;
  width: 48px;
  height: 24px;
  background: var(--color-border-dark);
  border-radius: 24px;
  transition: background 200ms ease;
}

.toggle-slider::after {
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 200ms ease;
  box-shadow: var(--shadow-sm);
}
```

**Checked State:**
```css
.toggle-input:checked + .toggle-slider {
  background: var(--color-primary);
}

.toggle-input:checked + .toggle-slider::after {
  transform: translateX(24px);
}
```

**Focus State:**
```css
.toggle-input:focus-visible + .toggle-slider {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Disabled State:**
```css
.toggle-input:disabled + .toggle-slider {
  background: var(--color-border);
  cursor: not-allowed;
  opacity: 0.6;
}
```

---

## 3. CARDS

### Basic Card

**Default State:**
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: all 200ms ease;
}
```

**Hover State (Interactive Cards):**
```css
.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--color-border-medium);
}
```

**Focus State:**
```css
.card-interactive:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Selected State:**
```css
.card-selected {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md), 0 0 0 3px var(--color-focus-ring);
}
```

---

### Card with Department Color

```html
<div class="card card-department" data-department="education">
  <div class="card-header">
    <h3>Educational Resources</h3>
  </div>
  <div class="card-body">
    <p>Access learning materials and courses.</p>
  </div>
</div>
```

```css
.card-department {
  border-top: 4px solid transparent;
}

.card-department[data-department="education"] {
  border-top-color: var(--color-education);
}

.card-department[data-department="leadership"] {
  border-top-color: var(--color-leadership);
}

.card-department[data-department="outreach"] {
  border-top-color: var(--color-outreach);
}

.card-department[data-department="worship"] {
  border-top-color: var(--color-worship);
}

.card-department[data-department="care"] {
  border-top-color: var(--color-care);
}

.card-department[data-department="community"] {
  border-top-color: var(--color-community);
}
```

---

### Card Loading State (Skeleton)

```html
<div class="card card-loading">
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-button"></div>
</div>
```

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

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton-title {
  height: 24px;
  width: 60%;
  margin-bottom: 16px;
}

.skeleton-text {
  height: 16px;
  width: 100%;
  margin-bottom: 12px;
}

.skeleton-text:last-of-type {
  width: 80%;
}

.skeleton-button {
  height: 40px;
  width: 120px;
  margin-top: 16px;
}
```

---

### Empty State Card

```html
<div class="card card-empty">
  <div class="empty-state">
    <svg class="empty-state-icon">...</svg>
    <h3 class="empty-state-title">No items found</h3>
    <p class="empty-state-description">
      There are no items to display. Start by creating your first item.
    </p>
    <button class="btn-primary">Create Item</button>
  </div>
</div>
```

```css
.empty-state {
  text-align: center;
  padding: 48px 24px;
}

.empty-state-icon {
  width: 64px;
  height: 64px;
  color: var(--color-text-muted);
  margin: 0 auto 24px;
}

.empty-state-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.empty-state-description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  max-width: 400px;
  margin: 0 auto 24px;
}
```

---

## 4. ALERTS & NOTIFICATIONS

### Alert Component

**Success Alert:**
```html
<div class="alert alert-success">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <h4 class="alert-title">Success!</h4>
    <p class="alert-message">Your changes have been saved.</p>
  </div>
  <button class="alert-close" aria-label="Close">×</button>
</div>
```

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius);
  border-left: 4px solid;
}

.alert-success {
  background: var(--color-success-light);
  border-left-color: var(--color-success);
  color: var(--color-success);
}

.alert-icon {
  width: 20px;
  height: 20px;
  min-width: 20px;
  margin-top: 2px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-success);
  margin-bottom: 4px;
}

.alert-message {
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

.alert-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: currentColor;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  opacity: 0.6;
  transition: opacity 150ms ease;
}

.alert-close:hover {
  opacity: 1;
}
```

**Warning Alert:**
```css
.alert-warning {
  background: var(--color-warning-light);
  border-left-color: var(--color-warning);
  color: var(--color-warning);
}

.alert-warning .alert-title {
  color: var(--color-warning);
}
```

**Error Alert:**
```css
.alert-error {
  background: var(--color-error-light);
  border-left-color: var(--color-error);
  color: var(--color-error);
}

.alert-error .alert-title {
  color: var(--color-error);
}
```

**Info Alert:**
```css
.alert-info {
  background: var(--color-info-light);
  border-left-color: var(--color-info);
  color: var(--color-info);
}

.alert-info .alert-title {
  color: var(--color-info);
}
```

---

### Toast Notification

```html
<div class="toast toast-success">
  <svg class="toast-icon">...</svg>
  <span class="toast-message">Saved successfully!</span>
  <button class="toast-close" aria-label="Close">×</button>
</div>
```

```css
.toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: var(--z-toast);
  
  display: flex;
  align-items: center;
  gap: 12px;
  
  min-width: 320px;
  max-width: 480px;
  padding: 16px;
  
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  
  animation: slideIn 200ms ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-success {
  border-left: 4px solid var(--color-success);
}

.toast-icon {
  width: 20px;
  height: 20px;
  color: var(--color-success);
}

.toast-message {
  flex: 1;
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

.toast-close {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
  transition: color 150ms ease;
}

.toast-close:hover {
  color: var(--color-text-primary);
}
```

---

## 5. MODALS & DIALOGS

### Modal Overlay

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal-overlay);
  background: var(--color-overlay-medium);
  animation: fadeIn 200ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Modal Dialog

```html
<div class="modal-overlay">
  <div class="modal" role="dialog" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Confirm Action</h2>
      <button class="modal-close" aria-label="Close">×</button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to proceed?</p>
    </div>
    <div class="modal-footer">
      <button class="btn-ghost">Cancel</button>
      <button class="btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

```css
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--z-modal);
  
  width: 90%;
  max-width: 560px;
  max-height: 90vh;
  
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  
  display: flex;
  flex-direction: column;
  
  animation: scaleIn 200ms ease-out;
}

@keyframes scaleIn {
  from {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.modal-close {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius);
  transition: all 150ms ease;
}

.modal-close:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 24px 24px;
}
```

---

## 6. BADGES & TAGS

### Badge Component

```html
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">New</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.badge-success {
  background: var(--color-success-light);
  color: var(--color-success);
}

.badge-warning {
  background: var(--color-warning-light);
  color: var(--color-warning);
}

.badge-error {
  background: var(--color-error-light);
  color: var(--color-error);
}

.badge-info {
  background: var(--color-info-light);
  color: var(--color-info);
}

/* Department Badges */
.badge-education {
  background: var(--color-education-light);
  color: var(--color-education-dark);
}

.badge-leadership {
  background: var(--color-leadership-light);
  color: var(--color-leadership-dark);
}

/* ...etc for other departments */
```

---

## 7. LOADING STATES

### Spinner

```html
<div class="spinner-wrapper">
  <div class="spinner"></div>
  <p class="spinner-text">Loading...</p>
</div>
```

```css
.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 48px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 600ms linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner-text {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
```

### Progress Bar

```html
<div class="progress-bar">
  <div class="progress-fill" style="width: 65%"></div>
</div>
```

```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: var(--radius-full);
  transition: width 300ms ease;
}
```

---

**Document End**

For complete implementation examples and responsive variants, see the responsive behavior documentation.
