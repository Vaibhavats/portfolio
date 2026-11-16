# Vaibhav Kumar — Portfolio

Personal portfolio of Vaibhav Kumar, a 4th-year B.Tech CS (AI & ML) student at Graphic Era University, Dehradun.

**Live site:** https://portfolio-kappa-five-82.vercel.app/

## Sections

- **Hero / About** — who I am, education, research internship, DSA stats
- **Projects** — ML research, LLM agents, full-stack and test-automation work
- **Skills** — languages, web, databases, AI/ML, testing and tools
- **Contact** — email, GitHub, LinkedIn, LeetCode, CodeChef

## Tech stack

React 19, Vite, plain CSS (dark theme with CSS animations), ESLint. Deployed on Vercel.

## Project structure

```
src/
  components/   Navbar, Footer, ProjectCard, SectionTitle
  sections/     Hero, About, Projects, Skills, Contact
  data/         projects.js  (edit this to add or change projects)
  index.css     global styles and theme variables
```

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run lint     # ESLint
```

## Adding a project

Add an entry to `src/data/projects.js` with `title`, `description`, `tags`, `icon`, and optional `github` / `demo` URLs. Links that are `null` are simply not shown.
