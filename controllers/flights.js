const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function create(req, res) {
    console.log(req.body)
    Flight.create(req.body);
    res.redirect('/flights');
}

function newFlight(req, res) {
    res.render('flights/new')
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          res.render('flights/show', {flight, tickets});
        });
    });
}



