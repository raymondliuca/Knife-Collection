const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const flash = require('connect-flash');

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded());
app.use(express.static('public'));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("view engine", "ejs");

let session = require('express-session');
let passport = require('./helper/ppConfig');

app.use(session({
  secret: process.env.secret,
  saveUninitialized: true,
  resave: false,
  cookie: {maxAge: 360000}
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.alerts = req.flash();
    next();
})

const indexRoute = require('./routes/index');
const brandRoute = require('./routes/brand');
const styleRoute = require('./routes/style');
const knifeRoute = require('./routes/knife');
const authRoutes = require("./routes/auth");

app.use('/', indexRoute);
app.use('/', brandRoute);
app.use('/', styleRoute);
app.use('/', knifeRoute);
app.use('/', authRoutes);


mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
      console.log("mongodb connected successfully!");
  });
  
  app.listen(PORT, () => console.log(`App is running on ${PORT}`));