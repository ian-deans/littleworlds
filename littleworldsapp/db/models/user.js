const db = require('../index');
const Schema = db.Schema

const userSchema = new Schema({
    name: String,
    password: String,
    googleId: String,
})

const User = db.model('User', userSchema)

module.exports = User;