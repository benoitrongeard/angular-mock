import { BookMock } from './book.mock';
import { UserMock } from './user.mock';
import { faker } from '@faker-js/faker';
const fs = require('fs');

let users: UserMock[];
let books: BookMock[];

function generateData(): any {
  users = generateUsers();
  books = generateBooks();
  return { users, books };
}

function generateUsers(): UserMock[] {
  const users: UserMock[] = [];
  for (let i = 0; i < 10; i++) {
    users.push(new UserMock());
  }
  return users;
}

function generateBooks(): BookMock[] {
  const books: BookMock[] = [];
  for (let i = 0; i < 10; i++) {
    books.push(new BookMock(faker.helpers.arrayElement(users)));
  }
  return books;
}

try {
  fs.writeFileSync(
    './src/mock/db.json',
    JSON.stringify(generateData(), null, 2)
  );
  console.log('JSON Databse created');
} catch (error) {
  console.error('Cant create JSON Databse');
  console.error(error);
}
