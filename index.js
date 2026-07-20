const { fakerDE: faker } = require('@faker-js/faker');
const mysql = require('mysql2');

    const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Delta_class',
  password:'ganesh@1',
});


    let  getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

    console.log(getRandomUser());