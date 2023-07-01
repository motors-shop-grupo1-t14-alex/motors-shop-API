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
exports.createCommentService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const adverts_entity_1 = require("../../entities/adverts.entity");
const comment_advert_user_entity_1 = __importDefault(require("../../entities/comment.advert.user.entity"));
const users_entity_1 = __importDefault(require("../../entities/users.entity"));
const createCommentService = (comment, advertId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const advertRepo = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const advert = yield advertRepo.findOneBy({ id: advertId });
    const userRepo = data_source_1.default.getRepository(users_entity_1.default);
    const user = yield userRepo.findOneBy({ id: userId });
    const commentRepo = data_source_1.default.getRepository(comment_advert_user_entity_1.default);
    const commentNew = Object.assign(Object.assign({}, comment), { user: userId, advert: advertId });
    const newComment = commentRepo.create(commentNew);
    yield commentRepo.save(newComment);
    return newComment;
});
exports.createCommentService = createCommentService;
