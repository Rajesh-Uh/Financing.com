const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const ECategory = sequelize.define("ECategory", {
  category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  category_name: { type: DataTypes.STRING, allowNull: false },
  is_deleted: { type: DataTypes.BOOLEAN, defaultValue: false },
  category_type_id: { type:DataTypes.INTEGER,allowNull:true}
});

module.exports = ECategory;