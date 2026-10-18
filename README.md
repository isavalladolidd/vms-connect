# vms-connect

Web application with an Express backend that uses Supabase for authentication and data.

## Project structure

```
.
├── .gitignore
├── backend
│   ├── .env.example
│   ├── package.json
│   └── src
│       ├── app.js
│       ├── clients        Supabase clients
│       ├── config         Environment config
│       ├── controllers
│       ├── middlewares    Auth middlewares
│       ├── models
│       ├── routes         HTTP routes
│       ├── schemas
│       ├── server
│       ├── services       Data access (per-user Supabase client)
│       └── sockets
├── docs                   Documentation, see docs/README.md
├── frontend
│   ├── .env.example
│   └── package.json
└── README.md
```

## Getting started

```bash
cd backend
npm install
cp .env.example .env   # fill in the values
npm run dev
```

Required variables: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPER_SECRET_KEY`, `PORT`.

## Authentication overview

- **`BearerTokenGlobal`**: shared secret (`SUPER_SECRET_KEY`) for `/auth/login` and `/auth/refresh`.
- **`SupabaseJWT`**: validates the user's Supabase access token for every other route.
- **Two Supabase clients**: the default `supabase` client (base access level) and `createUserClient(accessToken)` (acts as the authenticated user, so RLS applies). Services always receive the user metadata and use `createUserClient`.

## Documentation

Full documentation lives in [docs/](docs/README.md). Every source file starts with a `// documentation: <path>` comment pointing to its doc.
