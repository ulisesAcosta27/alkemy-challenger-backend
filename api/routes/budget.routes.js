const { Router } = require("express");
const {
  obtainBudget,
  obtainOneBudget,
  obtainAllIncomes,
  obtainAllEgress,
  createNewBudget,
  updateBudget,
  deleteBudget,
} = require("../controllers/budget.controllers");

const router = Router();

router.get("/", obtainBudget);
router.get("/incomes", obtainAllIncomes);
router.get("/egress", obtainAllEgress);
router.get("/:id", obtainOneBudget);
router.post("/:id", createNewBudget);
router.put("/:id", updateBudget);
router.delete("/:id", deleteBudget);

module.exports = router;
