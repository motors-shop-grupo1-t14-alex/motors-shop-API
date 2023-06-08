import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import { createUserController } from "../controllers/users.controllers";

const usersRoutes: Router = Router()

usersRoutes.post("", validateData(createUserSchema), createUserController)

export default usersRoutes