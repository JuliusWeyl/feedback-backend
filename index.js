const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//todo add email registration and authentication

const PORT = process.env.PORT || 5000;
app.listen(PORT);
