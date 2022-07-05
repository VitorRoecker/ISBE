const mysql = require("mysql2/promise");
require('dotenv').config()

async function databaseConnection() {
    if (global.connection && global.connection.state !== "disconnected") {
      return global.connection;
    }
  
    const connection = await mysql.createConnection({
      host: process.env.SERVER,
      port: process.env.PORT,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });
  
    global.connection = connection;
    return global.connection;
}

module.exports = { databaseConnection };