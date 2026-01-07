import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { ENV } from "./config/env.ts";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Success!" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../admin/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
    });
}
app.listen(ENV.PORT, () => console.log("Server is up and running using typescript! Let's go!!!! Hello E-commerce backend!!!!!! yeeeeeheeee!!!!"));