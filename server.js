const express = require('express');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
//ths was my original
// if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// connectDB();

// app.use(express.json({ extended: false }));
// app.use(morgan('combined'));
// app.use(cors());

// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/film', require('./routes/api/film'))


// // const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if(process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
//   })
// } 

// //serve static assets in production
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on ${PORT}`));

//how proshop does it
connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
   //what is combined?
   app.use(morgan('combined'));  
  }

app.use(express.json({ extended: false }));

app.use(cors());

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/film', require('./routes/api/film'))

//const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)


//this is http in case needed
// dotenv.config()
// // if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// //in another file
// // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const app = express();

// const httpServer = http.createServer(app);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// connectDB();

// app.use(express.json({ extended: false }));
// app.use(morgan('combined'));
// app.use(cors());


// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/film', require('./routes/api/film'))

// //serve static assets in production
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`app started on ${PORT}`));

// if(process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname), 'client', 'build', 'index.html')
//   })
// } else {
//    app.get('/', (req, res) => {
//      res.send('API is running...')
//    }) 
// }