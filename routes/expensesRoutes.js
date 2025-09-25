const express = require('express');
const router = express.Router();
const expensesController = require('../controller/expensesCOntroller');

router.get('/', expensesController.getExpenses);
router.post('/', expensesController.createExpenses);
router.put('/', expensesController.updateExpenses);
router.delete('/:id', expensesController.deleteExpenses);

module.exports = router;
