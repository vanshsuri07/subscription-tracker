import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controller/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: `Get subscription details` })
);

subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: `Update subscription with id` })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: `Delete subscription with id` })
);

subscriptionRouter.get("user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (res, req) =>
  res.send({ title: `Cancel subscription with id` })
);
subscriptionRouter.get("/upcoming", (req, res) =>
  res.send({ title: `Get all upcoming subscriptions` })
);
export default subscriptionRouter;
