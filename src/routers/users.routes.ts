import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    deleteUserController,
    readSellerByIdController,
    resetPasswordController,
    retriveUserController,
    sendEmailResetPasswordController,
    updateUserController,
} from "../controllers/users.controllers";
import {
    validateCpfExists,
    validateEmailExists,
    validateIdExists,
    validatePhoneExists,
} from "../middlewares/users.middlewares";
import validateUserToken from "../middlewares/validateUser.middleware";
import validateToken from "../middlewares/validateToken.middleware";

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
usersRoutes.patch(
    "/:id", 
    validateUserToken, 
    validateToken, 
    validateIdExists, 
    validateData(updateUserSchema), 
    validateEmailExists, 
    validatePhoneExists, 
    updateUserController
);
usersRoutes.delete("/:id", validateUserToken, validateIdExists, deleteUserController)
usersRoutes.post("/resetPassword", sendEmailResetPasswordController)
usersRoutes.patch("/resetPassword/:token", resetPasswordController)
usersRoutes.get("/seller/:id", validateIdExists, readSellerByIdController)

export default usersRoutes;
