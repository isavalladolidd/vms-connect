import "dotenv/config";
import { PORT } from "./config/config.js";
import express from 'express';
import userRouter from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(userRouter)

app.listen(PORT, ()=>{
    console.log(`Running locally on http://localhost:${PORT}`)
})
