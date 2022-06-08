const { Router } = require("express");
const {
  obtainBudget,
  obtainOneBudget,
  createNewBudget,
  updateBudget,
  deleteBudget,
} = require("../controllers/budget.controllers");

const router = Router();

router.get("/", obtainBudget);
router.get("/:id", obtainOneBudget);
router.post("/:id", createNewBudget);
router.put("/:id", updateBudget);
router.delete("/:id", deleteBudget);

module.exports = router;
