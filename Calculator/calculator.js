//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  res.send("Thanks for posting that!");
  console.log(req.body);
});

app.post("/index.html", function(req, res) {
  res.send("Thanks for posting that!");
  console.log(req.body);
});

app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
