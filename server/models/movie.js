const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  language: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
