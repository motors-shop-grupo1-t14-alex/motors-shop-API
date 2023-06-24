import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, returnUserSchema, updateUserSchema } from "../schemas/user.schemas";
import User from "../entities/users.entity";
import { States } from "../entities/addresses.entity";

type iCreateUser = z.infer<typeof createUserSchema>
type iReturnUser = z.infer<typeof returnUserSchema>
type iUserRepo = Repository<User>

type iUserUpdate = {
    nome: string,
    email: string,
    cpf: string,
    cellphone: string,
    description: string,
    address?: {
        cep: string
        uf: States
        city: string
        street: string
        number: string
        complement: string
    }
}

export {
    iCreateUser,
    iReturnUser,
    iUserRepo,
    iUserUpdate
}