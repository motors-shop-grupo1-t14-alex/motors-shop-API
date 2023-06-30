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
const gallery_images_entity_1 = __importDefault(require("../../entities/gallery.images.entity"));
const adverts_schemas_1 = require("../../schemas/adverts.schemas");
const updateAdvertService = (advertId, advertData) => __awaiter(void 0, void 0, void 0, function* () {
    const advertRepository = data_source_1.default.getRepository(adverts_entity_1.Advert);
    const galleryImagesRepository = data_source_1.default.getRepository(gallery_images_entity_1.default);
    const oldAdvert = Object(yield advertRepository.findOneBy({
        id: advertId
    }));
    if (advertData.gallery_images) {
        yield galleryImagesRepository.delete({ advert: oldAdvert });
    }
    const advert = Object(advertRepository.create(Object.assign(Object.assign({}, oldAdvert), advertData)));
    yield advertRepository.save(advert);
    const getAdvert = yield advertRepository.findOne({
        where: {
            id: advert.id
        },
        relations: {
            gallery_images: true
        }
    });
    const updatedAdvert = adverts_schemas_1.returnAdvertSchema.parse(getAdvert);
    return updatedAdvert;
});
exports.default = updateAdvertService;
