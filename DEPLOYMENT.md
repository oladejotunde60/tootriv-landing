# Deployment

The TooTriv landing page is a Vite + React SPA deployed to Cloudflare Workers Static Assets via Wrangler.

## Production URLs

- Custom domain: https://tootriv.com
- Worker default: https://tootriv-landing-page.tunde-oladejo.workers.dev

## Deploy

From this directory:

```bash
npm install   # first time only
npm run deploy
```

`npm run deploy` runs `vite build && npx wrangler@4.84.1 deploy`. It builds `dist/` and uploads it to the Worker named `tootriv-landing-page`.

You'll need to be authenticated with Cloudflare. If wrangler prompts, run `npx wrangler@4.84.1 login` once and complete the browser flow.

## Local development

```bash
npm run dev      # vite dev server
npm run build    # production build to dist/
npm run preview  # serve the built dist/ locally
```

## Configuration

- [wrangler.jsonc](wrangler.jsonc) — Worker name, compatibility date, and the static assets directory (`./dist`). `not_found_handling: "single-page-application"` makes React Router routes work by serving `index.html` for unknown paths.
- [.assetsignore](.assetsignore) — files in the project root that wrangler should NOT upload (`.git`, `.wrangler`, `wrangler.jsonc`).

## Pushing to GitHub does NOT auto-deploy

The repo is **not** wired to Cloudflare Pages Git integration. Pushing a commit only updates GitHub. To make changes go live you must run `npm run deploy` locally.

If you want push-to-deploy in the future, migrate the project to Cloudflare Pages with Git integration on the dashboard, add a `public/_redirects` file with `/*  /index.html  200` for SPA routing, and remove the wrangler config.

## Cache

Cloudflare and the browser cache aggressively. After a deploy, hard-refresh with Cmd+Shift+R (Mac) / Ctrl+Shift+R to confirm a change is live.
