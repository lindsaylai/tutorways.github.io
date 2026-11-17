# tutorways.github.io

The homepage for [TutorWays](https://tutorways.github.io/), an open benchmarking framework for AI tutors. TutorWays runs the same course tutor on eight surfaces (Local CLI, Slack, Discord, Jupyter, Grok Bot, Muse, Dots and Claude Duet) and measures what changes when only the surface does.

This repo is the front door. Setup guides, model options and the benchmark methodology live in the [documentation site](https://tutorways.github.io/Documentation/).

## What's on the page

1. A photo of a laptop whose screen shows all eight surfaces. Scrolling pushes the camera into the screen, through each surface's real reply, and back out.
2. Three captured replies to the same question, with chips that highlight what each reply does.
3. A five-stage diagram of a benchmark run. A toggle picks whether the model or the surface varies.
4. An example Ferret grading exchange that plays out step by step as you scroll.
5. Three questions re-rank the eight surfaces, with reasons taken from the docs.

## Run it locally

The site is plain HTML, CSS and JavaScript. There is no build step, no npm and no framework.

```bash
python3 -m http.server 4000
```

Then open http://localhost:4000. GitHub Pages builds the site with Jekyll, but the page uses no Jekyll features, so a static server shows exactly what will ship.

## Layout

```
index.html                 the whole homepage
assets/css/site.css        all styles, starting with the design tokens
assets/js/site.js          the tour camera and the four interactive sections
assets/img/hero/           the graded laptop photo (WebP and JPG, sharp and soft copies)
assets/img/surfaces/       logos for the eight surfaces
assets/img/logo/           TW mark and wordmark
assets/fonts/              Outfit and Atkinson Hyperlegible, self-hosted
_brand/                    source files that are not published (see _brand/README.txt)
DESIGN.md                  the design system: colours, type, layout, components
PRODUCT.md                 who the site is for and the rules for its content
.impeccable/               design notes used by the Impeccable skill
.claude/                   project skills and agents for Claude Code
```

Jekyll skips folders that start with `_`, so nothing in `_brand/` is published. Adding a `.nojekyll` file would change that.

## Common edits

### Change a surface's copy or reply

Each surface appears in `index.html` in three places: its window on the laptop screen (`.spot`), its caption card in the tour (`.shot`), and its row in the chooser (`.ch-row`). The chooser's reasons are in `site.js` under `facts`.

### Replace the hero photo

Put the new source in `_brand/hero/` and run the grading script. It maps the colours onto the brand palette, blanks the screen and writes the sharp and soft copies:

```bash
python3 -m pip install pillow numpy
python3 _brand/hero/grade.py _brand/hero/laptop-source.png assets/img/hero
```

The script blanks the screen of the current photo, so update its polygon for a new one. Then measure the new screen's top-left, top-right and bottom-left corners in image pixels and set `TL`, `TR` and `BL` near the top of `site.js`, so the surface map lines up with the screen.

### Change colours or type

The tokens are at the top of `site.css`. `DESIGN.md` explains where each one is used. The brand colours are Ink `#14172B`, Light `#F4F5F7` and Coral `#F0553A`.

## Content rules

These come from `PRODUCT.md`:

- Don't show benchmark results, scores or rankings until the evaluation design and judges are calibrated.
- Label anything that isn't a real capture as illustrative.
- Use the name TutorWays, not the old project name.
- Keep the voice plain and factual. Run marketing copy through the `humanizer` skill before shipping.

## Accessibility

Every scroll effect has a fallback. With reduced motion, the camera jumps instead of flying and the animations stop. Phones and short screens get a stacked layout with no pinned sections. Without JavaScript, the copy, replies and guide links still render as normal content.

## Contributing

1. Fork the repo and make a branch.
2. Check your change locally (see above).
3. Open a pull request against `main`.

GitHub Pages redeploys about a minute after a merge. Browsers may keep the old page for up to 10 minutes, so hard-refresh (Cmd+Shift+R or Ctrl+Shift+R) to check a deploy.

## License

BSD 3-Clause. See [LICENSE](LICENSE).
