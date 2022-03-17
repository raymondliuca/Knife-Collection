const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const flash = require('connect-flash');

const PORT = process.env.PORT;

const app = express();

app.use(express.static('public'));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);


const indexRoute = require('./routes/index');


app.use('/', indexRoute);

app.set("view engine", "ejs");

mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
      console.log("mongodb connected successfully!");
  });
  
  app.listen(PORT, () => console.log(`App is running on ${PORT}`));