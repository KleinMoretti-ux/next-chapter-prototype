# Next Chapter prototype

React, TypeScript, and Vite. Plain CSS; no Tailwind dependency. All Figma images, icons, and primary fonts are included locally.

[Vercel preview](https://next-chapter-prototype-ci0v9n4th-mistery2.vercel.app) — Vercel sign-in may be required.

## Run locally

For a preview without a server, open `standalone.html` in Chrome or Edge. All code, images, and fonts are embedded. For the editable Vite project, install dependencies as below, then double-click `Start prototype.cmd` and keep its window open.

With Node.js 20.19+ or 22.12+ installed:

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. You can also run `node node_modules/vite/bin/vite.js --host 127.0.0.1` from this folder after installing dependencies.

```sh
npm run build
npm run preview
```

## Included screens and interactions

Welcome, About you, Needs check-in, Personal pathways, Opportunity hub, Strong match, No strong match, Search entry, Search results, and Ask Compass. Use the screen selector to inspect any view. Each screen also has a hash URL, such as `/#search`.

The welcome/profile/check-in/pathway flow works. Name editing, preference choices, search submission, result categories, local saving, filtering, and the transition from summary to Compass are interactive. Compass uses the supplied sample answer. Trial confirmation is a local demonstration. Voice, messaging, authentication, and provider services are not connected.

The design specifies 393 px mobile frames. Desktop keeps that mobile layout centered; smaller viewports fit the authored frame. The Figma file does not supply desktop breakpoints, so this is an inferred adaptation.

## Figma access limitation

The supplied node `0:1` is an entire page, not a single screen. The Figma Starter-plan tool limit prevented detailed retrieval of the two dashboard variants, First Step Support, and My Next Chapter. Those screens are not reproduced or replaced with fabricated layouts. Home returns to Welcome and My Journey opens the profile in this prototype. Component-library demonstration boards and annotation cards are not app screens.

## Validation

TypeScript and Vite production build pass. Browser checks cover all ten screens, local image loading, onboarding navigation, search, saving, and opening Compass. The hosted Vercel preview also passed navigation, search, and asset checks. Primary fonts are local. All 155 downloaded Figma assets are non-empty.
