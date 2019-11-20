const express = require('express');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//todo add email registration and authentication

passport.use(new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, 
    (accesToken, refreshTocken, profile, done) => {
        console.log('access token',accesToken);
        console.log('profile', profile);
    }
));

//request authentication token
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

//receive token for future communication
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
