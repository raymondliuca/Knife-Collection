const express = require("express");

const router = express.Router();

const brandCtrl = require("../controllers/brand");

router.get("/brand/add", brandCtrl.brand_create_get);
router.post("/brand/add", brandCtrl.brand_create_post);
router.get('/brand/:id', brandCtrl.brand_show_get);
router.get("/brands/", brandCtrl.brand_index_get);
router.get('/brand/:id/delete', brandCtrl.brand_delete_get)
router.get("/brand/:id/edit", brandCtrl.brand_edit_get);
router.post("/brand/:id/update", brandCtrl.brand_update_put);


module.exports = router;