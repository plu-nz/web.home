# Agent instructions

Read [README.md](README.md) and the [PLUNZ shared context](https://github.com/plu-nz/.github/blob/main/CONTEXT.md) before changing this site.

- **Responsibilities:** `src/index.tsx` renders the hub; `src/style.css` owns presentation; `src/worker.ts` redirects the apex domain and serves built assets. `public/` contains icons and the web manifest.
- **Organization:** keep this static hub small. Every directory needs a `README.md` index. Do not add a backend or database without a concrete product need.
- **Conventions:** use English for source, documentation, and visitor copy. Keep status claims accurate. Use semantic HTML and visible keyboard focus.
- **Product names:** decide names individually; use descriptive placeholders for concepts that have no approved name.
- **Dependencies:** prefer the current SolidJS, TypeScript, and Vite stack and use the pinned `@plunz/storybook` package for reusable controls. Avoid new packages for small display features. Use exact Darkppuccin colors until the shared visual proposal is approved or amended.
- **Commands:** `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm check`, `pnpm build`, and `pnpm deploy`.
- **Completion checks:** run `pnpm build`, inspect the built asset paths, verify keyboard and small-screen behavior, and check the canonical domain and HTTPS after deployment.
