const express = require("express");

const router = express.Router();

const knifeCtrl = require("../controllers/knife");

router.get("/knife/add", knifeCtrl.knife_create_get);
router.post("/knife/add", knifeCtrl.knife_create_post);
router.get('/knife/:id', knifeCtrl.knife_show_get);


module.exports = router;