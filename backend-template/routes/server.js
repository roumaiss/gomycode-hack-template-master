import { Router } from "express";
const serverRouter = Router();

serverRouter.get("/", (_req, res) => {
    res.json({ message: "server is running" });
});
export default serverRouter;
