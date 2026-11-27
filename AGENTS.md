# Agent guide

- Plain static site: semantic HTML, modern CSS, native JS only when needed. No frameworks, dependencies or build step.
- Match the supplied references and validated identity; don't invent content or visuals.
- Write **LABLAB** in capitals everywhere. Serious tone. Bilingual: English at the root, French in `fr/` with French file names; change both versions together and keep hreflang links in sync.
- Header and footer are repeated in every page: change them everywhere at once.
- After changing `styles.css` or `script.js`, bump the `?v=` number in every page so browsers refetch them.
- Set background images inline (`style="background-image: url(...)"`), never through a CSS variable: its url() would resolve against the root stylesheet and break in `fr/`.
- Images: set `width`/`height`, lazy-load below the fold, never the hero showreel. Resize before adding.
- Assets live in `assets/` with descriptive, keyword-friendly file names; replace stand-ins in place.
- SEO: external links get `target="_blank" rel="noopener"`; bold the first key term in a text; link to other pages where natural; keep `sitemap.xml` in sync when adding pages.
- Work from `TASKLOG.txt`: keep TODO / WIP / DONE up to date.
- Brief, decisions and pending inputs: `docs/PROJECT_CONTEXT.md` — update when requirements change.
- Direction-changing prompts and decisions: `docs/PROMPT_LOG.md` — skip routine edits.
