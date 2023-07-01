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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../../data-source"));
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const addresses_entity_1 = require("../../entities/addresses.entity");
const updateUserService = (userData, userID) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const addressRepository = data_source_1.default.getRepository(addresses_entity_1.Address);
    const { address } = userData, rest = __rest(userData, ["address"]);
    const oldUserData = yield userRepository.findOne({
        where: {
            id: userID,
        },
        relations: {
            address: true
        }
    });
    if (address && oldUserData) {
        const oldAddressData = yield addressRepository.findOneBy({
            user: oldUserData
        });
        const newAddress = addressRepository.create(Object.assign(Object.assign(Object.assign({}, oldAddressData), address), { uf: address.uf }));
        yield addressRepository.save(newAddress);
    }
    const user = userRepository.create(Object.assign(Object.assign({}, oldUserData), rest));
    yield userRepository.save(user);
    const newUser = yield userRepository.findOne({
        where: {
            id: userID,
        },
        relations: {
            address: true
        }
    });
    return newUser;
});
exports.default = updateUserService;
