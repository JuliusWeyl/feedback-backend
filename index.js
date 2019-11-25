const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//mongoose.connect(keys.mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true });

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.log('Error on start: ' + err.stack));

const app = express();

require('./routes/authRoutes')(app);

//todo add email registration and authentication



const PORT = process.env.PORT || 5000;
app.listen(PORT);
