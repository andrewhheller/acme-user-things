const express = require('express');
const router = express.Router();

const { userThings } = require('../db');


router.get('/users', (req, res, next) => {
  userThings()
  .then(users => res.send(users));
});





module.exports = router;
