"use strict";
const { users, getUser } = require("../models/userModel");

//const cats = catModel.cats; Sama kuin ylempi

const user_list_get = (req, res) => {
  res.json(users);
};
const user_get = (req, res) => {
  const user = getUser(req.params.id);
  //console.log("kissa", cat);
  res.json(user);
};

const user_post = (req, res) => {
  console.log("user_post", req.body);
  res.send("Add user route");
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
};
