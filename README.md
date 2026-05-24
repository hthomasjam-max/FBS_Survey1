# WhatsApp Bible Study Survey (Plain React)

Simple React app to collect responses to the question: "Are you interested in participating in the Bible Study?"

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm start
```

3. Deploy to Vercel

- Push the repository to GitHub, GitLab, or Bitbucket.
- Import the project in Vercel and let it detect the Vite app.
- Vercel will use `npm run build` and publish the site from the `dist` folder.

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

Features
- Yes / No buttons
- Member name input
- Responses auto-populate in the table
- Responses saved to browser localStorage
- Export CSV

Files
- `src/App.jsx` main UI
- `src/ResponseTable.jsx` table renderer
