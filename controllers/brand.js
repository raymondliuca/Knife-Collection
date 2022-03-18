const Brand = require('../models/Brand');
const Knife = require("../models/Knife");

exports.brand_create_get = (req, res) => {
    res.render("brand/add");
}

exports.brand_create_post = (req, res) => {
    console.log(req.body);
    let brand = new Brand(req.body);

    brand.save()
    .then(() => {
        res.redirect("/brands");
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRRR!!!!!!");
    });
};

exports.brand_index_get = (req, res) => {
    Brand.find()
    .then(brands => {
        res.render("brand/index", {brands: brands})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.brand_show_get = (req, res) => {
    console.log(req.params.id);
    currentUser = req.user;
    Brand.findById(req.params.id)
    .then(async brand => {
        let knifes = await Knife.find({brand: req.params.id});
        res.render("brand/detail", {brand, knifes, currentUser})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.brand_delete_get = (req, res) => {
    console.log(req.params.id);
    Brand.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/brands")
    })
    .catch(err => {
        console.log(err);
    })
};

exports.brand_edit_get = (req, res) =>{
    Brand.findById(req.params.id)
    .then((brand) => {
        res.render("brand/edit", {brand})
    })
    .catch(err => {c
        console.log(err);
    })
};

exports.brand_update_put = (req, res) => {
    Brand.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/brands");
    })
    .catch(err => {
        console.log(err);
    })
};

