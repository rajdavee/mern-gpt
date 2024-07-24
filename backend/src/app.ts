import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Local development URL
  "https://mern-3lumfqo87-raj-24642cc0.vercel.app" // Deployed frontend URL
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) { // Allow requests from the specified origins
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies to be sent and received
};

// Middlewares
app.use(cors(corsOptions));
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
