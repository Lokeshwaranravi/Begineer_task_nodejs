const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PORT;
const users = require("./users");


app.listen(port, () => console.log(`notes-app listening on port ${port}!`));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use("/api/v1", users)


