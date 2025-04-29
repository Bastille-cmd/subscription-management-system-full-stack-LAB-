require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const connectDB = require('./config/database');
const passportConfig = require('./config/passport-config');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();
passportConfig(passport);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/subscriptions', subscriptionRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.render('layouts/main');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});