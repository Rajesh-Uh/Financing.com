const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const EExpenses = sequelize.define("EExpenses", {
    expenses_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
     is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
})
module.exports = EExpenses