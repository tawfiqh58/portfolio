# Portfolio site

Required

- Github Repository
- Sanity Project
- Vercel Project and Integration
- Add CORS & API
- Deploy using `git push`

Create link between your project and vercel

$ npx vercel link

To pull the `.env` variables from vercel

$ npx vercel env pull

`.env.local` file will be created
or use `env.local.example`

$ npm install -g @sanity/cli
$ sanity login

upload demo content
located at `/lib/sanity/data/production.tar.gz`

$ npm run sanity-import

Sanity Studio access: http://localhost:3000/studio
or
you can run it on a separately

$ npm run sanity

https://localhost:3333

---

`git push` to automatically trigger a new deployment on vercel
or
manual deployment command

$ npx vercel --prod
or
manually deploy it from vercel dashboard
