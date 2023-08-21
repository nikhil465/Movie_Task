const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in ruinning the Server");
  }

  console.log("Server is up and running on port : ", port);
});
