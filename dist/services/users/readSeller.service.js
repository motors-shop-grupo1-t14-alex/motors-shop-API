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
const adverts_entity_1 = require("../../entities/adverts.entity");
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const erros_1 = require("../../erros");
const readSellerByIdService = (sellerId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = data_source_1.default.getRepository(users_entity_1.default);
    const advertsRepo = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const seller = yield userRepo.findOneBy({ id: parseInt(sellerId), is_seller: true });
    if (!seller) {
        throw new erros_1.AppError("Insufficient permission", 401);
    }
    const sellerAdverts = yield advertsRepo.find({
        where: {
            user: seller
        },
        relations: {
            user: true
        },
        select: {
            user: {
                id: true,
                name: true,
                description: true
            }
        }
    });
    const sellerReturn = {
        name: seller === null || seller === void 0 ? void 0 : seller.name,
        description: seller === null || seller === void 0 ? void 0 : seller.description,
        adverts: sellerAdverts
    };
    return sellerReturn;
});
exports.default = readSellerByIdService;
