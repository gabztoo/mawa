# MAWA MANAUS Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page MAWA MANAUS homepage that closely reproduces the supplied dark, red-accented studio reference using the provided real photography.

**Architecture:** A lightweight static site with semantic HTML, one stylesheet for the visual system and responsive layout, and one small script for the mobile menu, FAQ accordion, and current-year footer. Assets remain referenced from `mawa_assets/` to preserve their real imagery and avoid unnecessary duplication.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Google Fonts loaded from CSS.

## Global Constraints

- Preserve the reference order: header, hero, services, about/gallery, team, FAQ/contact, footer.
- Use the supplied `mawa_assets/` images as the primary visual source.
- Use a black/graphite/red palette with thin red dividers and high-contrast typography.
- Keep the page responsive from desktop down to narrow mobile widths.
- Do not introduce a framework or build dependency.

---

### Task 1: Create the semantic page structure

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces all section IDs used by navigation: `inicio`, `historia`, `equipe`, `perguntas`.
- References local images using `mawa_assets/<filename>`.

- [ ] Add semantic header/navigation, hero, service panels, about/gallery, team cards, FAQ/contact area, and footer.
- [ ] Add accessible labels, alt text, buttons, and FAQ details with predictable `data-faq` hooks.
- [ ] Include stylesheet and script references plus font imports.

### Task 2: Implement the reference visual system

**Files:**
- Create: `styles.css`

**Interfaces:**
- Styles the markup from `index.html` without requiring component libraries.

- [ ] Define graphite/red color tokens, display/body fonts, page max width, divider styles, buttons, cards, and image treatments.
- [ ] Match the reference's two-column hero, split service cards, dense about mosaic, horizontal team row, and three-column contact block.
- [ ] Add responsive breakpoints that collapse grids and make the header/menu usable on mobile.
- [ ] Add restrained hover/focus states and reduced-motion support.

### Task 3: Add lightweight interactions

**Files:**
- Create: `script.js`

**Interfaces:**
- Uses `.menu-toggle`, `.site-nav`, `[data-faq]`, and `#year` hooks from `index.html`.

- [ ] Toggle the mobile navigation and close it after selecting a link.
- [ ] Toggle FAQ answers while keeping one clear active state at a time.
- [ ] Set the footer year and use smooth in-page navigation when supported.

### Task 4: Verify rendering and source quality

**Files:**
- Inspect: `index.html`, `styles.css`, `script.js`

- [ ] Run `node --check script.js`.
- [ ] Run `git diff --check` when repository metadata is available.
- [ ] Confirm every local image path exists and no placeholder assets are referenced.
- [ ] Check desktop and narrow mobile layout in a browser or static server.
