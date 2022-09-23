import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { User } from '../entities/user.entity';

export default class AdminSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { firstName: 'Timber', lastName: 'Saw', isActive: true },
        { firstName: 'Phantom', lastName: 'Lancer', isActive: true  },
      ])
      .execute()
  }
}
