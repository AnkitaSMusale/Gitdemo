const express=require('express');
const sequelize=require('./utils/database');
const bodyParser = require('body-parser');

const Restaurent=require('./models/restaurents');
const Review=require('./models/reviews');

const RestaurantRoutes = require('./routes/restaurent')

const app=express();
app.use(bodyParser.json());

app.use(RestaurantRoutes)

Restaurent.hasMany(Review)
Review.belongsTo(Restaurent);

sequelize.sync()
.then((res)=>{
    //console.log(res)
    app.listen(3000)
}).catch(err=>console.log(err))
