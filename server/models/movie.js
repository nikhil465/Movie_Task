const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
