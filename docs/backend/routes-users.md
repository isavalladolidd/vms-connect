# Users routes

Source: `backend/src/routes/users.js`. Mounted at the root.

Both routes use `SupabaseJWT` and pass `req.auth` to the service.

## POST `/users`

Creates a user row. Admin only.

Body: `username`, `email`, `number`, `name`, `lastname`, `user_role`.

`user_role` must be one of `user`, `admin`, `employee`.

Flow:

1. `406` if `user_role` is not allowed.
2. The caller is looked up with `userService.GetUserByEmail(req.auth, req.user.email)`.
3. `403 Forbidden` unless the caller's `user_rol` is `admin`.
4. `userService.CreateUser(req.auth, ...)`.
5. `200`: `{ created: true }`.

## GET `/users`

Query: `email` and/or `user_id`. At least one is required, otherwise `406`.

`200`: `{ user_by_id, user_by_email }` (the one not requested is `undefined`).

## Security note

The `admin` check in the route is **basic backend authorization**. It is not the security boundary. The service queries through `createUserClient`, so the database RLS policies enforce who can read or insert, even if the route check were bypassed or forgotten. See [User service](services-user.md).
