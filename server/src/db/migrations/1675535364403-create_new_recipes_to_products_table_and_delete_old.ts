import { MigrationInterface, QueryRunner } from "typeorm";

export class createNewRecipesToProductsTableAndDeleteOld1675535364403 implements MigrationInterface {
    name = 'createNewRecipesToProductsTableAndDeleteOld1675535364403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_42c5f2b8921864378f2cbb5759a"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_ce7ac5b8a7d6ecdd95b022afc2d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_42c5f2b8921864378f2cbb5759"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce7ac5b8a7d6ecdd95b022afc2"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "PK_5d04c7e42d3806034c066e14abb"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "PK_ce7ac5b8a7d6ecdd95b022afc2d" PRIMARY KEY ("product_id")`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "recipe_id"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "PK_ce7ac5b8a7d6ecdd95b022afc2d"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "PK_b7f6dbf9c7345afbcaf4fa67ff8" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "quantity" character varying NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "recipeId" integer`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_ab55fa250492194ab9dd3270d6e" FOREIGN KEY ("recipeId") REFERENCES "recipes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_f6c8002edddf2d36601b88e0142" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_f6c8002edddf2d36601b88e0142"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "FK_ab55fa250492194ab9dd3270d6e"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "recipeId"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "PK_b7f6dbf9c7345afbcaf4fa67ff8"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "product_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "PK_ce7ac5b8a7d6ecdd95b022afc2d" PRIMARY KEY ("product_id")`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD "recipe_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" DROP CONSTRAINT "PK_ce7ac5b8a7d6ecdd95b022afc2d"`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "PK_5d04c7e42d3806034c066e14abb" PRIMARY KEY ("recipe_id", "product_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_ce7ac5b8a7d6ecdd95b022afc2" ON "recipes_to_products" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_42c5f2b8921864378f2cbb5759" ON "recipes_to_products" ("recipe_id") `);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_ce7ac5b8a7d6ecdd95b022afc2d" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipes_to_products" ADD CONSTRAINT "FK_42c5f2b8921864378f2cbb5759a" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
