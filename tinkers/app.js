const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/authenticatrion");
const User = require("./models/user");
const Pokemon = require("./models/pokemondata")
const app = express();

app.use(express.json({ limit: "50mb" }));

app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;

      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

app.get("/Pokemon/:page", auth,(req, res) => {
    const obj = {
        page : parseInt(req.query.page,10) || 0,
        limit : parseInt(req.query.limit,10) || 10
    }
    Pokemon.findAll()
    .skip(obj.page * obj.limit)
    .limit(obj.limit)
    .then(()=>{
        res.status(200).send("Welcome ");
    })
    .catch(err => {
        console.log(err)
    })
   
});

app.post("/addPokemon", auth ,(req,res)=>{
    const name=req.body.name;
    const attacks=req.body.attacks;
    const abilities=req.body.abilities;
    const image=req.body.image;
    
    Pokemon.create({name:name, attacks:attacks,abilities:abilities,image:image})
    .then(result => {
        //console.log(result)
        res.send({msg:"Data Added Successfully"});
    })
    .catch(err=>{
        console.error(err)
    })
})


sequelize.sync();
app.listen(3000);