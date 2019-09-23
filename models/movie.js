const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  overview: String,
  img: String,
  genres: [],
  popularity: Number,
  vote_average: Number,
  release_date: String
})

module.exports = mongoose.model("Movie", movieSchema);


// "popularity": 416.284,
// "vote_count": 3751,
// "video": false,
// "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
// "id": 429617,
// "adult": false,
// "backdrop_path": "/6ihyJWRLEngSnlW8HKeDOH3AfSQ.jpg",
// "original_language": "en",
// "original_title": "Spider-Man: Far from Home",
// "genre_ids": [
//     28,
//     12,
//     878
// ],
// "title": "Spider-Man: Far from Home",
// "vote_average": 7.7,
// "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
// "release_date": "2019-07-02"
