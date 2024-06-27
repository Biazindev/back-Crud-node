const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('./auth')

router.post('/items', itemController.createItem);
router.get('/items', authMiddleware, itemController.getItems);
router.get('/items/:id', authMiddleware, itemController.getItemById);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
