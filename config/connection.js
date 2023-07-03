require('dotenv').config();

// import sequelize class from sequelize library
const Sequelize = require('sequelize');

// create own variable, use ternary operator (if/else statement) to create connection to the the database 
// JAWSDB is an add on on heroku that runs a sequelize db for you
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
