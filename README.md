# a [Next.js](https://nextjs.org) project template, with optional [FastAPI](https://fastapi.tiangolo.com/) backend and [Supabase](https://supabase.com/) for auth + db.

## Features

- NextJS frontend
- NextJS API routes
- FastAPI backend API (optional)
- Supabase for auth + db storage

## Getting Started

### First, run the nextjs development server:

```bash
npm run next-dev
# or
yarn next-dev
# or
pnpm next-dev
# or
bun next-dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note: NextJS API routes are only available once authenticated.

### Second, run the fastapi development server:

Note: FastAPI is optional, and does not require auth to access the healthcheck endpoint.

```bash
npm run fastapi-dev
# or
yarn fastapi-dev
# or
pnpm fastapi-dev
# or
bun fastapi-dev
```

Open [http://localhost:8000/api/py/healthcheck](http://localhost:8000/api/py/healthcheck) with your browser to see the FastAPI healthcheck endpoint.

#
