var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

router.get('/:id/tickets/new', ticketsCtrl.new);

router.post('/:id/tickets/create', ticketsCtrl.create);

module.exports = router;
