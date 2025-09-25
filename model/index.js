const ECategory = require('./categoryModel');
const ECategoryType = require('./categoryTypeModel');  
const EIncome = require('../model/incomeModel'); 
const EExpenses = require('../model/expensesModel');

// Category ↔ CategoryType
ECategory.belongsTo(ECategoryType, {
  foreignKey: "category_type_id",
  as: "categoryType"
});

ECategoryType.hasMany(ECategory, {
  foreignKey: "category_type_id",
  as: "categories"
});

// Income ↔ Category
EIncome.belongsTo(ECategory, {
  foreignKey: "category_id",
  as: "category"
});

ECategory.hasMany(EIncome, {
  foreignKey: "category_id",
  as: "incomes"
});

// Expenses ↔ Category
EExpenses.belongsTo(ECategory, {
  foreignKey: "category_id",
  as: "category"
});

ECategory.hasMany(EExpenses, { 
  foreignKey: "category_id",
  as: "expenses"
});

module.exports = {
  ECategory,
  ECategoryType,
  EIncome,
  EExpenses
};
