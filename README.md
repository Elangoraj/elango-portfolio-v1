# Elangoraj Thiruppandiaraj — Portfolio

Personal portfolio site, built with Next.js (App Router), Tailwind CSS and Framer Motion, and hosted on Firebase Hosting at https://elangoraj.web.app.

## Editing content

Almost all content lives in [`src/data/cv_info.json`](src/data/cv_info.json): summary, highlights, skills, experience, projects, talks, leadership, education, certifications, publications, awards, testimonials and social links. Edit that file and rebuild; no component changes are needed.

Page layout is in [`src/app/page.tsx`](src/app/page.tsx). SEO and social-share metadata are in [`src/app/layout.tsx`](src/app/layout.tsx).

Web-sized images used by the site are in `public/images/web/`. The resume download is `public/docs/Elangoraj.pdf`.

## Local development

```bash
npm ci
npm run dev      # http://localhost:3000
```

## Deploy to Firebase

The site is exported as static files to `out/`, which `firebase.json` serves.

```bash
npm run build    # writes the static site to out/
firebase deploy  # deploys out/ to the "elangoraj" Firebase project
```

If login fails, run `firebase logout`, then `firebase login`.

## Legacy site

The original static HTML site is kept unchanged in `_legacy_site/` (with its own `firebase.json`). To redeploy it instead, run `firebase deploy` from inside that folder.
