import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import loginSchema from "../schemas/login.schema";
import createLoginController from "../controllers/login.controller";

const loginRoutes: Router = Router()

loginRoutes.post("", validateData(loginSchema), createLoginController)

export default loginRoutes