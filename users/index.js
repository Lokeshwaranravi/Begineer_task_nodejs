const express = require("express");
const router = express.Router();

const login = require("./login");
const gender = require("./gender");
const age_between = require("./age_between");
const username_email = require("./username_email");


router.post("/gender", gender);

router.post("/age_between", age_between);

router.post("/username_email", username_email);

router.post("/login", login);


module.exports=router
