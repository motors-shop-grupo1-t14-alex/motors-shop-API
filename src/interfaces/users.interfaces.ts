import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, returnUserSchema } from "../schemas/user.schemas";
import User from "../entities/users.entity";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnUser = z.infer<typeof returnUserSchema>
type iUserRepo = Repository<User>
type iUserUpdate = Partial<Omit<iCreateUser, 'cpf' | 'is_admin'>>

export {
    iCreateUser,
    iReturnUser,
    iUserRepo,
    iUserUpdate
}