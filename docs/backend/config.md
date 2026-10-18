# Config

Source: `backend/src/config/config.js`

Exports `PORT` from `process.env.PORT`. It has **no default**: if `PORT` is not set, `app.listen` receives `undefined`, so set it in `.env`.

## Environment variables

Defined in `backend/.env` (copy `backend/.env.example`).

| Variable | Used by | Description |
| --- | --- | --- |
| `SUPABASE_URL` | [Supabase clients](supabase-clients.md) | Supabase project URL |
| `SUPABASE_PUBLISHABLE_KEY` | [Supabase clients](supabase-clients.md) | Supabase publishable key |
| `SUPER_SECRET_KEY` | `BearerTokenGlobal` | Shared secret for login and refresh |
| `PORT` | `config.js` | HTTP port |
