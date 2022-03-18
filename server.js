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


const indexRoute = require('./routes/index');
const brandRoute = require('./routes/brand');
const styleRoute = require('./routes/style');
const knifeRoute = require('./routes/knife');

app.use('/', indexRoute);
app.use('/', brandRoute);
app.use('/', styleRoute);
app.use('/', knifeRoute);


mongoose.connect(process.env.mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
      console.log("mongodb connected successfully!");
  });
  
  app.listen(PORT, () => console.log(`App is running on ${PORT}`));