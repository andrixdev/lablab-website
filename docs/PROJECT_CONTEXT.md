# Project context

Static site for LABLAB: a gathering of independent artists, engineers and small companies sharing a digital arts lab and immersive studio at Pôle PIXEL, Lyon. Founded by Théoriz and AADN.

## Decisions

- Static HTML/CSS, no CMS; later edits by hand or by AI. (The original brief asked for WordPress: overruled.)
- English first, French translation at the end.
- Visual identity 2026 (input/NEW GRAPHIC DESIGN.png): black, océan abyssal #1E4694, océan numérique #05A7C7, white; Oswald 300 uppercase titles, Overpass 200 body; LABLAB logo (square in header); offset colour frames, glowing outlines.
- Always write **LABLAB** in capitals (also "LABLABers").
- Positioning: a collective offering services, not a venue brochure. Keep the 9 service cards.
- Studio rental has no fixed offer: invite people to ask for a quote.
- No news, agenda, opening hours or floor plan. Social links stay low-key (footer icons).

## Pages

- `index.html`: concise one-pager (who we are, services, find us, residencies, partners, members, spaces, contact).
- `about.html` (story, founders, values), `studio.html`, `lablabers.html`, `partners.html`, `gallery.html`, `contact.html`, `legal.html`.
- Assets: `assets/{fonts,icons,video,images/{services,partners,people,spaces,gallery}}`.

## Sources

- Design reference: https://alexandrix.com/lablab (homepage only; other pages are theme placeholders).
- Old site (French copy, member links): https://lablab.studio/
- Brief "Refonte site internet LABLAB" (Océane): objectives, audiences, sitemap.
- URLs: final https://lablab.studio/ (used in Open Graph tags); during development https://alexandrix.com/lablab or /lablab-new. All internal links are relative, so the site works in a subfolder.
- Tasks: `TASKLOG.txt` (priority order, waiting items, done log).
- Contact: contact@lablab.studio · 36 Rue Émile Decorps, 69100 Villeurbanne · Instagram studio.lablab · Facebook lablab.studio

## Pending from Alex (ask again)

- Studio equipment list (`studio.html`, TODO comment).
- Rates and access conditions (studio, co-working).
- LABLABer quotes.
- Legal notice: publisher, publication director, host (`legal.html`).
- Partner logos, white on transparent → `assets/images/partners/` (same names). `heavym`, `metropole-lyon`, `villeurbanne`, `drac` are text placeholders: update `width`/`height` when replaced.
- Member pictures and up-to-date descriptions (`assets/images/people/`). Julie Borgeot's text is translated from the old site.

