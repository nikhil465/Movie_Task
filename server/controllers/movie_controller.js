const Movie = require("../models/movie");

module.exports.create = async function (req, res) {
  try {
    let movie = await Movie.create({
      name: req.body.name,
      genre: req.body.genre,
      category: req.body.category,
    });

    return res.status(200).json({
      message: "Registered Movie Successfully",
    });
  } catch (error) {
    console.log("Error in creating Movie ", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.getAllMovies = async function (req, res) {
  try {
    let movies = await Movie.find({}).select("-__v");

    return res.status(200).json({
      message: "Success",
      data: movies,
    });
  } catch (error) {
    console.log("Error in creating Movie ", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports.getMovie = async function (req, res) {
  try {
    let movie = await Movie.findById(req.params.id).select("-__v");

    return res.status(200).json({
      message: "Success",
      data: movie,
    });
  } catch (error) {
    console.log("Error in creating Movie ", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
