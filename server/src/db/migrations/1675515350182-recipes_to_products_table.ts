import { MigrationInterface, QueryRunner } from "typeorm";

export class recipesToProductsTable1675515350182 implements MigrationInterface {
    name = 'recipesToProductsTable1675515350182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipes_to_products" ("recipe_id" integer NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "PK_5d04c7e42d3806034c066e14abb" PRIMARY KEY ("recipe_id", "product_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_42c5f2b8921864378f2cbb5759" ON "recipes_to_products" ("recipe_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ce7ac5b8a7d6ecdd95b022afc2" ON "recipes_to_products" ("product_id") `);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_42c5f2b8921864378f2cbb5759a" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_ce7ac5b8a7d6ecdd95b022afc2d" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_ce7ac5b8a7d6ecdd95b022afc2d"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_42c5f2b8921864378f2cbb5759a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce7ac5b8a7d6ecdd95b022afc2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_42c5f2b8921864378f2cbb5759"`);
        await queryRunner.query(`DROP TABLE "recipes_to_products"`);
    }

}
