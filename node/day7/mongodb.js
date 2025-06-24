const express = require("express");
const Port = 8900;
const app = express();

const { dataAddedRouter } = require('./Routes/dataAdd.routes');

app.use(express.json());

app.use('/data', dataAddedRouter);

app.get("/weather", (req,res) => {
    const data = {
        banglore: "winter",
        california: "spring",
        london: "summery"
    };

  const city = req.query.city;
  const weather = data[city];
  res.send(`Today weather in ${city} is ${weather}`)


})

  app.get("/students/:studentId", (req, res) => {
  const ID = req.params.studentId;
  res.send(`Here is the data od student who's ID is ${ID}`);
});


app.listen(Port, () => {
  console.log(`your are running on ${Port}`);
});