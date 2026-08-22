# Karthik Raja Nichenametla — Portfolio

A personal portfolio site for an SDET / QA Automation Engineer, built with React, TypeScript, Tailwind CSS, and Vite.

## Design

The visual language is built around the subject: CI/CD pipelines and terminal output. JetBrains Mono is used for headings, labels, and section eyebrows (`// like a code comment`); Inter is used for body copy. The hero features an animated mock pipeline run (`lint → unit → e2e → api → deploy`) with a live terminal log, and the experience timeline is styled like a pipeline/commit history.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   # reusable UI: Nav, Button, SkillBadge, ProjectCard, PipelineConsole, Footer, BrandIcons
  sections/     # page sections: Hero, About, Skills, Experience, Projects, Learning, GithubSection, EducationSection, Contact
  data/         # content, sourced from the resume — edit these files to update site content
    profile.ts
    experience.ts
    skills.ts
    projects.ts
    education.ts
  index.css     # design tokens (colors, fonts, animations) + global styles
  App.tsx
  main.tsx
public/
  Karthik_Raja_Nichenametla_Resume.pdf   # wired to the "Download Resume" button
  favicon.svg
```

## Updating content

All real content lives in `src/data/*.ts` — no content is hardcoded in components. To add a new project, add an entry to `src/data/projects.ts`; the grid and cards update automatically. Same pattern for experience, skills, and education.

## Notes

- The contact form opens the visitor's email client via a `mailto:` link (no backend/server is included). If you want it to submit directly without opening mail, wire the `handleSubmit` function in `src/sections/Contact.tsx` to a form backend (e.g. Formspree, Resend, or your own API).
- Phone number is intentionally left off the public Contact section for privacy — only email, LinkedIn, and GitHub are shown. Add it in `src/data/profile.ts` and `src/sections/Contact.tsx` if you'd like it public.
- To deploy on GitHub Pages (matching your existing `karthikraja46.github.io` portfolio URL), run `npm run build` and publish the contents of `dist/` to the `gh-pages` branch or your Pages source.
