# User service

Source: `backend/src/services/user.js`

`UserService` accesses the `users` table. Every method takes the authenticated user metadata as its **first argument**, `auth = { user, accessToken }`, which `SupabaseJWT` places in `req.auth`.

Internally each call does `createUserClient(auth.accessToken)`, so queries run as the caller and **RLS is enforced by the database**. If `auth.accessToken` is missing the service throws instead of falling back to the server-level client.

| Method | Description |
| --- | --- |
| `CreateUser(auth, username, email, number, name, lastname, user_role)` | Inserts a row into `users` (`user_role` is stored in the `user_rol` column). Returns `true`. |
| `GetUserByEmail(auth, email)` | Returns the first matching row, or `undefined`. |
| `GetUserById(auth, user_id)` | Returns the first matching row, or `undefined`. |

Supabase errors are logged and thrown.

## Why not the default client

The default `supabase` client has no user context, so RLS would apply as anon or not protect per user. Passing the user metadata keeps the service secure on its own, regardless of the route. See [Supabase clients](supabase-clients.md).

## Requirements on the database

RLS must be enabled on `users`, with policies allowing:

- Authenticated users to select the rows they need.
- Only `admin` users to insert.
