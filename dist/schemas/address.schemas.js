"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressSchema = exports.returnAddressSchema = exports.createAddressSchema = void 0;
const zod_1 = require("zod");
const createAddressSchema = zod_1.z.object({
    cep: zod_1.z.string().max(8),
    uf: zod_1.z.enum(["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]),
    city: zod_1.z.string().max(50),
    street: zod_1.z.string().max(255),
    number: zod_1.z.string().max(10),
    complement: zod_1.z.string().nullable()
});
exports.createAddressSchema = createAddressSchema;
const returnAddressSchema = createAddressSchema.extend({
    id: zod_1.z.number()
});
exports.returnAddressSchema = returnAddressSchema;
const updateAddressSchema = createAddressSchema.partial();
exports.updateAddressSchema = updateAddressSchema;
