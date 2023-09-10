//https://www.youtube.com/watch?v=vjf774RKrLc

const express = require('express');
const db = require('../db/connection');
const app = express();

const getRoute = require('../routes/dishes');

app.use('/dishes', getRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
