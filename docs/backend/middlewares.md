# Middlewares

Source: `backend/src/middlewares/auth.js`

There are two middlewares with different purposes. Both expect `Authorization: Bearer <token>`.

## `BearerTokenGlobal`

Checks that the token equals the shared secret `SUPER_SECRET_KEY` from the environment. It identifies the **calling application**, not a user.

- `401 Missing Token`: no `Bearer` header.
- `403 Invalid Token.`: token differs from `SUPER_SECRET_KEY`.

Used on routes that run before any user session exists: `POST /auth/login` and `POST /auth/refresh`.

## `SupabaseJWT`

Validates a **user's Supabase access token** (the one returned by `/auth/login`) with `supabase.auth.getUser(token)`.

- `401 Missing Token`: no `Bearer` header.
- `401 Invalid or expired token.`: Supabase rejected the token.

On success it sets:

| Property | Value |
| --- | --- |
| `req.user` | The Supabase auth user (`id`, `email`, ...) |
| `req.auth` | `{ user, accessToken }`, the user metadata that services receive to build a `createUserClient` |

## Which one to use

| Route type | Middleware |
| --- | --- |
| Login / refresh (no user yet) | `BearerTokenGlobal` |
| Anything done as a logged-in user | `SupabaseJWT` |
