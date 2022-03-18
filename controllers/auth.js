const User = require('../models/User');
const bcrypt = require('bcrypt');
let passport = require('../helper/ppConfig');
const salt = 10;

exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);
    console.log(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    user.password = hash;

    user.save()
    .then(() => {
        res.redirect('/auth/signin');
    })
    .catch((err) => {
        console.log(err);
        res.send("ERRRRORRR!!!!");
    })
}

exports.auth_signin_get =  (req, res) => {
    res.render("auth/signin");
}

exports.auth_signin_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/signin"
})

exports.auth_logout_get = (req, res) => {
    req.logout();
    res.redirect("/auth/signin");
} 