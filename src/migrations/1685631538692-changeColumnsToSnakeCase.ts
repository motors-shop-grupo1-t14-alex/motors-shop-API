import { MigrationInterface, QueryRunner } from "typeorm";

export class changeColumnsToSnakeCase1685631538692 implements MigrationInterface {
    name = 'changeColumnsToSnakeCase1685631538692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" RENAME COLUMN "updatedAt" TO "updated_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted_at" date`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "deleted_at" date`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "updated_at" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" RENAME COLUMN "updated_at" TO "updatedAt"`);
    }

}
