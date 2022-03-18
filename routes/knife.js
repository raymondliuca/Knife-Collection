const express = require("express");

const router = express.Router();

const knifeCtrl = require("../controllers/knife");

router.get("/knife/add", knifeCtrl.knife_create_get);
router.post("/knife/add", knifeCtrl.knife_create_post);

module.exports = router;