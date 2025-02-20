import { Router } from "express";
import { addPlan, deletePlan, getUserPlansByDate, updatePlan } from "../controllers/planning.js";
const planRouter = new Router();

planRouter.get('/:date', getUserPlansByDate);
planRouter.post('/add', addPlan);
planRouter.route('/:id').put(updatePlan).delete(deletePlan);

export default planRouter;
