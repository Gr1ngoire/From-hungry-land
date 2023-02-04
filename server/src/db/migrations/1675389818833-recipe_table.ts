import { MigrationInterface, QueryRunner } from "typeorm";

export class recipeTable1675389818833 implements MigrationInterface {
    name = 'recipeTable1675389818833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."recipes_difficult_enum" AS ENUM('easy', 'medium', 'hard')`);
        await queryRunner.query(`CREATE TABLE "recipes" ("id" SERIAL NOT NULL, "name" text NOT NULL, "instruction" character varying NOT NULL, "imgUrl" character varying NOT NULL, "difficult" "public"."recipes_difficult_enum" NOT NULL, CONSTRAINT "PK_8f09680a51bf3669c1598a21682" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recipes"`);
        await queryRunner.query(`DROP TYPE "public"."recipes_difficult_enum"`);
    }

}
