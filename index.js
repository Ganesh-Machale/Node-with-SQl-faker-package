const { fakerDE: faker } = require('@faker-js/faker');
const mysql = require('mysql2');

    const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'Delta_class',
  password:'ganesh@1496',
});

  let  getRandomUser = () => {
  return [
     faker.string.uuid(),
   faker.internet.username(),
     faker.internet.email(),
   faker.internet.password(),
  ];
};


   let q = "INSERT INTO user (id,username,email,password) values ?";
   let data = [];

    for(let i=1;i<=100;i++){
      data.push(getRandomUser());  // for 100 facke users data
    }
     
    try{
     connection.query(q, [data],(err,result) =>{
      if(err) throw err;
        console.log(result);
     });
    }catch(err){
      console.log(err);
    }
    
    connection.end();
     
