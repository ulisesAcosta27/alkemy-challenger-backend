const { Budget } = require("../models/budget.models");

const obtainBudget = async (req, res) => {
  try {
    const getBudget = await Budget.findAll();
    res.status(200).json(getBudget);
  } catch (error) {
    console.log(error);
  }
};

const obtainOneBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneBudget = await Budget.findByPk(id);
    res.status(200).json(getOneBudget);
  } catch (error) {
    console.log(error);
  }
};

const createNewBudget = async (req, res) => {
  const { id } = req.params
  const { name, quantity, type, catalog, userId } = req.body;
  try {
    const createUse = await Budget.create({ name, quantity, type, catalog, userId: id });
    res.status(201).json(createUse);
  } catch (error) {
    console.log(error);
  }
};

const updateBudget = async (req, res) => {
  const { id } = req.params;
  const { ...budgetValues } = req.body;
  try {
    const createUse = await Budget.update(
      { ...budgetValues },
      { where: { id } }
    );
    res.status(204).json(createUse);
  } catch (error) {
    console.log(error);
  }
};

const deleteBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const createUse = await Budget.destroy(id);
    res.status(204).json(createUse);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  obtainBudget,
  obtainOneBudget,
  createNewBudget,
  updateBudget,
  deleteBudget
};
