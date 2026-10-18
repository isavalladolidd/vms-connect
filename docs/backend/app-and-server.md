# App and server

Sources: `backend/src/app.js`, `backend/src/server/server.js`

## `app.js` (entry point)

Used by `npm run dev` (`node --env-file=.env --watch src/app.js`).

- Loads `dotenv/config`.
- Creates the Express app with `express.json()`.
- Mounts `authRouter` at `/auth` and `userRouter` at the root.
- Listens on `PORT` from [config](config.md).

## `server/server.js`

An alternative server bootstrap that is **not used** by `app.js` or any script. It currently contains a bug (`server.arguments(...)` should be `server.use(...)`). It defaults `PORT` to `4000` and binds to `127.0.0.1`.
