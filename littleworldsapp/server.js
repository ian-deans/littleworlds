// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require all models
var db= require("./models");

// Initialize Express
var app = express();

//Set mongoose to leverage built-in JavaScript ES6 Promises
//Connect to the Mongo DB
mongoose.Promse = Promise;
mongoose.connect("mongodb://localhost/3002")

// Set up a static folder (public) for our web app
app.use(express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'))

// Set the app to listen on port 3000
app.listen(3002, function() {
  console.log("App running on port 3000!");
});
