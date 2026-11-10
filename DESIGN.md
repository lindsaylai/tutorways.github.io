---
name: TutorWays
description: The TW mark as a route. One thick square-ended stroke runs down the page through the brand's three grounds.
colors:
  ink: "#14172B"
  light: "#F4F5F7"
  coral: "#F0553A"
  white: "#FFFFFF"
  ink-soft: "#3A3F5C"
  light-soft: "#C4C8D8"
  rule-light: "#D9DCE5"
  rule-ink: "#2C3150"
typography:
  display:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline-story:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title-small:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(1.4rem, 1.9vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
  nav:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.2
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.88em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  stem: "clamp(14px, 3.4vw, 56px)"
  stem-left: "clamp(16px, 9vw, 150px)"
  col: "calc(var(--stem-left) + var(--stem) + clamp(20px, 3.6vw, 64px))"
  station: "calc(var(--stem) + clamp(16px, 2vw, 28px))"
  fillet: "calc(var(--stem) * 1.5)"
  section-y: "clamp(96px, 11vw, 176px)"
  step-y: "clamp(28px, 4vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.light}"
  button-coral:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-coral-hover:
    backgroundColor: "{colors.light}"
    textColor: "{colors.ink}"
  link-action:
    typography: "{typography.action}"
    padding: "8px 0 6px"
  header-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    rounded: "{rounded.none}"
    height: "max(64px, calc(var(--stem) * 1.6))"
  station:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    size: "{spacing.station}"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  panel-terminal:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    rounded: "{rounded.none}"
---

# Design System: TutorWays

<!-- PENDING USER CONFIRMATION: the fillet rule. The direction contract originally specified U-bends where grounds change; the builder amended OWN-WORLD and FORM to quarter-circle fillets, and that amendment has not been signed off. This file records the build as shipped (fillets). If the user restores U-bends, update Shapes, the Route component and The Mark's Curves Rule. -->

## Overview

**Creative North Star: "The Route"**

The TutorWays mark is a T whose stem drops and bends into a W. The system treats that stem as a route: one thick stroke, square at its ends, runs down the left of the page from the header to the footer, and every section hangs off it. The header's ink bar is the T's crossbar, centred on the stroke. Each surface the tutor reaches is a stop on the line. Where the page changes ground, the stroke widens into the next ground through quarter-circle fillets, and at the foot of the page the route closes as the TW mark itself.

The world is built from the brand's three avatar grounds (Light, Ink, Coral) used as full-bleed bands in sequence, Outfit ExtraBold display (the wordmark's own face) over Atkinson Hyperlegible text, and hard rectangular geometry everywhere except the curves that belong to the mark. It is plain and confident: big tight headlines, generous vertical rhythm, thin rules between list rows, no ornament that is not the route. Density is low in the narrative and moderate inside the mock product panels, which carry real tutor replies.

Motion follows the stroke. The route draws on with scroll where the browser supports scroll-driven animation, steps activate one at a time as they cross a line near mid-viewport, and every effect has a static, fully drawn fallback.

**Key Characteristics:**
- One stroke, square terminals, weight one sixth of the mark's width, always in the colour that contrasts with its ground.
- Three grounds in sequence: Light, Ink, Coral; never a gradient between them.
- Every content column aligns to a single left edge set by the stroke.
- No rounded corners on any box; the only curves are the mark's semicircles and the fillets.
- Coral is scarce: the Ferret ground, the one final primary action, the active stop, the focus ring.

## Colors

Three brand colours carry the system; four quiet neutrals handle secondary text and rules on each ground.

### Primary
- **Route Ink** (#14172B): the page's anchor. Text on Light and Coral grounds, the Ink ground itself, the header bar, the stroke on Light and Coral, primary buttons, panel borders.

### Secondary
- **Signal Coral** (#F0553A): the Ferret section's ground, the final "Read the docs" button on Ink, the active station's border and ring, the active step's link underline, and the focus outline. Text on Coral is always Ink.

### Neutral
- **Paper Light** (#F4F5F7): the default page ground, text and stroke on Ink, the inner background of mock posts and code.
- **Card White** (#FFFFFF): only for surfaces that sit on a ground: stations, mock product panels, surface-logo tiles.
- **Slate** (#3A3F5C): secondary text on Light (ledes, group labels, captions); also the primary button hover.
- **Mist** (#C4C8D8): secondary text on Ink.
- **Rule Light** (#D9DCE5): hairline rules between rows on Light.
- **Rule Ink** (#2C3150): hairline rules on Ink. On Coral, rules are Ink at 25% alpha.

### Named Rules
**The Contrast Stroke Rule.** The stroke always takes the colour that contrasts with its ground: Ink on Light and Coral, Light on Ink. Each ground sets `--route`, `--soft` and `--rule` together; components read those, never a fixed colour.

**The Scarce Coral Rule.** Inside Light and Ink sections Coral marks only the active stop and focus. It becomes a ground once (Ferret) and a button once (the closing primary action). Coral is never used for text on Light or Ink.

## Typography

**Display Font:** Outfit (with Avenir Next, sans-serif), self-hosted at 500, 700, 800
**Body Font:** Atkinson Hyperlegible (with Segoe UI, system-ui), self-hosted at 400, 400 italic, 700
**Label/Mono Font:** ui-monospace stack for code, commands and terminal output

**Character:** Outfit ExtraBold is the wordmark's letterform, so headlines read as the brand speaking; Atkinson Hyperlegible keeps the explanatory text plain and accessible.

### Hierarchy
- **Display** (800, clamp 2.75 to 6rem, 0.98): the hero headline only, capped at about 11ch.
- **Headline** (800, clamp 2.4 to 4.5rem, 1): section headlines for Benchmark, Ferret and Close, 12 to 14ch.
- **Headline, story** (800, clamp 2.1 to 3.75rem, 1.02): the two surface-story section heads, which sit above a long run of steps.
- **Title** (800, clamp 1.6 to 2.4rem, 1.05): each step's surface name.
- **Title, small** (800, clamp 1.4 to 1.75rem, 1.15): the hero picker's question.
- **Lede** (400, clamp 1.125 to 1.3rem, 1.55): the paragraph under the hero and Ferret headlines, about 46 to 52ch.
- **Body** (400, 1.125rem, 1.55): running text, 54 to 60ch.
- **Action** (Outfit 700, 1.05 to 1.1rem, 1): buttons, underlined action links, definition terms, panel title bars.
- **Nav** (Outfit 500, 1.05rem, 1): header and footer links.
- **Label** (Atkinson 700, 0.85 to 0.95rem, 1.2, sentence case): group headings in the picker and the "Students ask" line, in the ground's soft colour.

### Named Rules
**The Wordmark Voice Rule.** Every heading is Outfit 800 with negative tracking (about -0.02em) and balanced wrapping. Outfit at 500 and 700 is reserved for navigation and actions; it never sets paragraphs.

**The Sentence Case Rule.** Labels are short, bold, sentence case and sit inside the content they describe. No uppercase tracking, no labels floating above headlines.

## Layout

The page is a single vertical route. The stroke sits at `stem-left` from the viewport edge with width `stem`; every section's content starts at `col` (stroke, plus a gap of 20 to 64px), so headlines, steps, picker rows and footer text share one left edge. The right edge is the `gutter`.

- **Hero:** two columns (about 1.55 : 1), headline and lede left, the surface picker right, bottom-aligned.
- **Surface stories:** at 960px wide and 620px tall and above, steps run in the left column at 72svh each, and a sticky stage (14svh from the top) on the right swaps the matching product panel. Below that, each panel drops inline under its own step and steps are divided by hairline rules.
- **Benchmark, Ferret:** two columns, text and figure, vertically centred, with large section padding (96 to 176px).
- **Footer:** the stroke stops short of the TW mark by the mark's own T-to-W gap, and the mark sits centred on the stroke's axis.

Breakpoints: 960px (two columns and the sticky stage), 640px (header bar goes full width, the footer mark shrinks to 64px and moves to the left edge), 420px (the in-page "Surfaces" nav link drops). All spacing is fluid `clamp()`; there is no fixed grid.

### Named Rules
**The One Edge Rule.** All section content aligns to the column set by the stroke. Nothing starts at the gutter except the header's nav and the footer's right-hand links.

## Elevation & Depth

Depth comes from grounds and borders. Flat bands of colour set the stage; the stroke and every structural element are flat. Soft, long, negative-spread drop shadows appear only under mock product panels and the Ferret exchange, so those read as objects lifted off the ground. The active station uses a solid 6px Coral ring, a state marker, not elevation.

### Shadow Vocabulary
- **Panel on Light** (`box-shadow: 0 24px 48px -28px rgba(20, 23, 43, .45)`): mock product panels on the Light ground.
- **Panel on Ink** (`box-shadow: 0 24px 60px -24px rgba(0, 0, 0, .7)`): the same panels on Ink, darker to register.
- **Exchange** (`box-shadow: 0 30px 60px -28px rgba(20, 23, 43, .55)`): the Ferret exchange on Coral.
- **Active ring** (`box-shadow: 0 0 0 6px #F0553A`): the active station only.

### Named Rules
**The Flat Route Rule.** The stroke, the grounds, the header bar, buttons and stations are never shadowed. Lift is for the mock product panels only.

## Shapes

Every box is square-cornered (0px): bars, buttons, stations, panels, logo tiles, code chips. Borders are heavy where they are structural (2px panel frames, 3px action underlines, 4px station borders, a 6px rule capping the picker) and 1px where they only divide rows.

The only curves come from the mark. The TW mark's semicircles appear in the mark itself (header wordmark, benchmark diagram, footer). Where the stroke crosses from one ground into another, it meets the boundary through quarter-circle fillets of radius 1.5 x stem, so the stroke appears to pour into the next ground (bottom of a section) or the next ground narrows into the stroke (top of a section). The fillet rule is pending user confirmation; see the note at the top of this file.

### Named Rules
**The Mark's Curves Rule.** A curve is allowed only if it is one of the mark's own: its semicircles, or the quarter-circle fillet where the stroke meets a ground (pending confirmation). No border-radius on boxes, no pill buttons, no rounded cards.

**The Square Terminal Rule.** The stroke ends square, as the mark's strokes do. It is never capped round.

## Components

### Buttons
Solid, square and heavy-lettered.
- **Shape:** square (0px).
- **Primary:** Route Ink background, Paper Light text, Outfit 700 at 1.1rem, 18px by 26px padding, a trailing 1em arrow or external-link icon.
- **Hover / Focus:** background shifts to Slate (on Coral ground, to Paper Light with Ink text) over 0.2s; focus is the global 3px Coral outline at 3px offset (Ink outline on the Coral ground).
- **Coral:** Signal Coral with Ink text, used once, as the closing primary action on Ink. Hover goes to Paper Light.

### Action links
- **Style:** Outfit 700, inline-flex with a trailing arrow, a 3px underline in the current colour drawn as a bottom border. The arrow slides 4px right on hover.
- **Active step:** the underline turns Coral.
- **Text links** inside prose use a 2px underline at 0.2em offset.

### Navigation
- **Header:** the Ink crossbar holds the white wordmark at 70% of the bar height. The bar's width is twice the stroke's centre line, so the crossbar is centred on the stem. Links are Outfit 500, no underline at rest, underline on hover; external links carry a small out-arrow icon.
- **Mobile:** the bar goes full width, links wrap beneath it at the content column, and a stroke segment continues down from the bar.

### Surface picker
A list, not cards. Each row: a 32px surface logo on a white square tile with a 1px rule, the surface name in Outfit 700 at 1.2rem, an optional "guide coming" note, and an arrow at 40% opacity. Rows are separated by 1px rules. On hover the row indents 8px and the arrow goes to full opacity and moves 4px right. Groups are headed by sentence-case labels in the soft colour.

### Stations
- **Style:** a white square sitting on the stroke's axis, bordered 4px in the route colour, holding the surface logo at 62%.
- **Active:** border turns Coral, scale 1.14, a 6px solid Coral ring, over 0.5s on the route ease.

### Mock product panels
Frames that show a real tutor reply on each surface.
- **Corner Style:** square.
- **Background:** Card White with Ink text, or Route Ink for the terminal.
- **Border:** 2px Ink (Light on the Ink ground); a 2px title bar with the surface logo at 24px.
- **Shadow Strategy:** panel shadows from Elevation.
- **Internal Padding:** 18 to 28px fluid. Code and bot posts sit on Paper Light; captions in Slate at 0.9rem say what is real and what is illustrative.
- **Stage behaviour:** inactive panels fade out and drop 24px; the active one fades in (0.45s opacity, 0.6s transform, route ease). Reduced motion removes the transforms and transitions.

### The Route (signature)
The full-height stroke in each section, the fillets at ground changes, and the TW mark that closes it in the footer. It draws on (scaleY from the top) with the section's view timeline, and the bottom fillets fade in as the section exits. Without scroll-driven animation support, or with reduced motion, it renders fully drawn.

## Do's and Don'ts

### Do:
- **Do** run one square-ended stroke (stem, clamp 14 to 56px) down the page at the same left offset in every section, coloured by the ground (Ink on Light and Coral, Light on Ink).
- **Do** align every section's content to the column set by the stroke.
- **Do** set grounds as full-bleed bands of Light, Ink or Coral, each setting its own route, soft and rule colours.
- **Do** set every heading in Outfit 800 with about -0.02em tracking; set running text in Atkinson Hyperlegible at 1.125rem / 1.55.
- **Do** keep every box square (0px) and use heavy structural borders (2px frames, 3px action underlines, 4px stations).
- **Do** use Coral for the active stop, the focus ring, the Ferret ground and the single closing primary action.
- **Do** ship a static, fully drawn fallback for every scroll effect, and honour reduced motion.
- **Do** use the route ease (`cubic-bezier(.16, 1, .3, 1)`) for state movement.

### Don't:
- **Don't** round any box corner or use pill shapes; curves come only from the mark (its semicircles and the stroke's fillets).
- **Don't** cap the stroke round or draw it thin; it carries the mark's weight.
- **Don't** set Coral text on Light or Ink, or use Coral as decoration inside Light and Ink sections.
- **Don't** shadow the stroke, grounds, header bar, buttons or stations; drop shadows belong to mock product panels.
- **Don't** blend grounds with gradients; ground changes are hard edges met by the stroke's fillets.
- **Don't** add uppercase tracked labels above headlines.
