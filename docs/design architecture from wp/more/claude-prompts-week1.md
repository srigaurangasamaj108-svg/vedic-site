# READY-TO-USE CLAUDE PROMPTS: Week 1 Specification Tasks

## How to Use These Prompts

1. Copy each prompt below
2. Paste into Claude
3. Let Claude generate the specifications
4. Review and download the outputs
5. Use outputs with Lovable/Bolt in Phase 2

**Estimated time:** 40-50 hours of Claude work (can be done 1-2 weeks depending on detail level)

---

## Prompt 1: Comprehensive Color System

```
You are a design system expert. Based on the following Vedic Wisdom Platform guidelines, 
create a COMPREHENSIVE color palette specification that developers can implement immediately.

CONTEXT:
The platform serves multiple audiences: children (7-17), new practitioners, experienced 
devotees, teachers, community leaders, and administrators. The design should feel:
- Reverent but approachable
- Warm and welcoming
- Professional and trustworthy
- Accessible (WCAG AAA compliance)

CURRENT DESCRIPTION FROM GUIDELINES:
"Warm creams, soft golds, muted saffrons, gentle blues and greens"
"Saffron/gold or deep blue" primary buttons
Department colors:
- Education: Soft blue
- Leadership: Deep purple
- Outreach: Warm orange
- Worship: Golden yellow
- Care: Soft green
- Community: Teal

DELIVERABLES (in this exact format):

1. PRIMARY PALETTE
   Provide hex codes, RGB values, and semantic meaning for:
   - Background color (cream base)
   - Surface color (white/light background)
   - Primary color (warm gold or saffron)
   - Primary hover state
   - Primary active state
   - Secondary color (for secondary actions)
   - Text primary color
   - Text secondary color
   - Text muted color
   - Text on dark backgrounds

2. SEMANTIC COLORS
   Provide hex codes for:
   - Success (green for completed, saved, valid)
   - Warning (orange for caution, pending)
   - Error (red for errors, invalid)
   - Info (blue for information, neutral)

3. DEPARTMENT COLORS
   Provide hex codes for all 6 departments:
   - Education: Soft blue
   - Leadership: Deep purple
   - Outreach: Warm orange
   - Worship: Golden yellow
   - Pastoral care: Soft green
   - Community: Teal

4. DARK MODE PALETTE (if applicable)
   Provide hex codes for same colors in dark mode

5. CSS VARIABLES
   Format as valid CSS:
   :root {
     --color-[name]: [hex];
     [repeat for all colors]
   }

6. ACCESSIBILITY MATRIX
   Create a table showing:
   - Every text color on every background color
   - WCAG contrast ratio (target: 7:1 for AAA)
   - Example: Dark text #1F2121 on light background #FFFEF9 = 19:1 ✓

7. USAGE GUIDE
   Specify when to use each color:
   - Primary color: main CTAs, focus states, selected items
   - Secondary color: secondary actions, hover states
   - Success: positive feedback, checkmarks, valid states
   - Error: validation errors, dangerous actions
   - Department colors: category badges, section backgrounds

8. COLOR VALIDATION
   Include validation criteria:
   - Are all colors WCAG AAA compliant?
   - Do colors work in both light and dark modes?
   - Are colors distinguishable for colorblind users?
   - Do colors align with Vedic/Indian color symbolism?

Please provide all specifications in a format ready for implementation. Include hex, RGB, and 
HSL values for each color. Make it copy-paste ready for developers.
```

---

## Prompt 2: Typography System

```
You are a typography expert. Based on the Vedic Wisdom Platform guidelines, create a 
COMPLETE typography system specification.

CONTEXT:
- Platform serves diverse ages (7-77 years old)
- Bilingual: English + Sanskrit/Devanagari
- Must be accessible (WCAG AAA, minimum 16px base)
- Conveys wisdom (serif headings) + modern (sans-serif body)
- Used for spiritual content (reverent but approachable)

CURRENT GUIDELINES:
"Serif for headings (convey wisdom/tradition)"
"Sans-serif for body (modern accessibility)"
"Minimum 16px base font size"
"WCAG AAA contrast ratios"
"Clear, readable serif or sans-serif with subtle dignity"

DELIVERABLES (in this exact format):

1. FONT FAMILIES
   Specify primary and fallback fonts for:
   - Headings (serif): [Primary] → [Fallback] → [Web-safe fallback]
   - Body text (sans-serif): [Primary] → [Fallback] → [Web-safe fallback]
   - Code/monospace: [Primary] → [Fallback] → [Web-safe fallback]
   - Sanskrit/Devanagari: [Primary] → [Fallback] → [Web-safe fallback]

2. SIZING SCALE
   Create a modular scale starting from 16px base:
   - H1 (Heading 1): [Desktop size], [Tablet size], [Mobile size]
   - H2 (Heading 2): [Desktop size], [Tablet size], [Mobile size]
   - H3 (Heading 3): [Desktop size], [Tablet size], [Mobile size]
   - H4 (Heading 4): [Desktop size], [Tablet size], [Mobile size]
   - H5 (Heading 5): [Desktop size], [Tablet size], [Mobile size]
   - Body text: [Size]
   - Small text: [Size]
   - Tiny text: [Size]
   
   Provide ratios explaining the scale (e.g., 1.25:1 ratio, golden ratio, etc.)

3. FONT WEIGHTS
   Specify weights available for each family:
   - Headings: [300] [400] [500] [600] [700] (select which are used)
   - Body: [300] [400] [500] [600] [700] (select which are used)
   - Recommended usage: 
     - 700 for bold/heavy emphasis
     - 600 for semibold/medium emphasis
     - 500 for highlights
     - 400 for body text
     - 300 for subtle text

4. LINE HEIGHT & SPACING
   Specify for each context:
   - Headings: [line-height value]
   - Body text: [line-height value]
   - Small text: [line-height value]
   - Code: [line-height value]
   - List items: [line-height value]

5. LETTER SPACING
   Specify for:
   - Headings: [value] (typically negative for visual weight)
   - Body: [value] (typically 0)
   - All caps text: [value] (if used)
   - Small caps text: [value] (if used)

6. PARAGRAPH SPACING
   Specify:
   - Margin-bottom for body paragraphs: [value]
   - Margin-bottom for headings: [value]
   - Margin above body following heading: [value]

7. TEXT UTILITIES
   Specify predefined combinations for:
   - Page title (H1): [Size] [Weight] [Line-height] [Letter-spacing]
   - Section title (H2): [Size] [Weight] [Line-height] [Letter-spacing]
   - Subsection title (H3): [Size] [Weight] [Line-height] [Letter-spacing]
   - Card title: [Size] [Weight] [Line-height] [Letter-spacing]
   - Body paragraph: [Size] [Weight] [Line-height] [Letter-spacing]
   - Small caption: [Size] [Weight] [Line-height] [Letter-spacing]
   - Label text: [Size] [Weight] [Line-height] [Letter-spacing]
   - Placeholder text: [Size] [Weight] [Line-height] [Letter-spacing]

8. ACCESSIBILITY COMPLIANCE
   Verify:
   - All headings meet minimum 16px on mobile
   - All body text meets minimum 16px base
   - All small text stays above 12px minimum
   - Contrast ratios meet WCAG AAA (7:1 for normal text)
   - Line heights support dyslexic readers (≥ 1.5)

9. MULTILINGUAL SUPPORT
   Specify how typography handles:
   - English text (current approach)
   - Sanskrit in Devanagari (different line heights needed?)
   - Mixed English/Sanskrit on same line (spacing rules?)
   - Right-to-left text (if needed)

10. RESPONSIVE SCALING
    Provide formulas or breakpoints for:
    - Mobile (320px): [size adjustments, e.g., -2px]
    - Tablet (768px): [size adjustments, e.g., -1px]
    - Desktop (1024px+): [full sizes]
    - Large screens (1440px+): [size adjustments, if any]

Please provide CSS-ready specifications. Include Google Fonts URLs if using web fonts. 
Make it ready for developers to implement immediately.
```

---

## Prompt 3: Spacing & Grid System

```
You are a design systems architect. Create a COMPLETE spacing and grid system for the 
Vedic Wisdom Platform.

CONTEXT:
- Current guideline: "8px grid system"
- Multi-device: mobile, tablet, desktop, large desktop
- Must handle: cards, forms, sections, navigation
- Principle: consistency, scalability, accessibility

DELIVERABLES (in this exact format):

1. MODULAR SPACING SCALE
   Create CSS variables with 8px base:
   - --space-0: 0
   - --space-1: [value] (0.5 units or 4px)
   - --space-2: [value] (1 unit or 8px)
   - [continue through space-8]
   - Provide: name, value in px, value in rem, use case example

2. GRID SYSTEM SPECIFICATIONS

   MOBILE (320px - 479px):
   - Columns: [number]
   - Gutter (gap between columns): [value]
   - Container padding: [left] [right]
   - Container max-width: 100%
   - Margin/padding standards for mobile

   TABLET (480px - 767px):
   - Columns: [number]
   - Gutter: [value]
   - Container padding: [left] [right]
   - Container max-width: [value]
   - Margin/padding standards for tablet

   DESKTOP (768px - 1023px):
   - Columns: [number]
   - Gutter: [value]
   - Container padding: [left] [right]
   - Container max-width: [value]
   - Sidebar width (if applicable): [value]

   LARGE DESKTOP (1024px+):
   - Columns: [number]
   - Gutter: [value]
   - Container padding: [left] [right]
   - Container max-width: [value] (recommend 1440px)

3. COMPONENT SPACING RULES

   BUTTONS:
   - Padding (small): [vertical] [horizontal]
   - Padding (standard): [vertical] [horizontal]
   - Padding (large): [vertical] [horizontal]
   - Min height: [value] (recommend 44px for touch)
   - Gap between buttons: [value]

   CARDS:
   - Padding: [desktop value] [tablet value] [mobile value]
   - Margin between cards (gap): [desktop value] [tablet value] [mobile value]
   - Border radius: [value]
   - Shadow margin (space for shadow): [value]

   FORMS:
   - Input padding: [vertical] [horizontal]
   - Input min height: [value]
   - Label to input spacing: [value]
   - Field gap (spacing between fields): [value]
   - Error message spacing: [value]

   LISTS:
   - Item gap (spacing between items): [value]
   - Item padding: [vertical] [horizontal]
   - Nested list margin-left: [value]

4. SECTION SPACING

   VERTICAL SPACING:
   - Section margin-bottom (desktop): [value]
   - Section margin-bottom (tablet): [value]
   - Section margin-bottom (mobile): [value]
   - Hero margin-bottom: [value]
   - Nested sections: [value]

   HORIZONTAL SPACING:
   - Content margins from viewport: [desktop] [tablet] [mobile]
   - Max-width for readable text: [value] (recommend 65-75 characters)
   - Two-column layouts: main width, sidebar width, gap
   - Three-column layouts: column widths, gaps

5. HEADER & FOOTER SPACING
   - Header height (desktop): [value]
   - Header height (mobile): [value]
   - Header padding: [vertical] [horizontal]
   - Footer padding: [vertical] [horizontal]
   - Footer column spacing: [value]
   - Sticky header offset for anchors: [value]

6. RESPONSIVE SPACING RULES

   What changes at each breakpoint:
   - Mobile: [padding/margin adjustments]
   - Tablet: [padding/margin adjustments]
   - Desktop: [padding/margin adjustments]
   - Large: [padding/margin adjustments]

   Provide examples:
   - Card padding: 24px → 16px → 16px (desktop → tablet → mobile)
   - Section gap: 64px → 48px → 32px
   - Container margins: 40px → 24px → 16px

7. CSS GRID LAYOUT CODE
   Provide copy-paste ready CSS for:
   - Standard 12-column grid (desktop)
   - 8-column grid (tablet)
   - 4-column grid (mobile)
   - 2-column layouts
   - 3-column layouts
   - Auto-fit grid (responsive without breakpoints)

8. WHITESPACE BEST PRACTICES
   Document:
   - Breathing room around images
   - Whitespace around headings
   - Whitespace in forms
   - Whitespace around CTAs

9. ACCESSIBILITY CONSIDERATIONS
   - Spacing for mobile touch targets (min 44px)
   - Spacing for keyboard focus states
   - Spacing for error messages
   - Spacing for skip-to-content link

10. CONSISTENCY VALIDATION
    Provide checklist:
    - Are all spacings multiples of base unit (8px)?
    - Do paddings align with margins?
    - Are gaps consistent?
    - Are responsive transitions smooth?

Provide all values in pixels, rems, and CSS variable names. Make it ready for CSS/SCSS implementation.
```

---

## Prompt 4: Component Specifications (Buttons + Forms)

```
You are a component design expert. Create DETAILED component specifications for buttons 
and form elements in the Vedic Wisdom Platform.

CONTEXT:
- Users ages 7-77
- Multiple personas: beginners, scholars, leaders, children, householders
- Accessibility first (WCAG AAA)
- Warm, reverent aesthetic
- Touch-friendly (mobile-first)

DELIVERABLES (in this exact format):

--- BUTTONS ---

1. BUTTON VARIANTS
   For each variant (primary, secondary, outlined, ghost, danger), specify:
   
   VARIANT NAME: [e.g., Primary]
   
   States:
   - Default:
     * Background: [color with name]
     * Text: [color with name]
     * Border: [style and color]
     * Height: [px]
     * Padding: [vertical] [horizontal]
     * Border-radius: [value]
     * Cursor: [pointer/default]
     * Example: "Explore the Vedic Library"
   
   - Hover:
     * Background: [color]
     * Text: [color]
     * Box-shadow: [CSS value]
     * Transform: [CSS value, e.g., translateY(-2px)]
     * Duration: [ms]
     * Easing: [cubic-bezier value]
   
   - Active/Pressed:
     * Background: [color]
     * Text: [color]
     * Transform: [CSS value, e.g., scale(0.98)]
     * Duration: [ms]
   
   - Focus (keyboard):
     * Outline: [CSS value, e.g., 2px solid #D4A574]
     * Outline-offset: [value]
     * Visible: yes/no
     * Applies to: all/only keyboard
   
   - Disabled:
     * Background: [color]
     * Text: [color]
     * Opacity: [value]
     * Cursor: [not-allowed]
     * Pointer-events: [none]
   
   - Loading:
     * Content: [spinner or text, e.g., "Loading..."]
     * Opacity: [value]
     * Cursor: [not-allowed]
     * Animation: [description]

2. BUTTON SIZES
   For each size (small, standard, large), specify:
   - Padding: [vertical] [horizontal]
   - Font-size: [px]
   - Font-weight: [value]
   - Min-height: [px]
   - Border-radius: [value]
   - Icon size (if applicable): [px]
   - Use case: [e.g., "For inline actions, cards, secondary CTAs"]

3. BUTTON GROUPING
   Specifications for multiple buttons together:
   - Gap between buttons: [value]
   - Stacking on mobile: [vertical/horizontal]
   - Full width rules: [when to apply]
   - Alignment rules: [left/center/right]

4. BUTTON ACCESSIBILITY
   - Min height: 44px (touch target)
   - Min width: 44px
   - Text contrast: 4.5:1 AAA minimum
   - Focus indicator: always visible
   - Icon buttons: must have aria-label
   - Loading buttons: announce "loading" state to screen readers

--- FORM ELEMENTS ---

5. TEXT INPUT

   Default State:
   - Width: [% or full]
   - Height: [px, min 44px]
   - Padding: [vertical] [horizontal]
   - Border: [1px solid color]
   - Border-radius: [value]
   - Background: [color]
   - Font: [size/family/weight]
   - Placeholder: [color, opacity]
   - Cursor: [text]

   Hover State:
   - Border: [color]
   - Background: [color change or same]
   - Duration: [ms]

   Focus State:
   - Border: [color or thickness]
   - Box-shadow: [outline or glow]
   - Outline: [yes/no]
   - Duration: [ms]

   Filled State:
   - Background: [color]
   - Text: [color]

   Error State:
   - Border: [2px solid #C01C2F]
   - Background: [light error color or same]
   - Error message: [placement, color, size, margin]
   - Icon: [checkmark, X, or other]

   Disabled State:
   - Background: [gray or light]
   - Text: [muted color]
   - Border: [light gray]
   - Cursor: [not-allowed]

   Validation Rules:
   - Show error on: [blur, input, submit]
   - Error message delay: [timing]
   - Real-time validation: [yes/no, when]
   - Success indicator: [yes/no, style]

6. SELECT/DROPDOWN INPUT

   Default State:
   - Similar to text input
   - Arrow icon: [placement, size, color]
   - Custom styling: [yes/no, how]
   - Caret color: [color]

   Open State:
   - Dropdown max-height: [value]
   - Dropdown shadow: [box-shadow value]
   - Option padding: [vertical] [horizontal]
   - Option height: [px, recommend 44px]
   - Option hover: [background color]
   - Option selected: [background color, checkmark]
   - Animation: [fade-in/slide duration]

   Keyboard Navigation:
   - Up/down arrow: scroll options
   - Enter: select option
   - Escape: close dropdown
   - Type: filter options (yes/no)

7. CHECKBOX & RADIO

   Checkbox:
   - Size: [px x px]
   - Border: [style, color]
   - Checked state: [background, checkmark icon]
   - Indeterminate state: [styling]
   - Focus indicator: [outline or shadow]
   - Label spacing: [gap from checkbox to label]
   - Touch target: [min 44px, including label]

   Radio:
   - Size: [px x px]
   - Border: [style, color]
   - Selected state: [outer and inner dot colors]
   - Focus indicator: [outline or shadow]
   - Label spacing: [gap from radio to label]
   - Touch target: [min 44px, including label]
   - Group spacing: [gap between radio options]

8. TEXTAREA

   Default State:
   - Min-height: [px]
   - Resize: [vertical/horizontal/both/none]
   - Border: [same as text input]
   - Padding: [vertical] [horizontal]
   - Font: [monospace for code, sans for normal]

   Behavior:
   - Auto-expand: [yes/no, max height if yes]
   - Character count: [yes/no, when shown]
   - Placeholder: [visible/hidden on focus]

9. FORM LABELS & HELPERS

   Label:
   - Font-size: [px]
   - Font-weight: [value]
   - Color: [dark text]
   - Required indicator: [* asterisk, color red]
   - Spacing below label: [px, recommend 8px]
   - Floating label: [yes/no, animation if yes]

   Helper Text:
   - Font-size: [14px or smaller]
   - Color: [muted gray]
   - Spacing above input: [px, recommend 4px]
   - Use cases: [example: "Minimum 8 characters"]

   Error Message:
   - Font-size: [14px]
   - Color: [error red]
   - Spacing above: [px, recommend 4px]
   - Placement: [below input, inline, tooltip]
   - Icon: [error symbol/color]
   - Animation: [fade-in/slide-down]

   Success Message:
   - Font-size: [14px]
   - Color: [success green]
   - Icon: [checkmark]
   - Display: [when/how long]

10. FORM LAYOUT

    Single Column:
    - Field spacing: [vertical gap between fields]
    - Width: [full]

    Two Column:
    - Column width: [each]
    - Gap between columns: [horizontal]
    - Stacks to single column on: [mobile breakpoint]

    Multi-field Group:
    - Group padding: [value]
    - Group border: [style, if needed]
    - Group label: [font-size, weight]

11. FORM ACCESSIBILITY

    - All inputs have associated labels (or aria-label)
    - Error messages linked with aria-describedby
    - Required fields marked with aria-required
    - Placeholder text NOT used as label substitute
    - Keyboard navigation logical (tab order)
    - Tab focus visible on all fields
    - Min height 44px for all interactive elements
    - Contrast ratios: 4.5:1 AAA minimum

12. RESPONSIVE BEHAVIOR

    Mobile:
    - Full width inputs
    - Stack forms vertically
    - Larger touch targets (min 48px height)

    Tablet:
    - 2-column layouts (if space)
    - Same as mobile otherwise

    Desktop:
    - Multi-column layouts
    - Sidebars for help text
    - Inline validation

Provide all specifications in CSS-ready format. Include color names, font sizes in px and rem, 
animation durations, and accessibility requirements. Make it immediately implementable.
```

---

## Prompt 5: Responsive & Animation Specs

```
You are a responsive design + animation expert. Create DETAILED specifications for 
responsive behavior and animations in the Vedic Wisdom Platform.

CONTEXT:
- Users on 320px to 2560px screens
- Mobile-first approach
- Smooth, refined animations (reverent aesthetic)
- Performance important (no jank)
- Accessibility: respect prefers-reduced-motion

DELIVERABLES (in this exact format):

--- RESPONSIVE DESIGN ---

1. BREAKPOINT DEFINITIONS
   
   Define with min-width and max-width:
   - Mobile: [pixel range, e.g., 320px - 479px]
   - Tablet: [pixel range, e.g., 480px - 767px]
   - Desktop: [pixel range, e.g., 768px - 1023px]
   - Large Desktop: [pixel range, e.g., 1024px+]
   
   For each breakpoint, specify:
   - Grid columns: [number]
   - Container max-width: [px or %, none]
   - Padding: [left] [right]
   - Font size adjustment: [px change from base]
   - Card per row: [number]
   - Navigation: [hamburger/horizontal/mega-menu]

2. RESPONSIVE GRID SYSTEM

   Mobile (320-479px):
   - CSS Grid columns: [e.g., repeat(4, 1fr)]
   - Gap: [value]
   - Card width: [100% or auto]
   - Sidebar: [hidden/visible, width if visible]
   - Two-column layout: [full width stack/side-by-side]
   - Example: Homepage course cards show [1 per row]

   Tablet (480-767px):
   - CSS Grid columns: [e.g., repeat(8, 1fr)]
   - Gap: [value]
   - Card width: [50% for 2 cards per row]
   - Sidebar: [width if visible]
   - Two-column layout: [50/50 or 60/40 split]
   - Example: Homepage course cards show [2 per row]

   Desktop (768-1023px):
   - CSS Grid columns: [e.g., repeat(12, 1fr)]
   - Gap: [value]
   - Card width: [33.33% for 3 cards per row]
   - Sidebar: [width, typically 300px]
   - Two-column layout: [65/35 or 70/30 split]
   - Example: Homepage course cards show [3 per row]

   Large Desktop (1024px+):
   - CSS Grid columns: [e.g., repeat(12, 1fr)]
   - Gap: [value]
   - Card width: [25% for 4 cards per row]
   - Sidebar: [width]
   - Max-width for containers: [recommend 1440px]
   - Example: Homepage course cards show [4 per row]

3. TYPOGRAPHY SCALING

   For each breakpoint:
   - H1 size: [desktop] → [tablet] → [mobile]
   - H2 size: [desktop] → [tablet] → [mobile]
   - H3 size: [desktop] → [tablet] → [mobile]
   - Body size: [desktop] → [tablet] → [mobile]
   - Small size: [desktop] → [tablet] → [mobile]

   Example:
   - H1: 48px (desktop) → 40px (tablet) → 32px (mobile)
   - Body: 16px (all) or adjust if needed

4. NAVIGATION RESPONSIVE BEHAVIOR

   Mobile (320-479px):
   - Primary nav: [hidden behind hamburger menu]
   - Hamburger menu location: [top right]
   - Menu animation: [slide from left/right or fade]
   - Menu overlay: [full screen/slide-out width]
   - Search icon: [visible/hidden]
   - User menu: [visible/hidden]
   - Header height: [px]

   Tablet (480-767px):
   - Primary nav: [horizontal, some items visible, others in menu]
   - Hamburger menu: [yes/no, when visible]
   - Dropdowns: [collapse to tabs/accordion]
   - Header height: [px, same or smaller than desktop]

   Desktop (768px+):
   - Primary nav: [all items visible horizontally]
   - Hamburger menu: [hidden]
   - Dropdowns: [mega-menu or standard dropdown]
   - Sticky header: [yes/no, how it behaves on scroll]
   - Header height: [px]

5. FORM RESPONSIVE BEHAVIOR

   Mobile:
   - Inputs: [full width]
   - Labels: [above inputs]
   - Help text: [below inputs]
   - Error messages: [below inputs]
   - Buttons: [full width or stacked vertically]
   - Min height for inputs: [48px for touch]

   Tablet:
   - Inputs: [full width in single column, OR 2 columns if layout allows]
   - Buttons: [auto-width, side-by-side if 2+ buttons]

   Desktop:
   - Inputs: [width as designed]
   - Buttons: [as designed]
   - Help text: [beside inputs or below, as designed]
   - Multi-column layouts: [as designed]

6. RESPONSIVE IMAGE HANDLING

   Images in cards/sections:
   - Mobile: [width: 100%, height: auto]
   - Tablet: [width: 100%, height: auto, aspect-ratio maintained]
   - Desktop: [width: specified, height: auto or fixed]
   
   Aspect ratios:
   - Hero images: [e.g., 16:9]
   - Card images: [e.g., 16:9 or 4:3]
   - Thumbnail images: [e.g., 1:1]
   - Full-width images: [max-width: container max-width]

7. MODAL/DIALOG RESPONSIVE BEHAVIOR

   Mobile:
   - Width: [90vw or 100% with 16px padding]
   - Height: [auto, 90vh max]
   - Position: [center or bottom sheet]
   - Animation: [slide up or fade in]

   Tablet:
   - Width: [70vw or 500px]
   - Height: [auto]
   - Position: [center]

   Desktop:
   - Width: [600px or as designed]
   - Height: [auto]
   - Position: [center]

8. TOUCH TARGET SIZING

   Minimum sizes (WCAG AAA):
   - Buttons: 44px × 44px (or 48px × 48px)
   - Links: 44px minimum height with padding
   - Form fields: 44px minimum height
   - Checkboxes/radios: 44px × 44px touch target
   - Spacing between targets: 8px minimum

9. OVERFLOW & SCROLLING BEHAVIOR

   - Horizontal scrolling: [avoid on mobile, yes on tablet/desktop if needed]
   - Vertical scrolling: [always enabled]
   - Scroll momentum: [inertia scrolling on iOS]
   - Sticky elements: [sticky header on mobile?, when]
   - Scroll snap: [yes/no, when]

--- ANIMATIONS & TRANSITIONS ---

10. ANIMATION PRINCIPLES
    - Duration: [list of standard durations used]
    - Easing: [list of standard easing functions]
    - Transform vs Opacity: [when to use each]
    - GPU acceleration: [CSS properties that should use transform]
    - Performance: [no animation on scroll, use will-change sparingly]

11. STANDARD ANIMATION TIMINGS

    Define for your project:
    - Fast interactions (button hover): [150ms]
    - Standard transitions (modal open): [250ms]
    - Slow animations (page transitions): [500ms]
    - Easing function (entrance): [cubic-bezier(0.16, 1, 0.3, 1)]
    - Easing function (exit): [cubic-bezier(0.16, 1, 0.3, 1)]
    - Easing function (bounce): [cubic-bezier(0.34, 1.56, 0.64, 1)]

12. COMPONENT ANIMATIONS

    Button:
    - Hover: [animation description, duration, easing]
    - Active: [animation description, duration, easing]
    - Loading: [spinner rotation duration, easing]

    Link:
    - Hover: [underline fade-in or color shift, duration, easing]

    Card:
    - Hover: [lift (translateY), shadow deepening, duration, easing]
    - Focus: [outline appearance, duration]

    Modal:
    - Enter: [fade-in + slide-up or zoom, duration, easing]
    - Exit: [fade-out + slide-down or zoom, duration, easing]

    Dropdown:
    - Open: [fade-in + slide-down, duration, easing]
    - Close: [fade-out + slide-up, duration, easing]

    Tab Panel:
    - Switch: [fade-in/out or slide, duration, easing]

    Loading Spinner:
    - Rotation: [360deg rotation, duration, infinite]
    - Pulse (skeleton): [opacity 0.5-1.0, duration, infinite]

    Page Transition:
    - Enter: [fade-in or slide, duration, easing]
    - Exit: [fade-out or slide, duration, easing]

13. SCROLL ANIMATIONS

    Parallax:
    - Yes/no, where used, intensity

    Fade on Scroll:
    - Yes/no, how triggered

    Animate In View:
    - Yes/no, which elements, timing

    Sticky Elements:
    - Header sticky on scroll: [how it animates]
    - Sidebar sticky: [how it behaves]

14. MICROINTERACTIONS

    Form Input Focus:
    - Border color change: [duration]
    - Box-shadow glow: [duration]
    - Label animation (if floating): [duration]

    Form Validation:
    - Success checkmark: [fade-in, slide-in, or pop-in]
    - Error shake: [yes/no, if yes how severe]
    - Error message: [fade-in or slide-down]

    Button Click Feedback:
    - Scale down (pressed): [duration, scale amount]
    - Ripple effect: [yes/no, if yes duration and spread]

    Notification:
    - Appear: [slide-in from top/bottom or fade-in]
    - Disappear: [slide-out or fade-out]
    - Duration on screen: [seconds]

    Loading States:
    - Skeleton pulse: [opacity range, duration]
    - Spinner: [rotation speed]
    - Progress bar: [how it animates, rate of progress]

15. ACCESSIBILITY: RESPECT prefers-reduced-motion

    Specification:
    ```css
    @media (prefers-reduced-motion: reduce) {
      /* When user prefers reduced motion: */
      - [Remove all animations]
      - [Remove all transitions]
      - [Keep essential visual changes (state, focus)]
      - [Duration: 0ms for everything]
    }
    ```

    What to disable:
    - Hover animations: [yes/no]
    - Page transitions: [yes/no]
    - Scroll animations: [yes/no]
    - Auto-playing content: [yes/no]
    - Parallax: [yes/no]

    What to keep:
    - State changes (visible/hidden): [keep instant]
    - Focus indicators: [keep visible]
    - Required transitions: [specify which]

16. PERFORMANCE GUIDELINES

    - Use transform instead of left/top for animations
    - Use will-change sparingly (max 3-5 elements)
    - Avoid animating expensive properties (width, height)
    - Debounce scroll listeners
    - Use IntersectionObserver for scroll-triggered animations
    - Test performance on low-end devices
    - No animation should cause jank (target 60fps)

Provide all animations as CSS code or animation descriptions ready for implementation. 
Include keyframes examples. Make it immediately implementable.
```

---

## How to Submit These Prompts

**Option 1: One at a Time (Recommended)**
- Submit one prompt per conversation
- Let Claude complete each task fully
- Download the output
- Move to next prompt

**Option 2: All at Once**
- Copy all prompts into one message
- Let Claude work through them
- Takes longer but gives complete output

**Estimated Timeline:**
- Prompt 1 (Colors): 4-5 hours
- Prompt 2 (Typography): 4-5 hours
- Prompt 3 (Spacing): 3-4 hours
- Prompt 4 (Components): 8-10 hours
- Prompt 5 (Responsive/Animation): 6-8 hours

**Total:** 25-32 hours of Claude work = 1 week part-time

---

## Next Steps After Prompts

1. **Day 1-7:** Submit prompts to Claude, collect outputs
2. **Day 8:** Review all outputs for completeness
3. **Day 9-10:** Share outputs with design + development team
4. **Day 11-14:** Move to Lovable for prototyping (with complete specs)

---

**🎉 With these prompts and Claude's help, you'll have production-ready specifications in 1 week!**
