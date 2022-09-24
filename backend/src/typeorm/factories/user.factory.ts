import { Faker } from '@faker-js/faker'
import { define } from "typeorm-seeding";

import { User } from '../entities/user.entity';

define(User, (faker: typeof Faker) => {
  const gender = faker.datatype.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)

  const user = new User()
  user.firstName = firstName;
  user.lastName = lastName
  return user
})
