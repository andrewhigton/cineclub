const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  tickets: [
        {   
          title: {
          type: String,
          required: true
        },
        cinema: {
          type: String,
          required: false
        },
        ticketPrice: {
          type: Number,
          required: false
        },
        numberOfTickets: {
          type: Number,
          required: true
        },
        date: {
          type:  Date,
          required: true
        },
        //isnt this needed?
        // time: {
        //  type:  Date,
        //  required: true
        // },
        cost: {
          type: Number,
          required: true
        },
        crowdfundTarget: {
          type: Number,
          required: false,
        },
        totalsoFar: {
          type: Number,
          required: false,
            }
          }
        ]
});

module.exports = User = mongoose.model('user', UserSchema);