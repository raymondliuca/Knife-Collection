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
        res.redirect("/styles");
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
    currentUser = req.user;
    Style.findById(req.params.id)
    .then(async style => {
        let knifes = await Knife.find({style: req.params.id});
        res.render("style/detail", {style, knifes, currentUser})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.style_delete_get = (req, res) => {
    console.log(req.params.id);
    Style.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect("/styles")
    })
    .catch(err => {
        console.log(err);
    })
};

exports.style_edit_get = (req, res) =>{
    Style.findById(req.params.id)
    .then((style) => {
        res.render("style/edit", {style})
    })
    .catch(err => {c
        console.log(err);
    })
};

exports.style_update_put = (req, res) => {
    Style.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/styles");
    })
    .catch(err => {
        console.log(err);
    })
};