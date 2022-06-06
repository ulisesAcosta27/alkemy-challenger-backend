const express = require("express");
require("dotenv").config();
require("./api/database/data")

const userRoutes = require('./api/routes/user.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(userRoutes)

app.listen(process.env.PORT);
console.log("Server is running");
