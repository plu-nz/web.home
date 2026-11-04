# PLUNZ home

The public hub at [www.plu.nz](https://www.plu.nz/) introduces PLUNZ and its applications. Product availability is stated explicitly; Split links to its live application; Capture links to its read-only preview while the other concepts remain unavailable.

The interface follows the browser language for English, Portuguese, and Spanish, falls back to English, and offers a language selector. An explicit choice is shared with PLUNZ web apps on `plu.nz` in the same browser.

## Stack

SolidJS, TypeScript, Vite, and Cloudflare Workers Static Assets. The Worker redirects `plu.nz` to the canonical `www.plu.nz` host. There are no runtime APIs, accounts, or analytics.

## Commands

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm deploy
```

`pnpm deploy` publishes to the PLUNZ Cloudflare account. The account and hostnames are declared in `wrangler.jsonc`.

## Design

This MVP uses the [visual identity proposal](https://github.com/plu-nz/.github/pull/2) pending approval. It uses the exact Darkppuccin colors, a square PLUNZ mark, system fonts, and a restrained icon style. Review the proposal before changing shared rules.

Product names are decided individually. Split is available. Capture is the working name of the photo app; the remaining concept cards use descriptive placeholders until named. Keep unavailable products visibly marked as in development.

The [source index](src/README.md) describes the UI and routing. The [public assets index](public/README.md) covers the logo and PWA icons. Shared context lives in [plu-nz/.github](https://github.com/plu-nz/.github).
