const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ msg: 'you are home' });
});

module.exports = router;
