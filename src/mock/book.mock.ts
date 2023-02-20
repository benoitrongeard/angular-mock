import { faker } from '@faker-js/faker';
import { Book } from 'src/models/book.model';
import { User } from 'src/models/user.model';

export class BookMock implements Book {
  id: string;
  name: string;
  creator: User;

  constructor(userMock: User) {
    this.id = faker.datatype.uuid();
    this.name = faker.lorem.words(5);
    this.creator = userMock;
  }
}
