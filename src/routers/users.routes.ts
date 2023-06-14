import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    retriveUserController,
} from "../controllers/users.controllers";
import {
    validateCpfExists,
    validateEmailExists,
    validateIdExists,
    validatePhoneExists,
} from "../middlewares/users.middlewares";

const usersRoutes: Router = Router();

usersRoutes.post(
    "",
    validateData(createUserSchema),
    validateEmailExists,
    validateCpfExists,
    validatePhoneExists,
    createUserController
);
usersRoutes.get("/:id", validateIdExists, retriveUserController);

export default usersRoutes;
