import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();



// Middlewares
app.use(cors();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production
app.use(morgan("dev"));

// Use the router
app.use("/api/v1", appRouter);

// Catch-all for unknown routes
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

export default app;
