# Anand VB — Developer Originals

A React/Vite portfolio adapted from the supplied Netflix-style template. Includes its cinematic visual language, tilt hero, scrolling skills carousel, red glow and archive animation, with Anand's own content.

## Run locally

Use Node.js 22.12+.

```sh
npm ci
npm run dev
```

Production build: `npm run build`. Output: `dist/`.

## Update content

- `src/data.js`: projects, descriptions, technologies and links.
- `src/components/About.jsx`: education and biography.
- `src/components/Contact.jsx`: social links and contact form.
- `public/assets`: illustrations and original portfolio images.

Zenbull is the flagship. AtlasUla, ChurnIQ, Foodie, MediMei, KrishiGo and GreenMart are included alongside the original e-learning design and portfolio.

MediMei's public repository had no source at the time of review; it appears as in progress without unverified features. The Featured Dev hero card uses Anand’s supplied comic hoodie avatar. The Zenbull feature artwork is decorative, not an app screenshot. Project descriptions are based on public repository code and documentation; they are not guarantees that the applications' remote backends are running.

The contact form retains the original site's Web3Forms key and reports success only after a successful API response. Submission was not performed during validation to avoid sending a test message.

## Deploy to the existing Vercel site

`vercel.json` specifies Vite, `npm run build`, and `dist/`. Update the repository connected to the existing Vercel project rather than creating a different Vercel project. Retain its `anand-vb.vercel.app` domain assignment. Authenticated access to that GitHub repository or Vercel project is required.

## Validation

Production build passed. Source and generated asset checks passed. Interactive browser QA was unavailable in this environment. Check desktop and mobile layout, reduced motion, keyboard focus, project filters/modal, and contact submission after deployment.
