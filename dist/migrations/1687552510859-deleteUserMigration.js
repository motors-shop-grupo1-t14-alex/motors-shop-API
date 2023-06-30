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
exports.DeleteUserMigration1687552510859 = void 0;
class DeleteUserMigration1687552510859 {
    constructor() {
        this.name = 'DeleteUserMigration1687552510859';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "gallery_images" DROP CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48"`);
            yield queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_235b9446b72280b883894d3ba4a"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_784952f681120944cc83478a08e"`);
            yield queryRunner.query(`ALTER TABLE "gallery_images" ADD CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_235b9446b72280b883894d3ba4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_784952f681120944cc83478a08e" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_784952f681120944cc83478a08e"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_235b9446b72280b883894d3ba4a"`);
            yield queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
            yield queryRunner.query(`ALTER TABLE "gallery_images" DROP CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_784952f681120944cc83478a08e" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_235b9446b72280b883894d3ba4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "gallery_images" ADD CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.DeleteUserMigration1687552510859 = DeleteUserMigration1687552510859;
