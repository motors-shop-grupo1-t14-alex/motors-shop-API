import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    retriveUserController,
    updateUserController,
} from "../controllers/users.controllers";
import {
    validateCpfExists,
    validateEmailExists,
    validateIdExists,
    validatePhoneExists,
} from "../middlewares/users.middlewares";
import validateUserToken from "../middlewares/validateUser.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
    "",
    validateData(createUserSchema),
    validateEmailExists,
    validateCpfExists,
    validatePhoneExists,
    createUserController
);
usersRoutes.get("/:id", validateUserToken, validateIdExists, retriveUserController);
usersRoutes.patch("/:id", validateData(updateUserSchema), validateEmailExists, validatePhoneExists, updateUserController)

export default usersRoutes;
