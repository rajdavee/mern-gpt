import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://mern-nn78yafqe-raj-24642cc0.vercel.app", // Frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production
app.use(morgan("dev"));

// API routes
app.use("/api/v1", appRouter);

export default app;
