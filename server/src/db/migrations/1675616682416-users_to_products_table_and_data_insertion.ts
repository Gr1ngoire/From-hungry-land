import { MigrationInterface, QueryRunner } from "typeorm";
import bcrypt from 'bcryptjs'

const PASSWORD_SALT_ROUNDS = 5;

type UserSignUpDto = {
    nickname: string;
    email: string;
    password: string;
}

const seedUserData: UserSignUpDto = {
    nickname: "Test",
    email: "test@gmail.com",
    password: "!Test1234"
}

const seedUserProducts = {
    POTATO: 'Potato',
    TOMATO: 'Tomato',
    ONIONS: 'Onions',
    BANANA: 'Banana',
    STRAWBERRY: 'Strawberry',
    WATERMELON: 'Watermelon',
    CATFISH: 'Catfish',
    MILK: 'Milk',
    MOZZARELLA: 'Mozzarella',
    PASTA: 'Pasta',
}

export class usersToProductsTableAndDataInsertion1675616682416 implements MigrationInterface {
    name = 'usersToProductsTableAndDataInsertion1675616682416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_products_product" ("usersId" integer NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_b039c00da71d0ac6aa76a9b6ebd" PRIMARY KEY ("usersId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_49fdd3875979fc11c1f06016f1" ON "users_products_product" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2f3396f1b02739e084eb86c714" ON "users_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "users_products_product" ADD CONSTRAINT "FK_49fdd3875979fc11c1f06016f18" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_products_product" ADD CONSTRAINT "FK_2f3396f1b02739e084eb86c7144" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);

        const hashedPassword = await bcrypt.hash(seedUserData.password, PASSWORD_SALT_ROUNDS);

        await queryRunner.query(`INSERT INTO users("nickname", "email", "password", "role_id") VALUES('${seedUserData.nickname}', '${seedUserData.email}', '${hashedPassword}', (SELECT id FROM roles WHERE name='user'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.BANANA}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.MOZZARELLA}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.MILK}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.CATFISH}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.PASTA}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.ONIONS}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.POTATO}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.STRAWBERRY}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.TOMATO}'))`);
        await queryRunner.query(`INSERT INTO users_products_product("usersId", "productId") VALUES((SELECT id FROM users WHERE email='${seedUserData.email}'),(SELECT id FROM product WHERE name='${seedUserProducts.WATERMELON}'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_products_product" DROP CONSTRAINT "FK_2f3396f1b02739e084eb86c7144"`);
        await queryRunner.query(`ALTER TABLE "users_products_product" DROP CONSTRAINT "FK_49fdd3875979fc11c1f06016f18"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2f3396f1b02739e084eb86c714"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49fdd3875979fc11c1f06016f1"`);
        await queryRunner.query(`DROP TABLE "users_products_product"`);
        await queryRunner.query('DELETE FROM users');
    }

}
