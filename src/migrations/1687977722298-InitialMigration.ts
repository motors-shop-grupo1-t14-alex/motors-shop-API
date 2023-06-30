import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1687977722298 implements MigrationInterface {
    name = 'InitialMigration1687977722298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "updated_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

}
