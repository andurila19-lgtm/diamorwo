---
name: Javanese Haute Editorial
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d3'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e1'
  surface-container-highest: '#eae1dc'
  on-surface: '#1f1b18'
  on-surface-variant: '#4d4639'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#7f7668'
  outline-variant: '#d1c5b5'
  surface-tint: '#755a21'
  primary: '#755a21'
  on-primary: '#ffffff'
  primary-container: '#b89758'
  on-primary-container: '#443000'
  inverse-primary: '#e6c27e'
  secondary: '#645d57'
  on-secondary: '#ffffff'
  secondary-container: '#ebe1d8'
  on-secondary-container: '#6a635c'
  tertiary: '#775a1f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba9756'
  on-tertiary-container: '#453000'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea4'
  primary-fixed-dim: '#e6c27e'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5b430a'
  secondary-fixed: '#ebe1d8'
  secondary-fixed-dim: '#cfc5bd'
  on-secondary-fixed: '#1f1b16'
  on-secondary-fixed-variant: '#4c4640'
  tertiary-fixed: '#ffdea6'
  tertiary-fixed-dim: '#e7c17b'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5c4207'
  background: '#fff8f5'
  on-background: '#1f1b18'
  surface-variant: '#eae1dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 34px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.18em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
spacing:
  gutter-mobile: 1rem
  gutter-desktop: 2.5rem
  section-sm: 3rem
  section-md: 5rem
  section-lg: 8rem
  inset-card: 1.75rem
  inset-compact: 0.75rem
---

## Brand & Style

This design system embodies high-end bespoke wedding orchestration rooted in Central Javanese royalty (Solo and Yogyakarta heritage) balanced with contemporary editorial precision. The aesthetic is curated for discerning couples and families seeking timeless dignity, meticulous ritual reverence, and understated modern luxury.

The visual direction rejects generic digital wedding tropes—banishing glowing neon gradients, bubbly rounded cards, and heavy drop shadows. Instead, it draws from archival high-fashion broadsheets, museum monographs, and architectural line art:
- **Tone:** Poised, sacred, quiet luxury, culturally grounded, impeccably tailored.
- **Visual Tenets:** Generous architectural margins, razor-sharp hairline borders, warm alabaster textures, confident contrast between stately serif headlines and disciplined geometric body text.

## Colors

The palette is derived directly from royal Javanese metallurgy, polished teak, and unbleached cotton (*kain mori*):

- **Primary Champagne Gold (`#B89758`) & Deep Muted Ochre (`#A38243`):** Reflects authentic Javanese *prada* gold leaf and kris hilt detailing. Reserved for focal brand moments, crests, selected key interaction states, and refined ornamental dividers.
- **Deep Warm Charcoal & Espresso (`#26221F`, `#453F39`):** Substitutes harsh true black with deep organic carbon, reminiscent of natural river stone and aged *keraton* ironwood.
- **Ivory & Alabaster Foundation:** Base page surface sits at `#FAF8F5`, alternating with inset container tiers of `#F5F1EB` and `#EFECE6`.
- **Structural Hairline Taupe (`#E4DDD3`):** Neutral framing color for 1px razor-sharp layout grids, tab bars, and editorial separators.

## Typography

The typographic hierarchy juxtaposes monumental editorial serifs with crisp, highly legible geometric sans-serifs.

- **Editorial Serifs (Playfair Display):** Conveys the grandeur of royal court invitations, ceremony schedules, and package titles. Large titles should utilize classic italic accents for dates, foreign/Javanese terminology (*Siraman*, *Midodareni*, *Panggih*), or poetic sub-headers.
- **Functional Sans (Plus Jakarta Sans):** Balances ceremonial weight with contemporary Indonesian clarity. Used for logistical breakdowns, body text, form elements, and tabular data.
- **Uppercase Tracking:** Section eyebrows, navigational links, and status tags strictly use `label-caps` with wide letter-spacing (`0.18em`) to mirror luxury catalog curation.

## Layout & Spacing

The layout adopts a disciplined 12-column architectural grid inspired by coffee-table monographs.

- **Rhythm & Whitespace:** Generous vertical intervals (`section-md` and `section-lg`) give ceremony packages and imagery room to breathe. Avoid dense dashboard clustering.
- **Asymmetric Offsets:** Hero segments and testimonial features utilize asymmetrical 5-column / 7-column splits, interweaving photography with gold-accented typography.
- **Responsive Adaptations:**
  - **Desktop (1200px+):** 12 columns, 40px gutters, max layout container of 1320px, framed by subtle outer rules.
  - **Tablet (768px - 1199px):** 8 columns, 24px gutters, balanced side paddings of 32px.
  - **Mobile (< 768px):** 4 columns, 16px gutters, 20px page margin. High-density stacked editorial cards separated by 1px horizontal borders.

## Elevation & Depth

This design system avoids blurry drop shadows, neumorphic bulges, and high-gloss skeuomorphism. Depth is communicated strictly via **tonal stratification and linear containment**:

1. **Base Surface:** Level 0 sits on warm alabaster (`#FAF8F5`).
2. **Structural Boundaries:** Visual division is created with 1px solid hairline borders in `#E4DDD3` rather than elevated shadow casts.
3. **Elevated Overlays & Modals:** When dialogs or planning drawers appear, they utilize crisp opaque surfaces (`#F5F1EB`) defined by a dual-tone 1px perimeter outline (`#B89758` at 30% opacity overlaying `#E4DDD3`) paired with an ultra-diffused, ambient scrim (`#26221F` at 40% opacity).
4. **Hover States:** Interactivity does not lift elements into the Z-axis; it transitions background fills from alabaster to pale parchment (`#EFECE6`) or introduces subtle gold accent boundaries.

## Shapes

The shape grammar is uncompromisingly sharp (`roundedness: 0` or razor-fine 2px maximum where soft tactile response is required for micro-interactions). 

- **Containers & Framing:** Pure 90-degree corners evoke archival photo mats, framed portraits, and premium letterpress stationery.
- **Image Treatments:** Photography must feature strict rectilinear crops, occasionally paired with an inner 1px inset border in `#FAF8F5` to emulate gallery-framed art.

## Components

### Buttons
- **Primary:** Solid deep warm charcoal (`#26221F`) fill with ivory (`#FAF8F5`) uppercase typography, 0px border radius, 14px vertical padding, 28px horizontal padding. On hover: shifts smoothly to muted champagne gold (`#B89758`).
- **Secondary / Outline:** Transparent background, 1px solid `#B89758` border, text in `#453F39`. On hover: `#FAF8F5` surface with subtle background tint of `#F5F1EB`.
- **Text Link / Editorial CTA:** Uppercase `label-caps` tracking with an animated 1px underline anchored 4px below text, rendered in `#B89758`.

### Form Fields & Inputs
- Minimalist underline or 1px boxed style in `#E4DDD3`.
- Background in `#FAF8F5` (or pure `#FFFFFF` within darker alabaster panels).
- Active/Focused state: 1px crisp outline in `#B89758`, with floating labels moving into `label-caps` hierarchy. No blue or bright browser focus rings.

### Cards & Editorial Containers
- Inset cards feature sharp 0px corners, 1px perimeter borders (`#E4DDD3`), and `#F5F1EB` background.
- Cards host clear content segregation: category eyebrow in uppercase gold, title in serif Playfair Display, and metadata separated by a subtle 1px divider rule.

### Checkboxes & Radios
- Sharp square checkboxes and circular radios bounded by a 1px `#453F39` hairline border.
- Selected state fills with solid gold `#B89758` with a central alabaster glyph.

### Dividers & Ritual Milestones
- Custom ornamental horizontal hairlines with a central diamond or botanical crest node in `#B89758`, paying homage to Solo/Yogya court symmetry without clutter.