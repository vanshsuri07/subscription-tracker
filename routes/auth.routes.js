import { Router } from "express";

import { signUp } from "../controller/auth.controller.js";
import { signIn } from "../controller/auth.controller.js";
import { signOut } from "../controller/auth.controller.js";
const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);

export default authRouter;
