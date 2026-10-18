# Auth routes

Source: `backend/src/routes/auth.js`. Mounted at `/auth`.

| Method | Path | Middleware | Description |
| --- | --- | --- | --- |
| POST | `/auth/login` | `BearerTokenGlobal` | Sign in with email and password |
| POST | `/auth/refresh` | `BearerTokenGlobal` | Exchange a refresh token for a new session |
| GET | `/auth/me` | `SupabaseJWT` | Return the authenticated user |

## POST `/auth/login`

Body: `{ "email": string, "password": string }`

- `400` if email or password is missing.
- `401 Invalid credentials` if Supabase rejects them.
- `200`: `{ access_token, refresh_token, expires_at, user: { id, email } }`

## POST `/auth/refresh`

Body: `{ "refresh_token": string }`

- `400` if `refresh_token` is missing.
- `401 Invalid refresh token` if it is invalid.
- `200`: `{ access_token, refresh_token, expires_at }`

## GET `/auth/me`

Header: `Authorization: Bearer <access_token>`

`200`: `{ id, email }` of the token's user.

Login and refresh use the default `supabase` client, see [Supabase clients](supabase-clients.md). Middlewares are described in [Middlewares](middlewares.md).
