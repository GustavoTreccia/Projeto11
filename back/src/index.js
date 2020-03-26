const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

/*
 * Tipos de Parâmetros:
 *
 * Query params: Parâmetros nomeados enviados na rota após o símbolo '?' (Utilizado para Filtros, Paginação, outros)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da rqequisição, utilizado para criar ou alterar recursos
 */

/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 *  NoSQL: MongoDB, CouchDB, etc.
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table ('users').select('*').where() 
 */


app.listen(3010);