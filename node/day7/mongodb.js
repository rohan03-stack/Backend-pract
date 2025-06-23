const express = require("express");
const Port = 8900;
const app = express();

app.use(express.json());

app.get("/weather", (req,res) => {
    const data = {
        bangolre: "winter",
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