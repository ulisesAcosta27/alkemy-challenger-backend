const express = require("express");
require("dotenv").config();
require("./api/database/data")
require('./api/asociations/asociations')
const morgan = require('morgan')
const cors = require('cors')

const userRoutes = require('./api/routes/user.routes')
const budgetsRoutes = require('./api/routes/budget.routes')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));

app.use("/users", userRoutes)
app.use("/budgets", budgetsRoutes)

app.listen(process.env.PORT);
console.log("Server is running");
