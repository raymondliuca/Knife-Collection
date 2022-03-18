const Brand = require('../models/Brand');
const Style = require("../models/Style");
const Knife = require("../models/Knife");

exports.knife_create_get = (req, res) => {
    res.render("knife/add");
}

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