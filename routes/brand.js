const express = require("express");

const router = express.Router();

const brandCtrl = require("../controllers/brand");

router.get("/brand/add", brandCtrl.brand_create_get);
router.post("/brand/add", brandCtrl.brand_create_post);
router.get('/brand/:id', brandCtrl.brand_show_get);


module.exports = router;