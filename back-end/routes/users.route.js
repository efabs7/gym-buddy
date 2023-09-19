const express = require("express");
const { userSchema } = require("../schema/usersSchema");
const { userSchemaPutRequest } = require("../schema/usersSchema");
const { validateSchema } = require("../schema/validate");
const {
  getAllUsers,
  getUserById,
  getFullUserInfoById,
  updateUser,
  getAllUsersAdmin,
} = require("../controllers/usersController");

const route = express.Router();

route.get("/", getAllUsers);
//portected to admin only
//clean for passwords
route.get("/admin/:admin", getAllUsersAdmin);
route.get("/:id", getUserById);
route.get("/:id/full", getFullUserInfoById);

route.put("/:id", validateSchema(userSchemaPutRequest), updateUser); //updateUser

//if email is changed make sure it is not already in use (in usercontroller)
//password, email, first, last, phone, bio

module.exports = route;
