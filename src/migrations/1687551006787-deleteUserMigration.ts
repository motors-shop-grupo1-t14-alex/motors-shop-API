import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUserMigration1687551006787 implements MigrationInterface {
    name = 'DeleteUserMigration1687551006787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "uf" SET DEFAULT 'AC'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ALTER COLUMN "uf" DROP DEFAULT`);
    }

}
