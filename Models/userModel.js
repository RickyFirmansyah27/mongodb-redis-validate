const DataTypes = require('sequelize')
const db = require('../Config/database')

const User = db.define('users', {
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    gender:DataTypes.STRING
},{
    freezeTableName:true
});




module.exports = User;