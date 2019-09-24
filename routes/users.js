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


router.get('/:id', function(req, res, next) {
  console.log("I received a GET request");

  User.find({"id": req.params.id})
    .then(data => res.send(data[0]))
    .catch(err => console.log(err))
});


router.put('/:id', function(req, res, next) {
  console.log("I received a GET request");

  let addToQueue = req.body

  User.findOneAndUpdate({id: req.params.id}, addToQueue)
    .exec(function(err, product){
      if(err) return res.status(500).json({err: err.message})
      res.json({product, message: 'Successfully updated'})
    });
});

module.exports = router;
