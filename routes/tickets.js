const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/:id/new', ticketsCtrl.new);

router.post('flights/:id/tickets', ticketsCtrl.create)

module.exports = router;