// documentation: docs/backend/app-and-server.md
//Import Modules for the server setup file

import "dotenv/config";
import express from "express";


const server = express();
server.arguments(express.json());

const PORT = process.env.PORT ?? 4000; // if PORT is not defined in the env, default to 4000


server.listen(PORT, '127.0.0.1', () => {
    console.log("Server is listenning in : http://127.0.0.1:", PORT);
})

// 