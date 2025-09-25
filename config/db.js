const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "ilikebiriyani", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = { sequelize };
