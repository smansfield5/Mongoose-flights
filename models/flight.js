const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
    },
    flightNo: {
      type: Number,
      min: 10,
      max: 9999,
      required: true
    },
    departs: {
      type: Date,
      default: function() {
          return new Date().getFullYear +1;
      }
    },
    destinations: [destinationSchema]
  }, {
    timestamps: true 
  });

  const ticketSchema = new Schema ({
    ticket: {seat: String,
    price: Number,
    }
  })


module.exports = mongoose.model('Flight', flightSchema);

