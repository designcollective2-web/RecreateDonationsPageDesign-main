# Project Brief — Street Hearts Bulgaria Donation Page (React Prototype)

Purpose: hand this to Claude Code as the starting context for turning the approved Figma Make design into a real, working React prototype — actual code, not a Figma preview.

---

## 0. Starting point — real exported code, not a rebuild

You already have the Figma Make code exported and pulled locally. This changes the whole approach: Claude Code should treat this local export as the real starting codebase, not reconstruct anything from screenshots. Point Claude Code at this local folder first thing.

First actions for Claude Code, before touching anything else:
1. Open the local export and identify what it actually is — plain React components, React + Tailwind, or something else. Figma Make exports commonly come out as React + Tailwind; confirm which, since it changes how §1 (tech stack) below applies.
2. Run it locally (`npm install` + whatever dev script exists) and confirm it actually renders before making any changes.
3. Read through the component structure once, fully, before editing — Figma Make exports are sometimes verbose, have unused Figma-specific wrapper divs, or split things into oddly-granular components. Get a clear picture first, don't start patching blind.
4. Extract the **real** design tokens (exact hex colors, font-family names, spacing values) directly from this code — this replaces the approximated tokens in §3 below entirely. Update §3 with the real values once known.

Only if the local export turns out to be unusable (broken, incomplete, or not real code — e.g., just static assets) should you fall back to browser-inspection or screenshot reconstruction as described further below.

---

## 1. Tech stack — confirmed from AGENTS.md

- **React 19 + Vite 8 + Tailwind CSS v4** (via `@tailwindcss/vite` plugin — no `tailwind.config.js` or PostCSS config needed, this is Tailwind v4's new setup).
- **Package manager: pnpm** (not npm — `pnpm-lock.yaml` is present). Use `pnpm install` and `pnpm dev`, not `npm install`/`npm run dev`.
- Entry point: `src/main.tsx` → mounts `src/App.tsx`, imports `src/index.css`.
- Global styles/tokens (fonts, `@font-face`, Tailwind theme customization) belong in `src/index.css` — this file already does `@import 'tailwindcss';` at the top; keep that import first if editing it.
- `@` is aliased to `src/` in `vite.config.ts` — use that alias in imports rather than long relative paths.
- Formatter: `oxfmt`.
- **Keep using Tailwind utility classes directly in JSX** — don't introduce plain CSS custom properties or a different styling system. This overrides the earlier fallback plan in §3 below; §3 now exists only as a naming reference for tokens, to be expressed as Tailwind classes/theme values, not raw CSS variables.
- **No backend.** Forms should show real UI state and interaction, but "Pay by Card" / "Continue with PayPal" buttons should just log to console or show a placeholder state — no real payment integration.
- **Component-per-section structure** — one component per page section (see §4). Check `src/App.tsx` first to see how it's currently organized before restructuring anything.

A note on the dev server: AGENTS.md says a dev server is "already running" — that's true only inside the Figma Make environment itself. Running this locally, start it yourself with `pnpm install` then `pnpm dev`, and open the local URL it prints (usually `http://localhost:5173`).

---

## 2. Source material to reference

- Live Figma Make preview: `https://banana-saint-51551840.figma.site/` (view manually — it blocks automated scraping via robots.txt, so if no browser-automation tool is connected, take fresh screenshots of every section at both desktop and mobile widths before starting).
- The structural wireframe (`donations-page-wireframe-v4-reconciled-en.html`) — defines section order and the reasoning behind it. Open it in a browser; it's a low-fidelity reference for structure and content, not visual style.
- The client-facing concept document (`streetheartsbg-redesign-concept.docx`) — explains *why* each section exists and why it's ordered the way it is. Useful for getting microcopy and section intent right, not just visuals.

---

## 3. Design tokens

These are placeholder approximations, kept only as a fallback reference. **Since you now have the real exported code, extract the actual values from it (CSS variables, Tailwind config, or inline styles) and replace everything below before relying on it for anything.**

```css
:root {
  /* Brand */
  --color-accent: #b8433f;       /* primary CTA red — "Pay by Card" button */
  --color-bg-hero: #6f8f5f;      /* sage green hero/section background */
  --color-bg-hero-soft: #a9c39a; /* lighter green, trust strip background */
  --color-card-bg: #eef3ea;      /* light mint — donation card background */
  --color-ink: #1a1a1a;
  --color-ink-soft: #4a4a4a;
  --color-white: #ffffff;

  /* Type */
  --font-display: "Patrick Hand", "Comic Neue", cursive; /* rounded handwritten headline style — verify exact family from the real code */
  --font-body: -apple-system, "Inter", "Segoe UI", sans-serif;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 40px;
  --space-xl: 64px;

  --radius-card: 12px;
  --radius-pill: 24px;
}
```

---

## 4. Page structure to build, in order

Each is its own component. Behavior notes included where relevant.

1. **Hero** — headline ("Every Donation Helps Save a Life"), intro paragraph, "Official NGO" / "Tax Deductible" badges, two overlapping polaroid-style dog photos with hand-drawn "HELP US" arrow/label, and the donation card:
   - Amount selector (£5 / £25 / £50 / Other) — clicking updates selected state and the CTA button label (e.g., "Pay by Card — £25").
   - Primary button: "Pay by Card". Secondary button: "Continue with PayPal" (with PayPal logo).
   - Small security note below: "Payment is processed securely via PayPal. No PayPal account required to pay by card."

2. **Trust Strip** — 4 stat cells (Year founded, Donation transparency %, Dogs rescued, Success stories). **Known content bug from the Figma Make version to fix:** "Dogs was rescued" and "Success stories" currently show the identical number (1500+) — use two distinct, clearly different numbers (or clarify they're intentionally the same with different labels — flag this to me if unclear rather than guessing).

3. **Active Campaigns** — two cards side by side (Donaze, GoFundMe), each with a small circular progress indicator, title, short description, and a "Donate Now" button. **Build this as data-driven** (an array of campaign objects mapped to cards), not hardcoded markup — the real requirement is that this section can show 1 card, 2 cards, or hide entirely depending on how many campaigns are currently active, without layout code changes.

4. **Monthly Support (Patreon)** — left: Patreon badge, heading, copy, 3 checkmark benefits, "Become a Monthly Supporter" button. Right: "Little Miss Story" — a linear (not zig-zag) timeline of 3 photo moments with labels ("Day 1 — When she arrived" / "2 Months Later" / "Today"), each with a short caption. **Reading order must be strictly top-to-bottom or left-to-right, never diagonal/crossing** — this was a specific fix requested after reviewing an earlier version where the eye had to jump between columns unpredictably. Add a small caption line connecting the story explicitly to monthly giving (e.g., "Made possible by our monthly supporters").

5. **Bank Transfer** — collapsed accordion by default ("Prefer a direct bank transfer?"). Expanded state shows: Account holder, IBAN, Bank name, each with a "copy" button (real clipboard copy functionality), plus a short trust line and a note to include the donor's name in the transfer reference. **Known content bug to fix:** the IBAN field must show actual bank account placeholder content, not text copied from the corporate sponsorship page's eligibility field.

6. **Support Our Work Your Way** — two product cards (Buy a Gift, Buy Our Book), each with image, short copy, and a "Browse" button.

7. **FAQ** — accordion, 6 donation-specific questions (payment methods, monthly giving, where funds go, confirmation, bank transfer, currency). Only one item open at a time is fine, but not required.

8. **Corporate cross-promo banner** — short closing section: "Represent a company?" with a link/button to the corporate sponsorship page.

---

## 5. Responsive requirements

- Single-column stacking on mobile for every section.
- Hero: text and badges above, polaroid photos next, donation card last, in that order on mobile (do not let the donation card get pushed below the polaroid photos — the form must stay high in the reading order even when stacked).
- Active Campaigns: 2 cards → 1 column on mobile.
- Monthly Support: left/right columns stack vertically on mobile, in a fixed top-to-bottom order (Patreon card first, then the story timeline, or vice versa — pick one and keep it consistent, don't let them interleave).
- Verify at common breakpoints (~375px, ~768px, ~1024px, ~1440px).

---

## 6. Recommended build workflow for Claude Code

1. Run the local export as-is first, confirm it renders (per §0), before changing anything.
2. Confirm design tokens (§3) against the real code — replace the placeholder values entirely.
3. Compare the export's existing sections against the list in §4 — note what already exists, what's missing, and what needs behavior added (accordions, data-driven Active Campaigns, working amount selector, copy-to-clipboard).
4. Build/fix missing pieces section by section, in the order listed in §4.
5. After each section, run the dev server and take a screenshot; compare side-by-side against the corresponding Figma Make screenshot before moving to the next section.
6. Once all sections match, do a full responsive pass at the breakpoints in §5.
7. Final pass: confirm both known content bugs (§2's Trust Strip duplicate number, §4's IBAN placeholder text) are fixed, not just carried over from the export.
8. Do a final read-through against `streetheartsbg-redesign-concept.docx` to confirm section order and copy intent still match what was actually built.

---

## 7. What "done" looks like

A running local Vite dev server showing all 8 sections, responsive at the breakpoints above, with working accordions, a working amount selector, working copy-to-clipboard on the bank details, and the two known content bugs fixed — visually close to the Figma Make design, not a pixel-perfect clone on the first pass. Treat the first full build as a draft to review together, not a final delivery.
