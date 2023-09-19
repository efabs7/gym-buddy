const express = require("express");
const db = require("../utils/mongo");
const { validateSchema } = require("../schema/validate");
const { userSchema } = require("../schema/usersSchema");
const route = express.Router();
const { addUser } = require("../controllers/usersController");

route.post("/", validateSchema(userSchema), addUser);

module.exports = route;
