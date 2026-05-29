# Coily Co Bridge — website

Website for Coily Co Bridge (internal command / console surface).

- **URL:** https://bridge.coilysiren.me
- **Host:** Netlify (site `coilyco-bridge`, auto-deploys from `main`)
- **Stack:** Gatsby + pnpm (Node 22)

Infrastructure scaffold only — visuals land in a later pass.

## Commands

Route dev verbs through coily (the lockdown denies bare pnpm):

- `coily install` — install deps
- `coily dev` — local dev server
- `coily build` — production build into `public/`
- `coily serve` — serve the build
