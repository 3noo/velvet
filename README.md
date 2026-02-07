# Velvet (Next.js)

5-page marketing site in **Next.js App Router**:

- `/` Home
- `/services`
- `/work`
- `/about`
- `/contact`

## Setup

This workspace uses Volta.

If `node`/`npm` ever prints `Volta error: Node is not available`, unset Volta's
recursion guard (some tools set it automatically) and retry:

```bash
cd /home/no/Desktop/creativesite

unset _VOLTA_TOOL_RECURSION

npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- Dependencies in `package.json` are set to `"latest"` to match your request.
- The previous static HTML version is kept in `legacy-static/`.
- Photos are loaded from Unsplash URLs (demo placeholders).
