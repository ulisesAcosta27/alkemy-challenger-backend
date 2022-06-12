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

const obtainAllIncomes = async (req, res) => {
  try {
    const getAllIncomes = await Budget.findAll({
      where: {
        type: "incomes",
      },
    });
    res.status(200).json(getAllIncomes);
  } catch (error) {
    console.log(error);
  }
};

const obtainAllEgress = async (req, res) => {
  try {
    const getAllEgress = await Budget.findAll({ where: { type: "egress" } });
    res.status(200).json(getAllEgress);
  } catch (error) {
    console.log(error);
  }
};

const createNewBudget = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, type, catalog, userId } = req.body;
  try {
    const createUse = await Budget.create({
      name,
      quantity: parseInt(quantity),
      type,
      catalog,
      userId: id,
    });
    res.status(201).json(createUse);
  } catch (error) {
    console.log(error);
  }
};

const updateBudget = async (req, res) => {
  const { id } = req.params;
  const { ...budgetValues } = req.body;
  try {
    const handleUpdateBudget = await Budget.update(
      { ...budgetValues },
      { where: { id } }
    );
    res.status(200).json(handleUpdateBudget)
  } catch (error) {
    console.log(error);
  }
};

const deleteBudget = async (req, res) => {
  const { id } = req.params;
  try {
    const handleDeleteBudget = await Budget.destroy({ where: { id } });
    res.status(200).json(handleDeleteBudget)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  obtainBudget,
  obtainOneBudget,
  obtainAllIncomes,
  obtainAllEgress,
  createNewBudget,
  updateBudget,
  deleteBudget,
};
