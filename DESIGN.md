# Plumeria Home — Design System

## Brand Identity

- **Name:** Plumeria Home
- **Tagline:** Serene Lanna Teakwood Homestay
- **Location:** Chiang Mai, Thailand
- **Personality:** Warm, tranquil, authentic, handcrafted
- **Vibe:** Modern Lanna — traditional teakwood warmth meets clean contemporary hospitality

---

## Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Headings | Playfair Display | 600–700 | Page titles, section headers, hero |
| Body | Inter | 300–500 | Paragraphs, nav, labels, cards |
| Accent (decorative) | Playfair Display Italic | 400 | Pull quotes, highlight words in hero |

### Font stack
- Serif: `"Playfair Display", Georgia, Cambria, serif`
- Sans: `"Inter", system-ui, -apple-system, sans-serif`

### Scale
- Hero title: `text-5xl`–`text-6xl` (clamped)
- Section titles: `text-3xl`–`text-4xl`
- Card titles: `text-xl`–`text-2xl`
- Body: `text-sm`–`text-base`
- Meta/labels: `text-xs` uppercase tracking-widest

---

## Color Palette

### Core

| Token | Value | Role |
|-------|-------|------|
| `brand-sand` | `#FDFBF7` | Page background |
| `brand-sand-dark` | `#F6F3EB` | Section alt background, cards |
| `brand-cream` | `#FFFDF9` | Card background, form surfaces |

### Forest (primary)

| Token | Value | Role |
|-------|-------|------|
| `brand-forest` | `#1E3F20` | Text, dark backgrounds, primary buttons |
| `brand-forest-light` | `#2D5830` | Hover state for dark elements |
| `brand-forest-muted` | `#4B6E4D` | Secondary text, subtle borders |

### Wood / Warmth

| Token | Value | Role |
|-------|-------|------|
| `brand-wood` | `#A67C52` | CTAs, icon accents, decorative lines |
| `brand-wood-light` | `#B8926A` | Hover state, active nav indicator |
| `brand-wood-muted` | `#C29E75` | Subtle decorative elements |

### Accents

| Token | Value | Role |
|-------|-------|------|
| `brand-terracotta` | `#C4714A` | Secondary CTAs, highlight badges, price tags |
| `brand-terracotta-light` | `#D48963` | Hover state for terracotta |
| `brand-gold` | `#D4AF37` | Star ratings, premium badges |

---

## Photography Treatment

- **Hero images:** Light gradient overlay (15–25% max), never opaque. Let the photography be the hero.
- **Card images:** `object-cover` with subtle dark gradient at bottom for text legibility. `group-hover:scale-105` zoom.
- **Gallery:** Full-bleed grid, lightbox with `backdrop-blur-md` black overlay.
- **All images are local** — served from `/selected/` directory. No CDN.

---

## Layout

- **Max content width:** `max-w-7xl` (80rem / 1280px)
- **Padding:** `px-4 sm:px-6 lg:px-8`
- **Section spacing:** `py-16`–`py-20`
- **Grid:** 12-column implicit (`grid-cols-12` or nested `grid-cols-1 md:grid-cols-2/3/4`)
- **Cards:** `rounded-2xl`, `shadow-md` resting, `shadow-lg` hover, `border border-brand-forest/5`

### Page structure
1. Navbar (sticky, glassmorphism)
2. Hero / Page header (full-width)
3. Content sections (max-w-7xl centered)
4. Footer (brand-forest background)

---

## Navigation

- Sticky top navbar with glassmorphism effect (`rgba(253, 251, 247, 0.8)` + `backdrop-filter: blur(12px)`)
- Desktop: horizontal links + "Reserve Now" CTA button
- Mobile: hamburger → vertical drawer
- Active page indicated by wood-colored underline indicator
- Page transitions: `animate-fade-in` (0.8s ease-out, 10px translateY)

---

## Components

### Buttons
- Primary: `bg-brand-forest` → `bg-brand-forest-light` on hover, white text, rounded-lg
- Secondary (CTA): `bg-brand-wood` → `bg-brand-wood-light` on hover
- Outline: `border-brand-forest/20` → hover with color shift
- All buttons: `tracking-wide`, `font-semibold`, `transition-all duration-300`, `cursor-pointer`

### Cards
- Background: `bg-brand-cream`
- Border: `border border-brand-forest/5`
- Hover: `shadow-lg`, `border-brand-wood-muted/20`
- Content padding: `p-6 sm:p-8`

### Forms
- Input background: `bg-brand-sand-dark`
- Border: `border-brand-forest/10`
- Focus: `border-brand-wood-light` + ring
- Labels: `text-xs uppercase tracking-wider`

### Badges / Tags
- Distance badges: `bg-brand-wood/10 text-brand-wood text-xs rounded-full px-3 py-1`
- Category tags: colored background indicating type (food, culture, nature)

---

## Animations

- Page entry: `animate-fade-in` (opacity 0→1, Y 10px→0, 0.8s)
- Hover zoom: `group-hover:scale-105` on card images (0.7s)
- Button lift: `hover:-translate-y-0.5` with shadow increase
- Gallery lightbox: `animate-fade-in` on overlay
- Custom scrollbar: thin (8px), sand track, forest-muted thumb

---

## Responsive Breakpoints

- Mobile-first approach
- `sm:` 640px — tablet adjustments
- `md:` 768px — two-column layouts
- `lg:` 1024px — full desktop grid
- Single-column below `md` for most content sections
