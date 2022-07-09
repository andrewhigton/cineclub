const express = require ('express');
const router = express.Router()
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route GET api/auth
// @desc Test route
// @access Public
router.get('/', auth, async (req, res) => {

if(req.user.id) {
 try {
   const user = await User.findById(req.user.id).select('-password');
   res.json(user);
 } catch (err) {
   console.log(err.message);
   res.status(500).send('Server Error')
     } 
   }
 });

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
  router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
        
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

  const { email, password } = req.body;

    try {

       let user = await User.findOne({ email });
        if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
        }

      const isMatch = await bcrypt.compare(password, user.password); 

      if(!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

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
          // console.log({token})
          res.json({ token })
        });
    } catch (err) {
      console.error('error?' + err.message);
      res.status(500).send('Server error');
    }
  }
);


// @route POST api/auth
// @desc add tickets to user's profile
// @access Private
router.post('/ticket', [
    auth, 
    ],
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
        filmtime,
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
        filmtime,
        cost,
        cinema,
        crowdfundTarget,
        totalsoFar
      }
        try {
          let profile = await User.findOne({ user: req.body.email });
          profile.tickets.unshift(newTicket);
          await profile.save();
          res.json(profile);
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Not updated');
          }
      }
    );

    router.delete('/ticket/:exp_id', auth, async (req, res) => {
      try {
        const profile = await User.findOne({ user: req.body.email });
        const removeIndex = profile.tickets
          .map(item => item.id)
          .indexOf(req.params.exp_id);
          profile.tickets.splice(removeIndex, 1);
          await profile.save();
          res.json(profile);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Nope');
      }
    })

module.exports = router;