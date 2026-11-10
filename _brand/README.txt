TutorWays brand assets

This folder holds assets the website does not serve. Jekyll (GitHub Pages'
default build) skips folders starting with "_", so nothing here is published.
If a .nojekyll file is ever added to the repo, this folder WILL be published.

Where the website assets live
  /                 favicon.ico, favicon.svg, favicon-16x16.png, favicon-32x32.png,
                    apple-touch-icon.png, icon-192.png, icon-512.png,
                    site.webmanifest, og-image.png
                    (must stay at the root: site.webmanifest references /icon-*.png,
                    and browsers request /favicon.ico by default)
  /assets/img/logo/ mark.svg / mark-white.svg / mark-black.svg   TW monogram, transparent
                    wordmark.svg / wordmark-white.svg            stacked "TutorWays", text as outlines
                    PNG copies of the mark and wordmark

<head> tags (already in index.html)
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#14172B">
  <meta property="og:image" content="https://tutorways.github.io/og-image.png">

In this folder
  github/                     Organization profile picture, 1000x1000 PNG. Pick one:
                              org-avatar-navy.png, org-avatar-coral.png, org-avatar-light.png
                              Upload at: github.com/organizations/tutorways/settings/profile
  github-social-preview.png   1280x640, for a repo's Settings > Social preview

Colors    Ink #14172B   Light #F4F5F7   Coral #F0553A
Type      Wordmark letters are Outfit ExtraBold (SIL Open Font License)

Surface logos (assets/img/surfaces/), third-party trademarks used to identify each platform
  cli.png, discord.png, grok.jpg, muse.png, slack.png   from tutorways/Documentation docs/assets/gallery/
  jupyter.svg        official mark, github.com/jupyter/design logos/Logo Mark/logomark-orangebody-greyplanets
  claude-duet.svg    claude.com/static/claude-duet/app-icon.svg
  dots-chatgpt.svg   ChatGPT favicon (chatgpt.com). Stand-in: OpenAI publishes no Dots-specific mark yet. Replace when one exists.
