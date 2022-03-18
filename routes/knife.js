const express = require("express");

const router = express.Router();

const knifeCtrl = require("../controllers/knife");

router.get("/knife/add", knifeCtrl.knife_create_get);
router.post("/knife/add", knifeCtrl.knife_create_post);
router.get('/knife/:id', knifeCtrl.knife_show_get);
router.get('/knife/:id/delete', knifeCtrl.knife_delete_get)
router.get("/knife/:id/edit", knifeCtrl.knife_edit_get);
router.post("/knife/:id/update", knifeCtrl.knife_update_put);

module.exports = router;