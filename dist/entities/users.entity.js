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
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("typeorm");
const adverts_entity_1 = require("./adverts.entity");
const addresses_entity_1 = require("./addresses.entity");
let User = class User {
    hashPassword() {
        const isEncrypted = (0, bcryptjs_1.getRounds)(this.password);
        if (!isEncrypted) {
            this.password = (0, bcryptjs_1.hashSync)(this.password, 10);
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 127 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 127, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 11, unique: true }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 11, unique: true }),
    __metadata("design:type", String)
], User.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], User.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_seller", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Object)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "date" }),
    __metadata("design:type", Object)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => adverts_entity_1.Advert, advert => advert.user),
    __metadata("design:type", Array)
], User.prototype, "adverts", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => addresses_entity_1.Address, address => address.user),
    __metadata("design:type", Object)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "reset_password", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.default = User;
