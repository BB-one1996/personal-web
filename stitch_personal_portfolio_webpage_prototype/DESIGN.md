---
name: Technical Precision Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#d2daeb'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#e0e9f9'
  surface-container-highest: '#dae3f4'
  on-surface: '#131c28'
  on-surface-variant: '#434655'
  inverse-surface: '#28313d'
  inverse-on-surface: '#eaf1ff'
  outline: '#737687'
  outline-variant: '#c3c5d8'
  surface-tint: '#0051e0'
  primary: '#0051df'
  on-primary: '#ffffff'
  primary-container: '#2f6bff'
  on-primary-container: '#000318'
  inverse-primary: '#b5c4ff'
  secondary: '#006b5c'
  on-secondary: '#ffffff'
  secondary-container: '#65fade'
  on-secondary-container: '#007262'
  tertiary: '#5c5e64'
  on-tertiary: '#ffffff'
  tertiary-container: '#74777d'
  on-tertiary-container: '#030509'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#65fade'
  secondary-fixed-dim: '#41ddc2'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005045'
  tertiary-fixed: '#e1e2e9'
  tertiary-fixed-dim: '#c4c6cd'
  on-tertiary-fixed: '#191c21'
  on-tertiary-fixed-variant: '#44474d'
  background: '#f8f9ff'
  on-background: '#131c28'
  surface-variant: '#dae3f4'
  canvas-bg: '#F7F8FA'
  surface-card: '#FFFFFF'
  surface-contrast: '#0E1116'
  surface-hover: '#F1F4F9'
  border-subtle: '#E7EAF0'
  text-primary: '#14161A'
  text-secondary: '#5B6472'
  text-tertiary: '#98A1B0'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  metric-stat:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a restrained, highly credible, and data-anchored personal portfolio for an AI Product Manager specializing in ToB/ToG foundation model agents. The aesthetic departs from frivolous consumer decorations and loud crypto/AI neon tropes, anchoring itself in **Modern High-Precision Corporate Minimalism** paired with editorial clarity.

The target audience consists of senior AI executives, hiring managers, and enterprise directors who evaluate candidates on rigorous systems thinking, boundary awareness of LLMs, and measurable execution impact. The interface communicates institutional stability, rigorous engineering empathy, and sharp business acumen through structured layouts, technical mono/tabular data displays, and disciplined spatial rhythm.

## Colors

The color palette operates under a calibrated two-tone contrast logic:
- **Canvas Base (`#F7F8FA`) & Card Surface (`#FFFFFF`)**: Establishes a comfortable, non-fatiguing reading plane with a soft daylight luminance.
- **Rhythmic Dark Inversion (`#0E1116`)**: Reserved strictly for high-impact break moments—terminal-like architectural schematics, final CTA blocks, and code/pipeline containers.
- **Primary Accent (`#2F6BFF`)**: Directs interaction intention (primary CTA, active navigation underline, focal links, focus indicators).
- **Secondary Metric Accent (`#00C2A8`)**: An empirical teal reserved exclusively for quantifiable business wins, model accuracy KPIs (e.g., 93% accuracy, -80% processing time), and system benchmark indicators.
- **Typographic Hierarchy**: Driven by `#14161A` (Primary titles and values), `#5B6472` (Body content and architectural summaries), and `#98A1B0` (Metadata, breadcrumbs, and timestamps).

## Typography

The typography architecture uses **Inter** paired with clean system sans-serifs (PingFang SC, Source Han Sans CN) for unified bilingual harmony. 

Numerical integrity is paramount: all metrics, counts, and statistical achievements must apply `font-feature-settings: 'tnum' on, 'cv05' on, 'cv11' on` (Tabular Numbers) to eliminate column jitter during count-up transitions and across comparison matrices. Body copy retains a relaxed line height of 1.7 to 1.75 (`lineHeight: 28px` for 16px font) to facilitate technical scanability.

## Layout & Spacing

The system enforces a 12-column responsive grid centered within a maximum container width of `1120px`, ensuring dense, authoritative, non-dispersed content consumption:
- **Desktop (≥ 1024px)**: 12 columns, 24px (`1.5rem`) gutters, minimum 32px canvas margins.
- **Tablet (768px – 1023px)**: 8 columns, 16px (`1rem`) gutters, 24px margins.
- **Mobile (< 768px)**: 4 columns, 16px gutters, 20px (`1.25rem`) side margins.

Content layout relies on systematic visual cadence: narrative case studies follow a 4-beat structure (Background & Scope → Concrete PM Actions → Quantified Evidence → Retrospective/Post-Mortem).

## Elevation & Depth

Visual hierarchy uses physical-plane layering without heavy drop shadows:
- **Level 0 (Canvas)**: Background `#F7F8FA` with no elevation.
- **Level 1 (Default Cards & Modules)**: Background `#FFFFFF`, 1px boundary stroke using `#E7EAF0`, elevated by a light, ambient shadow: `0 4px 24px 0 rgba(16, 24, 40, 0.05)`.
- **Level 2 (Hover & Active Drag)**: Translates vertically by `-2px`, transitioning shadow to `0 12px 32px -4px rgba(16, 24, 40, 0.08)`. Interactive cards feature an internal subtle radial spotlight overlay tracking cursor position.
- **Level 3 (Sticky Nav & Modals)**: Floating top bar at 56px height with backdrop blur (`backdrop-filter: blur(12px)`), translucent fill `rgba(247, 248, 250, 0.85)`, and a bottom border `#E7EAF0`.

## Shapes

The design system maintains consistent softness with structured discipline:
- Standard container cards, diagram frame wrappers, and hero media wrappers use a strict **16px** border-radius.
- Interactive elements (buttons, badge tags, form inputs) use **8px** to **10px** corners to avoid overly casual or child-like pill forms while maintaining touch ergonomics.
- System metric tags and status chips retain **6px** radius for crisp, data-terminal alignment.

## Components

### Buttons
- **Primary Button**: Solid `#2F6BFF` background, `#FFFFFF` text, 44px height, 8px radius, horizontal padding 20px. On hover: subtle magnetic micro-movement (≤4px) with luminance shift to `#2558D4`.
- **Secondary Button**: `#FFFFFF` surface, 1px border `#E7EAF0`, text `#14161A`. Hover shifts background to `#F1F4F9` with border `#D5DAE3`.
- **Tertiary / Link**: `#2F6BFF` text with an expanding 1.5px baseline underline emerging from left to right on hover.

### Metric KPI Badges
- Surface container with `#00C2A8` at 10% opacity (`rgba(0, 194, 168, 0.1)`), 1px solid border at 25% opacity, text `#00A38D` (for AAA light-canvas compliance). Always paired with tabular numbers and a directional vector icon.

### Cards
- **Project Showcase Card**: Split or stacked module enclosed in 16px corner geometry. Top or left contains a 16:9 technical schematic or screen capture with a 1px border. Bottom encapsulates the four-point case narrative, hard metric callouts, and clean category chips.
- **Dark Rhythm Hero Card**: Full-width `#0E1116` section block with `#FFFFFF` primary text and `#98A1B0` secondary text, housing architecture schematics or conversion prompts with high-contrast clarity.

### Inputs & Selectors
- Background `#FFFFFF`, 1px stroke `#E7EAF0`, 40px height, 8px radius. Active focus transitions border to `#2F6BFF` accompanied by a 3px ring at 15% opacity (`rgba(47, 107, 255, 0.15)`).

### Navigation Bar
- Top sticky nav initializing at 72px and compressing to 56px on scroll. Incorporates a 2px reading progression bar pinned to the bottom border. Mobile displays switch to an elevated dock or bottom drawer with ≥44px touch targets.