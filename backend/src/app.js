// documentation: docs/backend/app-and-server.md
import "dotenv/config";
import { PORT } from "./config/config.js";
import express from 'express';
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use("/auth", authRouter)
app.use(userRouter)

app.listen(PORT, ()=>{
    console.log(`Running locally on http://localhost:${PORT}`)
})
