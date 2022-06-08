const { User } = require("../models/user.models");

const sayHi = (req, res) => {
  res.status(200).json({ msg: "Hola Mundo" });
};

const obtainUser = async (req, res) => {
  try {
    const getUser = await User.findAll();
    res.status(200).json(getUser);
  } catch (error) {
    console.log(error);
  }
};

const obtainOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneUser = await User.findByPk(id);
    res.status(200).json(getOneUser);
  } catch (error) {
    console.log(error);
  }
};

const createNewUser = async (req, res) => {
  const { name, lastName, password, email } = req.body;
  try {
    const createUse = await User.create({ name, lastName, password, email });
    res.status(201).json(createUse);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  // sayHi,
  obtainUser,
  obtainOneUser,
  createNewUser,
};
