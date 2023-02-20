import { faker } from '@faker-js/faker';
import { User } from 'src/models/user.model';

export class UserMock implements User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;

  constructor() {
    this.id = faker.datatype.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.birthDate = faker.date.past();
  }
}
