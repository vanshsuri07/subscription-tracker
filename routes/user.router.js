import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "Create a new user" }));
userRouter.put("/:id", (req, res) =>
  res.send({ title: `Update user with id ${req.params.id}` })
);
userRouter.delete("/:id", (req, res) =>
  res.send({ title: `Delete user with id ${req.params.id}` })
);

export default userRouter;
