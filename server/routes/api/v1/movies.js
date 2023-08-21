const express = require("express");
const router = express.Router();
const movieController = require("../../../controllers/movie_controller");

router.post("/create", movieController.create);
router.get("/allMovies", movieController.getAllMovies);
router.get("/:id", movieController.getMovie);

module.exports = router;
