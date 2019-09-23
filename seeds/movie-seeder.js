let Movie = require('../models/movie.js')
let mongoose = require('mongoose');
let fetch = require("node-fetch");

mongoose.connect('mongodb://localhost:27017/movieDatabase')
let db = mongoose.connection
db.collection('movies').remove({})

let moviesData = "https://api.themoviedb.org/3/discover/movie?api_key=4c30d14d63a2975d986d9f62edfba6a6&language=en-US&sort_by=popularity.desc"

fetch(moviesData)
  .then(res => res.json())
  .then(data => console.log(data))

// let movies = moviesData["movies"].map(ele => {
//   return new Movie({
//
//   })
// })
//
//
// let done = 0;
// for (let i = 0; i < movies.length; i++) {
//     movies[i].save(function(err, result) {
//         done++;
//         if (done === movies.length) {
//             exit();
//         }
//     });
// }


function exit() {
  mongoose.disconnect()
}
