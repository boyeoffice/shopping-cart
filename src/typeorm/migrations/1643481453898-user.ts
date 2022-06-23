import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class user1643481453898 implements MigrationInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async up(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.createTable(
      new Table({
          name: "users",
          columns: [
              {
                  name: "id",
                  type: "int",
                  isPrimary: true,
              },
              {
                  name: "name",
                  type: "varchar",
              },
          ],
      }),
      true,
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
    await _queryRunner.dropTable("users")
  }
}
