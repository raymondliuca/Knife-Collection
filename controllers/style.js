const Style = require("../models/Style");
const Knife = require("../models/Knife");

exports.style_create_get = (req, res) => {
    res.render("style/add");
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

exports.style_index_get = (req, res) => {
    Style.find()
    .then(styles => {
        res.render("style/index", {styles: styles})
    })
    .catch(err => {
        console.log(err);
    });
};


exports.style_show_get = (req, res) => {
    console.log(req.params.id);

    Style.findById(req.params.id)
    .then(async style => {
        let knifes = await Knife.find({style: req.params.id});
        res.render("style/detail", {style, knifes})
    })
    .catch(err => {
        console.log(err);
    });
};
