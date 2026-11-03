# PLUNZ home

The public hub at [www.plu.nz](https://www.plu.nz/) introduces PLUNZ and its applications. Product availability is stated explicitly; the hub does not link to unfinished apps.

## Stack

SolidJS, TypeScript, Vite, and Cloudflare Workers Static Assets. The Worker redirects `plu.nz` to the canonical `www.plu.nz` host. There are no runtime APIs, accounts, or analytics.

## Commands

```sh
npm ci
npm run dev
npm run check
npm run build
npm run deploy
```

`npm run deploy` publishes to the PLUNZ Cloudflare account. The account and hostnames are declared in `wrangler.jsonc`.

## Design

This MVP uses the [visual identity proposal](https://github.com/plu-nz/.github/pull/2) pending approval. It uses the exact Darkppuccin colors, a square PLUNZ mark, system fonts, and a restrained icon style. Review the proposal before changing shared rules.

Product display names follow the [PLUNZ product naming convention](https://github.com/plu-nz/.github/blob/main/decisions/2026-11-03-product-naming.md). Keep unavailable products visibly marked as in development.

The [source index](src/README.md) describes the UI and routing. The [public assets index](public/README.md) covers the logo and PWA icons. Shared context lives in [plu-nz/.github](https://github.com/plu-nz/.github).
