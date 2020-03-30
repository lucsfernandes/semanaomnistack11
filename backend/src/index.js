const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * SQL: MySQL, *SQLite*, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
* Driver: SELECT * FROM Users
* Query Builder: table('users').select('*').where() -> utilizar o knex js ('http://knexjs.org/')
*/

app.listen(3333); //aplicação escutando a porta 3333 -> localhost:3333

