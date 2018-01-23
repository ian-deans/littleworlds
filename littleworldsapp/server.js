const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const User = require('./models/user')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
//app.get("*", function(req, res) {
//  res.sendFile(path.join(__dirname, "./client/build/index.html"));
//});

app.post("/createuser", function(req, res) {
    console.log('MAybe?')
    console.log(req.body);
    const newUser = new User(req.body)
    newUser.save()
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
