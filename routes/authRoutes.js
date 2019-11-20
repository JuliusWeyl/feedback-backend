const passport = require('passport');

module.exports = (app) => {

    //request authentication token
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    //receive token for future communication
    app.get('/auth/google/callback', passport.authenticate('google'));

};