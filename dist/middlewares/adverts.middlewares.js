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
exports.validateIfUserIsOwnerAdvertOrAdmin = exports.validateIfAdvertExists = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const adverts_entity_1 = require("../entities/adverts.entity");
const erros_1 = require("../erros");
const users_entity_1 = __importDefault(require("../entities/users.entity"));
const validateIfAdvertExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = Number(req.params.id);
    const advertRepository = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const findAdvert = yield advertRepository.findOne({
        where: {
            id: advertId
        }
    });
    if (!findAdvert) {
        throw new erros_1.AppError("Advert not found", 404);
    }
    next();
});
exports.validateIfAdvertExists = validateIfAdvertExists;
const validateIfUserIsOwnerAdvertOrAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = Number(req.params.id);
    const userId = Number(res.locals.userId);
    const advertRepository = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const userRepository = data_source_1.default.getRepository(users_entity_1.default);
    const findAdvert = yield advertRepository.findOne({
        where: {
            id: advertId
        },
        relations: {
            user: true
        }
    });
    const findUser = yield userRepository.findOne({
        where: {
            id: userId
        }
    });
    const userOwnerAdvert = Object(findAdvert.user);
    if (userId !== userOwnerAdvert.id && !findUser.is_admin) {
        throw new erros_1.AppError("Insufficient permission", 401);
    }
    next();
});
exports.validateIfUserIsOwnerAdvertOrAdmin = validateIfUserIsOwnerAdvertOrAdmin;
