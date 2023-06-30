"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelType = exports.Advert = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = __importDefault(require("./users.entity"));
const gallery_images_entity_1 = __importDefault(require("./gallery.images.entity"));
var FuelType;
(function (FuelType) {
    FuelType["FLEX"] = "Flex";
    FuelType["HYBRID"] = "H\u00EDbrido";
    FuelType["ELECTRIC"] = "El\u00E9trico";
})(FuelType || (FuelType = {}));
exports.FuelType = FuelType;
let Advert = class Advert {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Advert.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 127 }),
    __metadata("design:type", String)
], Advert.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Advert.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "integer" }),
    __metadata("design:type", Number)
], Advert.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: FuelType, default: FuelType.FLEX }),
    __metadata("design:type", String)
], Advert.prototype, "fuel_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Advert.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Advert.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Advert.prototype, "fipe_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Advert.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Advert.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Advert.prototype, "cover_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: true }),
    __metadata("design:type", Boolean)
], Advert.prototype, "is_published", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Object)
], Advert.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", Object)
], Advert.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.default, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Advert.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => gallery_images_entity_1.default, gallery_image => gallery_image.advert, { cascade: true }),
    __metadata("design:type", Array)
], Advert.prototype, "gallery_images", void 0);
Advert = __decorate([
    (0, typeorm_1.Entity)("adverts")
], Advert);
exports.Advert = Advert;
