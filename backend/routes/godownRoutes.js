const express = require('express');
const { getGodowns, createGodown } = require('../controllers/godownController');
const router = express.Router();

router.get('/', getGodowns);         // Route to fetch all godowns
router.post('/', createGodown);      // Route to create a new godown

module.exports = router;
