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
