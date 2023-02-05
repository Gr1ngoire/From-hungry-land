import { MigrationInterface, QueryRunner } from "typeorm"

export class insertDataToRecipecToProductsTable1675536503907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO product(name, "imgUrl", "productTagId") VALUES('Pasta', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngimg.com%2Fimage%2F43741&psig=AOvVaw3qDRx2n72RJbBhYxXK3i-E&ust=1675625708733000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjZ5KrO_PwCFQAAAAAdAAAAABAE', 19)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,14,57)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,14,58)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(4,14,53)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,14,44)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,14,50)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,15,59)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,15,60)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,15,32)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,15,33)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,15,61)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,15,62)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,15,31)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,57)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,63)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,50)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,68)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,64)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(3,16,53)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,16,58)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,17,59)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,17,32)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,17,61)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,17,31)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,17,58)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,17,66)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,17,35)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,67)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,50)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,58)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,18,53)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,68)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,54)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,18,57)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,19,71)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(4,19,31)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,19,69)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,20,46)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,20,57)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(2,20,34)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,20,35)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,21,38)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,21,41)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(10,21,47)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,21,56)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,21,44)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,22,44)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,22,57)`)
        await queryRunner.query(`INSERT INTO recipes_to_products(quantity, "recipeId", "productId") VALUES(1,22,70)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM recipes_to_products`)
    }

}