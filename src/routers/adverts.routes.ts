import { Router } from "express";
import { createAdvertController, listAllAdvertsController, removeAdvertController, updateAdvertController } from "../controllers/adverts.controllers";
import validateToken from "../middlewares/validateToken.middleware";
import validateData from "../middlewares/validateData.middleware";
import { createAdvertSchema, updateAdvertSchema } from "../schemas/adverts.schemas";
import { validateIfUserIsAdminOrSeller } from "../middlewares/users.middlewares";
import { validateIfAdvertExists, validateIfUserIsOwnerAdvertOrAdmin } from "../middlewares/adverts.middlewares";

const advertsRoutes: Router = Router()

advertsRoutes.post("", validateToken, validateIfUserIsAdminOrSeller, validateData(createAdvertSchema), createAdvertController)
advertsRoutes.get("", listAllAdvertsController)
advertsRoutes.patch("/:id", validateToken, validateIfAdvertExists, validateIfUserIsOwnerAdvertOrAdmin, validateData(updateAdvertSchema), updateAdvertController)
advertsRoutes.delete("/:id", validateToken, validateIfAdvertExists, validateIfUserIsOwnerAdvertOrAdmin, removeAdvertController)

export default advertsRoutes