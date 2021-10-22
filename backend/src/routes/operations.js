const express = require('express');
const operationController = require('../controllers/operations');

const router = express.Router();

router.get('/', operationController.getAll);
router.post('/', operationController.newOp);
router.delete('/', operationController.deleteAll);

router.get('/:id', operationController.getOp);
router.put('/:id', operationController.updateOp);
router.delete('/:id', operationController.deleteOp);

module.exports = router;