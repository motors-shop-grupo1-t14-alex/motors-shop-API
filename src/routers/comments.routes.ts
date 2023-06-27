import { Router } from "express";
import {
    createCommentController,
    retriveCommentController,
} from "../controllers/comments.controllers";
import { verifyToken } from "../middlewares/users.middlewares";
import { validateIfAdvertExists } from "../middlewares/adverts.middlewares";
import validateData from "../middlewares/validateData.middleware";
import { createCommentSchema } from "../schemas/comments.schemas";

const commentRoutes: Router = Router();

commentRoutes.post(
    "/:id",
    validateData(createCommentSchema),
    verifyToken,
    validateIfAdvertExists,
    createCommentController
);
commentRoutes.get(
    "/:id",
    verifyToken,
    validateIfAdvertExists,
    retriveCommentController
);

export default commentRoutes;
