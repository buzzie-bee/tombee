# Design System

Living design reference for tombee.io. References shadcn CSS variables and Tailwind utilities only — no hardcoded values.

## Principles

1. **Tonal layering over borders** — use `background`/`muted`/`card` shifts for depth instead of structural borders
2. **Generous whitespace** — large spacing between sections, content breathes
3. **Typographic hierarchy via weight and tracking** — size, weight, and letter-spacing create hierarchy, not extra font families
4. **Subtle elevation** — ambient diffused shadows and backdrop blur for nav/overlays, never harsh drop shadows
5. **Sharp minimal components** — small border radii, slow transitions, no heavy decoration
6. **Intentional asymmetry** — offset and varied layouts over rigid symmetrical grids

## Colour

Use the shadcn palette tiers. Never hardcode colour values.

| Role | Variable | When to use |
|------|----------|-------------|
| Page background | `background` | Default page/section background |
| Surface | `card` | Elevated containers, cards |
| Subtle background | `muted` | Secondary sections, subtle differentiation |
| Primary action | `primary` | CTAs, links, interactive highlights |
| Accent | `accent` | Hover states, active indicators |
| Secondary | `secondary` | Supporting UI, tags, badges |
| Text | `foreground` | Primary text |
| Subdued text | `muted-foreground` | Secondary text, captions, timestamps |
| Borders | `border` | Use sparingly — prefer tonal layering |
| Destructive | `destructive` | Errors, dangerous actions |

Dark mode is handled by the `.dark` class — all variables adapt automatically.

## Typography

**Fonts:**
- **Geist Mono** (`font-mono`) — headings, navigation, UI labels, code, technical content
- **Geist Sans** (`font-sans`) — body text, paragraphs, blog content, project descriptions

**Hierarchy approach:**
- Headings: `font-mono` + heavier weight (`font-bold` / `font-semibold`) + tighter tracking (`tracking-tight`)
- Body: `font-sans` + normal weight + default tracking
- Captions/metadata: `font-mono` + `text-sm` + `text-muted-foreground`
- Code/technical: `font-mono` naturally

**Scale (Tailwind classes):**
- Hero/page title: `text-4xl` / `text-5xl`
- Section heading: `text-2xl` / `text-3xl`
- Subheading: `text-xl`
- Body: `text-base`
- Small/caption: `text-sm`

## Spacing & Layout

- Sections separated by large vertical spacing (`py-16` to `py-24`)
- Content max-width constrained but not centred rigidly — allow offset compositions
- Embrace asymmetry: hero text offset left, images bleed right, varied section layouts
- Inner content spacing: `gap-6` to `gap-8` between related elements
- Generous padding within cards/containers: `p-6` to `p-8`

## Components

Minimal starting notes — will evolve as we build.

- **Border radius**: small (`radius-sm` to `radius-md`), keep things sharp
- **Transitions**: slow and subtle (`duration-300`, `ease-in-out`)
- **Elevation**: prefer `shadow-sm` / `shadow-md` with large blur, avoid hard shadows
- **Backdrop blur**: `backdrop-blur-sm` for overlays and sticky nav
- **Buttons**: shadcn defaults, no custom shapes
- **Cards**: tonal layering (`bg-card`) over bordered containers
