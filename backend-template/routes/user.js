import { Router } from "express";
import { addUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.js";
const userRouter = Router();

userRouter.route("/").get(getUsers).post(addUser);
userRouter.route("/:id").put(updateUser).get(getUserById).delete(deleteUser);

export default userRouter;
