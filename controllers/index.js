exports.index_get = (req, res) => {
    res.render("home/index", {
        welcomeMessage: "Welcome to Ray's Knife Collection"
    })
}
