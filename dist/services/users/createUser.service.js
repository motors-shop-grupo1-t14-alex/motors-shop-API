"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const addresses_entity_1 = require("../../entities/addresses.entity");
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const user_schemas_1 = require("../../schemas/user.schemas");
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const addressRepository = data_source_1.default.getRepository(addresses_entity_1.Address);
    const address = addressRepository.create(Object.assign(Object.assign({}, userData.address), { uf: userData.address.uf }));
    yield addressRepository.save(address);
    const user = userRepository.create(Object.assign(Object.assign({}, userData), { address: address }));
    yield userRepository.save(user);
    const newUser = user_schemas_1.returnUserSchema.parse(user);
    return newUser;
});
exports.default = createUserService;
