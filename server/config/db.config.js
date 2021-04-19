'user strict';

const mysql = require('mysql');

// local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '32000',
  database: 'citiesData',
});
dbConn.connect((err) => {
  if (err) throw err;
});
module.exports = dbConn;
