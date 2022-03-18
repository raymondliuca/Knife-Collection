const Brand = require('../models/Brand');
const Style = require("../models/Style");
const Knife = require("../models/Knife");

exports.style_create_get = (req, res) => {
    Brand.find()
    .then((brands) => {
        res.render("style/add", {brands});
    })
    .catch((err) => {
        console.log(err);
    });
}

exports.style_create_post = (req, res) => {
    console.log(req.body);
    
    let style = new Style(req.body);

    style.save()
    .then(() => {
        res.redirect("../");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRRR!!!!!!");
    });
};