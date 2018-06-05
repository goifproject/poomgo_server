let signin = require('./signin')
let user = require('./user');
let study = require('./study');

module.exports = function(app) {
    app.use('/signin', signin);
    app.use('/user', user)
    app.use('/study', study);
}