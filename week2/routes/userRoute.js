"use strict";
const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  user_list_get,
  user_get,
  user_post,
  user_put,
  user_delete,
  check_token,
} = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(user_list_get)
  .post(
    body("name").isLength({ min: 3 }).escape(),
    body("email").isEmail(),
    body("passwd").matches("(?=.*[A-ZÅÄÖ].{8,}"),
    user_post
  )
  .put(user_put);

router.get("/token", check_token);

router.route("/:id").get(user_get).delete(user_delete);

module.exports = router;
