import { MigrationInterface, QueryRunner } from "typeorm";

export class init1675371798079 implements MigrationInterface {
    name = 'init1675371798079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1439455c6528caa94fcc8564fda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "imgUrl" character varying NOT NULL, "productTagId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4a1df9cbd7e951807d16587e387" FOREIGN KEY ("productTagId") REFERENCES "product_tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4a1df9cbd7e951807d16587e387"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_tag"`);
    }

}
