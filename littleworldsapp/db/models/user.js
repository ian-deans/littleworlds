const db = require('./index');

const user = db.model('User', {
    name: String,
    password: String
});

modules.export = user;