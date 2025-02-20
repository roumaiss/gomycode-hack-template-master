import { Router } from "express";
import authRouter from "./auth.js";
import serverRouter from "./server.js";
import { isLoggedIn, verifyCredentials } from "../middlewares/auth.js";
import userRouter from "./user.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { isSimpleUser } from "../middlewares/isSimpleUser.js";
import planRouter from "./planningUser.js";
import planProRouter from "./planningPlan.js";
import contactRoute from "./contact.js";

const v1Router = Router();
// routes that don't need to check credentials
v1Router.use("/auth", authRouter);
// routes that need to check credentials
v1Router.use(verifyCredentials);
v1Router.use("/", serverRouter);
v1Router.use("/admin", isLoggedIn, isAdmin, userRouter);
v1Router.use("/planUser", isLoggedIn, isSimpleUser, planRouter);
v1Router.use("/planPro", isLoggedIn, planProRouter);
v1Router.use('/contact', contactRoute )

export default v1Router;
