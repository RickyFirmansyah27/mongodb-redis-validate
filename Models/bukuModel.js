const DataTypes = require('sequelize')
const db = require('../Config/database')
const User = require('./userModel')

const Buku = db.define('buku',{
    judul: DataTypes.STRING,
    penulis: DataTypes.STRING,
    tahun: DataTypes.STRING
},{
    freezeTableName: true
});

User.hasMany(Buku);
Buku.belongsTo(User, {foreignKey: 'userID'});


(async()=>{
    await db.sync();
  })();


module.exports = Buku;