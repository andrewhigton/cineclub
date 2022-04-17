const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
	router.post('/', [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 3 or more characters'
    ).isLength({ min: 3 })
  ],
  
  async (req, res) => {
	    const errors = validationResult(req);
	    if (!errors.isEmpty()) {
      	return res.status(400).json({ errors: errors.array() });
    	}
  const { name, email, password } = req.body;
  if(req) {
    try {
       let user = await User.findOne({ email });
        if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      	}

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
      	payload, 
      	config.get('jwtSecret'),
      	{ expiresIn: 360000 },
      	(err, token) => {
      		if(err) throw err;
      		res.json({ token })
      	});
		} catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
      }
    }
  }
);

// @route POST api/users/ticket
// @desc update user profile with tickets
// @access Private
router.post('/ticket', [ auth ],
    async (req, res) => {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        title,
        ticketPrice,
        numberOfTickets,
        date,
        cost,
        cinema,
        crowdfundTarget,
        totalsoFar
      } = req.body;

      const newTicket = {
        title,
        ticketPrice,
        numberOfTickets,
        date,
        cost,
        cinema,
        crowdfundTarget,
        totalsoFar
      }
        try {
          let profile = await User.findOne({ _id: req.user.id });
          profile.tickets.unshift(newTicket);
        await profile.save();
        res.json(profile);
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Not updated');
          }
      }
    );

//problem was you were trying to get a user key that wasn't there
//profile has a user key, your's don't.  
router.delete('/ticket/:_id', [auth], async (req, res) => {
      try {
        const profile = await User.findOne({ _id: req.user.id });
        const removeIndex = profile.tickets
          .map(item => item._id)
          .indexOf(req.params._id);
          profile.tickets.splice(removeIndex, 1);
          await profile.save();
        res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Nope');
      }
    })



module.exports = router;