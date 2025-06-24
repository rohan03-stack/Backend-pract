const express = require("express");



const dataAddedRouter = express.Router();

dataAddedRouter.get("/", (req, res) => {
  res.send("all data here...");
});

dataAddedRouter.get("/men", (req, res) => {
  res.send("filter data here...");
});

dataAddedRouter.post("/addData", (req, res) => {
  console.log(req.body);
  res.send("all data here...");
});

module.exports = { dataAddedRouter };