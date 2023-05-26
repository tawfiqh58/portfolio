# Portfolio site

Inspired by nextjs Stablo Blog Template

- Create new Repository in Github
- Create a Sanity Project
- Install Sanity Integration in Vercel
- Add required CORS & API settings in the project
- Deploy Frontend to Vercel

Once cloned, run the following command from the project's root directory. This will link your vercel project.

```bash
npx vercel link
```

Now, run the following command to pull the `.env` variables to your local system.

```bash
npx vercel env pull
```

a new `.env.local` file has been created
or use example env

```bash
npm install -g @sanity/cli

sanity login
```

upload demo content
located at `/lib/sanity/data/production.tar.gz`

```bash
$ npm run sanity-import
```

Sanity Studio access: http://localhost:3000/studio
or
you can run it on a separately

```bash
npm run sanity
```

https://localhost:3333

---

`git push` to automatically trigger a new deployment on vercel
or
manual deployment command

```bash
npx vercel --prod
```
