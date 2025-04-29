const User = require('../models/User');
const passport = require('passport');

// Render registration page
exports.getRegister = (req, res) => {
    res.render('users/register');
};

// Handle user registration
exports.postRegister = async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username });

    try {
        await User.register(newUser, password);
        passport.authenticate('local')(req, res, () => {
            res.redirect('/users/profile');
        });
    } catch (error) {
        console.error(error);
        res.render('users/register', { error: 'Registration failed. Please try again.' });
    }
};

// Render login page
exports.getLogin = (req, res) => {
    res.render('users/login');
};

// Handle user login
exports.postLogin = passport.authenticate('local', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
});

// Render user profile
exports.getProfile = (req, res) => {
    res.render('users/profile', { user: req.user });
};

// Handle user logout
exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/users/login');
    });
};