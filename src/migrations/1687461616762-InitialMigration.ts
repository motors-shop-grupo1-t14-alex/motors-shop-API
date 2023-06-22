import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1687461616762 implements MigrationInterface {
    name = 'InitialMigration1687461616762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_password"`);
    }

}
