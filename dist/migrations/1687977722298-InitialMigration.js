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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1687977722298 = void 0;
class InitialMigration1687977722298 {
    constructor() {
        this.name = 'InitialMigration1687977722298';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "updated_at"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "updated_at"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "updated_at" date NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "created_at" date NOT NULL DEFAULT now()`);
        });
    }
}
exports.InitialMigration1687977722298 = InitialMigration1687977722298;
