import { Router } from "express";
import { addPlan, deletePlan, getProPlansByDate, updatePlan } from "../controllers/planning.js";
const planProRouter = new Router();

planProRouter.get("/:date", getProPlansByDate);
planProRouter.post("/add", addPlan);
planProRouter.route("/:id").put(updatePlan).delete(deletePlan);

export default planProRouter;
