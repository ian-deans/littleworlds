const express = require('express')
const router = express.Router()

router.post("/createuser", function(req, res) {
  console.log('Inside createuser route.')
  console.log(req.body);
  // const newUser = new User(req.body)
  // newUser.save()
  res.json({message: 'success'})
});

module.exports = router