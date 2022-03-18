const User = require('../models/User');
const bcrypt = require('bcrypt');
let passport = require('../helper/ppConfig');
const salt = 10;
const {validationResult} = require('express-validator');

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
        if(err.code == 11000){
            req.flash("error", "Email already exists");
            res.redirect("/auth/signin");
        }
        else
        {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              req.flash("validationErrors", errors.errors);
            }
            res.redirect("/auth/signup");
        }
    })
}

exports.auth_signin_get =  (req, res) => {
    res.render("auth/signin");
}

exports.auth_signin_post = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/signin",
    failureFlash: "Invalid username or password",
    successFlash: "You are logged in successfully"
})

exports.auth_logout_get = (req, res) => {
    req.logout();
    req.flash("success", "Your are successfully logged out");
    res.redirect("/auth/signin");
} 