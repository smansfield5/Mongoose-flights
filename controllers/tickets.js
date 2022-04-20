const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
}

function newTicket(res, req) {
    res.render('ticket/new');
}