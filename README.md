# 🗄️ Node.js + MySQL + Faker

A beginner-friendly backend project built with **Node.js, Express.js, MySQL, EJS, and Faker**.

The main purpose of this project is to understand how a Node.js application communicates with a **MySQL relational database**, how routes are created using Express.js, and how **Faker** can be used to generate realistic dummy data for development and testing.

Faker is designed to generate realistic-looking test data such as names, email addresses, usernames, and other values.

## 🚀 Features

* Node.js backend implementation
* Express.js routing
* MySQL database connectivity
* SQL schema creation
* Dynamic data generation using Faker
* EJS template rendering
* CRUD-oriented database practice
* Server-side data handling
* Route-based database operations

## 🛠️ Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| **Node.js**    | JavaScript runtime            |
| **Express.js** | Backend framework and routing |
| **MySQL**      | Relational database           |
| **SQL**        | Database queries and schema   |
| **EJS**        | Server-side HTML rendering    |
| **Faker**      | Generating dummy/test data    |
| **JavaScript** | Application logic             |

## 📂 Project Structure

```text
Node-with-SQl-faker-package/
│
├── views/
│   └── ...                 # EJS templates
│
├── index.js                # Main Node.js application
├── schema.sql              # MySQL database schema
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```

## 🔄 Application Flow

```text
        Client
          │
          ▼
     Express.js
          │
          ▼
        Routes
          │
          ▼
       MySQL DB
          │
          ▼
      Query Result
          │
          ▼
        EJS View
          │
          ▼
      HTML Response
```

## 🗄️ Database

The project uses **MySQL** as its relational database.

The `schema.sql` file contains the SQL required to create the database structure.

You can execute the schema using MySQL:

```sql
SOURCE schema.sql;
```

Or copy the SQL commands from `schema.sql` and execute them directly inside MySQL.

## 🎲 Faker

The project uses Faker to generate sample data instead of manually entering large amounts of test data.

For example:

```javascript
const { faker } = require("@faker-js/faker");

let user = {
    username: faker.internet.username(),
    email: faker.internet.email()
};
```

Faker provides generators for many categories of data including people, addresses, dates, finance, commerce, and more.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ganesh-Machale/Node-with-SQl-faker-package.git
```

### 2. Navigate to the project

```bash
cd Node-with-SQl-faker-package
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure MySQL

Make sure MySQL is installed and running on your system.

Create the required database and tables using:

```bash
mysql -u root -p
```

Then:

```sql
SOURCE schema.sql;
```

> Update the MySQL connection details in `index.js` according to your local MySQL configuration.

### 5. Start the application

```bash
node index.js
```

Open the application in your browser using the port configured in `index.js`.

## 🛣️ Routes

The project demonstrates creating backend routes with Express.js.

The routes are responsible for receiving requests, performing database operations, and returning the appropriate response or EJS view.

Typical operations include:

```text
GET      → Retrieve data
POST     → Add new data
PUT      → Update data
DELETE   → Remove data
```

## 🧠 What I Learned

Through this project, I practiced:

* Connecting Node.js with MySQL
* Creating SQL schemas
* Writing SQL queries
* Using Express.js routes
* Working with relational databases
* Rendering data using EJS
* Generating test data with Faker
* Handling requests and responses
* Understanding CRUD operations
* Structuring a backend project
* Connecting frontend views with backend data

## 🔮 Future Improvements

Possible improvements include:

* Complete CRUD implementation
* User authentication
* Input validation
* Error handling middleware
* Environment variables using `.env`
* REST API endpoints
* Pagination
* Search and filtering
* Better UI for database records
* MySQL connection pooling
* Deployment with a cloud database

## 👨‍💻 Author

**Ganesh Machale**

Full Stack Web Developer | MERN Stack Developer

### GitHub

https://github.com/Ganesh-Machale

---

⭐ If you found this project useful, consider giving the repository a star!
