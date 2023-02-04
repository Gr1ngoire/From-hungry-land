import { MigrationInterface, QueryRunner } from "typeorm"

export class insertDataToRecipes1675445709587 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('potato', 'asdadsda', 'asdadada','easy' )`);
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('cotato', 'asdadsda', 'asdadada','medium' )`);
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('cotato', 'asdadsda', 'asdadada','medium' )`);
        await queryRunner.query(`INSERT INTO recipes(name, instruction, "imgUrl", difficult) VALUES('potato', 'asdadsda', 'asdadada','hard' )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM recipes')
    }

}
