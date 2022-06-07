const { DataTypes } = require("sequelize");
const sequelize = require("../database/data");

const Budget = sequelize.define(
  "budget",
  {
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
        const date = new Date()
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    catalog: {
      type: DataTypes.ENUM,
      values: ["comida", "casa", "inpuesto", "tiempo libre"],
      allowNull: false,
    }
  },
  { timestamps: false }
);

module.exports = {
  Budget
}