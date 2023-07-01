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
exports.InitialMigration1688239257726 = void 0;
class InitialMigration1688239257726 {
    constructor() {
        this.name = 'InitialMigration1688239257726';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "gallery_images" ("id" SERIAL NOT NULL, "url_image" character varying(255) NOT NULL, "advertId" integer, CONSTRAINT "PK_9b1601c4bdad7456bb12636dd10" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "adverts" ("id" SERIAL NOT NULL, "brand" character varying(127) NOT NULL, "model" character varying(255) NOT NULL, "year" integer NOT NULL, "fuel_type" "public"."adverts_fuel_type_enum" NOT NULL DEFAULT 'Flex', "mileage" character varying(50) NOT NULL, "color" character varying(20) NOT NULL, "fipe_price" numeric NOT NULL, "price" numeric NOT NULL, "description" text NOT NULL, "cover_image" character varying(255) NOT NULL, "is_published" boolean NOT NULL DEFAULT true, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "cellphone" character varying(11) NOT NULL, "birth_date" date NOT NULL, "description" text, "is_seller" boolean NOT NULL DEFAULT false, "is_admin" boolean NOT NULL DEFAULT false, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), "reset_password" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "cep" character varying(8) NOT NULL, "uf" character varying(2) NOT NULL DEFAULT 'AC', "city" character varying(50) NOT NULL, "street" character varying(255) NOT NULL, "number" character varying(10) NOT NULL, "complement" text, "userId" integer, CONSTRAINT "REL_b4f5c94493f23641866f161e21" UNIQUE ("userId"), CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "comment_advert_users" ("id" SERIAL NOT NULL, "comment" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "advertId" integer, CONSTRAINT "PK_37749ea44760c28131b39310909" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "gallery_images" ADD CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_235b9446b72280b883894d3ba4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_784952f681120944cc83478a08e" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_784952f681120944cc83478a08e"`);
            yield queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_235b9446b72280b883894d3ba4a"`);
            yield queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
            yield queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
            yield queryRunner.query(`ALTER TABLE "gallery_images" DROP CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48"`);
            yield queryRunner.query(`DROP TABLE "comment_advert_users"`);
            yield queryRunner.query(`DROP TABLE "adresses"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "adverts"`);
            yield queryRunner.query(`DROP TABLE "gallery_images"`);
        });
    }
}
exports.InitialMigration1688239257726 = InitialMigration1688239257726;
