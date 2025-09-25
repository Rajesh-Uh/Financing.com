const express = require('express');
const router = express.Router();
const categoryTypeController = require('../controller/categoryTypeController');

router.get('/', categoryTypeController.getCategoryTypes);
router.post('/', categoryTypeController.createCategoryType);
router.put('/:id', categoryTypeController.updateCategoryType);
router.delete('/:id', categoryTypeController.deleteCategoryType);

module.exports = router;
module.exports = router;
