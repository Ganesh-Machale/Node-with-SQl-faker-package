const { fakerDE: faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methoverride = require("method-override");


    app.use(methoverride("_method"));
     app.use(express.urlencoded({extended:true}))
   app.set("view engine","ejs");
   app.set("views",path.join(__dirname,"/views"));

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


  //  let q = "INSERT INTO user (id,username,email,password) values ?";
  //  let data = [];

  //   for(let i=1;i<=100;i++){
  //     data.push(getRandomUser());  // for 100 facke users data
  //   }
     
  //   try{
  //    connection.query(q, [data],(err,result) =>{
  //     if(err) throw err;
  //       console.log(result);
  //    });
  //   }catch(err){
  //     console.log(err);
  //   }
    
  //   connection.end();



    // HOME Route
    app.get("/",(req,res)=>{
      let q = "SELECT count(*) FROM user";
       try{
         connection.query(q,(err,result)=>{
              if(err) throw err;
              let count = result[0]["count(*)"];
              res.render("home.ejs",{count});
         });
       }catch(err){
             console.log(err);
             res.send("some error has occur");
       }
    });


    // GET Users route 
      
    // in this route we are showing the all users 
    app.get("/user",(req,res)=>{
      let  v = "SELECT * FROM user";
         try{
          connection.query(v , (err,users) =>{
            if(err) throw err;
            res.render("users.ejs",{users});
          });
         }catch(err){
             console.log(err);
         }
    });

    //  Edit route 

    app.get("/user/:id/edit",(req,res)=>{
      let { id } = req.params;
     let q = `SELECT * FROM user WHERE id="${id}"`;
      res.render("edit.ejs")
    })

    // Update (DB) Route 
    app.patch("/user/:id",(req,res)=>{
      res.send("Updated");
    });

    
    app.listen("8080",()=>{
          console.log("server ie Runing on Port 8080"); 
    });

     
