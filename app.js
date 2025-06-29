import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflow", workflowRouter);

// Add Upstash webhook endpoint
app.post("/api/upstash", (req, res) => {
  console.log("✅ Upstash webhook received:", req.body);
  res.json({
    success: true,
    message: "Webhook processed successfully",
    timestamp: new Date().toISOString(),
  });
});

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to subscription tracker");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
