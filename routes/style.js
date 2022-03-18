const express = require("express");

const router = express.Router();

const styleCtrl = require("../controllers/style");

router.get("/style/add", styleCtrl.style_create_get);
router.post("/style/add", styleCtrl.style_create_post);

module.exports = router;