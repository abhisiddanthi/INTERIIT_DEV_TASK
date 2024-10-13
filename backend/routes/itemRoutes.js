const express = require('express');
const { getItems, createItem } = require('../controllers/itemController');
const router = express.Router();

router.get('/', getItems);           // Route to fetch all items
router.post('/', createItem);        // Route to create a new item

module.exports = router;
