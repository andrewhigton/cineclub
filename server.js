const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

//in another file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use(express.json({ extended: false }));
app.use(morgan('combined'));
app.use(cors());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/film', require('./routes/api/film'))

// app.use('/api/payment-intents', require('./routes/api/payment-intents'))

//serve static assets in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

if(process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
  })
} 