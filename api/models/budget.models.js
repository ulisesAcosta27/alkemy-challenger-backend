const { DataTypes } = require("sequelize");
const sequelize = require("../database/data");

const Budget = sequelize.define("budget", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    defaultValue: () => {
      const date = new Date();
      return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    },
  },
  type: {
    type: DataTypes.ENUM,
    values: ["incomes", "egress"],
    allowNull: false
  },
  catalog: {
    type: DataTypes.ENUM,
    values: ["food", "house", "tax", "freetime", "clothes"],
    allowNull: false,
  },
});

module.exports = {
  Budget,
};
