# Benson Shiju — Cloud Platform Engineering

A responsive React portfolio built with Vite. The interface is organized into reusable React components, with stateful navigation, cloud topic tabs, and contact topic selection.

## Develop locally

```powershell
npm ci
npm run dev
```

Vite prints the local development URL. Create a production build with `npm run build`, then preview it with `npm run preview`.

## Deploy

GitHub Actions builds the Vite app and publishes the `dist/` directory to GitHub Pages when changes are pushed to `main`. Vite applies the `/Portfolio/` base path in GitHub Actions so assets resolve correctly on the project site.

The original assets are in `assets/` and are copied to `public/assets/` for Vite. Update the public copies when replacing a photo, logo, or resume.
