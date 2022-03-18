const router = require('express').Router();
const {body} = require('express-validator');

const authCtrl = require("../controllers/auth");
const { getMaxListeners } = require('../models/User');

router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", [
    body('firstName').isLength({min : 2}),
    body('lastName').isLength({min : 2}),
    body('emailAddress').isEmail(),
    body('password').isLength({min : 5})
], authCtrl.auth_signup_post);
router.get("/auth/signin", authCtrl.auth_signin_get);
router.post("/auth/signin", authCtrl.auth_signin_post);
router.get("/auth/logout", authCtrl.auth_logout_get);



module.exports = router;