import { BookMock } from './book.mock';
import { UserMock } from './user.mock';
import { faker } from '@faker-js/faker';
const fs = require('fs');

let users: UserMock[];
let books: BookMock[];

/**
 * Main function to generate all the data
 * @returns {any} The generated data
 */
function generateData(): any {
  users = generateUsers();
  books = generateBooks();
  return { users, books };
}

/**
 * Generate a list of users with random data
 * @returns {UserMock[]}
 */
function generateUsers(): UserMock[] {
  const users: UserMock[] = [];
  for (let i = 0; i < 10; i++) {
    users.push(new UserMock());
  }
  return users;
}

/**
 * Generate a list of books with random data and existing users
 * @returns {BookMock[]}
 */
function generateBooks(): BookMock[] {
  const books: BookMock[] = [];
  for (let i = 0; i < 10; i++) {
    books.push(new BookMock(faker.helpers.arrayElement(users)));
  }
  return books;
}

/**
 * Create a JSON file with the generated data.
 * The file will be used by json-server to mock API calls
 */
try {
  fs.writeFileSync(
    './database/db.json',
    JSON.stringify(generateData(), null, 2)
  );
  console.log('JSON Databse created');
} catch (error) {
  console.error('Cant create JSON Databse');
  console.error(error);
}
