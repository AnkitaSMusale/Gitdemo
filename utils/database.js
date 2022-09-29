const Sequelize=require('sequelize');


const sequelize=new Sequelize('coralmango','root','musalehome@2020',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize; 