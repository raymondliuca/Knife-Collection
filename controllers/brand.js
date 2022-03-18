const Brand = require('../models/Brand');
const Style = require("../models/Style");

exports.brand_create_get = (req, res) => {
    res.render("brand/add");
}

exports.brand_create_post = (req, res) => {
    console.log(req.body);
    let brand = new Brand(req.body);

    brand.save()
    .then(() => {
        res.redirect("../");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRRR!!!!!!");
    });
};

exports.brand_show_get = (req, res) => {
    console.log(req.params.id);

    Brand.findById(req.params.id)
    .then(async brand => {
        let styles = await Style.find({brand: req.params.id});
        res.render("brand/detail", {brand, styles})
    })
    .catch(err => {
        console.log(err);
    });
};