const mongoose = require("mongoose")
require("dotenv").config();

const Connections = mongoose.connect(process.env.MongoDb_Url)