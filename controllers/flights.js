const Flight = require('../models/flight');
// const Destinations = require('../models/flights')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    // update
    
}

// function update(req, res) {

//     Flight.update(req.params.id, req.body);
//     res.redirect(`/flights/${req.params.id}`);
// }

function index(req, res) {
    Flight.find({}, function(err, flights) {
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
        res.render('flights/show', {flight: 'Flight Details', flight });
    });
}





