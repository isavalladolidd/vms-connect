# Supabase clients

Source: `backend/src/clients/vms_supabase.js`

The file validates `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` at import time (it throws if either is missing) and exposes two ways to talk to Supabase. Both disable session persistence, token auto-refresh and URL session detection, since this is a server.

## Option 1: `createUserClient(accessToken)` (named export)

A client created **per request** that sends the user's JWT in the `Authorization` header. Postgres sees the request as that authenticated user, so **Row Level Security (RLS) applies as that user**.

Use it for anything done on behalf of a user. Services must use this one.

## Option 2: `supabase` (default export)

A single shared client with the publishable key and no user token. It runs with the base (anon) access level, not a user's.

Use it for flows where there is no user yet:

- `supabase.auth.getUser(token)` in `SupabaseJWT` to validate a token.
- `signInWithPassword` and `refreshSession` in the auth routes.

Do not use it for data queries on behalf of a user.

## Which one to use

| Situation | Client |
| --- | --- |
| Validate a token, log in, refresh a session | `supabase` (default) |
| Read or write data for an authenticated user | `createUserClient(accessToken)` |
