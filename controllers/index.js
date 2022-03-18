exports.index_get = (req, res) => {
    currentUser = req.user;
    console.log(currentUser);
    res.render("home/index", {
        welcomeMessage: "Welcome to Ray's Knife Collection", currentUser
    })
}
