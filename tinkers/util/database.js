
const Sequelize = require('sequelize');
const sequelize = new Sequelize('tinkers','root','musalehome@2020',{
    dialect : 'mysql',
    host:'localhost'
});

module.exports = sequelize;