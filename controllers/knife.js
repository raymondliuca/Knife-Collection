const Brand = require('../models/Brand');
const Style = require("../models/Style");
const Knife = require("../models/Knife");

exports.knife_create_get = (req, res) => {
    Brand.find()
    .then(brands => {
        Style.find()
        .then(styles => {
            res.render("knife/add", {brands, styles})
        })
    })
    .catch((err) => {
        console.log(err);
        //res.send("ERRRRORRRR!!!!!!");
    });
};

exports.knife_create_post = (req, res) => {
    console.log(req.body);
    let knife = new Knife(req.body);

    knife.save()
    .then(() => {
        res.redirect("../");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRRR!!!!!!");
    });
};

exports.knife_show_get = (req, res) => {
    console.log(req.params.id);

    Knife.findById(req.params.id)
    .then(knife => {
        res.render("knife/detail", {knife})
    })
    .catch(err => {
        console.log(err);
    });
};