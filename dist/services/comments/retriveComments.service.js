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
exports.retriveCommentsServices = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const adverts_entity_1 = require("../../entities/adverts.entity");
const comment_advert_user_entity_1 = __importDefault(require("../../entities/comment.advert.user.entity"));
const retriveCommentsServices = (advertId) => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepo = yield data_source_1.default.getRepository(comment_advert_user_entity_1.default);
    const advertsRepo = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const advert = yield advertsRepo.findOneBy({ id: advertId });
    const comments = yield commentRepo.find({
        where: {
            advert: advert
        },
        relations: {
            user: true
        },
        select: {
            user: {
                name: true
            }
        }
    });
    return comments;
});
exports.retriveCommentsServices = retriveCommentsServices;
