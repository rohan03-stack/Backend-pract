const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const { Connections } = require("./config/db");
const { UserModule } = require("./model/User.model");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("welcome...");
});


app.post("/signup"), async(req,res) => {
    const{email, password, age, name} = req.body;
}

const userpresent = await UserModule.findOne({email});
if(userpresent)res.send(`try login is already exist`);
try{
    bcrypt.hash(password, 5, async function (err, difficultpass) {
        const users = new UserModule({
            email,
            password: difficultpass,
            age,
            name,
        });
        await users.save();
        res.send("Sign succesfully...");
    })
} catch (err){
    console.log(err);
    res.send("something went wrong ! please try again")
}