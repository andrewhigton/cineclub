const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const Film = require('../../models/Film');
// const config = require('config');
const { check, validationResult } = require('express-validator');

// @route GET api/film
		// @desc GET all films
		// @access Public	
		router.get('/', async (req, res) => {
		
			try {
				const films = await Film.find().populate('film', 
				['title', 'cinema']);
				res.json(films)
			} catch (err) {

				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});


router.post('/payment', async (req, res) => {

const stripe = require("stripe")(process.env.SECRET_KEY);
//const { amount } = req.body;
const amount = 200;


	try {
 
    //const { amount } = JSON.parse(req.body.amount);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    
    });
    
    res.status(200).send(paymentIntent.client_secret);

} catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }

})


router.post('/create-film', [
    auth, 
    [
    check('title', 'title is required').not().isEmpty(),
    check('cinema', 'cinema is required').not().isEmpty(),
    check('date', 'date is required').not().isEmpty(),
    check('image', 'image is required').not().isEmpty()

    ]
    ],
    async (req, res) => {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {   
        user,
        image,
        title,
        cinema,
        date,
        filmtime,
        ticketPrice,
        crowdfundTarget,
        totalsoFar
      } = req.body;

      //build profile object 
      const profileFields = {};
      profileFields.user = req.user.id;
      if(title) profileFields.title = title;
      if(cinema) profileFields.cinema = cinema;
      if(image) profileFields.image = image;
      if(date) profileFields.date= date;
      if(filmtime) profileFields.filmtime= filmtime;
      if(ticketPrice) profileFields.ticketPrice = ticketPrice;
    if(crowdfundTarget) profileFields.crowdfundTarget= crowdfundTarget;
    if(totalsoFar) profileFields.totalsoFar= totalsoFar;

        try {
        //create
            profile = new Film(profileFields);
            await profile.save()
            res.json(profile);
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
          }
      }
    );



// @route POST api/film
// @desc update film
// @access Private
router.post('/', [
    check('title', 'Title is required')
      .not()
      .isEmpty(),
    check('date', 'Please include a valid date')
      .not()
      .isEmpty(),
    check('cinema', 'Please include a valid cinema')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
	    const errors = validationResult(req);
	    if (!errors.isEmpty()) {
      	return res.status(400).json({ errors: errors.array() });
    	}

    const { 
    	user_id,
    	title, 
    	date, 
    	filmtime,
    	cinema,
    	image, 
    	ticketPrice, 
    	crowdfundTarget, 
    	totalsoFar 
    	} = req.body;

    const filmFields = {};
	  	if(user_id) filmFields.user_id = user_id;
	  	if(title) filmFields.title = title;
	  	if(date) filmFields.date = date;
	  	if(filmtime) filmFields.filmtime = filmtime;
	  	if(cinema) filmFields.cinema = cinema;
	  	if(ticketPrice) filmFields.ticketPrice= ticketPrice;
	  	if(crowdfundTarget) filmFields.crowdfundTarget= crowdfundTarget;
	  	if(totalsoFar) filmFields.totalsoFar = totalsoFar;
	  	
    try {
      film = new Film({
        user_id,
        title, 
    	date,
    	filmtime, 
    	cinema,
    	image,
    	ticketPrice, 
    	crowdfundTarget, 
    	totalsoFar 
      });

      await film.save();

      const payload = {
        film: {
          id: film.id
        }
      }

      		res.json({ film })
		} catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



		// @route GET api/film/:film_id
		// @desc GET film by film id
		// @access Public

		router.put('/booking', async (req, res) => {
	  	const errors = validationResult(req)
	  	if(!errors.isEmpty()) {
	  		return res.status(400).json({ errors: errors.array() });
	  	}
	  	
	  	const { 	
	  		_id,
	  		// user,
	  		title,
	  		image,
	  		cinema,
	  		date,
	  		filmtime,
	  		ticketPrice,
			crowdfundTarget,
			totalsoFar
	  	} = req.body;

	  	//build profile object 
	  	const filmFields = {};
	  	if(_id) filmFields._id = _id;
	  	// if(user) filmFields.user = user;
	  	if(title) filmFields.title = title;
	  	if(cinema) filmFields.cinema = cinema;
	  	if(image) filmFields.image = image;
	  	if(date) filmFields.date= date;
	  	if(filmtime) filmFields.filmtime= filmtime;
	  	if(ticketPrice) filmFields.ticketPrice = ticketPrice;
		if(crowdfundTarget) filmFields.crowdfundTarget= crowdfundTarget;
		if(totalsoFar) filmFields.totalsoFar= totalsoFar;
	  		// console.log(filmFields)	
	  		try {
	  			//const updatedFilm = await Film.findOne({ films: req._id });
	  			let updatedFilm = await Film.findOne({ _id: req.body._id });
					//console.log(res.json(updatedFilm))
	  				updatedFilm = await Film.findOneAndUpdate(
	  					{ _id: req.body._id },
	  					{ $set: filmFields },
	  					{ new: true }
	  					)
	  				return res.json(updatedFilm)
		  		} catch (err) {
		  			console.error(err.message);
		  			res.status(500).send('Server error');
		  		}
			}
		);
	
	
	router.get('/:film_id', async (req, res) => {
		try {
		const film = await Film.findOne({ _id: req.params.film_id })
		if(!film) return res.status(400).json({ msg: 'no film for this search'})
			return res.json(film)
		} catch (err) {
			console.error(err.message);
			if(err.kind === 'ObjectId') {
				return res.status(400).json({ msg: 'Film not found'})
			}
			res.status(500).send('Server Error');
		}
	});

		// @route DELETE api/film
		// @desc	 delete profile, user and post
		// @access Private

		//need user id for this, why? where is it required? 
		//it works though. just log in
		//problem is, anyone logged in can delete!
		//how to restrict it to one master user? 
		//just remove auth, and don't put it on the site
		router.delete('/:film_id', auth, async (req, res) => {
			try {
				await Film.findOneAndRemove(req.params.film_id)
				//remove user
				// await User.findOneAndRemove({ _id: req.user.id})
				res.json({ msg: 'Film deleted' });
			} catch (err) {
				console.error(err.message);
				res.status(500).send('Server Error');
			}
		});

module.exports = router;