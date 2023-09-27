const express = require('express');
const connectDB = require('./db/connectMongo');
const cronJob = require('./pinger/pinger');
const app = express();
const getRoute = require('./routes/dishes');
const { handleCustomErrors } = require('./errorhandlers/errorHandlers');
const cors = require('cors');

connectDB();

app.use(cors());

app.use(express.json());

app.use('/', getRoute);

app.all('*', (_, res) => res.status(404).send({ msg: 'Not Found' }));

app.use(handleCustomErrors);

module.exports = app;
