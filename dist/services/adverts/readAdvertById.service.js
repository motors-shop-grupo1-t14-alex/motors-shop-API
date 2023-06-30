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
const readAdvertByIdService = (advertId) => __awaiter(void 0, void 0, void 0, function* () {
    const advertRepository = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const getAdvertById = yield advertRepository.createQueryBuilder("advert")
        .innerJoinAndSelect("advert.user", "advert_user")
        .innerJoinAndSelect("advert.gallery_images", "advert_gallery_images")
        .where("advert.id = :advert", { advert: advertId })
        .getOne();
    return getAdvertById;
});
exports.default = readAdvertByIdService;
