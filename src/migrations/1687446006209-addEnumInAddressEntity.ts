import { MigrationInterface, QueryRunner } from "typeorm";

export class addEnumInAddressEntity1687446006209 implements MigrationInterface {
    name = 'addEnumInAddressEntity1687446006209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "uf"`);
        await queryRunner.query(`CREATE TYPE "public"."adresses_uf_enum" AS ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "uf" "public"."adresses_uf_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "uf"`);
        await queryRunner.query(`DROP TYPE "public"."adresses_uf_enum"`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD "uf" character varying(2) NOT NULL`);
    }

}
