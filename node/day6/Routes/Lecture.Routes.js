const express = require("express");

const lectureRoute = express.Router();

lectureRoute.get("/", (req, res) => {
    res.send("all students");
});

lectureRoute.get("/web13", (req,res) => {
    res.send("web 13 lecture.....")
});

lectureRoute.post("/addlectures", (req,res) => {
    console.log(req.body);
    
    res.send("okay the lecture dta was add")
})

module.exports = { lectureRoute}