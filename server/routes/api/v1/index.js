const express = require("express");
const router = express.Router();

router.use("/movie", require("./movies"));

module.exports = router;
