const Restaurent = require('./models/restaurents');
const Review = require('./models/reviews');

//to add restaurents by admin
exports.addrestaurents = (req,res)=>{
    const name=req.body.name;
    const address=req.body.address;
    const description=req.body.description;
    
    Restaurent.create({name:name, address:address,description:description})
    .then(result => {
        //console.log(result)
        res.send({msg:"Restaurent Added"});
    })
    .catch(err=>{
        console.error(err)
    })
}

//get the list of restaurents on home page
exports.restaurentlist = async(req,res,next)=>{
    const restaurents = await Restaurent.findAll({attributes:['id','name','address']});
    console.log(restaurents.length);
    res.status(200).json({restaurents});
}

//restaurents details page
exports.restaurentDetails = async(req,res,next)=>{
    const id=req.params.id;
    let restaurent=await Restaurent.findByPk(id,{attributes:['id','name','address','description']});

    console.log(restaurent);
    let reviews=await restaurent.getReview({attributes:['id','review']});
    res.send({"Restaurent":restaurent, "Reviews":reviews });
}


//reviews page for a particular restaurent
exports.restaurentReview = async(req,res,next)=>
{
    const id=req.params.id;
    let restaurent=await Restaurent.findByPk(id);
    await restaurent.createReview({
        review:req.body.review
    })
    res.send({"message":`review added Successfully for ${restaurent.name}`});
}

exports.admin = async(req,res,next)=>{
    let restaurants=await Restaurent.findAll();
    let result=[];
    for(let i=0; i<=restaurants.length-1; i++)
    {
        let reviews= await restaurants[i].getReviews();
        let data={};
        data['id']=restaurants[i].id;
        data['Restaurant Name']=restaurants[i].name;
        data['Total Reviews']=reviews.length;
        result.push(data);
    }
    res.json({data});
}