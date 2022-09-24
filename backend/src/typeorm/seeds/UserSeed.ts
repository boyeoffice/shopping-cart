import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { User } from '../entities/user.entity';
import { USERS } from '../factories/user.factory';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(USERS)
      .execute()
  }
}
