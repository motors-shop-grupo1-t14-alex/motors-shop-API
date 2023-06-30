import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUserMigration1687552510859 implements MigrationInterface {
    name = 'DeleteUserMigration1687552510859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gallery_images" DROP CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_235b9446b72280b883894d3ba4a"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_784952f681120944cc83478a08e"`);
        await queryRunner.query(`ALTER TABLE "gallery_images" ADD CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_235b9446b72280b883894d3ba4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_784952f681120944cc83478a08e" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_784952f681120944cc83478a08e"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP CONSTRAINT "FK_235b9446b72280b883894d3ba4a"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "gallery_images" DROP CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_784952f681120944cc83478a08e" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD CONSTRAINT "FK_235b9446b72280b883894d3ba4a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gallery_images" ADD CONSTRAINT "FK_67b3fdcbb17e45f4a7e9bbf4f48" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
