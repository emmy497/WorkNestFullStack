import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import jobRoutes from "./routes/jobRoutes";
import authRoutes from "./routes/authRoutes";
import savedJobRoutes from "./routes/savedJobRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

// Everything in jobRoutes now lives under /api/jobs
app.use("/api/jobs", jobRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/saved-jobs", savedJobRoutes);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();
