const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require("path");
const User = require('./db/models/user')

// Import routers
const userRoutes = require('./routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

// Set server to take data in the body of post requests
// and to allow Cross Origin Resource Sharing (cors)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Assign url prefixes to respective routers
app.use('/user', userRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
 res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
