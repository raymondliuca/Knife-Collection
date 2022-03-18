exports.index_get = (req, res) => {
    currentUser = req.user;
    res.render("home/index", {
        welcomeMessage: "Welcome to Ray's Knife Collection", currentUser
    })
}
