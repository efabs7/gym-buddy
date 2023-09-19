const jwt = require("jsonwebtoken");
require("dotenv").config();

const sign = (data) => {
  const secretKey = process.env.SECRET;
  const token = jwt.sign(data, secretKey, { expiresIn: "72hr" });
  return token;
};

const verify = (token) => {
  const secretKey = process.env.SECRET;
  try {
    const pass = jwt.verify(token, secretKey);
    return pass;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  sign,
  verify,
};
