const express = require("express");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
require("./api/auth/passport");
require("./api/database/data");
require("./api/asociations/asociations");

const userRoutes = require("./api/routes/user.routes");
const budgetsRoutes = require("./api/routes/budget.routes");
const authUser = require("./api/routes/loginUser.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SECRETSESSION,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(morgan("dev"));

app.use(passport.authenticate());
app.use(passport.session());

app.use("/users", userRoutes);
app.use("/budgets", budgetsRoutes);
app.use("/auth", authUser);

app.listen(process.env.PORT);
console.log("Server is running");
