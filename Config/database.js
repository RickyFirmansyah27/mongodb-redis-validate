const Sequelize = require ('sequelize');

const db = new Sequelize('db_latihan_api','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;