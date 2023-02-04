import { MigrationInterface, QueryRunner } from "typeorm"

export class insertDataToTags1675515852162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('fruits')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('vegetables')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('cereals')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('berries')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('nuts')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('herbs')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('juices')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('meat')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('fish')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('eggs')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('caviar')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('dairy')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('molluscs')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('crustaceans')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('insects')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('mushrooms')`)
        await queryRunner.query(`INSERT INTO product_tag(name) VALUES('algae')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM product_tag`)
    }

}
