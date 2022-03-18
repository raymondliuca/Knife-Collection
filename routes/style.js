const express = require("express");

const router = express.Router();

const styleCtrl = require("../controllers/style");

router.get("/style/add", styleCtrl.style_create_get);
router.post("/style/add", styleCtrl.style_create_post);
router.get("/styles/",styleCtrl.style_index_get);
router.get('/style/:id', styleCtrl.style_show_get);


module.exports = router;