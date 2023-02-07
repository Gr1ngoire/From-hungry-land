import { MigrationInterface, QueryRunner } from "typeorm"

export class deleteTestInfoFromRecipes1675701362820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM recipes WHERE name='potato'`)
        await queryRunner.query(`DELETE FROM recipes WHERE name='cotato'`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('potato', 'qweqwqw', 'qwewqeqw', 'easy')`)
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('cotato', 'qweqwqw', 'qwewqeqw', 'medium')`)
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('cotato', 'qweqwqw', 'qwewqeqw', 'medium')`)
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('potato', 'qweqwqw', 'qwewqeqw', 'hard')`)
    }

}
