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
    });
};

exports.knife_create_post = (req, res) => {
    console.log(req.body);
    let knife = new Knife(req.body);

    knife.save()
    .then(() => {
        res.redirect("/styles");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRRR!!!!!!");
    });
};

exports.knife_show_get = (req, res) => {
    console.log(req.params.id);

    Knife.findById(req.params.id)
    .then(async knife => {
        let brand = await Brand.findById(Knife.findById(req.params.id).brand);
        let style = await Style.findById(Knife.findById(req.params.id).style);
        console.log(Knife.findById(req.params.id));
        res.render("knife/detail", {knife})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.knife_delete_get = (req, res) => {
    console.log(req.params.id);
    Knife.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/")
    })
    .catch(err => {
        console.log(err);
    })
};

exports.knife_edit_get = (req, res) =>{
    Knife.findById(req.params.id)
    .then((knife) => {
        res.render("knife/edit", {knife})
    })
    .catch(err => {c
        console.log(err);
    })
};

exports.knife_update_put = (req, res) => {
    Knife.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/");
    })
    .catch(err => {
        console.log(err);
    })
};