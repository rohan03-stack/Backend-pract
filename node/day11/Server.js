const express = require("express");
require("dotenv").config();
const cors = require('cors');
const jwt = require("jsonwebtoken");

const {Connections} = require("./config/db")
const {UserModule}  = require("./model/Usermodel")

const app = express();

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome...");
});

app.post("/signup", async (req, res) => {
  const payload = req.body;
  console.log(payload);
  
  
  try {
    const users =  new UserModule(payload);
    await users.save();
    res.send("Signup Succesfull...");
  } catch (err) {
    console.log(err);
    res.send("something went wrong! please try again leater...");
  }
  });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUserDetails = await UserModule.find({ email, password });
    console.log('~ checkUserDetails:', checkUserDetails);
    if (checkUserDetails.length > 0) {
      const token = jwt.sign({ course: "nxm" }, "hush");
      res.send({ msg: "login Succesfull...", token: token });
    } else {
      res.send("login Unsuccesfull...");
    }
  } catch (err) {
    console.log(err);
    res.send("something went wrong! please try again leater...");
  }
});

app.listen(process.env.Port, async () => {
  try {
    await Connections;
    console.log("Connected to DB Succesfully...");
  } catch (err) {
    console.log("Connected to DB Failed??");
    console.log(err);
  }
  console.log(`Server ws connected to ${process.env.Port}`);
});