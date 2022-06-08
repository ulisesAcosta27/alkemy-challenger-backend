const pg = require("pg");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB, {
  dialectModule: pg,
  define: { timestamps: false },
});

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("DB is running successfully");
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = sequelize;
