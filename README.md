# The Puffery — Next.js + TypeScript + Tailwind

Production-ready website for The Puffery (artisan cream pies & puffs) built with Next.js App Router, TypeScript, and Tailwind CSS.

## Quick Start

Prereqs: Node 18+ and pnpm (or npm/yarn)

```bash
# Install deps
pnpm install

# Dev
pnpm dev

# Lint & format
pnpm lint
pnpm format

# Test
pnpm test

# Build & start
pnpm build
pnpm start
```

## Environment

Copy `.env.example` to `.env.local` and set values:

```
NEXT_PUBLIC_ADMIN_PASSWORD=changeme
```

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom colors: puff-gold, puff-brown, puff-cream, puff-beige)
- Fonts: Inter (body), Cormorant Garamond (display)
- Icons: lucide-react
- Forms: react-hook-form + zod
- State: minimal Context for cart (persists to localStorage)
- Animations: framer-motion (light usage)
- Testing: Vitest + Testing Library

## File Tree (key files)

```
the_puffery/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx                 # Home
│  ├─ about/page.tsx
│  ├─ menu/page.tsx
│  ├─ order/page.tsx
│  ├─ contact/page.tsx
│  ├─ admin/page.tsx           # Placeholder (env-gated)
│  └─ api/
│     ├─ menu/route.ts         # GET menu
│     └─ order/route.ts        # POST order (in-memory)
├─ components/
│  ├─ Logo.tsx
│  ├─ SiteHeader.tsx
│  ├─ SiteFooter.tsx
│  ├─ Section.tsx
│  ├─ MenuCard.tsx
│  ├─ CategoryTabs.tsx
│  ├─ CartList.tsx
│  └─ CheckoutForm.tsx
├─ context/
│  └─ CartContext.tsx
├─ lib/
│  ├─ types.ts
│  ├─ data.ts                  # Seed menu items
│  └─ utils.ts
├─ __tests__/MenuCard.test.tsx
├─ tailwind.config.ts
├─ tsconfig.json
├─ vitest.config.ts
├─ next.config.mjs
├─ package.json
└─ .env.example
```

## Development Notes

- Images use placeholders for now. Replace with files under `public/` and Next `<Image />` when ready.
- Cart is client-side and persisted to `localStorage`.
- Admin page is a simple password gate using `NEXT_PUBLIC_ADMIN_PASSWORD` for dev only.

## Deploy (Vercel)

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add env var `NEXT_PUBLIC_ADMIN_PASSWORD`.
4. Build and deploy.

## Stretch Ideas

- Lead-time validation for pickup date/time
- Persist menu/admin edits to a JSON file in dev
- Dark mode toggle with localStorage
- Newsletter subscribe mock API

