# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS served by GitHub Pages (Jekyll default build). No bundler, npm or framework. GSAP, when needed, loads from a pinned CDN `<script>`. Set in CLAUDE.md.

## Users

Primary: instructors and course staff deciding whether and how to put an AI tutor in front of their students, and which deployment fits their class. Secondary: researchers and developers, who are routed to the documentation site and the benchmark repo.

## Product Purpose

TutorWays (formerly LLM Tutors For All, a UC Berkeley Data Discovery project) is an open benchmarking framework for AI in education. It evaluates models and complete tutor systems side by side on teaching quality, cost, latency and deployment tradeoffs, so instructors and developers can choose with evidence. This website is the front door: it should leave visitors understanding that (1) TutorWays is building a benchmark framework, (2) the full documentation lives on a separate site, and (3) there is a concrete, useful tutor they can look at.

## Positioning

TutorWays benchmarks the *ways* to deliver a tutor, not just the model: the same tutor runs on many surfaces, and the deployment itself is a variable under test. A good tutor doesn't have to be a frontier LLM; small models, decision models and combinations can each be the right choice depending on course, budget and hardware.

## Operating Context

Tutors run today on eight surfaces, all live:

- Self-hosted interfaces sharing one engine: Local CLI, Slack, Discord, Jupyter.
- Persistent agents (hosted agents with their own cloud computer that hold the course corpus): Grok Bot (xAI), Muse (Meta), Dots (OpenAI, inside ChatGPT), Claude Duet (Anthropic).

The first course corpus is UC Berkeley Data 8, Spring 2026. Documentation (setup guides per surface, model options, benchmark methodology, architecture tradeoffs) lives at https://tutorways.github.io/Documentation/.

## Capabilities and Constraints

- Featured example tutor: **Ferret** (github.com/tutorways/ferret-grader). Its only confirmed description: "Grade understanding, not just answers. Ferret is a framework for building mastery-based assignments, where an AI grader questions students about their work until they've shown what they know."
- Other org projects: MasteryGraph ("Map a course as a graph of concepts and misconceptions, and track what each student has actually mastered."), the Data 8 tutor, and the private `benchmarks` repo (built on Inspect AI).
- Benchmark results are not published. Don't show results, scores, rankings or charts with numbers until the evaluation design and judges are calibrated.
- Don't use the old name "LLM Tutors For All" on the site.
- Open: details of how Ferret works beyond its description; setup guides for Jupyter, Dots and Claude Duet are not yet in the docs.

## Brand Commitments

- Name: TutorWays. TW monogram and stacked wordmark in `assets/img/logo/` (letters in Outfit ExtraBold).
- Brand colors: Ink `#14172B`, Light `#F4F5F7`, Coral `#F0553A`.
- Voice: factual, plain, open about work in progress. Not salesy. Run marketing copy through `humanizer`. The previous site was rejected as reading "AI sloppy".

## Evidence on Hand

- Surface logos: Local CLI, Discord, Slack, Grok Bot, Muse (in the Documentation repo, `docs/assets/gallery/`). Jupyter (official jupyter/design mark), Claude Duet (claude.com app icon) and a ChatGPT icon standing in for Dots, which has no published mark; all in `assets/img/surfaces/`.
- Real captured Data 8 tutor replies for CLI, Discord, Slack and Grok Bot (old site `src/content/demo.yaml`).
- Benchmark methodology text (Documentation `docs/benchmark.md`, `docs/benchmark/evaluation.md`).
- Team: Edwin Vargas, Silas Santini, Benjamin Telanoff (portraits in the Documentation repo).
- No benchmark results, testimonials, adoption numbers or Ferret transcripts exist. Don't fabricate any.

## Product Principles

1. The deployment is part of the tutor; show the same tutor across surfaces.
2. Separate what is measured from what is planned.
3. Send each audience to the right place fast: instructors to a tutor, researchers to the docs and benchmark.
4. Plain words over hype; every claim traceable to a repo or doc.

## Accessibility & Inclusion

WCAG 2.2 AA: keyboard access, visible focus, sufficient contrast, reduced-motion fallback for all scroll effects, readable at phone width.
