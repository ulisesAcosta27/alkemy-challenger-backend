const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy } = require("passport-local");
const { User } = require("../models/user.models");
passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: email });
        if (!user) return new Error("user not found");
        const verifyPassword = await bcrypt.compare(password, user.password);
        if (!verifyPassword) return new Error("password incorrect");
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk({ where: { id } });
    if (!user) return new Error("user not found");
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
