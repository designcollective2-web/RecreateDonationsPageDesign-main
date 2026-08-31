Replace the current hero section with the newly attached Figma frame. Recreate the supplied design exactly. Do not reinterpret, improve, or redesign it.

Modify only the hero section. Preserve every other section, existing interaction, payment flow, animation, and design-system style.

HERO STRUCTURE

Create a full-width hero with two vertically arranged areas:

1. An upper content area with two responsive columns:
   - Left: existing headline, description, and trust badges.
   - Right: existing donation form.

2. A full-width horizontal dog-photo carousel below the content area.

The hero background must extend edge to edge across the viewport.

UPPER CONTENT AREA

Match the attached frame precisely.

On desktop:

- Use 193px left padding and 193px right padding, matching the design.
- Provide 40px top spacing above the text and donation form.
- Maintain balanced bottom spacing before the carousel.
- Place the text block and donation form side by side.
- Both columns should adjust fluidly to the available screen width.
- Use a flexible two-column layout rather than fixed-width positioning.
- Do not allow either column to overlap, overflow, or become clipped.
- Keep the donation form fully visible with balanced internal padding.
- Preserve the “HELP US” annotation and arrow in the same relative position shown in the reference.

The 193px horizontal padding applies to large desktop screens. Reduce the padding progressively on narrower screens so the layout remains usable. Do not keep 193px padding on tablet or mobile widths.

DONATION FORM: NO VISUAL CHANGES

Keep the existing donation form exactly as it is.

Do not change:

- Form layout.
- Form appearance.
- Background color.
- Border radius.
- Typography.
- Amount pills.
- Button styles.
- Icons.
- Trust messaging.
- Internal spacing relationships.
- Payment behavior.

Preserve all existing functionality:

- Amount pills remain selectable.
- “Other” reveals a custom amount field.
- Pay by Card opens the existing card-payment flow.
- Continue with PayPal opens the existing PayPal flow.
- Existing hover, focus, validation, and pressed states remain unchanged.

The form container may adapt fluidly to the available column width, but its visual design and component structure must remain unchanged.

DOG-PHOTO CAROUSEL

Recreate the lower photo carousel exactly as shown in the attached frame:

- Display a single horizontal row of dog-photo cards.
- Preserve the card design, white frame, dog image, name label, proportions, spacing, and visual treatment from the supplied reference.
- The carousel spans the full width of the hero, independently of the upper area’s 193px horizontal padding.
- Add a subtle separating line above the carousel, matching the reference.
- Keep the carousel within the hero’s green background.
- Apply subtle fading at the left and right edges, as shown in the design.

CAROUSEL MOTION

Make the dog-photo cards move continuously along the horizontal axis in a smooth, seamless, infinite loop.

- Cards must travel horizontally at a slow, comfortable speed.
- When a card exits on one side, it should reappear naturally at the opposite end.
- Avoid jumps, abrupt resets, or visible gaps in the loop.
- Duplicate the card sequence if necessary to create a seamless infinite track.
- Give the cards a subtle individual rotation during movement, alternating gently between small clockwise and counterclockwise angles.
- Keep the rotation restrained and natural, approximately 2–4 degrees.
- Rotation must not crop the cards, reduce legibility, or disrupt alignment.
- Do not make the carousel visually compete with the donation form.
- Pause the carousel on hover and resume smoothly when the pointer leaves.
- Respect reduced-motion preferences: disable continuous movement and rotation when reduced motion is enabled.

RESPONSIVE BEHAVIOR

Large desktop:

- Preserve the attached reference closely.
- Use 193px left and right content padding.
- Maintain the two-column upper layout.
- Keep the carousel full width.

Smaller desktop and tablet:

- Reduce horizontal content padding progressively.
- Allow the text and form columns to resize fluidly.
- Maintain clear spacing between the two columns.
- Keep the donation form readable and fully visible.
- Keep the carousel active across the full available width.
- Reduce carousel card size proportionally if needed.
- Never stretch or distort the dog images.

Mobile:

- Switch the upper area to a single-column layout.
- Place the text content first.
- Place the donation form immediately after the text.
- Place the horizontal dog-photo carousel below the form.
- Use appropriate mobile side padding.
- Let the form use the available content width without horizontal overflow.
- Keep the carousel horizontally animated and show only the number of cards that fit naturally.
- Preserve card proportions and keep dog names readable.

FINAL REQUIREMENT

Match the attached hero frame as closely as possible while making the layout fluid and responsive.

Do not modify anything outside the hero section.