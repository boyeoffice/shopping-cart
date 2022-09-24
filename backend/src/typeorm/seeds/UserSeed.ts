import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";

import { User } from '../entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)().createMany(15);
  }
}
