//this is for defining the database

const Database = require('better-sqlite3');

module.exports = new Database('db/cs4ks.sqlite3');
