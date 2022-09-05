// Add dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/routes.js');

const app = express();

const PORT = process.env.PORT || 3001;

// Parse the data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/routes')(app);

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);