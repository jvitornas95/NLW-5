import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619049091421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true                        
                    },
                    {
                        name: 'adminId',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'userId',
                        type: 'uuid',
                    },
                    {
                        name: 'text',
                        type: 'varchar'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'Users',
                        referencedColumnNames: ['id'],
                        columnNames: ['userId'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('messages');
    }

}
