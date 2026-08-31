Apply only the corrections described below to the existing Street Hearts Bulgaria Donations page.

Do not redesign, restyle, reorder, or rewrite any other part of the page. Preserve all existing content, interactions, animations, colors, typography, spacing, and component structure unless a change is explicitly requested below.

Use the attached screenshots as references:

- Reference 1: current Hero and statistics implementation.
- Reference 2: incorrect campaign chart implementation from Figma Make.
- Reference 3: correct campaign chart design.
- Reference 4: Gift and Book cards.
- Reference 5: Corporate Sponsorship section.

1. HERO AND STATISTICS — FULL-WIDTH BACKGROUNDS

Make the green Hero background extend from the absolute left edge to the absolute right edge of the browser viewport.

Make the lighter green statistics-strip background extend from the absolute left edge to the absolute right edge of the browser viewport as well.

Use a full-bleed section structure:

- The background belongs to the full-width outer section.
- The content remains inside the existing centered max-width container.
- Do not stretch the inner content.
- Do not change the existing content width, column proportions, or element alignment.
- Remove the visible white margins currently appearing on the left and right sides of both backgrounds.

The Hero and statistics strip must remain two separate full-width background areas placed directly one after the other.

2. HERO DONATION FORM — FIX VERTICAL SPACING AND CLIPPING

The donation form card currently has insufficient space below its final helper text and is partially hidden by the statistics strip.

Fix the Hero layout so that:

- The donation form has equal visual padding at the top and bottom.
- All form content, including the security/helper text, remains fully visible.
- The bottom of the form never overlaps with or hides behind the statistics strip.
- The Hero section height grows automatically when the “Other” amount input appears.
- The statistics strip starts only after the complete Hero content has ended.
- Do not use a fixed Hero height that can clip the form.
- Do not use hidden overflow on the Hero or form containers.
- Keep the donation form vertically aligned with the approved design.
- Preserve the existing form width and visual styling.

Use consistent top and bottom internal padding based on the current design-system spacing scale. The space below the helper text should visually match the space above the “DONATE NOW” heading.

3. ACTIVE CAMPAIGN CHARTS — MATCH THE APPROVED DONUT DESIGN

Replace the incorrect filled pie charts shown in Reference 2 with the outlined circular progress charts shown in Reference 3.

The correct chart is a donut-style progress ring, not a filled pie chart.

Each chart must contain:

- A circular light-green background track.
- A darker green progress stroke around the circumference.
- A fully transparent or card-colored centre.
- The percentage value centred inside the ring.
- Rounded or clean progress-stroke ends where supported.
- The same chart diameter, ring thickness, spacing, and alignment shown in Reference 3.

Specific values:

- Donaze: 1%
- GoFundMe: 62%

For 1%, show only a very short dark-green progress segment at the top of the ring. Do not render it as a thin triangular wedge or a radial line.

For 62%, fill 62% of the circular outline clockwise, starting from the top. Do not fill 62% of the circle’s inner area.

Use an SVG circular progress component or an equivalent implementation based on circumference and stroke offset. Do not use a pie-chart component.

When the Active Campaigns section first enters the viewport:

- Animate each progress ring from 0 to its real value.
- Animate the centred percentage number from 0 to the final value.
- Keep both animations synchronized.
- Use a smooth duration of approximately 800–1200ms.
- Run the animation only once.
- Stagger the second chart slightly after the first.
- Respect “prefers-reduced-motion”.

Do not change the campaign cards, logos, copy, buttons, card dimensions, or layout.

4. PATREON PUPPY IMAGE — PRESERVE ITS ASPECT RATIO

Keep the puppy image anchored to the right side of the Patreon section.

The image must never be stretched, squashed, or distorted.

Implementation requirements:

- Preserve the image’s intrinsic aspect ratio at all viewport widths.
- Keep it aligned to the right and bottom edges of the section.
- Scale its width proportionally as the available space becomes smaller.
- Set its height automatically from its original aspect ratio.
- Do not force both width and height to fixed values.
- Do not stretch the image to fill the container.
- Do not crop important parts of the puppies.
- Keep the approved fade/transition between the text area and the image.
- Keep the left-side Patreon content unchanged.

Recommended desktop behaviour:

- The text content occupies the left part of the section.
- The image occupies approximately the right half.
- The image uses a percentage-based or responsive width.
- Height remains automatic.
- Use `object-fit: contain` and a right-bottom position if an image container is required.

Recommended narrow-screen behaviour:

- Reduce the image proportionally while preserving its aspect ratio.
- If the two-column layout no longer has enough space, move the image below the Patreon content.
- Do not compress it horizontally to keep the desktop layout.

This image may be replaced in a later design revision, so keep it as an easily replaceable image component.

5. BOOK CARD — USE THE BRAND-RED IMAGE BACKGROUND

Update only the image area of the “BUY OUR BOOK” card.

It must use the same solid Street Hearts brand-red background as the image area of the “BUY A GIFT WITH A CAUSE” card.

Requirements:

- The complete image panel behind the book must be brand red.
- Remove the current white image-container background.
- Keep the book itself fully visible and centred.
- Preserve the book cover’s proportions.
- Do not stretch or crop the book.
- Use a transparent-background book cutout if available.
- The red image panel must have the same width, height, and corner treatment as the red image panel in the Gift card.
- Do not change the text area, CTA button, card dimensions, or spacing.

6. CORPORATE SPONSORSHIP — REMOVE BACKGROUND PAW

Remove the large decorative paw graphic from the background of the Corporate Sponsorship section shown in Reference 5.

After removing it:

- Keep the green background clean and uninterrupted.
- Do not replace the paw with another illustration or decorative element.
- Preserve the heading, supporting copy, CTA, partner-logo grid, borders, spacing, and overall two-column layout exactly as they are.

FINAL CONSTRAINTS

Do not make any other visual or structural changes.

In particular, do not:

- Change typography or colors.
- Rewrite text.
- Change section heights except where needed to prevent Hero clipping.
- Move or resize unrelated components.
- Replace existing images.
- Change buttons, hover states, checkout flows, or form behaviour.
- Add new decorative elements.
- Change the approved desktop composition.

After applying the corrections, verify:

1. Hero and statistics backgrounds reach both viewport edges.
2. The donation form has balanced top and bottom padding.
3. No form content is hidden behind the statistics strip.
4. Both campaign charts are outlined donut rings matching Reference 3.
5. The puppy image retains its original aspect ratio at different viewport widths.
6. The Book card image panel uses the same brand-red background as the Gift card.
7. The Corporate Sponsorship background contains no paw graphic.