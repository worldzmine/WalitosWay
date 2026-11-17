# WalitosWay

**A React landing-page prototype built with SUMMON.**

This repository contains an exploratory marketing-page frontend: navigation, a hero section, feature cards, testimonials, pricing, and a call to action. It is a prototype rather than a working deployment platform.

For Wa’il’s current products, company work, and research, visit **[wail.ceo](https://wail.ceo/#work)**. For the AI development product used to build this prototype, see **[SUMMON](https://summon.dev/)**.

## What is implemented

- A responsive React interface styled with Tailwind CSS.
- Reusable page sections and Lucide icons.
- Local UI state and entrance animations.

## Prototype boundaries

The email signup displays a browser alert; it does not register a user or send email. The page’s customer counts, performance figures, testimonials, compliance language, and pricing are placeholder marketing content, not verified business or product claims. They should be replaced or removed before any production use.

## Run locally

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Stack: React 18, TypeScript, Vite, Tailwind CSS, and Lucide React. Commands are defined in `package.json`.

## Repository housekeeping

The repository currently includes generated `node_modules/` and `dist/` directories. They are not source code and should be removed from tracking in a separate cleanup. Adding them to `.gitignore` prevents new untracked files from being added; it does not remove files already committed.
