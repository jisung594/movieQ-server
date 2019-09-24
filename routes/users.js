var express = require('express');
var router = express.Router();
const User = require('../models/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("I received a GET request");

  User.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
});

module.exports = router;
