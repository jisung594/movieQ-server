var express = require('express');
var router = express.Router();
const User = require('../models/movie.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
    .then(data => res.send(data))
    .catch(console.log(error))
});

module.exports = router;
