import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    listUserController,
    retriveUserController,
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
usersRoutes.get("", listUserController);
usersRoutes.get(
    "/:id",
    validateUserToken,
    validateIdExists,
    retriveUserController
);

export default usersRoutes;
