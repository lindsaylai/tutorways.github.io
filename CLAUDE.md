# TutorWays website

Static site served by GitHub Pages (Jekyll default build). There's no bundler, no npm and no framework.

- Brand assets: favicons and `og-image.png` at the root, logos in `assets/img/logo/`, and non-web assets in `_brand/` (not published). Colors: Ink `#14172B`, Light `#F4F5F7`, Coral `#F0553A`.
- Animation: the GSAP skills show `npm install gsap` and `import` examples. Here, load GSAP from a CDN `<script>` tag pinned to an exact version (e.g. `https://cdn.jsdelivr.net/npm/gsap@<version>/dist/gsap.min.js`, plus `ScrollTrigger.min.js` etc.), then call `gsap.registerPlugin(...)`. All GSAP plugins are free.
- Scroll effects: use `zero-jank-scroll` to pick the lightest technique (CSS sticky, IntersectionObserver or CSS scroll-driven animations) before reaching for GSAP ScrollTrigger. Always provide a `prefers-reduced-motion` fallback.
- Copy: run `humanizer` over marketing copy before shipping.
- New third-party skills: run `skill-inspector` (SkillSpector) before adding them to `.claude/skills/`.
