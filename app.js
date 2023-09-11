//https://www.youtube.com/watch?v=vjf774RKrLc

const express = require('express');
const connectDB = require('./db/connectMongo');
const app = express();
const getRoute = require('./routes/dishes');
const { handleCustomErrors } = require('./errorhandlers/errorHandlers');

connectDB();

app.use(express.json());

app.use('/', getRoute);

app.use(handleCustomErrors);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
