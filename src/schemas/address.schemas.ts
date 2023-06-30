import { z } from "zod";

const createAddressSchema = z.object({
    cep: z.string().max(8),
    uf: z.enum(["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]),
    city: z.string().max(50),
    street: z.string().max(255),
    number: z.string().max(10),
    complement: z.string().nullable()
})

const returnAddressSchema = createAddressSchema.extend({
    id: z.number()
})

const updateAddressSchema = createAddressSchema.partial()

export {
    createAddressSchema,
    returnAddressSchema,
    updateAddressSchema,
}



