const Brand = require('../models/Brand')

exports.index_get = (req, res) => {
    Brand.find()
    .then(brands => {
        res.render("home/index", {brands: brands,
            welcomeMessage: "Welcome to Ray's Knife Collection"})
    })
    .catch(err => {
        console.log(err);
    });
}
