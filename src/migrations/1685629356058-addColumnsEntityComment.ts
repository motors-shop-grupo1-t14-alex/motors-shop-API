import { MigrationInterface, QueryRunner } from "typeorm";

export class addColumnsEntityComment1685629356058 implements MigrationInterface {
    name = 'addColumnsEntityComment1685629356058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "created_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "comment_advert_users" DROP COLUMN "created_at"`);
    }

}
