const Movie = require('../models/movie.js')
const mongoose = require('mongoose');
const fetch = require("node-fetch");

mongoose.connect('mongodb://localhost:27017/movieDatabase')
const db = mongoose.connection
db.collection('movies').remove({})

let moviesData = "https://api.themoviedb.org/3/discover/movie?api_key=4c30d14d63a2975d986d9f62edfba6a6&language=en-US&sort_by=popularity.desc"
let genresData = "https://api.themoviedb.org/3/genre/movie/list?api_key=4c30d14d63a2975d986d9f62edfba6a6"

let genresArr
fetch(genresData)
  .then(res => res.json())
  .then(data => {
    genresArr = data["genres"]
  })

let movies
fetch(moviesData)
  .then(res => res.json())
  .then(data => {
    movies = data["results"].map(movie => {
      let imgUrl = "http://image.tmdb.org/t/p/w185/" + movie["poster_path"]

      let movieGenres = movie.genre_ids.map(id => {
        let genre = genresArr.find(genreObj => {
          return genreObj.id === id
        })

        return genre.name
      })

      return new Movie({
        id: movie["id"],
        title: movie["title"],
        overview: movie["overview"],
        img: imgUrl,
        genres: movieGenres,
        popularity: movie["popularity"],
        vote_average: movie["vote_average"],
        release_date: movie["release_date"]
      })
    })


    let done = 0;
    for (let i = 0; i < movies.length; i++) {
        movies[i].save(function(err, result) {
            done++;
            if (done === movies.length) {
                exit();
            }
        });
    }
  })


function exit() {
  mongoose.disconnect()
}
