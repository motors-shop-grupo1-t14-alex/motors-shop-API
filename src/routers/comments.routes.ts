import { Router } from "express";
import {
    createCommentController,
    deleteCommentController,
    retriveCommentController,
    updateCommentController,
} from "../controllers/comments.controllers";
import { verifyToken } from "../middlewares/users.middlewares";
import { validateIfAdvertExists } from "../middlewares/adverts.middlewares";
import validateData from "../middlewares/validateData.middleware";
import { createCommentSchema } from "../schemas/comments.schemas";
import { validateIfCommentExists } from "../middlewares/comments.middlawares";

const commentRoutes: Router = Router();

commentRoutes.post(
    "/:id",
    validateData(createCommentSchema),
    verifyToken,
    validateIfAdvertExists,
    createCommentController
);
commentRoutes.get("/:id", validateIfAdvertExists, retriveCommentController);
commentRoutes.delete("/:id", validateIfCommentExists, deleteCommentController);
commentRoutes.patch("/:id", validateIfCommentExists, updateCommentController);

export default commentRoutes;
