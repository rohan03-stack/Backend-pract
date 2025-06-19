const express = require("express");

const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
    res.send("all students");
});

studentRouter.get("/web20", (req,res) => {
    res.send("web 20 lecture.....")
});

studentRouter.post("/addstudents", (req,res) => {
    console.log(req.body);
    
    res.send("okay got the data......")
})

module.exports = { studentRouter}