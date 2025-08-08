const mongoose = require("mongoose");
const userSchema  = mongoose.Schema(
    {
        name: String,
        email:String,
        password: String,
    },
    {versionKey:false}
);

const UserModule = mongoose.model("sign_in", userSchema);
module.exports = {UserModule}