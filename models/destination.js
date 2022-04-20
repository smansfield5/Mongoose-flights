const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
      date: function() {
        return new Date().getFullYear;
      }
    }
  });

  module.exports = mongoose.model('Ticket', destinationSchema);