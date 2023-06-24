import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, returnUserSchema, updateUserSchema } from "../schemas/user.schemas";
import User from "../entities/users.entity";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnUser = z.infer<typeof returnUserSchema>
type iUserRepo = Repository<User>
type iUserUpdate = z.infer<typeof updateUserSchema>

export {
    iCreateUser,
    iReturnUser,
    iUserRepo,
    iUserUpdate
}