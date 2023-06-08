import { MigrationInterface, QueryRunner } from "typeorm";

export class deletedColumnDeleteEntityAdvert1685974883545 implements MigrationInterface {
    name = 'deletedColumnDeleteEntityAdvert1685974883545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "deleted_at" date`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted_at" date`);
    }

}
