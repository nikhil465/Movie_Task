const express = require("express");
const router = express.Router();
const movieController = require("../../../controllers/movie_controller");

router.post("/create", movieController.create);

module.exports = router;
