const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
    title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	cinema: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	filmtime: {
		type: String,
		required: false
	},
	ticketPrice: {
		type: Number,
		required: false
	},
	crowdfundTarget: {
		type: Number,
		required: false,
	},
	totalsoFar: {
		type: Number,
		required: false,
	  }
});

module.exports = Film = mongoose.model('film', FilmSchema);