import { Router } from "express";
import authRouter from "./auth.js";
import serverRouter from "./server.js";
import { /*  isLoggedIn, */ verifyCredentials } from "../middlewares/auth.js";

const v1Router = Router();
// routes that don't need to check credentials
v1Router.use("/auth", authRouter);
// routes that need to check credentials
v1Router.use(verifyCredentials);
v1Router.use("/", serverRouter);

// routes that need to be logged in (authorized)
//v1Router.use("/protected", isLoggedIn, protectedRouter);

export default v1Router;
