
   create table user(
    id int(50) PRIMARY KEY ,
    username varchar(50) UNIQUE,
    email varchar(50) UNIQUE NOT NULL,
    password varchar(50) NOT NULL
);
    ALTER table user
     modify id varchar(50);