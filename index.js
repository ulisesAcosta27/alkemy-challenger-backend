const express = require("express");
require("dotenv").config();
require("./api/database/data")
const morgan = require('morgan')

const userRoutes = require('./api/routes/user.routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use("/users", userRoutes)

app.listen(process.env.PORT);
console.log("Server is running");
