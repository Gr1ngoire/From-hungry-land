import { MigrationInterface, QueryRunner } from "typeorm";

export class dateFieldsToRecipeAndDeleteId1675463431691 implements MigrationInterface {
    name = 'dateFieldsToRecipeAndDeleteId1675463431691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "recipes" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "recipes" DROP COLUMN "updated_at"`);
    }

}
