# Project Falcon — Design System

**Product Name:** Project Falcon (working title)  
**Design Direction:** Dark mode, neon blue accents, black backgrounds  
**Reference Sites:** permitvantage.com, sosfiler.com (same dark design DNA, shifted palette)  
**Theming:** Multi-tenant — each school gets their own colors/logo within the system

---

## 1. Color Palette

### Core (Platform Default — "Falcon Dark")

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0A0A0F` | Page background (near-black with blue undertone) |
| `--bg-surface` | `#12121A` | Cards, panels, elevated surfaces |
| `--bg-surface-hover` | `#1A1A2E` | Hover states on surfaces |
| `--border` | `#1E1E2E` | Borders, dividers (blue-tinted dark) |
| `--text-primary` | `#F0F0FF` | Headings, primary text |
| `--text-secondary` | `#B0B0CC` | Body text, descriptions |
| `--text-dim` | `#6366A0` | Labels, timestamps, metadata |

### Accent Colors (Neon Blue Family)

| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#4F7AFF` | Primary actions, links, active states |
| `--accent-glow` | `#6B8FFF` | Hover glow, focus rings |
| `--accent-neon` | `#00B4FF` | Highlights, badges, "live" indicators |
| `--accent-cyan` | `#00FFE5` | Success accents, online/active |
| `--accent-dim` | `#4F7AFF20` | Subtle accent backgrounds |

### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--status-success` | `#22C55E` | Pass, complete, active |
| `--status-warning` | `#EAB308` | Attention, pending |
| `--status-error` | `#EF4444` | Fail, overdue, critical |
| `--status-info` | `#3B82F6` | Informational |

### Theming Layer (Per-School Override)

Schools override these tokens for their branded experience:
- `--school-primary` — School's main brand color
- `--school-secondary` — School's accent color
- `--school-logo` — URL to school logo
- `--school-name` — Display name

**CB Example:**
- `--school-primary`: `#8B0000` (Christian Brothers maroon/red)
- `--school-secondary`: `#FFD700` (gold)
- `--school-name`: "Christian Brothers High School"

---

## 2. Typography

### Font Stack
```css
--font-display: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
--font-body: 'Inter', 'SF Pro Text', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
```

### Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 36px / 2.25rem | 700 | 1.1 | Page titles |
| H1 | 28px / 1.75rem | 700 | 1.2 | Section headers |
| H2 | 22px / 1.375rem | 600 | 1.3 | Card titles |
| H3 | 18px / 1.125rem | 600 | 1.4 | Subsection headers |
| Body | 15px / 0.9375rem | 400 | 1.6 | Default text |
| Small | 13px / 0.8125rem | 400 | 1.5 | Labels, metadata |
| Tiny | 11px / 0.6875rem | 500 | 1.4 | Badges, timestamps |
| Mono | 13px / 0.8125rem | 400 | 1.5 | Data, codes, IDs |

---

## 3. Spacing & Layout

### Spacing Scale
```
4px  → micro (badge padding, icon gaps)
8px  → tight (inline element spacing)
12px → compact (card internal padding)
16px → base (standard padding/margin)
24px → comfortable (section spacing)
32px → loose (major section breaks)
48px → spacious (page section padding)
64px → major (hero/header spacing)
```

### Grid
- **Desktop:** 12-column grid, 1280px max-width, 24px gutters
- **Tablet:** 8-column, 16px gutters
- **Mobile:** 4-column, 12px gutters

### Border Radius
```
--radius-sm: 6px   → Buttons, inputs, badges
--radius-md: 10px  → Cards, panels
--radius-lg: 16px  → Modals, dialogs
--radius-full: 9999px → Avatars, pills
```

---

## 4. Component Standards

### Buttons

```
Primary:   bg=--accent-primary, text=#fff, hover=--accent-glow, radius=--radius-sm
Secondary: bg=transparent, border=--border, text=--text-primary, hover=bg --bg-surface-hover
Ghost:     bg=transparent, text=--accent-primary, hover=bg --accent-dim
Danger:    bg=--status-error, text=#fff, hover=darker
Disabled:  opacity 0.4, cursor not-allowed
```

**Sizes:**
- Small: h=32px, px=12px, text=13px
- Medium: h=40px, px=16px, text=14px (default)
- Large: h=48px, px=24px, text=15px

### Cards
```
bg: --bg-surface
border: 1px solid --border
radius: --radius-md
padding: 16px-24px
hover: border-color → --accent-primary (subtle transition 0.2s)
```

### Inputs
```
bg: --bg-primary
border: 1px solid --border
radius: --radius-sm
height: 40px
padding: 0 12px
focus: border-color → --accent-primary, box-shadow 0 0 0 2px --accent-dim
placeholder: --text-dim
```

### Tables (Data-Dense Views)
```
header: bg --bg-surface, text --text-dim, font-size 11px, uppercase, letter-spacing 1px
row: border-bottom 1px solid --border
row-hover: bg --bg-surface-hover
cell-padding: 12px 16px
alternating: none (hover is enough on dark backgrounds)
```

### Navigation (Sidebar)
```
width: 240px (collapsible to 64px icon-only)
bg: --bg-surface
border-right: 1px solid --border
item-height: 40px
item-padding: 0 16px
active: bg --accent-dim, text --accent-primary, left-border 3px solid --accent-primary
hover: bg --bg-surface-hover
icons: 20px, stroke-width 1.5 (Lucide icon set)
```

### Module Tabs / Breadcrumbs
```
Each module gets an icon + label in the sidebar
Active module = accent highlight
Sub-navigation within module = horizontal tabs or nested sidebar items
Breadcrumb: Home > Module > Section > Detail (text-dim, last item text-primary)
```

---

## 5. Data Visualization

### Charts
- Use `--accent-primary`, `--accent-neon`, `--accent-cyan` for series
- Dark grid lines: `--border`
- Tooltip bg: `--bg-surface`, border: `--border`
- Text on charts: `--text-dim` for labels, `--text-primary` for values

### Status Indicators
```
Dot: 8px circle with matching status color + subtle glow (box-shadow 0 0 6px)
Badge: pill-shaped, bg=status-color at 20% opacity, text=status-color
Progress bar: height 4px, bg --border, fill --accent-primary
```

---

## 6. Animation & Motion

```
--transition-fast: 0.15s ease
--transition-base: 0.2s ease
--transition-slow: 0.3s ease

Hover states: --transition-fast
Panel open/close: --transition-base
Page transitions: --transition-slow
Loading: pulse animation (opacity 0.4 → 1.0, 2s infinite)
```

**Principle:** Subtle and functional. No gratuitous animations. Motion should communicate state changes, not decorate.

---

## 7. Responsive Breakpoints

```
--bp-mobile: 640px
--bp-tablet: 768px
--bp-desktop: 1024px
--bp-wide: 1280px
--bp-ultra: 1536px
```

### Mobile Adaptations
- Sidebar collapses to bottom tab bar (5 items max)
- Cards stack vertically
- Tables become card-list views
- Touch targets minimum 44px

---

## 8. Iconography

**Icon Set:** Lucide (open source, consistent stroke-width)
- Size: 20px default, 16px small, 24px large
- Stroke width: 1.5px
- Color: inherits from text color

### Module Icons
| Module | Icon |
|--------|------|
| Core SIS | `graduation-cap` |
| LMS | `book-open` |
| Advancement | `trending-up` |
| Finance | `credit-card` |
| Admissions | `user-plus` |
| Marketing | `megaphone` |
| Communication | `message-circle` |
| Athletics | `trophy` |
| Analytics | `bar-chart-3` |
| Events | `calendar` |
| IT/SSO | `shield` |
| Settings | `settings` |

---

## 9. Multi-Tenant Theming

### How It Works
The platform ships with "Falcon Dark" as default. Each school tenant overrides CSS custom properties:

```css
/* CB Theme Override */
:root[data-tenant="cbhs"] {
  --school-primary: #8B0000;
  --school-secondary: #FFD700;
  --school-logo: url('/tenants/cbhs/logo.png');
}
```

### What Schools Can Customize
- Primary + secondary brand colors
- Logo (sidebar + login page)
- Login page hero image
- School name display
- Optional: light mode toggle (if requested — we build dark-first)

### What Stays Constant (Platform Identity)
- Layout structure
- Component behaviors
- Navigation patterns
- Typography (Inter)
- Spacing system
- Icon set

---

## 10. Accessibility

- **Contrast:** All text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
- **Focus states:** Visible focus rings on all interactive elements (--accent-glow)
- **Screen readers:** ARIA labels on all icons, proper heading hierarchy
- **Keyboard:** Full keyboard navigation, skip-to-content link
- **Reduced motion:** Respects `prefers-reduced-motion` — disables animations
- **Color blindness:** Status indicators use icons + text in addition to color

---

*This design system is the law. Every module, every screen, every component follows these rules. Consistency is what makes 28 replaced systems feel like one platform.*
