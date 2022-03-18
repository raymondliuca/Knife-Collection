const express = require("express");

const router = express.Router();

const styleCtrl = require("../controllers/style");

router.get("/style/add", styleCtrl.style_create_get);
router.post("/style/add", styleCtrl.style_create_post);
router.get("/styles/",styleCtrl.style_index_get);
router.get('/style/:id', styleCtrl.style_show_get);
router.get('/style/:id/delete', styleCtrl.style_delete_get)
router.get("/style/:id/edit", styleCtrl.style_edit_get);
router.post("/style/:id/update", styleCtrl.style_update_put);

module.exports = router;