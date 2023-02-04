import { MigrationInterface, QueryRunner } from "typeorm";

export class roleNameToEnum1675514824502 implements MigrationInterface {
    name = 'roleNameToEnum1675514824502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`CREATE TYPE "public"."roles_name_enum" AS ENUM('user', 'admin')`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" "public"."roles_name_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "name"`);
        await queryRunner.query(`DROP TYPE "public"."roles_name_enum"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "name" character varying NOT NULL`);
    }

}
