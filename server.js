// Add dependencies
const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3001;

// Parse the data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);