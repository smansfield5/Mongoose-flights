const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('tickets/new', { flightId: req.params._id });
}

function create(req, res) {
    Flight.findOne({
        _id: req.params._id
    }, function(err, flight) {
        req.body.flight = flight._id;
        const ticket = new Ticket(req.body);
        ticket.save();
        res.redirect(`'/flights/${flight._id} '`);
    });
}