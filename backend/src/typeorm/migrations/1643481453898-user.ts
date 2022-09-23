import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class user1643481453898 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.createTable(
      new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
            },
            {
              name: 'firstName',
              type: 'varchar',
            },
            {
              name: 'lastName',
              type: 'varchar',
            },
            {
              name: 'isActive',
              type: 'boolean'
            }
          ],
      }),
      true,
    )
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.dropTable('users')
  }
}
