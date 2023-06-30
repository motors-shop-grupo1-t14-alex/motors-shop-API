import { z } from "zod";
import { createAddressSchema, returnAddressSchema, updateAddressSchema } from "../schemas/address.schemas";
import { Address } from "../entities/addresses.entity";
import { Repository } from "typeorm";

type iCreateAddress = z.infer<typeof createAddressSchema>
type iReturnAddress = z.infer<typeof returnAddressSchema>
type iUpdateAddress = z.infer<typeof updateAddressSchema>
type iAddressRepo = Repository<Address>

export {
    iCreateAddress,
    iReturnAddress,
    iUpdateAddress,
    iAddressRepo,
}