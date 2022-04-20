const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

router.put('/flights/:id', destinationsCtrl.update);

module.exports = router;