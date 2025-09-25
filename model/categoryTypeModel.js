const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const ECategoryType = sequelize.define("ECategoryType", {
  category_type_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_type_name: { type: DataTypes.STRING, allowNull: false },
  is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = ECategoryType;