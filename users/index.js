const express = require("express");
const router = express.Router();
const fetch =require("node-fetch");

const login = require("./login");
const gender = require("./gender");
const age_between = require("./age_between");
const username_email = require("./username_email");
const username_email_fetch_method = require("./username_email_fetch_method");


router.post("/gender", gender);

router.post("/age_between",age_between);

router.post("/username_email", username_email);

router.post("/username_email_fetch_method", username_email_fetch_method);


router.post("/login", login);

router.get('/sample',(req,res)=>{
    res.send(200,'sample');
})

module.exports=router