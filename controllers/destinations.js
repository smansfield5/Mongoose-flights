const Destination = require('../models/flight');

module.exports = {
    create,
    
}

function create(req, res) {
    flight.findById(req.params.id, function(err, flight) {
        flight.arrival.push(req.body);
        flight.save(function(err) {
            res.redirect(`flights/${req.params.id}`)
        })
    })
}

