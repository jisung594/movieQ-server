const express = require('express')
const router = express.Router()
const Movie = require('../../models/movie.js')

router.get('/', (req,res,error) => {
  console.log("I received a GET request");

  Movie.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = router;
