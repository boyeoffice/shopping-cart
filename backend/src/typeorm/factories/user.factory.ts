import { faker} from '@faker-js/faker'
import { User } from '../entities/user.entity';

export const USERS: User[] = [];

function createRandomUser(): User {

  const user = new User()

  user.firstName = faker.name.firstName(),
  user.lastName = faker.name.lastName(),
  user.isActive = true

  return user;
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
 });


