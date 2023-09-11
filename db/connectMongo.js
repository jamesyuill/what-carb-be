const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.log('Connection failed', error.message);
  }
};

module.exports = connectDB;
