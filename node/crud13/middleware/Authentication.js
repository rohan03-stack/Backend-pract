const jwt = require("jsonwebtoken");

const Authenticate = (req, res, next) => {
 
  const token = req.headers?.authoriztion?.split(" ")[1];
   if (token) {
    jwt.verify(token, "hush", (err, decode) => {
      if (decode) {
        const userId = decode?.userId;
        req.body.userID = userId;
        next();
      } else {
        res.status(401).send("Please login don't have token!!!", err);
      }
    });
  } else {
    res.status(401).send("first login please!!!");
  }
};

module.exports = { Authenticate };