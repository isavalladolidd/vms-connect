# Documentation

Each source file starts with a `// documentation: <path>` comment pointing to the doc that explains it.

## Backend

| Doc | Source |
| --- | --- |
| [App and server](backend/app-and-server.md) | `backend/src/app.js`, `backend/src/server/server.js` |
| [Config](backend/config.md) | `backend/src/config/config.js` |
| [Supabase clients](backend/supabase-clients.md) | `backend/src/clients/vms_supabase.js` |
| [Middlewares](backend/middlewares.md) | `backend/src/middlewares/auth.js` |
| [Auth routes](backend/routes-auth.md) | `backend/src/routes/auth.js` |
| [Users routes](backend/routes-users.md) | `backend/src/routes/users.js` |
| [User service](backend/services-user.md) | `backend/src/services/user.js` |

## Request flow

```
request ──▶ route ──▶ middleware ──▶ route handler ──▶ service ──▶ Supabase
                      (BearerTokenGlobal                (createUserClient,
                       or SupabaseJWT)                   RLS as the user)
```
