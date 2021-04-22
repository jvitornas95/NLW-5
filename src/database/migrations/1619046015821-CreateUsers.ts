import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1619046015821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'Users',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: 'createdAt',
                        type: 'timastamp',
                        default: 'now()'
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        queryRunner.dropTable('Users');

    }

}
