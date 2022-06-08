const { Budget } = require("../models/budget.models");
const { User } = require("../models/user.models");

User.hasMany(Budget, { foreignKey: "userId" });
Budget.belongsTo(User);
